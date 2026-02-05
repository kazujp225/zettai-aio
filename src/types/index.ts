// Data types for the ZETTAI GEO Landing Page

export interface ResultCard {
  id: string;
  heading: string;
  image: string;
  logo: string;
  companyName: string;
  type: string;
}

export interface IssueCard {
  id: string;
  comment: string;
  image: string;
  imageMobile?: string;
}

export interface Feature {
  id: string;
  number: string;
  numberImage: string;
  title: string;
  image: string;
  description: string;
}

export interface FieldItem {
  image: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  heading: string;
  image: string;
  logo: string;
  companyName: string;
  type: string;
  link: string;
}

export interface Consultant {
  id: string;
  name: string;
  nameEn: string;
  image: string;
  description: string;
}

export interface SupportMethod {
  id: string;
  title: string;
  image: string;
  imageMobile: string;
  subHeading: string;
  description: string;
  recommendations: string[];
  caseLink: string;
  caseLinkText: string;
}

export interface FlowStep {
  id: string;
  stepImage: string;
  title: string;
  tabs: FlowTab[];
}

export interface FlowTab {
  id: string;
  label: string;
  title: string;
  image: string;
  description: string;
}

export interface ContractStep {
  stepImage: string;
  stepImageMobile: string;
  image: string;
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface CompanyInfo {
  label: string;
  value: string;
}
