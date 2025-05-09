import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
 /* {
    title: "Backend Developer",
    icon: backend,
  }*/,
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
 /* {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  }*/,
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
 /* {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  }*/,
];

const experiences = [
{
    title: "React.js Developer",
    company_name: "Redeemers University",
    //icon: starbucks,
    iconBg: "#383E56",
    date: "March 2023 - April 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Designed and built responsive UIs using React, Tailwind CSS, and JavaScript for class projects and prototypes.",
      "Developed a functional banking website and interactive quiz app as part of web development assignments.",
      "Collaborated with classmates using Git and GitHub to manage codebases and version control in group coursework.",
    ],
  },
  /*{
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }*/,
  {
    title: "Web Developer",
    company_name:"Redeemers University",
   // icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2024 - Dec 2024",
    points: [
      "Created several real-world clone projects (e.g. 3D portfolio site, modern landing pages) to demonstrate React component structuring and responsive design.",
      "Integrated animations using Framer Motion and 3D models via Three.js for enhanced UX.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Practiced API integration, routing, and form handling to simulate real-client features.",
    ],
  },
  /*{
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }*/,
];

const testimonials = [
  {
    testimonial:
      "David's frontend skills brought our department's vision to life — clean, fast, and functional.",
    //name: "Dr. Mrs. Kayode Aderonke Anthonia",
    designation: "Lect",
    company: "Redeemers University"
    //image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Frun.edu.ng%2Ffaculty-of-natural-sciences%2Fcomputer-science%2F&psig=AOvVaw0a649E5beejn7bVPmFouNh&ust=1746701581877000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODEw9yYkY0DFQAAAAAdAAAAABAE",
  },
  {
    testimonial:
    "Impressed by the UI precision and responsiveness. David is a problem-solver.",
   // name: "Dr. Bosede Oguntunde",
    designation: "Lecturer",
    company: "Redeemers University",
   // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
 "His attention to detail and component structure stood out in the final review.",
    //name: "Dr. Odim Mba Obasi",
    designation: "Lecturer",
    company: "Redeemers University",
   // image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];




const projects = [
  {
    name: "EnoBlog",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "clerk",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Brainwave",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    /*  {
        name: "restapi",
        color: "green-text-gradient",
      }*/,
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "HooBank",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
     /* {
        name: "supabase",
        color: "green-text-gradient",
      }*/,
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
