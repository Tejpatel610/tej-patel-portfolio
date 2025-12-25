// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';


// Education Section Logo's

import algonquin from './assets/education_logo/algonquin.jpg';
import gtu from './assets/education_logo/gtu.jpg';

// Project Section Logo's
import Projectlogo1 from './assets/work_logo/Projectlogo1.png';
import more_projects from './assets/work_logo/more_projects.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      img: algonquin,
      school: "Algonquin College, Ottawa",
      date: "May 2023 - February 2025",
      grade: "3.48 CGPA out of 4.0",
      desc: "I completed my Diploma in Computer Programming at Algonquin College, Ottawa, where I developed a solid foundation in programming, software development, and core computer science principles. During my studies, I completed coursework in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. In addition to academics, I actively participated in workshops and technical events, which helped strengthen my practical skills and industry awareness",
      degree: "Diploma in Computer Programming",
    },
    {
      id: 1,
      img: gtu,
      school: "Gujarat Technological University (GTU), India",
      date: "Jan 2020 - Jan 2023", 
      grade: "8.27 CGPA out of 10.0",
      desc: "I completed my Diploma in Information Technology from Gujarat Technological University (GTU), India, where I built a strong foundation in core computing concepts. My studies covered subjects such as Programming Fundamentals, Data Structures, Database Management Systems, Web Technologies, and Computer Networks. During the program, I worked on academic projects that helped me apply theoretical knowledge to practical, real-world problem solving and strengthened my technical and analytical skills.",
      degree: "Diploma In Information Technology",
    }
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Web Interface Builder",
      description:
        "Build clean, scalable, and interactive web interfaces using React, Tailwind CSS, and Spline. My focus is on creating modern user experiences that feel intuitive, dynamic, and visually engaging.",
      image: Projectlogo1,
      tags: ["HTML", " Tailwind CSS", "JavaScript", "React JS", "Spline"],
      github: "https://github.com/Tejpatel610/Projects",
      webapp: "https://tejpatel.vercel.app/",
    },
    {
      id: 1,
      // title: "Movie Recommendation App",
      description:
        "Working on more projects. Stay tuned for updates!",
      image: more_projects,
      tags: [],
    },
    
  ];  