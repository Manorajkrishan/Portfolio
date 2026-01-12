export const portfolio = {
  person: {
    name: 'Manoraj Krishan',
    title: 'Full Stack Developer',
    tagline: 'Full Stack Developer • AI/ML Engineer (Trainee)',
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
      'Detail-oriented Full Stack Developer with hands-on experience building responsive MERN applications. Skilled in React, Node, MongoDB, Python, and AI/ML — focused on scalable systems and real-world impact.',
    primaryCta: { label: 'View Projects', targetId: 'projects' },
    secondaryCta: { label: 'Contact Me', targetId: 'contact' },
    badges: [
      'MERN',
      'AI/ML',
      'React',
      'Node.js',
      'Python',
      'TensorFlow',
    ],
    // If you add a PDF to `public/`, set resumeUrl to "/Your_Resume.pdf"
    resumeUrl: null,
  },

  about: {
    heading: 'I’m a passionate developer who loves creating scalable digital solutions.',
    paragraphs: [
      'I’m a Full Stack Developer with hands-on experience building responsive MERN stack applications and delivering features in agile teams.',
      'Recently, I’ve been deepening my AI/ML engineering skills (Python, scikit-learn, TensorFlow) and applying them to real projects including computer vision and neurotechnology.',
      'I care about clean architecture, performance, and collaboration — turning ideas into reliable products.',
    ],
    stats: [
      { value: '15+', label: 'Projects Completed' },
      { value: '3+', label: 'Production Models Delivered' },
      { value: '85%+', label: 'ML Model Accuracy' },
    ],
    features: [
      {
        icon: 'Code',
        title: 'Clean Code',
        description: 'Maintainable, scalable, and efficient code following best practices.',
      },
      {
        icon: 'Palette',
        title: 'Product-minded UI',
        description: 'Modern, accessible interfaces with attention to details that matter.',
      },
      {
        icon: 'Zap',
        title: 'Performance',
        description: 'Optimized experiences that feel fast across devices and networks.',
      },
      {
        icon: 'Users',
        title: 'Collaboration',
        description: 'Clear communication and teamwork to ship reliably and iteratively.',
      },
    ],
  },

  experience: {
    subtitle: 'A quick snapshot of what I’ve been working on',
    items: [
      {
        type: 'work',
        title: 'AI Engineering Trainee',
        org: 'ExaltAI (London, UK)',
        date: '06/2025 – Present',
        bullets: [
          'Building AI/ML projects with Python, scikit-learn, and TensorFlow; delivering models with 85%+ prediction accuracy.',
          'Performed preprocessing + feature engineering and optimized pipelines, reducing data processing time by ~40%.',
          'Collaborating cross-functionally to deliver 3+ production-ready ML models for real-world use cases.',
        ],
      },
      {
        type: 'work',
        title: 'Associate Software Engineer',
        org: 'Thuli Software (Pvt.) Ltd. (Sri Lanka)',
        date: '08/2023 – 03/2025',
        bullets: [
          'Developed scalable MERN + Java applications for 5+ client projects; integrated REST APIs serving 1000+ daily active users.',
          'Implemented authentication and backend logic; improved response time by ~35% via MongoDB query optimization + indexing.',
          'Designed database schemas and API endpoints; reduced latency by ~50% and increased throughput by ~40%.',
          'Performed code reviews and performance tuning; reduced server costs by ~25% through efficient resource utilization.',
        ],
      },
      {
        type: 'work',
        title: 'Intern Software Engineer',
        org: 'Thuli Software (Pvt.) Ltd. (Sri Lanka)',
        date: '02/2023 – 08/2023',
        bullets: [
          'Contributed to 3+ client projects using Node.js, React.js, and MongoDB; built CRUD features and responsive UI components.',
          'Worked in agile sprints and improved delivery speed through collaborative planning and iteration.',
        ],
      },
      {
        type: 'work',
        title: 'IT Support Technician',
        org: 'VM Private Ltd (Favorite Chicken, North Cheam, UK)',
        date: '03/2025 – 11/2025',
        bullets: [
          'Provided IT support for hardware/software/POS across 5+ store locations; reduced downtime by ~60% via proactive maintenance.',
          'Installed and configured equipment to support ~99.5% uptime and improved operational efficiency by ~25%.',
        ],
      },
      {
        type: 'education',
        title: 'BSc (Hons) Computer Science (Software Engineering) — Second Upper',
        org: 'University of Hertfordshire (UK)',
        date: '2024 – 2025',
        bullets: [
          'Core foundation in software engineering, full-stack development, and applied computing.',
        ],
      },
      {
        type: 'education',
        title: 'BSc Computer Science — Completed first two years',
        org: 'Sri Lanka Institute of Information Technology (SLIIT)',
        date: '2022 – 2024',
        bullets: ['Completed first two years prior to transferring.'],
      },
    ],
  },

  skills: {
    subtitle: 'Technologies I work with',
    categories: [
      {
        title: 'Web & Frameworks',
        skills: [
          {
            name: 'React',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            color: '#61DAFB',
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
            name: 'HTML5',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
            color: '#E34F26',
          },
          {
            name: 'CSS3',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
            color: '#1572B6',
          },
          {
            name: 'Tailwind CSS',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
            color: '#06B6D4',
          },
        ],
      },
      {
        title: 'Backend & Databases',
        skills: [
          {
            name: 'Spring Boot',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
            color: '#6DB33F',
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
            name: 'MongoDB',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
            color: '#47A248',
          },
          {
            name: 'MySQL',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
            color: '#4479A1',
          },
          {
            name: 'PostgreSQL',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
            color: '#336791',
          },
        ],
      },
      {
        title: 'AI/ML & DevOps',
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
        ],
      },
    ],
    summaryHeading: 'Always Learning',
    summary:
      'I’m actively advancing AI/ML engineering skills while continuing to ship full-stack products. I care about measurable improvements (latency, throughput, accuracy) and clean, maintainable systems.',
  },

  projects: {
    subtitle: 'Some of my recent work',
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
        title: 'Neurosync (In Progress) — Neurotechnology Platform',
        description:
          'Real-time brain-computer interface platform processing 1000+ neural signals/sec with ML-based classification and a responsive React dashboard.',
        image:
          'https://images.unsplash.com/photo-1559757175-5700dde675c8?w=400&h=250&fit=crop',
        technologies: [
          'Python',
          'TensorFlow',
          'React',
          'Node.js',
          'Express',
          'MongoDB',
          'WebSocket',
        ],
        category: 'research',
        liveUrl: null,
        githubUrl: 'https://github.com/Manorajkrishan/NeuroSync',
      },
      {
        id: 2,
        title: 'UAV Firmware Forensics',
        description:
          'Drone-focused firmware forensics project exploring analysis workflows and investigation techniques for UAV firmware artifacts.',
        image:
          'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=400&h=250&fit=crop',
        technologies: ['Firmware', 'Forensics', 'Security Research'],
        category: 'research',
        liveUrl: null,
        githubUrl: 'https://github.com/Manorajkrishan/UAV-Firmware-Forensics',
      },
      {
        id: 3,
        title: 'E-Commerce Website (MERN) — Barakat Clone',
        description:
          'Full-stack e-commerce platform with JWT auth, product management, cart/checkout, and an admin dashboard; optimized UX for conversions.',
        image:
          'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Tailwind CSS'],
        category: 'fullstack',
        liveUrl: null,
        githubUrl: 'https://github.com/Manorajkrishan/BarakatClone',
      },
      {
        id: 4,
        title: 'UK Mortgage Rate Predictor',
        description:
          'ML web app trained on 10+ years of UK mortgage data (87% accuracy) with real-time visualization and a Flask dashboard.',
        image:
          'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop',
        technologies: ['Python', 'Flask', 'scikit-learn', 'Data Analysis'],
        category: 'ai',
        liveUrl: null,
        githubUrl: 'https://github.com/Manorajkrishan/Mortgage-interest-prediction--prediction',
      },
      {
        id: 5,
        title: 'Ministry of Health System',
        description:
          'Healthcare management system built with MERN stack featuring patient management, appointment scheduling, and medical records tracking.',
        image:
          'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop',
        technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
        category: 'fullstack',
        liveUrl: null,
        githubUrl: 'https://github.com/Manorajkrishan/Ministry-of-Health',
      },
      {
        id: 6,
        title: 'Parcel Service System',
        description:
          'Java-based parcel management system with package tracking and delivery management features.',
        image:
          'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=250&fit=crop',
        technologies: ['Java', 'Swing', 'JDBC', 'MySQL'],
        category: 'backend',
        liveUrl: null,
        githubUrl: 'https://github.com/Manorajkrishan/ParcelService',
      },
      {
        id: 7,
        title: 'Vehicle Service Management System',
        description:
          'OOP project for managing vehicle services and fuel station operations with CRUD functionality.',
        image:
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop',
        technologies: ['Java', 'OOP', 'CRUD'],
        category: 'backend',
        liveUrl: null,
        githubUrl:
          'https://github.com/Manorajkrishan/Online-vehicle-service-and-Fuel-station-management-system',
      },
      {
        id: 8,
        title: 'TODO App (Kotlin)',
        description:
          'Modern Android TODO app with clean UI, task management, and local storage.',
        image:
          'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=250&fit=crop',
        technologies: ['Kotlin', 'Android', 'SQLite'],
        category: 'mobile',
        liveUrl: null,
        githubUrl: 'https://github.com/Manorajkrishan/TODO',
      },
    ],
  },

  certifications: {
    subtitle: 'Courses and credentials I’ve completed recently',
    items: [
      {
        title: 'AI/ML Engineer — Stage 2 & Stage 1',
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
        issuer: 'University of Moratuwa — OpenUOM',
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
    subtitle: "Let's work together on your next project",
  },

  footer: {
    services: [
      'Full Stack Development',
      'AI/ML Applications',
      'Mobile Apps',
      'System Architecture',
    ],
  },
}

