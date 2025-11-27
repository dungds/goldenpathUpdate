
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
}
// src/lib/data.ts

export const banners = {
  hero: {
    src: "/uploads/hero-banner.png",
    alt: "Hero Banner",
    width: 1920,
    height: 1080,
  },
  about: {
    src: "/uploads/about-banner.jpg",
    alt: "About Us Banner",
    width: 1920,
    height: 800,
  },
  contact: {
    src: "/uploads/contact-banner.jpg",
    alt: "Contact Banner",
    width: 1920,
    height: 800,
  },
};

export const partners=[
  {id:1,image: '/partner/1.png',
    link: '',},
     {id:2,image: '/partner/2.png',
    link: '',},
     {id:3,image: '/partner/3.png',
    link: '',},
     {id:4,image: '/partner/4.png',
    link: '',},
     {id:5,image: '/partner/5.png',
    link: '',},
     {id:6,image: '/partner/6.png',
    link: '',},
     {id:7,image: '/partner/7.png',
    link: '',},
]
export const faqs=[
  
  {id:1,
    question: 'Is it essential to hire business consultants in Dubai in order to establish a business there?',
    answer: 'Is it essential to hire business consultants in Dubai in order to establish a business there?Is it essential to hire business consultants in Dubai in order to establish a business there?Is it essential to hire business consultants in Dubai in order to establish a business there?Is it essential to hire business consultants in Dubai in order to establish a business there?.'
  },
   {id:2,
    question: 'Can a Dubai consultancy company help me with compliancy in the region?',
    answer: 'Is it essential to hire business consultants in Dubai in order to establish a business there?Is it essential to hire business consultants in Dubai in order to establish a business there?Is it essential to hire business consultants in Dubai in order to establish a business there?Is it essential to hire business consultants in Dubai in order to establish a business there?.'
  },
   {
    id:3,
    question: 'Is it essential to hire business consultants in Dubai in order to establish a business there??',
    answer: 'Chúng tôi chuyên  Is it essential to hire business consultants in Dubai in order to establish a business there?Is it essential to hire business consultants in Dubai in order to establish a business there?Is it essential to hire business consultants in Dubai in order to establish a business there?Is it essential to hire business consultants in Dubai in order to establish a business there?.'
  },
   {
    id:4,
    question: 'Is it essential to hire business consultants in Dubai in order to establish a business there?',
    answer: 'Chúng tôi chuyên  Is it essential to hire business consultants in Dubai in order to establish a business there?Is it essential to hire business consultants in Dubai in order to establish a business there?Is it essential to hire business consultants in Dubai in order to establish a business there?Is it essential to hire business consultants in Dubai in order to establish a business there?.'
  },
   {
    id:5,
    question: 'Can a Dubai consultancy company help me with compliancy in the region??',
    answer: 'Chúng tôi chuyên  Is it essential to hire business consultants in Dubai in order to establish a business there?Is it essential to hire business consultants in Dubai in order to establish a business there?Is it essential to hire business consultants in Dubai in order to establish a business there?Is it essential to hire business consultants in Dubai in order to establish a business there?.'
  },
   {
    id:6,
    question: 'Is it essential to hire business consultants in Dubai in order to establish a business there?',
    answer: 'Chúng tôi chuyên  Is it essential to hire business consultants in Dubai in order to establish a business there?Is it essential to hire business consultants in Dubai in order to establish a business there?Is it essential to hire business consultants in Dubai in order to establish a business there?Is it essential to hire business consultants in Dubai in order to establish a business there?.'
  },
  ]
export const services: Service[] = [
  {
    id: '1',
    title: 'Project Advisory Services',
    description: 'Managing your IT infrastructure can be challenging if you do not have enough experts in your company. Consequently, requesting IT consultancy services in Dubai can help you overcome the challenges you may face with technology. We provide managed IT services focused on maintaining and monitoring your IT systems to get rid of unnecessary stress and ensure everything runs smoothly.',
    image: '/services/project.png',
    slug: '/services/project-advisory-services',
  },
  {
    id: '2',
    title: 'Construction Consultancy',
    description: 'Requesting IT consultancy services in Dubai can help you overcome the challenges you may face with technology. We provide managed IT services focused on maintaining and monitoring your IT systems to get rid of unnecessary stress and ensure everything runs smoothly.',
    image: '/services/construction.png',
    slug: '/services/construction-consultancy',
  },
 {
    id: '3',
    title: 'HR Consultancy',
    description: ' We provide managed IT services focused on maintaining and monitoring your IT systems to get rid of unnecessary stress and ensure everything runs smoothly.',
    image: '/services/hr.png',
    slug: '/services/hr-consultancy',
  },
 {
    id: '4',
    title: 'IT Consultancy',
    description: 'Dubai can help you overcome the challenges you may face with technology. We provide managed IT services focused on maintaining and monitoring your IT systems to get rid of unnecessary stress and ensure everything runs smoothly.',
    image: '/services/it.png',
    slug: '/services/it-consultancy',
  },
 {
    id: '5',
    title: 'Investment Advisory',
    description: 'IT systems to get rid of unnecessary stress and ensure everything runs smoothly. Dubai can help you overcome the challenges you may face with technology. We provide managed IT services focused on maintaining and monitoring your IT systems to get rid of unnecessary stress and ensure everything runs smoothly.',
    image: '/services/invest.png',
    slug: '/services/investment-advisory',
  },
 {
    id: '6',
    title: 'Business Setup Consultancy',
    description: 'We provide managed IT services focused on maintaining and monitoring your IT systems to get rid of unnecessary stress and ensure everything runs smoothly.',
    image: '/services/business.png',
    slug: '/services/business-setup-consultancy',
  },
 {
    id: '7',
    title: 'Securities analysis',
    description: 'Dubai can help you overcome the challenges you may face with technology. We provide managed IT services focused on maintaining and monitoring your IT systems to get rid of unnecessary stress and ensure everything runs smoothly.',
    image: '/services/security.png',
    slug: '/services/securities-analysis',
  },];

export const industries = [
  { id: 1, title: 'Hospitality & Real Estate', description: 'Ready to expand in Dubai and the UAE? Our expert advice helps you make the right d..Ready to expand in Dubai and the UAE? Our expert advice helps you make the right',
    image: '/industries/invest.png',
    slug:'hospitality-reale-state'
   },
  { id: 2, title: 'Fintech', description: 'Ready to expand in Dubai and the UAE? Our expert advice helps you make the right ',
        image: '/industries/project.png',
        slug:'fintech'

   },
      { id: 3, title: 'Engineering and Construction', description: 'Ready to expand in Dubai and the UAE? Our expert advice helps you make the right d..Ready to expand in Dubai and the UAE? Our expert advice helps you make the right d',
            image: '/industries/security.png',
            slug:'engineering-and-construction'

       },
  { id: 4, title: 'Information technology', description: 'Our expert advice helps you make the right d..Ready to expand in Dubai and the UAE? Our expert advice helps you make the right',    image: '/industries/construction.png',
    slug:'information-technology'
 },
  { id: 5, title: 'Goverment  Public', description: 'Our expert advice helps you make the right d..Ready to expand in Dubai and the UAE? Our expert advice helps you make the right',    image: '/industries/hr.png',
    slug:'goverment-public'
 },
  { id: 6, title: 'IT Security Infrastructure', description: 'Ready to expand in Dubai and the UAE? Our expert advice helps you make the right d..Ready to expand in Dubai and the UAE? Our expert advice helps you make the right',    image: '/industries/it.png',
    slug:'it-security-infrastructure'
 },

];
export const socialLink={
  facebook:
  {link:"facebook.com"},
  linkedin:
  {link:"linkedin.com"},
  instagram:
  {link:"instagram.com"},
}
