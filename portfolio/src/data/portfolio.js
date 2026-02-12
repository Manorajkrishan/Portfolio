export const portfolio = {
  person: {
    name: 'Manoraj Krishan',
    title: 'AI & Full Stack Product Engineer',
    tagline: 'Building intelligent, scalable products from idea to deployment',
    location: 'Hatfield, United Kingdom',
    email: 'krishan142536@gmail.com',
    phoneE164: '+447456907934',
    phoneDisplay: '+44 7456 907934',
    image: {
      src: '/WhatsApp Image 2025-06-22 at 19.05.29_708ba2a7.jpg',
      alt: 'Manoraj Krishan',
      fallback: 'https://via.placeholder.com/400x400/3b82f6/ffffff?text=MK',
    },
    links: {
      github: 'https://github.com/Manorajkrishan',
      linkedin: 'https://linkedin.com/in/manorajkrishan',
    },
  },

  nav: [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ],

  hero: {
    headlinePrefix: "Hi, I'm",
    description:
      'I build modern full-stack, AI, and mobile products with a focus on measurable outcomes. My recent work spans RegTech SaaS, ML security systems, predictive analytics, and developer tools.',
    primaryCta: { label: 'View Projects', targetId: 'projects' },
    secondaryCta: { label: 'Contact Me', targetId: 'contact' },
    badges: ['React', 'Next.js', 'Node.js', 'FastAPI', 'Python', 'Flutter', 'AI/ML'],
    // If you add a PDF to `public/`, set resumeUrl to "/Your_Resume.pdf"
    resumeUrl: null,
  },

  about: {
    heading: 'I turn ideas into production-ready products across web, AI, and mobile.',
    paragraphs: [
      'I am a full stack engineer with hands-on experience shipping MERN, .NET, and Python-based applications from concept to deployment.',
      'My recent GitHub development includes 36 public repositories covering AI SaaS, forecasting systems, firmware forensics, fintech tooling, and mobile products.',
      'I care about clean architecture, reliable delivery, and practical product value backed by clear technical execution.',
    ],
    stats: [
      { value: '36', label: 'Public GitHub Repositories' },
      { value: '12+', label: 'End-to-End Apps Delivered' },
      { value: '95%', label: 'Best ML Detection Accuracy' },
    ],
    features: [
      {
        icon: 'Code',
        title: 'Engineering Quality',
        description: 'Maintainable, scalable, and testable code with clear structure and standards.',
      },
      {
        icon: 'Palette',
        title: 'Product-focused UI',
        description: 'Accessible interfaces designed for clarity, usability, and business outcomes.',
      },
      {
        icon: 'Zap',
        title: 'Performance Mindset',
        description: 'Optimization across latency, throughput, and model performance where it matters.',
      },
      {
        icon: 'Users',
        title: 'Collaborative Delivery',
        description: 'Strong communication and teamwork to move ideas into working software quickly.',
      },
    ],
  },

  experience: {
    subtitle: 'Professional experience plus latest project development updates',
    items: [
      {
        type: 'work',
        title: 'Independent Full Stack & AI Builder',
        org: 'GitHub Projects / Personal Labs',
        date: '2025 - Present',
        bullets: [
          'Built and maintained 36 public repositories spanning AI/ML, full-stack SaaS, security research, and mobile applications.',
          'Delivered recent systems including RegTech (ESG automation), TermoGrid (RL thermal optimization), and Smart Function Recommender (NLP-powered developer tooling).',
          'Focused on practical engineering outcomes: strong documentation, robust architecture, and production-oriented implementation quality.',
        ],
      },
      {
        type: 'work',
        title: 'AI Engineering Trainee',
        org: 'ExaltAI (London, UK)',
        date: '06/2025 - Present',
        bullets: [
          'Built AI/ML solutions with Python, scikit-learn, and TensorFlow for real-world prediction and classification tasks.',
          'Improved model and data pipelines through preprocessing and feature engineering workflows.',
          'Collaborated across teams to deliver production-ready model outputs and iterative improvements.',
        ],
      },
      {
        type: 'work',
        title: 'Associate Software Engineer',
        org: 'Thuli Software (Pvt.) Ltd. (Sri Lanka)',
        date: '08/2023 - 03/2025',
        bullets: [
          'Developed scalable MERN and Java applications for multiple client projects with API-driven architecture.',
          'Implemented authentication, backend services, and data-layer improvements for better reliability and performance.',
          'Designed and optimized database schemas and endpoints to reduce latency and improve throughput.',
        ],
      },
      {
        type: 'work',
        title: 'Intern Software Engineer',
        org: 'Thuli Software (Pvt.) Ltd. (Sri Lanka)',
        date: '02/2023 - 08/2023',
        bullets: [
          'Contributed to client projects using React, Node.js, and MongoDB, including CRUD features and responsive components.',
          'Worked in agile sprint cycles and collaborated with senior engineers during delivery.',
        ],
      },
      {
        type: 'work',
        title: 'IT Support Technician',
        org: 'VM Private Ltd (Favorite Chicken, North Cheam, UK)',
        date: '03/2025 - 11/2025',
        bullets: [
          'Provided hardware, software, and POS support across multiple store locations.',
          'Improved system availability through proactive maintenance, setup, and troubleshooting workflows.',
        ],
      },
      {
        type: 'education',
        title: 'BSc (Hons) Computer Science (Software Engineering) - Second Upper',
        org: 'University of Hertfordshire (UK)',
        date: '2024 - 2025',
        bullets: [
          'Strengthened foundations in software engineering, full-stack systems, and applied computing practice.',
        ],
      },
      {
        type: 'education',
        title: 'BSc Computer Science - Completed first two years',
        org: 'Sri Lanka Institute of Information Technology (SLIIT)',
        date: '2022 - 2024',
        bullets: ['Completed first two academic years prior to transferring.'],
      },
    ],
  },

  skills: {
    subtitle: 'Technologies I use across current projects',
    categories: [
      {
        title: 'Web & Mobile Frameworks',
        skills: [
          {
            name: 'React',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            color: '#61DAFB',
          },
          {
            name: 'Next.js',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
            color: '#111827',
          },
          {
            name: 'JavaScript',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            color: '#F7DF1E',
          },
          {
            name: 'TypeScript',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
            color: '#3178C6',
          },
          {
            name: 'Flutter',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
            color: '#02569B',
          },
          {
            name: 'React Native',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            color: '#61DAFB',
          },
          {
            name: 'Tailwind CSS',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
            color: '#06B6D4',
          },
          {
            name: 'HTML5',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
            color: '#E34F26',
          },
          {
            name: 'CSS3',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
            color: '#1572B6',
          },
        ],
      },
      {
        title: 'Backend, APIs & Databases',
        skills: [
          {
            name: 'Node.js',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
            color: '#339933',
          },
          {
            name: 'Express',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
            color: '#111827',
          },
          {
            name: 'FastAPI',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
            color: '#009688',
          },
          {
            name: 'ASP.NET Core',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
            color: '#512BD4',
          },
          {
            name: 'Python',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
            color: '#3776AB',
          },
          {
            name: 'Java',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
            color: '#ED8B00',
          },
          {
            name: 'C#',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
            color: '#68217A',
          },
          {
            name: 'MongoDB',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
            color: '#47A248',
          },
          {
            name: 'PostgreSQL',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
            color: '#336791',
          },
          {
            name: 'MySQL',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
            color: '#4479A1',
          },
          {
            name: 'SQLite',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
            color: '#003B57',
          },
          {
            name: 'Firebase',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
            color: '#FFCA28',
          },
        ],
      },
      {
        title: 'AI/ML, Data & DevOps',
        skills: [
          {
            name: 'TensorFlow',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
            color: '#FF6F00',
          },
          {
            name: 'scikit-learn',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
            color: '#F7931E',
          },
          {
            name: 'OpenCV',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
            color: '#5C3EE8',
          },
          {
            name: 'Jupyter',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
            color: '#F37626',
          },
          {
            name: 'Docker',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
            color: '#2496ED',
          },
          {
            name: 'Git',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
            color: '#F05032',
          },
          {
            name: 'GitHub Actions',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg',
            color: '#2088FF',
          },
          {
            name: 'Linux',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
            color: '#FCC624',
          },
        ],
      },
    ],
    summaryHeading: 'Current Focus',
    summary:
      'I am actively shipping projects that combine strong product UX with robust backend engineering and practical AI integration, especially in forecasting, compliance, and intelligent automation.',
  },

  projects: {
    subtitle: 'Selected highlights from my recent development updates',
    allProjectsCta: {
      label: 'View all 36 repositories on GitHub',
      url: 'https://github.com/Manorajkrishan?tab=repositories',
    },
    categories: [
      { key: 'all', label: 'All Projects' },
      { key: 'research', label: 'Research' },
      { key: 'fullstack', label: 'Full Stack' },
      { key: 'ai', label: 'AI/ML' },
      { key: 'mobile', label: 'Mobile' },
      { key: 'backend', label: 'Backend' },
    ],
    items: [
      {
        id: 1,
        title: 'RegTech - AI-Powered ESG Compliance Platform',
        description:
          'AI SaaS platform that automates ESG data extraction from invoices, calculates carbon emissions with UK DEFRA factors, and generates UK SRS-aligned scorecards.',
        image:
          'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop',
        technologies: ['Next.js', 'React', 'FastAPI', 'Python', 'Tailwind', 'SQLite', 'OCR', 'NLP'],
        category: 'ai',
        liveUrl: null,
        githubUrl: 'https://github.com/Manorajkrishan/RegTech',
      },
      {
        id: 2,
        title: 'TermoGrid AI',
        description:
          'Physics-informed reinforcement learning system for data-center thermal control with PUE forecasting, digital twin visualization, and energy optimization simulations.',
        image:
          'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop',
        technologies: ['Python', 'Streamlit', 'LSTM', 'XGBoost', 'PPO', 'Gymnasium'],
        category: 'ai',
        liveUrl: null,
        githubUrl: 'https://github.com/Manorajkrishan/TermoGrid',
      },
      {
        id: 3,
        title: 'Smart Function Recommender',
        description:
          'NLP-powered developer assistant that converts natural language prompts into reusable code recommendations with measured high-accuracy ranking.',
        image:
          'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=250&fit=crop',
        technologies: ['Python', 'FastAPI', 'NLP', 'Docker', 'CLI', 'HTML'],
        category: 'ai',
        liveUrl: null,
        githubUrl: 'https://github.com/Manorajkrishan/Smart-function-recommender-',
      },
      {
        id: 4,
        title: 'NeuroSync - Emotion-Aware Intelligent System',
        description:
          'Real-time emotion detection platform using ML.NET and SignalR to classify text emotion and trigger adaptive software/IoT responses.',
        image:
          'https://images.unsplash.com/photo-1559757175-5700dde675c8?w=400&h=250&fit=crop',
        technologies: ['C#', 'ASP.NET Core', 'ML.NET', 'SignalR', 'JavaScript', 'IoT'],
        category: 'research',
        liveUrl: null,
        githubUrl: 'https://github.com/Manorajkrishan/NeuroSync',
      },
      {
        id: 5,
        title: 'UAV Firmware Forensics',
        description:
          'Drone firmware tampering detection system with multi-model ML analysis, forensic reporting, and both web and desktop interfaces.',
        image:
          'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=400&h=250&fit=crop',
        technologies: ['Python', 'FastAPI', 'React', 'Electron', 'Random Forest', 'LSTM'],
        category: 'research',
        liveUrl: null,
        githubUrl: 'https://github.com/Manorajkrishan/UAV-Firmware-Forensics',
      },
      {
        id: 6,
        title: 'Smart CV Builder',
        description:
          'AI-powered CV and cover-letter generator with ATS-focused templates, OpenAI/Ollama support, PDF export, and Firebase storage.',
        image:
          'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop',
        technologies: ['React', 'Node.js', 'Express', 'OpenAI API', 'Ollama', 'Firebase'],
        category: 'fullstack',
        liveUrl: null,
        githubUrl: 'https://github.com/Manorajkrishan/cv-builder',
      },
      {
        id: 7,
        title: 'Online Mortgage Calculator',
        description:
          'Accessible and responsive React mortgage calculator with step-by-step workflow, real-time validation, autosave, and tested calculation logic.',
        image:
          'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop',
        technologies: ['React', 'JavaScript', 'CSS', 'Accessibility', 'Testing'],
        category: 'fullstack',
        liveUrl: null,
        githubUrl: 'https://github.com/Manorajkrishan/Online-Mortgage-Calculator',
      },
      {
        id: 8,
        title: 'E-Commerce Website (Barakat Clone)',
        description:
          'MERN e-commerce application with product catalog, authentication, cart/checkout workflows, and admin-focused management features.',
        image:
          'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Tailwind CSS'],
        category: 'fullstack',
        liveUrl: null,
        githubUrl: 'https://github.com/Manorajkrishan/BarakatClone',
      },
      {
        id: 9,
        title: 'Ministry of Health System',
        description:
          'Large-scale healthcare management platform supporting disease management, inspections, vaccination tracking, and public health operations.',
        image:
          'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript'],
        category: 'fullstack',
        liveUrl: null,
        githubUrl: 'https://github.com/Manorajkrishan/Ministry-of-Health',
      },
      {
        id: 10,
        title: 'Student Management App',
        description:
          'Flutter user-management app with pagination, provider-based state management, local caching, search, and dark mode support.',
        image:
          'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop',
        technologies: ['Flutter', 'Dart', 'Provider', 'REST API', 'SharedPreferences'],
        category: 'mobile',
        liveUrl: null,
        githubUrl: 'https://github.com/Manorajkrishan/Student-management-app',
      },
      {
        id: 11,
        title: 'Habit Tracker App',
        description:
          'Wellness-focused React Native app for tracking daily habits, progress patterns, and motivation streaks with a clean mobile UX.',
        image:
          'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=250&fit=crop',
        technologies: ['React Native', 'Expo', 'JavaScript', 'Hooks', 'Mobile UI'],
        category: 'mobile',
        liveUrl: 'https://snack.expo.dev/@m_krishan/habit-tracker',
        githubUrl: 'https://github.com/Manorajkrishan/Habit-Tracker',
      },
      {
        id: 12,
        title: 'TODO / Notes SQLite App',
        description:
          'Kotlin Android notes app with SQLite storage, search, copy/share actions, timestamps, and RecyclerView-based interaction.',
        image:
          'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=250&fit=crop',
        technologies: ['Kotlin', 'Android', 'SQLite', 'RecyclerView'],
        category: 'mobile',
        liveUrl: null,
        githubUrl: 'https://github.com/Manorajkrishan/TODO',
      },
      {
        id: 13,
        title: 'Parcel Service System',
        description:
          'Java-based parcel service management system with core package operations and database-backed workflows.',
        image:
          'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=250&fit=crop',
        technologies: ['Java', 'JDBC', 'MySQL'],
        category: 'backend',
        liveUrl: null,
        githubUrl: 'https://github.com/Manorajkrishan/ParcelService',
      },
      {
        id: 14,
        title: 'UK Mortgage Rate Predictor',
        description:
          'Forecasting application combining Prophet and decision tree models to estimate UK mortgage-related trends through a Flask + React workflow.',
        image:
          'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop',
        technologies: ['Python', 'Flask', 'Prophet', 'scikit-learn', 'React'],
        category: 'ai',
        liveUrl: null,
        githubUrl: 'https://github.com/Manorajkrishan/Mortgage-interest-prediction-',
      },
    ],
  },

  certifications: {
    subtitle: 'Courses and credentials I have completed recently',
    items: [
      {
        title: 'AI/ML Engineer - Stage 2 & Stage 1',
        issuer: 'SLIIT Centre for Open and Distance Education',
        date: '06/2025',
        url: null,
        tags: ['AI/ML'],
      },
      {
        title: 'Java Programming Fundamentals',
        issuer: 'Udemy',
        date: '06/2025',
        url: null,
        tags: ['Java'],
      },
      {
        title: 'Python and Flask Framework Complete Course',
        issuer: 'Udemy',
        date: '06/2025',
        url: null,
        tags: ['Python', 'Flask'],
      },
      {
        title: 'Python for Beginners',
        issuer: 'University of Moratuwa - OpenUOM',
        date: '06/2025',
        url: null,
        tags: ['Python'],
      },
      {
        title: 'Introduction to AI',
        issuer: 'University of Helsinki',
        date: '05/2021',
        url: null,
        tags: ['AI'],
      },
    ],
  },

  contact: {
    subtitle: "Let's build your next project together",
  },

  footer: {
    services: [
      'Full Stack Product Development',
      'AI/ML & LLM Integrations',
      'Mobile App Development',
      'FinTech and RegTech Solutions',
    ],
  },
}

