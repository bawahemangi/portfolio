// ✏️ EDIT THIS FILE to update the whole site. No component changes needed.

export const profile = {
  name: 'Hemangi Bawa',
  role: 'Python Full Stack Developer',
  roles: ['Python Full Stack Developer', 'Django + React builder', 'DSA and problem-solving enthusiast'],
  location: 'India',
  headline: 'I build full stack web apps with Django and React.',
  blurb:
    'Final-year Computer Engineering student who enjoys turning ideas into working products: REST APIs, relational databases and clean interfaces. Currently looking for internship and entry-level software roles.',
  resume: '/resume.pdf', // put your PDF at public/resume.pdf
}

export const links = {
  email: 'bawahemangi@gmail.com', // TODO
  github: 'https://github.com/bawahemangi',
  linkedin: 'https://www.linkedin.com/in/hemangi-bawa/', // TODO
}

export const about = {
  paragraphs: [
    "I'm a Python Full Stack Developer in the making. I like the whole path of a feature: modelling the data, exposing it through an API, and building the screen someone actually uses.",
    'My interests are full stack development, data structures and algorithms, AI-powered applications and problem-solving. My goal is to work as a Software Developer / Python Full Stack Developer.',
  ],
  education: {
    degree: 'B.Tech in Computer Engineering',
    school: 'Godavari College of Engineering, Jalgaon',
    year: 'Graduating 2027',
  },
  interests: ['Full Stack Development', 'Data Structures & Algorithms', 'AI-powered applications', 'Problem-solving'],
}

export const skills = [
  { group: 'Programming', icon: 'Code2', items: ['Python', 'JavaScript', 'HTML', 'CSS'] },
  { group: 'Frontend', icon: 'Layout', items: ['React.js'] },
  { group: 'Backend', icon: 'Server', items: ['Django', 'Flask', 'REST APIs'] },
  { group: 'Databases', icon: 'Database', items: ['MySQL', 'PostgreSQL'] },
  { group: 'Tools', icon: 'Wrench', items: ['Git', 'GitHub', 'VS Code'] },
]

// repo / demo: leave '' to hide the button. Only add `demo` if it is really deployed.
export const projects = [
  {
    title: 'ReviewHawk',
    tagline: 'AI-powered GitHub pull request reviews',
    description:
      'A platform that reviews pull requests for you. Connect a GitHub repository, and ReviewHawk listens for pull request events through webhooks, queues the work, parses the changed code and generates review insights with an LLM.',
    points: [
      'Connect GitHub repositories and detect pull request events via webhooks',
      'Asynchronous Celery workflow with Redis for background processing',
      'Tree-sitter for code parsing and static analysis',
      'LLM-based analysis to generate code review insights',
    ],
    note: 'Live RAG integration is still under development.',
    tags: ['Django', 'React', 'Celery', 'Redis', 'Tree-sitter', 'GitHub Webhooks', 'LLM'],
    repo: 'https://github.com/bawahemangi/YOUR-REVIEWHAWK-REPO', // TODO
    demo: '',
  },
  {
    title: 'AgriDefenderX',
    tagline: 'Crop Health System',
    description:
      'A web application for crop health assessment and agricultural advisories. It brings image-based assessment, risk context and expert input together so farmers get practical guidance.',
    points: [
      'Image-based crop assessment',
      'Contextual risk analysis',
      'Advisory generation',
      'Expert feedback and dashboard-based insights',
    ],
    tags: ['Web App', 'Crop Health', 'Advisories'], // TODO: add your real stack
    repo: 'https://github.com/bawahemangi/AgriDefenderX',
    demo: '',
  },
  {
    title: 'Campus Event Management System',
    tagline: 'Events, registrations and attendance in one place',
    description:
      'A Django application for running campus events end to end, from creating an event to marking who showed up.',
    points: [
      'Event creation and management',
      'Paid and free events',
      'Student event registration',
      'Attendance management',
    ],
    tags: ['Django', 'Python', 'Database'], // TODO: name your database
    repo: 'https://github.com/bawahemangi/YOUR-CAMPUS-EVENTS-REPO', // TODO
    demo: '',
  },
  {
    title: 'LifeSync',
    tagline: 'Lifestyle recommendation platform',
    description:
      "A personalized lifestyle recommendation app. It collects a user's preferences and suggests lifestyle improvements that fit them, with a simple, user-friendly flow for discovering suggestions.",
    points: [
      'Collects user preferences to understand lifestyle needs',
      'Personalized recommendations based on user inputs',
      'Recommendations focused on individual relevance',
    ],
    tags: ['Full Stack', 'Personalization'], // TODO: add your real stack
    repo: 'https://github.com/bawahemangi/YOUR-LIFESYNC-REPO', // TODO
    demo: '',
  },
]

export const experience = [
  {
    role: 'python full stack developer intern',
    company: 'The Kiran Academy',
    period: 'april 2025 – november 2025',
    points: [
      'Worked on Django-based web application development',
      'Learned and implemented Django MVT architecture',
      'Worked with user authentication',
      'Used Django ORM for database operations',
      'Implemented CRUD functionality',
    ],
  },
]

export const certifications = [
  { title: 'Python for Data Science', issuer: 'NPTEL' },
  { title: 'Data Analytics Job Simulation', issuer: 'Deloitte' },
  { title: 'Database Management Systems (DBMS)', issuer: 'NPTEL' },
  { title: 'Enhancing Soft Skills and Personality', issuer: 'NPTEL' },
]
