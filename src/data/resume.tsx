import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import avatarImg from "../../public/assets/PK_image.jpg";

export const DATA = {
  name: "Satya Pavan Kalyan Gude",
  initials: "SPKG",
  url: "https://github.com/PK1618/",
  location: "St.Louis, MO, USA",
  locationLink: "",
  description:
    "Software Engineer (Frontend & Backend) | Building Scalable, Secure, and User-Centric Applications | Cloud & AI Enthusiast",
  summary:
    "I’m a Software Engineer experienced in building scalable, secure, and user-friendly applications using technologies like React, Angular Java, Spring Boot, Node.js, .NET and AWS. I enjoy working across the stack — from creating responsive UIs to designing robust APIs and cloud-native solutions. Passionate about data, AI, and continuous learning, I thrive in collaborative teams and love turning complex challenges into impactful solutions.",
  avatarUrl: avatarImg,
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "JavaScript",
    "Node.js",
    "Express",
    "Python",
    "Postgres",
    "AWS",
    "MongoDB",
    "GCP",
    "Azure",
    "SQL",
    "Java",
    ".NET",
    "SpringBoot",
    "MicroServices",
    "C++",
    "C#",
    "DSA",
    "TailwindCSS",
    "Bootstrap",
    "Magic UI",
    "Git",
    "Github",
    "Hibernate",
    "Docker",
    "Kubernetes",
    "Jest",
    "Cypress",
    "Redux",
    "GraphQL",
    "Machine Learning",
    "Deep Learning",
    "Neural Networks",
    "Natural Language Processing",
    "Computer Vision",
    "Data Analysis",
    "Data Visualization",
    "Predictive Analytics",
    "Statistical Analysis"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "gsatyapavankalyan21@gmail.com",
    tel: "+1 (314) 441-5954",
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
        url: "mailto:gsatyapavankalyan21@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      "Download CV": {
        name: "Download Resume",
        url: "",
        icon: Icons.download,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "JP Morgan & Chase",
      href: "https://www.jpmorganchase.com/",
      badges: [],
      location: "St.Louis, MO",
      title: "Software Engineer",
      logoUrl: "https://uncficb.org/wp-content/uploads/2022/11/jp-morgan-chase-logo-unite-2022-1024x1024.png",
      start: "Jan 2024",
      end: "Present",
      description:
        " ",
    },
    {
      company: "OYO ROOMS",
      href: "https://oyorooms.com/",
      badges: [],
      location: "Haryana, Gurgoan",
      title: "Software Development Engineer II",
      logoUrl: "https://tse3.mm.bing.net/th?id=OIP.764pVAF7eWc3Bmgb0_1C_wAAAA&pid=Api&P=0&h=220",
      start: "Sep 2019",
      end: "Dec 2022",
      description:
        " ",
    },
  ],
  education: [
    {
      school: "University of Missouri - st.louis",
      href: "https://www.umsl.edu/",
      degree: "Masters in Computer Science",
      logoUrl:
        "https://s.yimg.com/fz/api/res/1.2/aSVXUTfboj2CrtfyiX5KJQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/3003655d-7387-3a07-945d-d5a6aa1abc34/t_500x300",
      start: "2023",
      end: "2024",
    },
    {
      school: "Andhra University",
      href: "https://www.andhrauniversity.edu.in/",
      degree: "B.Tech in Computer Science and Engineering",
      logoUrl:
        "https://andhrauniversity.edu.in/Header.png",
      start: "2015",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "BurgerBuilder",
      href: "https://react-my-burger-ec04f.web.app/",
      dates: "Sep 2019 - Oct 2019",
      active: true,
      description:
        "Developed a dynamic burger builder application using ReactJS, allowing users to customize and order their burgers. The project emphasizes responsive design, user-friendly interface, and seamless integration with backend services.",
      technologies: ["ReactJs", "NodeJs", "ExpressJs", "Firebase"],
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
    {
      title: "AI Image Generator",
      href: "https://aiimagecheymowa.netlify.app/",
      dates: "Sep 2024 - Oct 2024",
      active: true,
      description:
        "Experience the power of AI with our image generator, built using React, Express, Node.js, TailwindCSS, MongoDB, and OpenAI’s API, seamlessly integrating CORS and Cloudinary for dynamic creativity.",
      technologies: ["React.js", "JavaScript", "TailwindCSS", "MongoDB", "OpenAI Dall-E API", "ExpressJs", "Cors"],
      links: [
        {
          type: "Website",
          href: "https://react-my-burger-ec04f.web.app/",
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
        "University Talks is a collaborative chat platform for seamless communication through channels and direct messages, featuring profile management, emoji integration, and GIF support.",
      technologies: [
        "React.js",
        "Axios",
        "Stream",
        "Universal Cookie",
        "Giphy",
        "Node.js",
        "Express",
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
      title: "WebTraffic Analysis",
      href: "",
      dates: "Apr 2024 - May 2024",
      active: true,
      description:
        "Analyzed web traffic to detect anomalies and predict future trends using advanced time series forecasting techniques. Utilizing historical data, the project aims to enhance the accuracy of traffic prediction and identify unusual patterns.",
      technologies: ["Python", "Tensorflow", "Sklearn", "Keras", "EDA", "matplotlib", "seaborn", "LSTMs", "XGBoost"],
      links: [
        // {
        //         type: "Website",
        //         href: "",
        //         icon: <Icons.globe className="size-3" />,
        // },
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
      title: "Training AI to Decipher Human Expressions!",
      href: "",
      dates: "Apr 2024 - May 2024",
      active: true,
      description:
        "Implemented emotion and gender recognition using deep learning models to enhance interpretability and transparency. The project integrates Local Interpretable Model-agnostic Explanations (LIME) and Grad-CAM techniques.",
      technologies: [
        "CNNs",
        "Grad-CAM",
        "Model Agnostic Explanations(LIME)",
      ],
      links: [
        // {
        //         type: "Website",
        //         href: "",
        //         icon: <Icons.globe className="size-3" />,
        // },
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
  ],
  certifications: [
    {
      title: "Artificial Intelligence",
      dates: "Jan 20th 2023 - May 17 2024",
      location: "Saint Louis, MO",
      description: (
        <>
          Certified by the University of Missouri - St.Louis.
          <br />
          Course Work done: Artificial Intelligence, Data Visualization, Machine Learning, Evolutionary Computation, Deep Learning, and Interpretable Machine Learning.
        </>
      ),
      image: "https://64.media.tumblr.com/aa42776428824d72a6a22d1f656547ba/tumblr_msus7mPN9H1rwgdwdo1_400.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/PK1618/AI_Final_Project",
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/PK1618/DeepLearing",
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/PK1618/Interpretability_of_ML",
        },
      ],
    },
    {
      title: "Google Cloud Certification: Machine Learning Engineer",
      dates: "Nov 23rd 2024 - present",
      location: "Remote",
      description: "Pursuing the Google Cloud Certification: Machine Learning Engineer to master scalable ML models, data pipelines, and AI deployment with tools like TensorFlow and Vertex AI.",
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
      description: "Gained proficiency in C# through Microsoft Learning, focusing on building robust applications, object-oriented programming principles, and implementing efficient algorithms. Acquired hands-on experience with .NET frameworks, debugging, and developing scalable solutions for real-world scenarios.",
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
      dates: "Feb 18th, 2018",
      location: "Bhimavaram, Andhrapradesh",
      description: "•	Qualified for the final round of “CODE MASTER 2018”, a coding competition conducted in our college and stood 13th rank among 1800+ participants.",
      image:
        "https://play-lh.googleusercontent.com/S4ohmoe87D7H9VcEmi_L_Bl_RGoxZC51jwnW1aWW89tpFekZYOTU1hfdtH6_Lu9YyKOJ",
      links: [{
        title: "Link",
        icon: <Icons.globe className="h-4 w-4" />,
        href: "",
      },],
    },
  ],
} as const;
