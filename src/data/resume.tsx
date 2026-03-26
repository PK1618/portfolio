import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import avatarImg from "../../public/assets/PK_image.jpg";

export const DATA = {
  name: "Satya Pavan Kalyan Gude",
  initials: "SPKG",
  url: "https://github.com/PK1618/",
  location: "St. Louis, MO, USA",
  locationLink: "",
  description:
    "Software Engineer | QA Automation & Full Stack | Building Reliable, Scalable Systems in Regulated and High-Traffic Environments",
  summary:
    "I'm a Software Engineer with 5+ years of experience spanning QA automation, full stack development, and cloud infrastructure. At JPMorgan Chase, I built a multi-layer test automation framework from scratch, embedded it into CI/CD pipelines, and architected security and observability solutions that eliminated production incidents across enterprise financial products. At OYO Rooms, I designed regression frameworks for a platform serving millions of users, validated partner API integrations with Expedia and Booking.com, and improved API response times by 33% through Redis caching and PostgreSQL tuning. On the full stack side, I build and ship production applications end-to-end — from React and TypeScript frontends to Spring Boot backends deployed on AWS. I thrive at the intersection of quality and engineering: writing systems that are testable by design, observable in production, and built to last.",
  avatarUrl: avatarImg,
  skills: [
    // QA & Testing
    "Selenium WebDriver",
    "JUnit",
    "TestNG",
    "Rest Assured",
    "Postman",
    "Cucumber/BDD",
    "Jest",
    "Cypress",
    "Playwright",
    "JMeter",
    // Languages
    "Java",
    "Python",
    "TypeScript",
    "JavaScript",
    "C#",
    // Full Stack
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Spring Boot",
    "GraphQL",
    "Redux",
    // Cloud & DevOps
    "AWS",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "GitHub Actions",
    "Terraform",
    // Databases
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    // Observability
    "Grafana",
    "AWS CloudWatch",
    "ELK Stack",
    // AI/ML
    "Machine Learning",
    "Deep Learning",
    "Neural Networks",
    "Computer Vision",
    "Data Visualization",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "satyapavan.k@careernb.com",
    tel: "+1 314-320-1108",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/PK1618",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/satya-pavan-kalyan-gude-9761231a1/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/g_s_pavankalyan",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:satyapavan.k@careernb.com",
        icon: Icons.email,
        navbar: true,
      },
      "Download CV": {
        name: "Download Resume",
        url: "#",
        icon: Icons.download,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "JPMorgan Chase",
      href: "https://www.jpmorganchase.com/",
      badges: [],
      location: "St. Louis, MO",
      title: "Software Engineer (QA & Automation)",
      logoUrl:
        "https://uncficb.org/wp-content/uploads/2022/11/jp-morgan-chase-logo-unite-2022-1024x1024.png",
      start: "Jan 2024",
      end: "Present",
      description:
        "Built a multi-layer Java test automation framework (JUnit, TestNG) from scratch, replacing ad-hoc scripts with unified coverage across functional, regression, integration, and API layers. Embedded test suites into Jenkins and GitHub Actions pipelines with parallel execution and environment gating, cutting deployment cycle time by 45% with zero post-release API incidents. Architected security test suites validating OAuth 2.0, JWT expiry edge cases, and SAML assertion integrity across Spring Boot and AWS Lambda services. Built AWS CloudWatch and Grafana observability pipelines with custom dashboards and threshold alerts, reducing MTTR by 30%. Designed React component test coverage using Jest, validating async state transitions, API timeout handling, and role-based UI gating. Mentored junior engineers on framework design, test isolation, and CI integration patterns.",
    },
    {
      company: "OYO Rooms",
      href: "https://oyorooms.com/",
      badges: [],
      location: "Haryana, Gurugram, India",
      title: "Software Development Engineer (QA & Platform)",
      logoUrl:
        "https://tse3.mm.bing.net/th?id=OIP.764pVAF7eWc3Bmgb0_1C_wAAAA&pid=Api&P=0&h=220",
      start: "Sep 2019",
      end: "Dec 2022",
      description:
        "Designed a Java (JUnit) regression framework for core booking flows (search, availability, reservation, payment) on a platform serving millions of concurrent users, where inventory edge cases directly caused double-bookings or failed reservations. Built API test suites validating real-time sync with Expedia and Booking.com OTA integrations, targeting rate parity mismatches, stale inventory signals, and payload schema drift. Introduced Redis caching and rewrote slow PostgreSQL queries with indexing strategies, reducing API response times by 33%. Deployed Docker and Kubernetes test environments executing load and stress tests for high-traffic scenarios (festival seasons, flash sales). Built a shared regression framework adopted across QA and platform teams, cutting test onboarding time from days to hours.",
    },
  ],

  education: [
    {
      school: "University of Missouri, St. Louis",
      href: "https://www.umsl.edu/",
      degree: "Master of Science in Computer Science (GPA: 3.5)",
      logoUrl:
        "https://rightpath.com.np/uploads/university/16921791341928936513.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "Andhra University",
      href: "https://www.andhrauniversity.edu.in/",
      degree: "B.Tech in Computer Science and Engineering",
      logoUrl: "https://andhrauniversity.edu.in/Header.png",
      start: "2015",
      end: "2019",
    },
  ],

  projects: [
    {
      title: "WeekendOTT",
      href: "https://weekendott.com",
      dates: "2024 - Present",
      active: true,
      description:
        "Solo-built and production-deployed full-stack movie and OTT discovery platform on AWS (ECS Fargate, ALB, RDS, Secrets Manager, ECR). Personally resolved 8 production-grade issues including CORS conflicts in Spring Boot Security, Google OAuth redirect misconfiguration, JWT/SecurityContext race conditions, and sessionStorage-to-localStorage migration during OAuth flows.",
      technologies: [
        "Spring Boot",
        "React",
        "TypeScript",
        "PostgreSQL",
        "AWS ECS Fargate",
        "AWS RDS",
        "Docker",
        "GitHub Actions",
        "Claude API",
      ],
      links: [
        {
          type: "Website",
          href: "https://weekendott.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "AI Image Generator",
      href: "https://aiimagecheymowa.netlify.app/",
      dates: "Sep 2024 - Oct 2024",
      active: true,
      description:
        "Full-stack AI image generation platform built with React, Express, Node.js, TailwindCSS, MongoDB, and OpenAI's DALL-E API. Integrated CORS handling and Cloudinary for media storage and delivery.",
      technologies: [
        "React.js",
        "JavaScript",
        "TailwindCSS",
        "MongoDB",
        "OpenAI DALL-E API",
        "Express.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://aiimagecheymowa.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/PK1618/AI_image_generator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTZ6Nnlla2V3MjZyeTFhMjZydzdxbjUwdjl0amxldHI3YXVvMDIxNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dtjx21QRZ2nrgYz3iA/giphy.gif",
      video: "",
    },
    {
      title: "University Talks",
      href: "https://universitytalks.netlify.app/",
      dates: "Nov 2024 - Dec 2024",
      active: true,
      description:
        "Collaborative real-time chat platform with channel messaging, direct messages, profile management, emoji integration, and GIF support. Built with React, Node.js, and Stream API.",
      technologies: [
        "React.js",
        "Node.js",
        "Express",
        "Stream API",
        "Axios",
        "Giphy",
      ],
      links: [
        {
          type: "Website",
          href: "https://universitytalks.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/PK1618/Collaborate",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjcydWYzczJvejQ2ZDJta2JmMmxpY2phMDVocDNhd2VicW4wYmZ1YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/S65QkXAcdXvF1o9gHk/giphy.gif",
      unoptimized: true,
      video: "",
    },
    {
      title: "Web Traffic Anomaly Detection",
      href: "",
      dates: "Apr 2024 - May 2024",
      active: true,
      description:
        "Analyzed web traffic patterns to detect anomalies and forecast future trends using LSTMs and XGBoost. Applied EDA and time series forecasting techniques on historical data to identify unusual traffic patterns.",
      technologies: [
        "Python",
        "TensorFlow",
        "Keras",
        "XGBoost",
        "Sklearn",
        "matplotlib",
        "seaborn",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/PK1618/DeepLearing/blob/main/Surfing%20the%20Waves%20of%20Data%2C%20Web%20Traffic%20Analysis%20and%20Anamoly%20Detection.ipynb",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3Zrb2Znbnc3YXdsbmdqYTg2M3RpdzFiYW5vOHB4MWp4eHVpd2tyZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gSVW7TwUMEcDu/giphy.gif",
      video: "",
    },
    {
      title: "Emotion and Gender Recognition",
      href: "",
      dates: "Apr 2024 - May 2024",
      active: true,
      description:
        "Deep learning system for emotion and gender recognition with built-in interpretability using LIME and Grad-CAM, making model decisions transparent and explainable.",
      technologies: ["CNNs", "Grad-CAM", "LIME", "Python", "Keras"],
      links: [
        {
          type: "Source",
          href: "https://github.com/PK1618/Interpretability_of_ML/blob/main/EmotionANDGender.ipynb",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmNnZWZ2M2U0dGZvbDI2d3Uxamd5b2c5bjkya2x2d21oaHVhbjRidSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2ZVrNVOtaM2q1zluYs/giphy.gif",
      unoptimized: true,
      video: "",
    },
    {
      title: "BurgerBuilder",
      href: "https://react-my-burger-ec04f.web.app/",
      dates: "Sep 2019 - Oct 2019",
      active: true,
      description:
        "Dynamic burger customization and ordering app built with ReactJS and Firebase, featuring responsive design and seamless backend integration.",
      technologies: ["React.js", "Node.js", "Express.js", "Firebase"],
      links: [
        {
          type: "Website",
          href: "https://react-my-burger-ec04f.web.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTU4MmVkYWJpZm80ZWlqbDZtNzh1eXVoMDJ1dnU3bnV3MHE1ZHFrMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0K4pfi9qpnKQU3VC/giphy.gif",
      video: "",
    },
  ],

  certifications: [
    {
      title: "Artificial Intelligence Certification",
      dates: "Jan 2023 - May 2024",
      location: "University of Missouri, St. Louis",
      description: (
        <>
          Certified by the University of Missouri, St. Louis.
          <br />
          Coursework: Artificial Intelligence, Machine Learning, Deep Learning,
          Data Visualization, Evolutionary Computation, and Interpretable
          Machine Learning.
        </>
      ),
      image:
        "https://64.media.tumblr.com/aa42776428824d72a6a22d1f656547ba/tumblr_msus7mPN9H1rwgdwdo1_400.png",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/PK1618/AI_Final_Project",
        },
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/PK1618/DeepLearing",
        },
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/PK1618/Interpretability_of_ML",
        },
      ],
    },
    {
      title: "Google Cloud: Machine Learning Engineer",
      dates: "Nov 2024 - Present",
      location: "Remote",
      description:
        "Pursuing Google Cloud Machine Learning Engineer certification, covering scalable ML model design, data pipelines, and AI deployment with TensorFlow and Vertex AI.",
      image:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/74/fa9028074941789429dfc1d1b71ddf/gc-logo-360x360.png?auto=format%2Ccompress&dpr=1&w=56px&h=56px&auto=format%2Ccompress&dpr=1",
      links: [
        {
          title: "Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://coursera.org/share/0ca1fbe1ff55172028b9e44574782227",
        },
      ],
    },
    {
      title: "Microsoft C#",
      dates: "Dec 2024 - Jan 2025",
      location: "Remote",
      description:
        "Gained proficiency in C# through Microsoft Learn, focusing on object-oriented programming, .NET frameworks, and building scalable applications.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/1*fMCdGCokXoh8CECCD7j9Og.png",
      links: [
        {
          title: "Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://learn.microsoft.com/en-us/users/satyapavankalyangude-7067/transcript/d5egwco8jpkkrnm",
        },
      ],
    },
    {
      title: "Code Master 2018",
      dates: "Feb 18, 2018",
      location: "Bhimavaram, Andhra Pradesh",
      description:
        "Qualified for the final round of Code Master 2018, a competitive coding event, placing 13th among 1800+ participants.",
      image:
        "https://play-lh.googleusercontent.com/S4ohmoe87D7H9VcEmi_L_Bl_RGoxZC51jwnW1aWW89tpFekZYOTU1hfdtH6_Lu9YyKOJ",
      links: [],
    },
  ],
} as const;