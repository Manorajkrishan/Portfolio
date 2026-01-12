export const portfolio = {
  person: {
    name: 'Manoraj Krishan',
    title: 'Full Stack Developer',
    tagline: 'Full Stack Developer & AI/ML Enthusiast',
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
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ],

  hero: {
    headlinePrefix: "Hi, I'm",
    description:
      'I build clean, scalable products end-to-end — from responsive UIs to robust APIs. I enjoy MERN + Spring Boot, Java/Python, and I’m actively exploring AI/ML applications.',
    primaryCta: { label: 'View Projects', targetId: 'projects' },
    secondaryCta: { label: 'Contact Me', targetId: 'contact' },
    // If you add a PDF to `public/`, set resumeUrl to "/Your_Resume.pdf"
    resumeUrl: null,
  },

  about: {
    heading: 'I’m a passionate developer who loves creating scalable digital solutions.',
    paragraphs: [
      'Currently completing my BSc in Computer Science at the University of Hertfordshire, I bring a solid mix of technical skills, real-world project experience, and a drive for continuous learning.',
      'I’ve worked on responsive interfaces and RESTful APIs in fast-paced teams using agile methodologies, and I enjoy shipping full-stack solutions that are tailored to user needs and scalable for growth.',
      'Alongside technical proficiency, I value communication, collaboration, and project management — the skills that turn good code into great outcomes.',
    ],
    stats: [
      { value: '15+', label: 'Projects Completed' },
      { value: '2+', label: 'Years Experience' },
      { value: 'BSc', label: 'Computer Science' },
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
        title: 'Software Developer',
        org: 'Thuli Software Pvt Ltd',
        date: 'Industry experience',
        bullets: [
          'Built responsive UI features and maintained reusable components.',
          'Designed and implemented RESTful APIs and integrated frontend + backend.',
          'Collaborated in agile sprints and shipped iterative improvements.',
        ],
      },
      {
        type: 'education',
        title: 'BSc Computer Science',
        org: 'University of Hertfordshire',
        date: 'Undergraduate',
        bullets: [
          'Strong foundation in software engineering, data structures, and web development.',
          'Hands-on projects across full-stack development and applied ML.',
        ],
      },
    ],
  },

  skills: {
    subtitle: 'Technologies I work with',
    categories: [
      {
        title: 'Frontend Technologies',
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
        title: 'Backend & Database',
        skills: [
          {
            name: 'Node.js',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
            color: '#339933',
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
            name: 'Spring Boot',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
            color: '#6DB33F',
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
        ],
      },
      {
        title: 'Tools & Technologies',
        skills: [
          {
            name: 'Git',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
            color: '#F05032',
          },
          {
            name: 'Docker',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
            color: '#2496ED',
          },
          {
            name: 'AWS',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
            color: '#FF9900',
          },
          {
            name: 'Flask',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
            color: '#000000',
          },
          {
            name: 'Kotlin',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
            color: '#7F52FF',
          },
          {
            name: 'Linux',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
            color: '#FCC624',
          },
        ],
      },
    ],
    summaryHeading: 'Always Learning',
    summary:
      'I’m constantly expanding my skill set and staying up-to-date with modern best practices. Currently exploring AI/ML applications, cloud architecture, and advanced full-stack solutions.',
  },

  projects: {
    subtitle: 'Some of my recent work',
    categories: [
      { key: 'all', label: 'All Projects' },
      { key: 'fullstack', label: 'Full Stack' },
      { key: 'ai', label: 'AI/ML' },
      { key: 'mobile', label: 'Mobile' },
      { key: 'backend', label: 'Backend' },
    ],
    items: [
      {
        id: 1,
        title: 'Barakat E-Commerce Clone',
        description:
          'A full-stack e-commerce platform clone featuring modern UI/UX, product catalog, shopping cart functionality, and responsive design.',
        image:
          'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
        category: 'fullstack',
        liveUrl: null,
        githubUrl: 'https://github.com/Manorajkrishan/BarakatClone',
      },
      {
        id: 2,
        title: 'UK Mortgage Rate Predictor',
        description:
          'An AI-powered application that predicts UK mortgage interest rates using machine learning. Includes data visualization and predictive analytics.',
        image:
          'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop',
        technologies: ['Python', 'Flask', 'React', 'Machine Learning'],
        category: 'ai',
        liveUrl: null,
        githubUrl: 'https://github.com/Manorajkrishan/Mortgage-interest-prediction-',
      },
      {
        id: 3,
        title: 'Ministry of Health System',
        description:
          'A healthcare management system built with MERN stack featuring patient management, appointment scheduling, and medical records tracking.',
        image:
          'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop',
        technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
        category: 'fullstack',
        liveUrl: null,
        githubUrl: 'https://github.com/Manorajkrishan/Ministry-of-Health',
      },
      {
        id: 4,
        title: 'TODO App - Kotlin',
        description:
          'A modern Android TODO application built with Kotlin. Includes task management, categories, reminders, and a clean Material UI.',
        image:
          'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=250&fit=crop',
        technologies: ['Kotlin', 'Android', 'Material Design', 'SQLite'],
        category: 'mobile',
        liveUrl: null,
        githubUrl: 'https://github.com/Manorajkrishan/TODO',
      },
      {
        id: 5,
        title: 'Vehicle Service Management System',
        description:
          'An OOP-based system for managing vehicle services and fuel station operations, showcasing design patterns and OO design.',
        image:
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop',
        technologies: ['Java', 'OOP', 'Design Patterns', 'Database'],
        category: 'backend',
        liveUrl: null,
        githubUrl:
          'https://github.com/Manorajkrishan/Online-vehicle-service-and-Fuel-station-management-system',
      },
      {
        id: 6,
        title: 'Parcel Service System',
        description:
          'A parcel management system built in Java featuring package tracking, delivery management, and customer operations.',
        image:
          'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=250&fit=crop',
        technologies: ['Java', 'Swing', 'JDBC', 'MySQL'],
        category: 'backend',
        liveUrl: null,
        githubUrl: 'https://github.com/Manorajkrishan/ParcelService',
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

