export const portfolio = {
  person: {
    name: 'Manoraj Krishan',
    title: 'QA Engineer Intern | Full Stack Developer & AI/ML Engineer',
    tagline: 'QA Engineer @ Thrive 360 | Full Stack & AI Builder | 37 GitHub Projects',
    location: 'Colombo, Sri Lanka · Open to remote',
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
    statusPill: 'QA Engineer Intern @ Thrive 360',
    description:
      'I combine structured QA practices with full-stack and AI/ML engineering to ship reliable web, mobile, and data products. Currently testing products at Thrive 360 in Colombo while continuing to build AI SaaS, forecasting systems, and developer tools in my personal labs.',
    primaryCta: { label: 'View Projects', targetId: 'projects' },
    secondaryCta: { label: 'Contact Me', targetId: 'contact' },
    badges: ['QA Testing', 'API Testing', 'React', 'Next.js', 'Node.js', 'FastAPI', 'Python', 'Jest'],
    proofPoints: [
      { value: '34', label: 'Original public repos' },
      { value: '12', label: 'Tech families explored' },
      { value: '2026', label: 'QA + product build focus' },
    ],
    orbitCards: [
      { value: 'QA', label: 'Testing, validation, quality' },
      { value: 'SaaS', label: 'Product, POS, CV Builder' },
      { value: 'Mobile', label: 'Flutter, Kotlin, React Native' },
    ],
    // If you add a PDF to `public/`, set resumeUrl to "/Your_Resume.pdf"
    resumeUrl: null,
  },

  about: {
    heading: 'I turn ideas into production-ready products across QA, web, AI, and mobile.',
    paragraphs: [
      'I am a full stack engineer with hands-on experience shipping MERN, .NET, Python, and mobile applications from concept to deployment.',
      'I recently completed my AI Engineering Trainee programme at ExaltAI and joined Thrive 360 in Colombo as a QA Engineer Intern, where I combine structured quality assurance with hands-on full-stack and AI experience.',
      'My GitHub portfolio includes 37 public repositories covering AI SaaS, forecasting systems, firmware forensics, product management, POS workflows, fintech tooling, and mobile products.',
      'I care about clean architecture, reliable delivery, practical product value, and technical execution that is easy to maintain and extend.',
    ],
    stats: [
      { value: '37', label: 'Public GitHub Repositories' },
      { value: '15+', label: 'End-to-End Apps Delivered' },
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
    subtitle: 'Professional experience across QA, engineering, and product development',
    items: [
      {
        type: 'work',
        title: 'QA Engineer Intern',
        org: 'Thrive 360 (Colombo, Sri Lanka)',
        date: '06/2026 - Present',
        bullets: [
          'Perform manual and exploratory testing across web and mobile products to identify defects before release.',
          'Document test cases, bug reports, and regression scenarios to support reliable delivery cycles.',
          'Collaborate with developers and product teams to validate features, edge cases, and user-facing quality.',
          'Apply structured QA practices while leveraging full-stack and AI engineering background for deeper technical analysis.',
        ],
      },
      {
        type: 'work',
        title: 'Independent Full Stack & AI Builder',
        org: 'GitHub Projects / Personal Labs',
        date: '2025 - Present',
        bullets: [
          'Built and maintained 37 public repositories spanning AI/ML, full-stack SaaS, security research, business tools, and mobile applications.',
          'Delivered recent systems including RegTech, TermoGrid, Smart Function Recommender, NeuroSync, Product Management, POS System, and WheelWorth.',
          'Focused on practical engineering outcomes: clear product workflows, robust architecture, maintainable code, and production-oriented implementation quality.',
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
        type: 'work',
        title: 'AI Engineering Trainee',
        org: 'ExaltAI (London, UK)',
        date: '06/2025 - 04/2026',
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
        title: 'QA & Testing',
        skills: [
          {
            name: 'Manual Testing',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg',
            color: '#10b981',
          },
          {
            name: 'Test Cases',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-plain.svg',
            color: '#3b82f6',
          },
          {
            name: 'Bug Tracking',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
            color: '#ef4444',
          },
          {
            name: 'Jest',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
            color: '#99425B',
          },
          {
            name: 'Postman',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
            color: '#FF6C37',
          },
        ],
      },
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
            name: 'Dart',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
            color: '#0175C2',
          },
          {
            name: 'React Native',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            color: '#61DAFB',
          },
          {
            name: 'Kotlin',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
            color: '#7F52FF',
          },
          {
            name: 'Android',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
            color: '#3DDC84',
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
            name: 'Flask',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
            color: '#111827',
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
            name: 'Streamlit',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg',
            color: '#FF4B4B',
          },
          {
            name: 'ML.NET',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
            color: '#512BD4',
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
      'I am combining structured QA at Thrive 360 with hands-on full-stack and AI engineering — shipping projects that pair strong product UX with reliable quality, robust backends, and practical AI integration.',
  },

  projects: {
    subtitle: 'Selected highlights from my latest public repositories and product builds',
    allProjectsCta: {
      label: 'View all 37 repositories on GitHub',
      url: 'https://github.com/Manorajkrishan?tab=repositories',
    },
    repoInsights: {
      eyebrow: 'GitHub project lab',
      title: 'A portfolio shaped from full-stack products, AI experiments, mobile apps, and real business workflows.',
      description:
        'I reviewed the public GitHub profile and grouped the work into product lanes so visitors can quickly understand the range behind the featured projects.',
      stats: [
        { value: '37', label: 'Public repositories' },
        { value: '34', label: 'Original builds' },
        { value: '12', label: 'Language and stack families' },
        { value: '20+', label: 'Featured project snapshots' },
      ],
      lanes: [
        {
          title: 'AI, Data & Research',
          projects: ['RegTech', 'TermoGrid', 'NeuroSync', 'UAV Forensics', 'WheelWorth'],
        },
        {
          title: 'Business & Product Apps',
          projects: ['Product Management', 'POS System', 'CCTV', 'Hotel Booking', 'CV Builder'],
        },
        {
          title: 'Mobile, Backend & Embedded',
          projects: ['Student App', 'Habit Tracker', 'TODO SQLite', 'Parcel Service', 'Temperature Sensor'],
        },
      ],
    },
    categories: [
      { key: 'all', label: 'All Projects' },
      { key: 'research', label: 'Research' },
      { key: 'fullstack', label: 'Full Stack' },
      { key: 'ai', label: 'AI/ML' },
      { key: 'mobile', label: 'Mobile' },
      { key: 'business', label: 'Business Apps' },
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
        id: 20,
        title: 'Interactive Portfolio Website',
        description:
          'This React + Vite portfolio built here with dark mode, animated sections, data-driven content, project filtering, and a refreshed unique project-lab UI.',
        image:
          'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop',
        technologies: ['React', 'Vite', 'GSAP', 'Framer Motion', 'CSS', 'Data-driven UI'],
        category: 'fullstack',
        liveUrl: null,
        githubUrl: 'https://github.com/Manorajkrishan/Portfolio',
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
      {
        id: 15,
        title: 'WheelWorth - Car Price Prediction',
        description:
          'Web-based car price prediction system using machine learning models with a user-friendly interface for estimating vehicle value.',
        image:
          'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=250&fit=crop',
        technologies: ['Python', 'Machine Learning', 'HTML', 'CSS', 'Prediction Models'],
        category: 'ai',
        liveUrl: null,
        githubUrl: 'https://github.com/Manorajkrishan/WheelWorth',
      },
      {
        id: 16,
        title: 'Product Management App',
        description:
          'JavaScript product management application focused on practical product data workflows, responsive UI, and lightweight business operations.',
        image:
          'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=400&h=250&fit=crop',
        technologies: ['JavaScript', 'CSS', 'Product Workflows', 'Responsive UI'],
        category: 'business',
        liveUrl: null,
        githubUrl: 'https://github.com/Manorajkrishan/Product-Management',
      },
      {
        id: 17,
        title: 'POS System',
        description:
          'Point-of-sale focused JavaScript application for sales workflows, checkout-style interactions, and business transaction management.',
        image:
          'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=250&fit=crop',
        technologies: ['JavaScript', 'HTML', 'CSS', 'POS Workflows'],
        category: 'business',
        liveUrl: null,
        githubUrl: 'https://github.com/Manorajkrishan/POS-System',
      },
      {
        id: 18,
        title: 'CCTV Management App',
        description:
          'JavaScript-based CCTV project exploring monitoring-oriented interface workflows with web technologies and deployment scripts.',
        image:
          'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=400&h=250&fit=crop',
        technologies: ['JavaScript', 'HTML', 'CSS', 'Batchfile'],
        category: 'fullstack',
        liveUrl: null,
        githubUrl: 'https://github.com/Manorajkrishan/CCTV',
      },
      {
        id: 19,
        title: 'Hotel Booking System',
        description:
          'Python hotel booking project for reservation-style workflows, backend logic, and command/script-assisted setup.',
        image:
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop',
        technologies: ['Python', 'Shell', 'Booking Workflows'],
        category: 'backend',
        liveUrl: null,
        githubUrl: 'https://github.com/Manorajkrishan/Hotel-booking-syste',
      },
      {
        id: 21,
        title: 'Temperature Sensor',
        description:
          'C++ sensor project showing embedded-programming practice for capturing and handling temperature data from connected hardware.',
        image:
          'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=400&h=250&fit=crop',
        technologies: ['C++', 'Embedded Systems', 'Sensors', 'Hardware'],
        category: 'backend',
        liveUrl: null,
        githubUrl: 'https://github.com/Manorajkrishan/Temperature-sensor-',
      },
      {
        id: 22,
        title: 'Thelucifer Automation Toolkit',
        description:
          'PowerShell-based automation repository that expands the portfolio into scripting, tooling, and Windows workflow automation.',
        image:
          'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=250&fit=crop',
        technologies: ['PowerShell', 'Automation', 'Scripting', 'Tooling'],
        category: 'backend',
        liveUrl: null,
        githubUrl: 'https://github.com/Manorajkrishan/Thelucifer',
      },
    ],
  },

  certifications: {
    subtitle: 'Courses and credentials I have completed recently',
    items: [
      {
        title: 'AI Engineering Trainee Programme',
        issuer: 'ExaltAI (London, UK)',
        date: '04/2026',
        url: null,
        tags: ['AI/ML'],
      },
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
      'Quality Assurance & Test Automation',
      'Full Stack Product Development',
      'AI/ML & LLM Integrations',
      'Mobile App Development',
      'FinTech, RegTech, and Business Automation',
    ],
  },
}

