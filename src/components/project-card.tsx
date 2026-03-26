"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";

interface RoadmapItem {
  label: string;
}

interface ProjectLink {
  type: string;
  href: string;
  icon: React.ReactNode;
}

interface ProjectCardProps {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: string[];
  image?: string;
  video?: string;
  links?: ProjectLink[];
  roadmap?: string[];
  unoptimized?: boolean;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  links,
  roadmap,
  unoptimized = false,
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm transition-shadow duration-300 hover:shadow-xl cursor-pointer h-full overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Image / Video area ── */}
      <div className="relative w-full h-48 flex-shrink-0 overflow-hidden">
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? "blur-sm scale-105 brightness-50" : "blur-0 scale-100 brightness-100"
              }`}
          />
        ) : image ? (
          <Image
            src={image}
            alt={title}
            fill
            unoptimized={unoptimized}
            className={`object-cover transition-all duration-500 ${hovered ? "blur-sm scale-105 brightness-50" : "blur-0 scale-100 brightness-100"
              }`}
          />
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-400 dark:from-zinc-700 dark:to-zinc-900 transition-all duration-500 ${hovered ? "brightness-50" : "brightness-100"
              }`}
          />
        )}

        {/* Title overlay — visible when not hovered */}
        <div
          className={`absolute inset-0 flex flex-col justify-end p-4 transition-opacity duration-300 ${hovered ? "opacity-0" : "opacity-100"
            }`}
        >
          <div className="bg-black/40 backdrop-blur-[2px] rounded-lg px-3 py-2 inline-block self-start">
            <h3 className="text-white font-semibold text-base leading-tight">{title}</h3>
            <p className="text-zinc-300 text-xs mt-0.5">{dates}</p>
          </div>
        </div>
      </div>

      {/* ── Bottom content (always visible) ── */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-[10px] px-2 py-0.5 rounded-full"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {links.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                {link.icon}
                {link.type}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* ── Slide-up panel — covers the FULL card, not just image ── */}
      <div
        className={`absolute inset-x-0 bottom-0 bg-black/90 backdrop-blur-sm px-5 py-4 transition-all duration-500 ease-in-out rounded-b-2xl ${hovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        style={{ maxHeight: "85%" }}
      >
        <h3 className="text-white font-semibold text-sm mb-2">{title}</h3>
        <p className="text-zinc-300 text-xs leading-relaxed">{description}</p>

        {roadmap && roadmap.length > 0 && (
          <div className="mt-3 border-t border-zinc-700 pt-3">
            <p className="text-zinc-400 text-[10px] font-semibold uppercase tracking-widest mb-2">
              Coming Soon
            </p>
            <ul className="space-y-1.5">
              {roadmap.map((item, i) => (
                <li key={i} className="text-zinc-300 text-xs flex gap-2 items-start">
                  <span className="text-indigo-400 mt-0.5 flex-shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}