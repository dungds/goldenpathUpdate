export type About = {
 section1: {
    title: string;
    description: string;
  };
  section2: {
    title: string;
    image: string ;
    description: string;
    list: {
      title: string;
      description: string;
    }[];
  };
  section3: {
    title: string;
    image: string;
    description: string;
  };
};
