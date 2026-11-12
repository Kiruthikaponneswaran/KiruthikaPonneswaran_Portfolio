// ============================================================
//  EDIT YOUR CONTENT HERE. Every section of the site reads
//  from this file. Image paths are relative to /public.
// ============================================================

const BASE = import.meta.env.BASE_URL
export const asset = (path) => `${BASE}${path}`.replace(/([^:]\/)\/+/g, '$1')

export const profile = {
  name: 'Kiruthika Ponneswaran',
  first: 'Kiruthika',
  last: 'Ponneswaran',
  initials: 'KP',
  roles: [
    'Full stack software engineer',
    'React and Angular developer',
    'Django and ASP.NET API builder',
    'Claude and OpenAI integrator',
    'Mentor who explains things plainly',
  ],
  tagline:
    'I build dependable web applications, from reusable front ends to the APIs behind them, and I add AI features that stay inside budget.',
  location: 'Abu Dhabi, UAE',
  visa: 'UAE Job Seeker Visa',
  email: 'kiruthikaponneswaran3027@gmail.com',
  phone: '+971 55 315 5369',
  linkedin: 'https://www.linkedin.com/in/kiruthika-ponneswaran-72b16422a',
  github: 'https://github.com/Kiruthikaponneswaran',
  photo: 'images/profile.jpg', // <- add this file in /public/images
  resume: 'resume/Kiruthika_Ponneswaran_Resume.pdf', // <- add this file in /public/resume
  ring: 'Full stack engineer ✦ React ✦ Angular ✦ TypeScript ✦ Django ✦ ASP.NET ✦ Claude and GPT APIs ✦ ',
}

export const stats = [
  { value: 3, suffix: '+', label: 'Years building for the web' },
  { value: 10000, suffix: '+', label: 'Daily users on the Titan ERP modules I shipped' },
  { value: 50, suffix: '+', label: 'Clients on the restaurant ERP product' },
  { value: 2, suffix: '', label: 'Interns mentored' },
]

export const about = [
  "I'm a full stack engineer who enjoys the parts of software that make it dependable: clean APIs, reusable components, and production issues traced to their real root cause. In three years I have delivered core modules of an ERP platform used daily by more than 10,000 people, built features for a restaurant product serving 50+ clients including one in Dubai, and wired Claude and OpenAI APIs into working applications.",
  'Before engineering I worked as a Placement Mentor, so explaining technical ideas in plain language comes naturally. I have informally mentored two interns, work comfortably with QA and business stakeholders, and write documentation that non-technical readers can follow.',
  'I use AI coding assistants every day and review every line that ships. I am based in Abu Dhabi on a UAE Job Seeker Visa and available immediately.',
]

export const skillGroups = [
  {
    name: 'Front end',
    blurb: 'Accessible, responsive interfaces built from reusable parts.',
    items: ['React.js', 'Angular', 'TypeScript', 'JavaScript (ES6+)', 'RxJS', 'Next.js', 'Redux Toolkit', 'TanStack Query', 'Angular Material', 'Tailwind CSS', 'Bootstrap', 'SCSS', 'HTML5 and CSS3', 'Storybook', 'React Native'],
  },
  {
    name: 'Back end and data',
    blurb: 'APIs, stored procedures and databases that support the screens.',
    items: ['C# and ASP.NET MVC', 'Django', 'Django REST Framework', 'Node.js', 'FastAPI', 'REST API design', 'GraphQL', 'WebSockets', 'JWT and Firebase Auth', 'SQL Server', 'PostgreSQL', 'MySQL', 'IndexedDB'],
  },
  {
    name: 'AI and LLM',
    blurb: 'LLM features in real products, with token and cost control.',
    items: ['Anthropic Claude API', 'OpenAI GPT API', 'LLM-powered chatbots', 'Token and cost management', 'Prompts and context windows', 'RAG vs fine-tuning (fundamentals)', 'Human review of AI content', 'Stockfish engine integration'],
  },
  {
    name: 'Quality and delivery',
    blurb: 'Tested, measured and shipped through a team workflow.',
    items: ['Jest', 'Django API tests', 'Lighthouse', 'Chrome DevTools', 'React Profiler', 'WCAG 2.1', 'Git and GitHub', 'CI/CD with GitHub', 'Docker', 'Azure', 'Vercel', 'Firebase', 'Agile and Scrum', 'Code reviews'],
  },
  {
    name: 'Mentoring and learning content',
    blurb: 'Turning complex topics into clear, usable learning.',
    items: ['Mentoring and coaching', 'Technical documentation', 'Plain-language writing', 'Requirement gathering', 'ADDIE and SAM (foundational)', "Bloom's taxonomy", 'Microlearning', 'Figma and Canva'],
  },
]

export const experience = [
  {
    role: 'Software Developer (Full Stack, Front End and API)',
    company: 'Easy Design Systems Pvt. Ltd.',
    place: 'Coimbatore, India',
    period: 'Jun 2024 to Aug 2026',
    stack: ['React.js', 'Angular', 'TypeScript', 'RxJS', 'REST APIs', 'WebSockets', 'IndexedDB', 'React Native', 'C#', 'ASP.NET MVC', 'SQL Server', 'Azure'],
    points: [
      'Built and maintained the Sales, Finance, Purchase, Accounts, Inventory and Reporting modules of the Titan Enterprise ERP, used daily by 10,000+ users across India and the Gulf, in a team of 10+.',
      'Developed reusable Angular components, reactive forms, dynamic tables, filters and validation logic that cut duplicate UI code and sped up new feature delivery.',
      'Built React and TypeScript screens and reports for a restaurant ERP used by 50+ clients, including Castle IT Solutions in Dubai, and added an IndexedDB layer that removed repeated API calls.',
      'Contributed to the C#/ASP.NET MVC API layer: new endpoints, controllers and SQL Server stored procedures with CRUD operations.',
      'Handled live production support: reproduced client issues, explained causes and fixes, and deployed fixes to Azure-hosted sites. Informally mentored 2 interns.',
    ],
  },
  {
    role: 'Web Developer (React.js)',
    company: 'Machenn Innovation',
    place: 'Coimbatore, India',
    period: 'Nov 2023 to Feb 2024',
    stack: ['React.js', 'Vite', 'Firebase', 'OpenAI GPT API', 'Stockfish'],
    points: [
      'Built React interfaces and reusable components for a consumer chess learning platform (AllReal and Sigaram64), developed in association with Grandmaster Surya Ganguly.',
      'Integrated the OpenAI GPT API for an in-app chatbot and added the Stockfish engine for move analysis.',
      'Managed API usage and token costs after paid credits drained quickly under heavy use, and evaluated a lower-cost predefined-response alternative.',
    ],
  },
  {
    role: 'Python Full Stack Developer Intern',
    company: 'Brainery Spot Technology',
    place: 'Coimbatore, India',
    period: 'Apr 2023 to Oct 2023',
    stack: ['Python', 'Django', 'Django REST Framework', 'MySQL', 'React', 'Docker', 'Jest'],
    points: [
      'Built and shipped a Restaurant Booking System as the sole developer, covering database, REST APIs, business logic and a React front end.',
      'Practiced Git-based workflows and wrote Jest tests for UI components.',
    ],
  },
  {
    role: 'Placement Mentor',
    company: 'Focus 4-D Career Education Pvt. Ltd. (FACE Prep)',
    place: 'Coimbatore, India',
    period: 'Aug 2022 to Oct 2022',
    stack: ['Mentoring', 'Career coaching', 'Feedback'],
    points: [
      'Guided learners on placement and career readiness with practical advice and feedback.',
      'Explained concepts in simple, easy-to-follow language to support job preparation.',
    ],
  },
]

// Image paths live in /public/images/projects
export const projects = [
  {
    id: 'titan-erp',
    title: 'Titan Enterprise ERP',
    kind: 'Enterprise platform',
    period: 'Jun 2024 to Aug 2026',
    team: '10+ members',
    image: 'images/projects/titan-erp.png',
    summary: 'A live ERP covering sales, finance, purchasing, accounts, inventory and reporting for 10,000+ daily users.',
    role: 'Front-end developer with API integration. I built the Angular screens, integrated the REST APIs behind them, and wrote C#/ASP.NET endpoints and SQL Server stored procedures when needed.',
    challenge: 'The Item Master screen needed to show the Bill of Materials, but the BOM lived in a separate Angular project, so the parent application\u2019s routing could not reach it.',
    solution: 'I built a lightweight Angular app for the BOM and hosted both under the same root. The parent builds the child\u2019s URL dynamically and passes the context as serialized, URL-encoded query parameters. The child decodes them, calls its APIs and renders the BOM. This is deep linking between two applications without coupling their routes or components.',
    outcome: 'The BOM now opens from inside Item Master without merging the two applications. Reusable components cut duplicate UI code and sped up feature delivery.',
    stack: ['Angular', 'TypeScript', 'RxJS', 'Angular Material', 'SCSS', 'REST APIs', 'C#', 'ASP.NET MVC', 'SQL Server', 'Git'],
    links: {},
  },
  {
    id: 'restaurant-erp',
    title: 'Restaurant ERP for Castle IT Solutions, Dubai',
    kind: 'Product, 50+ clients',
    period: 'Jun 2024 to Nov 2024',
    team: '10 to 15 members',
    image: 'images/projects/restaurant-erp.png',
    summary: 'Menu management, ordering, table booking, cart and item management for a restaurant ERP used by 50+ clients.',
    role: 'Front-end developer in React and TypeScript. I joined near completion, took ownership of the offline data layer, built screens and reports, and handled live production support directly with the client.',
    challenge: 'Screens kept making repeated API calls for data that rarely changes.',
    solution: 'I built an IndexedDB storage layer in React and TypeScript so data is stored in the browser and reused. Production issues reported by the client were reproduced with their support team, then fixed in coordination with the developers.',
    outcome: 'Unnecessary API traffic dropped, screens felt faster, and the Dubai client received the new screens and reports with ongoing live support.',
    stack: ['React', 'TypeScript', 'IndexedDB', 'React Native', 'WebSockets', 'REST APIs', 'Git'],
    links: {},
  },
  {
    id: 'chess-platform',
    title: 'AllReal and Sigaram64 chess platform',
    kind: 'Consumer app with AI',
    period: 'Nov 2023 to Feb 2024',
    team: '',
    image: 'images/projects/chess-platform.png',
    summary: 'A chess learning and gaming platform with an in-app GPT chatbot and Stockfish move analysis.',
    role: 'Web developer. I built the React interfaces and reusable components, integrated the OpenAI GPT API, added Stockfish and set up Firebase Authentication.',
    challenge: 'Paid API credits drained quickly under heavy use of the chatbot.',
    solution: 'I tracked usage and token costs, then evaluated a lower-cost predefined-response alternative for common questions.',
    outcome: 'A working AI chatbot and move analysis inside a responsive React app for desktop and mobile, built with API cost in mind.',
    stack: ['React.js', 'Vite', 'Firebase', 'OpenAI GPT API', 'Stockfish'],
    links: {},
  },
  {
    id: 'booking-system',
    title: 'Restaurant Booking System',
    kind: 'Sole-developer build',
    period: 'Apr 2023 to Oct 2023',
    team: 'Solo',
    image: 'images/projects/booking-system.png',
    summary: 'End-to-end reservation and menu management with a Django REST API, MySQL and a React front end.',
    role: 'Sole developer. I owned database design, business logic, REST APIs and the front end.',
    challenge: 'Owning every layer alone while keeping changes reliable.',
    solution: 'I built the Django REST API and MySQL database first, then connected a React UI, using Git workflows and Jest tests for UI components.',
    outcome: 'A working booking system covering reservation and menu workflows across API, database and front end.',
    stack: ['Python', 'Django', 'Django REST Framework', 'MySQL', 'React', 'Docker', 'Jest', 'Bootstrap'],
    links: {},
  },
  {
    id: 'mini-inventory',
    title: 'Mini Inventory with Claude',
    kind: 'Open-source demo',
    period: '',
    team: '',
    image: 'images/projects/mini-inventory.png',
    summary: 'A full-stack inventory app whose products page uses the Anthropic Claude API for AI-assisted features.',
    role: 'Built the app end to end: a Python/Django REST API, a React and TypeScript front end, automated tests and a deployed live demo on Vercel.',
    challenge: '',
    solution: '',
    outcome: 'The products page was extended with a Claude API integration for AI-assisted features, and the project is public on GitHub with a live demo.',
    stack: ['React', 'TypeScript', 'Django REST Framework', 'Anthropic Claude API', 'Vercel'],
    links: {
      github: 'https://github.com/Kiruthikaponneswaran/Mini-Inventory',
      live: '', // <- paste your Vercel demo URL here, the button appears automatically
    },
  },
]

// Certificate images live in /public/certificates
export const certificates = [
  {
    title: 'Python Full Stack Web Development',
    issuer: 'Brainery Spot Technology',
    image: 'certificates/python-full-stack.jpg',
    url: '', // <- optional verification link
  },
  {
    title: 'Python (Basic)',
    issuer: 'HackerRank',
    image: 'certificates/hackerrank-python-basic.jpg',
    url: '', // <- paste your HackerRank certificate URL here
  },
]

export const education = [
  {
    title: 'Bachelor of Engineering, Electronics and Communication',
    place: 'University College of Engineering, Dindigul (Anna University)',
    period: '2018 to 2022',
    detail: 'CGPA 7.82 / 10.0 (78.2%)',
  },
  { title: 'HSC (Class 12), PCMB', place: '', period: '', detail: '918 / 1200 (76.5%)' },
  { title: 'SSLC (Class 10)', place: '', period: '', detail: '455 / 500 (91%)' },
]
