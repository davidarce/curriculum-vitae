export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  date: string;
  description?: string;
  responsibilities?: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    title: "Senior Backend Engineer III",
    company: "Capitole Consulting",
    location: "Remote",
    date: "September 2022 - Present",
    description: "Consultant Senior Backend Engineer",
    responsibilities: [
      "Design and implement REST APIs based on API-first principles.",
      "Develop reactive applications using Spring Boot and Spring WebFlux to achieve high throughput and low latency for real-time use cases.",
      "Build event-driven microservices, significantly improving the scalability, resilience, and flexibility of the platform.",
      "Utilize Docker and Kubernetes (K8s) for containerization and orchestration, ensuring efficient deployment and management of microservices in distributed environments.",
      "Leverage CI/CD pipelines to automate build, test, and deployment processes, enhancing productivity.",
      "Apply rigorous software testing practices using JUnit and Karate Test to ensure high-quality, reliable code and robust system behavior.",
      "Collaborate with cross-functional teams to scale systems, integrate APIs, and address performance bottlenecks."
    ]
  },
  {
    title: "Senior Backend Engineer",
    company: "Vortech",
    location: "Remote",
    date: "February 2022 - September 2022",
    description: "ING - Contingent Worker",
    responsibilities: [
      "Design, develop and test the code that will shape the different components of the application",
      "Ensure the requirements of functionality, quality and performance",
      "Deliver in Production a working software by giving the best use to technology and development practices",
      "Support Production by analysis and fixing any bugs that occurs"
    ]
  },
  {
    title: "Software Engineer III (Promoted) ⭐",
    company: "dLocal",
    location: "Remote",
    date: "May 2023 - April 2025",
    description: "All-in-one payment platform connecting global merchants to emerging markets in Latin America",
    responsibilities: [
      "Development and maintaining new generation of microservices within the architecture",
      "Implement defined requirements, with a combination of system architecture and programming skills",
      "Design solutions, code, test, and deploy them, while optimizing existing products",
      "Write clear, maintainable code that will perform on multiple platforms",
      "Solve integration problems, prototype and develop custom solutions"
    ]
  },
  {
    title: "Software Engineer II",
    company: "dLocal",
    location: "Remote",
    date: "August 2021 - April 2023",
    description: "All-in-one payment platform connecting global merchants to emerging markets in Latin America"
  },
  {
    title: "Senior Software Engineer",
    company: "Appgate",
    location: "Medellín, Colombia",
    date: "April 2021 - August 2021",
    description: "Secure Access Products & Services",
    responsibilities: [
      "Development and maintaining microservices used to manage internal products in the company",
      "Responsible of application security vulnerabilities",
      "Add improvements to our current processes."
    ]
  },
  {
    title: "Senior Java Developer",
    company: "Yuxi Global",
    location: "Medellín, Colombia",
    date: "October 2020 - April 2021",
    description: "Apex Supply Chain Technologies",
    responsibilities: [
      "Development and maintaining Java/Spring Microservices used to manage our online vending and locker systems.",
      "Responsible of application security vulnerabilities",
      "Add improvements to our current processes."
    ]
  },
  {
    title: "Senior Software Engineer",
    company: "Almundo",
    location: "Medellín, Colombia",
    date: "April 2018 - October 2020",
    description: "E-commerce platform",
    responsibilities: [
      "Development and implementation of components for the company",
      "Integrated with other components, solved problems across subsystems and products, to produce a final product",
      "DevOps",
      "A/B testing with Google Analytics",
      "Responsible of application security vulnerabilities",
      "Add improvements to our current processes."
    ]
  },
  {
    title: "Software Architect",
    company: "Ceiba Software",
    location: "Medellín, Colombia",
    date: "August 2016 - April 2018",
    responsibilities: [
      "Known in general the scope of the project, the vision and the general goals, as well as its release plan",
      "Develop software requeriments under the language of required programming and with policies, procedures, and guidelines established by the company for all products",
      "Promote and adequate communication and cooperation environment with the members of the project team",
      "Value the objectives of the project over personal or particular, supporting all team members in the solution of the difficulties"
    ]
  },
  {
    title: "Software Developer Advance",
    company: "Heinsohn Business Tecnology",
    location: "Armenia, Colombia",
    date: "June 2012 - August 2016",
    responsibilities: [
      "Develop software requirements under the language of required programing and with policies, procedures, and guidelines established by the company, for all products",
      "Develop software under the procedures and quality standards established",
      "Serve support in customer service"
    ]
  }
];
