interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
  }
  
  interface Image {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  }
  
  export interface PageInfo extends SanityBody {
    _type?: "pageInfo";
    address?: string;
    backgroundInformation?: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePicture: Image;
  }
  
  export interface Technology extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
  }
  
  export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
  }
  
  export interface Project extends SanityBody {
    title: string;
    _type: "project";
    image: Image;
    linkToBuild: string;
    linkToGit: string;
    summary: string;
    technologies: Technology[];
  }
  
  export interface Experience extends SanityBody {
    _type: "experience";
    company: string;
    companyImage: Image;
    DateStarted: date;
    DateEnded: date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
  }
  
  export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
  }


  type PageInfoProps = {
    address: string;
    email: string;
    _rev: string;
    heroImage: {
      _type: Image;
      asset: {
        _ref: string;
        _type: string;
      }
      socials: Social[];
      _type: string;
      phoneNumber: string;
      _id: string;
      _updatedAt: string;
      name: string;
    

    }


  }