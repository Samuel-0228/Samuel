
export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Project {
  name: string;
  description: string;
  link: string;
  image: string;
}

export interface Contact {
  email: string;
  github: string;
}

export interface PortfolioData {
  about: string;
  skills: string[];
  education: Education[];
  certifications: string[];
  projects: Project[];
  contact: Contact;
}
