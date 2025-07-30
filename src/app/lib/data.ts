
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const services: Service[] = [
  {
    id: 'project',
    title: 'Project Advisory Services',
    description: 'Managing your IT infrastructure can be challenging if you do not have enough experts in your company. Consequently, requesting IT consultancy services in Dubai can help you overcome the challenges you may face with technology. We provide managed IT services focused on maintaining and monitoring your IT systems to get rid of unnecessary stress and ensure everything runs smoothly.',
    image: '/services/project.png',
    link: '/services/project',
  },
  {
    id: 'construction',
    title: 'Construction Consultancy',
    description: 'Requesting IT consultancy services in Dubai can help you overcome the challenges you may face with technology. We provide managed IT services focused on maintaining and monitoring your IT systems to get rid of unnecessary stress and ensure everything runs smoothly.',
    image: '/services/construction.png',
    link: '/services/construction',
  },
 {
    id: 'it',
    title: 'IT Consultancy',
    description: 'Dubai can help you overcome the challenges you may face with technology. We provide managed IT services focused on maintaining and monitoring your IT systems to get rid of unnecessary stress and ensure everything runs smoothly.',
    image: '/services/it.png',
    link: '/services/it',
  },];

export const industries = [
  { id: 1, title: 'Healthcare', description: 'Solutions for medical businesses.' },
  { id: 2, title: 'Finance', description: 'Optimize financial operations.' },
];
