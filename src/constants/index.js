import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";


export const ABOUT_TEXT = `I'm a web application developer with solid experience in Laravel and web design. I work on both the backend and frontend, handling data flow and building clean, responsive interfaces. I also integrate third-party APIs to add features and improve user interaction.

`;

export const EXPERIENCES = [
  {
    year: "2022 - 2023",
    role: "Application Developer",
    company: "BINUS @Kemanggisan Angrek Campus",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Laravel", "Vite", "PHP"],
  },
  {
    year: "2024",
    role: "Freelance Designer",
    company: "Digital Trans-Asia",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Photoshop", "Excel"],
  },

];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["Laravel", "Bootstrap"],
  },
  {
    title: "Clinic Management App",
    image: project2,
    description:
      "An application designed to manage clinic operations, featuring tools for administration, medical record storage, employee and medication data management, and client transactions.",
    technologies: ["Laravel", "Vue", "Tailwind CSS", "Alpine JS"],
  },
  
 
];

export const CONTACT = {
  address: "Tangerang Selatan, Indonesia",
  email: "gregoriusgarth@outlook.com",
};
