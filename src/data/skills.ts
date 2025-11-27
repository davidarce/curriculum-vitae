export interface SkillGroup {
    title: string;
    skills: { name: string; level: number }[];
}

export const skillsData: SkillGroup[] = [
    {
        title: "Backend",
        skills: [
            { name: "Java", level: 100 },
            { name: "Kotlin", level: 90 },
            { name: "Go", level: 90 },
            { name: "Node.js", level: 90 },
            { name: "Spring Boot 3.x", level: 90 },
            { name: "Spring Framework", level: 90 },
            { name: "Spring WebFlux", level: 90 },
            { name: "Spring Cloud", level: 90 },
            { name: "RESTful APIs", level: 100 },
            { name: "Software Testing", level: 100 }
        ]
    },
    {
        title: "Software Architecture",
        skills: [
            { name: "Clean Architectures", level: 100 },
            { name: "Event-driven Architectures", level: 100 },
            { name: "Microservices", level: 100 },
            { name: "Multithreading", level: 100 },
            { name: "S.O.L.I.D Principles", level: 100 },
            { name: "Design Patterns", level: 100 },
            { name: "DDD", level: 100 },
            { name: "API First Design", level: 100 }
        ]
    },
    {
        title: "Cloud Infrastructure",
        skills: [
            { name: "Cloud (AWS, GCP, Azure)", level: 90 },
            { name: "Docker", level: 100 },
            { name: "Kubernetes", level: 70 },
            { name: "DevOps (Jenkins, GIT)", level: 90 },
            { name: "Monitoring (Grafana)", level: 90 },
            { name: "NoSQL (MongoDB, DynamoDB)", level: 90 },
            { name: "SQL (PostgreSQL, MySQL)", level: 90 },
            { name: "Redis Cache", level: 90 },
            { name: "RabbitMQ / Kafka", level: 90 },
            { name: "ELK Stack", level: 90 }
        ]
    },
    {
        title: "Soft Skills",
        skills: [
            { name: "Agile (Scrum, Kanban)", level: 100 },
            { name: "Communication", level: 100 },
            { name: "Collaboration", level: 100 },
            { name: "Critical Thinking", level: 100 },
            { name: "Problem Solving", level: 100 },
            { name: "Leadership", level: 100 },
            { name: "Adaptability", level: 100 }
        ]
    }
];
