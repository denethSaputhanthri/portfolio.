export const projects = [
  {
    title: "EstateFlow",
    description:
      "A full-stack real estate management platform designed to manage users, properties, inquiries, and related business workflows. Includes authentication, role-based access, and Docker deployment.",
    technologies: [
      "Next.Js",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "Flyway",
      "Spring Security",
      "REST API",
    ],
    github: "https://github.com/denethSaputhanthri/estatehub-backend.git",
    demo: null,
    featured: true,
    category: ["Full Stack", "Backend","Frontend"],
    image: "/estate.png",
  },
  {
    title: "NovaCart",
    description:
      "Modern e-commerce frontend focused on product browsing, categories, wishlist, cart functionality, and responsive UI. Built with a component-driven approach for scalability.",
    technologies: ["Angular", "TypeScript", "Tailwind CSS", "Angular Material"],
    github: "https://github.com/denethSaputhanthri/NovaCart",
    demo: null,
    featured: true,
    category: ["Frontend"],
    image: "/novacart.png",
  },
  {
    title: "Running Tracker",
    description:
      "A mobile running tracker application designed to track running activities and provide useful fitness data. Features real-time tracking, activity history, and performance analytics.",
    technologies: [
      "React Native",
      "Spring Boot",
      "REST API",
      "Axios",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    github: null,
    demo: null,
    featured: true,
    category: ["Full Stack", "Mobile"],
    image: null,
  },
  {
    title: "ThogaKade POS",
    description:
      "A point-of-sale management system designed for customer, product, and order management. Features inventory tracking, transaction management, and reporting capabilities.",
    technologies: ["Java", "JavaFX", "Spring Boot", "MySQL", "JDBC"],
    github: null,
    demo: null,
    featured: false,
    category: ["Java", "Backend"],
    image: null,
  },
  {
    title: "Pharmacy Inventory",
    description:
      "Desktop inventory management application for managing medicines, suppliers, stock levels, expiry dates, sales, and low-stock alerts. Built with a layered architecture for maintainability.",
    technologies: [
      "JavaFX",
      "Java",
      "MySQL",
      "JDBC",
      "Layered Architecture",
    ],
    github: null,
    demo: null,
    featured: false,
    category: ["Java"],
    image: "/PInventory.png",
  },
  {
    title: "SecureLaw AI Data Filter",
    description:
      "An AI-powered privacy gateway concept designed to detect sensitive information within legal documents. Uses document parsing and LLM integration for intelligent data classification.",
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Apache Tika",
      "AI / LLM",
      "REST API",
    ],
    github: "https://github.com/denethSaputhanthri/PrimeSprint-T1-SecureLaw-Frontend",
    demo: "https://securelaw.vercel.app/login",
    featured: true,
    category: ["AI", "Backend", "Java"],
    image: "/secureLaw.png",
  },
];

export const projectFilters = [
  "All",
  "Frontend",
  "Backend",
  "Full Stack",
  "Java",
  "AI",
  "Mobile",
];
