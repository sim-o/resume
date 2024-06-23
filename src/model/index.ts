export type Location = {
  city: string;
  postalCode: string;
  region: string;
};

export type Profile = {
  network: string;
  url: string;
  icon: string;
};

export type Basics = {
  name: string;
  label: string;
  picture: string;
  email: string;
  phone: string;
  summary: string;
  location: Location;
  profiles: Profile[];
};

export type Education = {
  startDate: string;
  endDate: string;
  area: string;
  studyType: string;
  institution: string;
};

export type Work = {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights?: string[];
};

export type Skill = {
  name: string;
  level: 'Expert' | 'Advanced';
};

export type Certificate = {
  name: string;
  date: string;
};

export type SkillGroup = {
  name: string;
  skills: Skill[];
};

export type Resume = {
  basics: Basics;
  education: Education[];
  certificates: Certificate[];
  work: Work[];
  skillGroups: SkillGroup[];
};
