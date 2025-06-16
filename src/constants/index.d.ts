declare module '../constants' {
  const ABOUT_TEXT: string;

  interface Experience {
    year: string;
    role: string;
    company: string;
    description: string;
    technologies: string[];
  }

  const EXPERIENCES: Experience[];

  interface Project {
    title: string;
    image: string; 
    description: string;
    technologies: string[];
  }

  const PROJECTS: Project[];

  interface ContactInfo {
    address: string;
    phoneNo: string;
    email: string;
  }

  const CONTACT: ContactInfo;

  export { ABOUT_TEXT, EXPERIENCES, PROJECTS, CONTACT };
}
