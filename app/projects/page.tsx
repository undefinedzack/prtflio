"use client";

import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";

import { FiLink, FiGithub } from "react-icons/fi";

// interface IProjects {
//   numOfProjects?: number;
// }

interface IProject {
  key: number;
  project: {
    name: string;
    link: string;
    description: string;
    date: string;
    image: string;
    liveAt?: string;
  };
}

const Projects = ({ numOfProjects }: any) => {
  return (
    <div className="flex flex-col mt-5">
      <div className="w-full flex">
        <p className="font-serif font-bold text-2xl lg:text-3xl">Projects</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectLinks
          .slice(0, numOfProjects || projectLinks.length)
          .map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }: IProject) => (
  <div className="mt-3">
    <Card>
      <Image className="p-2" src={project.image} alt={project.name} />

      <CardHeader className="pb-0 pt-2 px-5">
        <h5 className="font-semibold underline decoration-sky-500/30">
          {project.name}
        </h5>
      </CardHeader>
      <CardBody className="overflow-visible pb-3">
        <p className="mt-2">{project.description}</p>
        <ul className="flex mt-4">
          <li className="mr-2">
            <a
              className="text-blue-500 hover:text-blue-700"
              href={project.link}
            >
              <FiGithub />
            </a>
          </li>
          {project.liveAt && (
            <li>
              <Link
                className="text-blue-500 hover:text-blue-700"
                href={project.liveAt}
              >
                <FiLink />
              </Link>
            </li>
          )}
        </ul>
      </CardBody>
    </Card>
  </div>

  // <Card className="py-4">
  //   <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
  //     <h4 className="font-bold text-large">{project.name}</h4>
  //     <small className="text-default-500">12 Tracks</small>
  //   </CardHeader>
  //   <CardBody className="overflow-visible py-2">
  //     <Image
  //       alt="Card background"
  //       className="object-cover rounded-xl"
  //       src={project.image}
  //     />
  //     <p className="text-tiny uppercase font-bold">{project.description}</p>
  //   </CardBody>
  // </Card>
);

const projectLinks = [
  {
    name: "Blogger",
    link: "https://github.com/undefinedzack/Blogger",
    description: "My Blogging site, everything I write about end up here.",
    date: "June 2021",
    image:
      "https://github.com/undefinedzack/Blogger/blob/master/images/one.jpg?raw=true",
    liveAt: "https://blogger-undefinedzack.vercel.app/",
  },
  {
    name: "A2OJ Ladders",
    link: "https://github.com/undefinedzack/A2OJ-Ladders",
    date: "January 2021",
    description:
      "A React App to track number of questions solved from a2oj.com ladders.",
    image:
      "https://github.com/undefinedzack/A2OJ-Ladders/raw/master/images/a2oj3.jpg",
    liveAt: "https://a2-oj-ladders.vercel.app/",
  },
  {
    name: "A2OJ Ladders React Native",
    link: "https://github.com/undefinedzack/A2OJ-Ladders-React-Native",
    date: "May 2021",
    description:
      "A React App to track number of questions solved from a2oj.com ladders, this time in your pockets!",
    image:
      "https://github.com/undefinedzack/A2OJ-Ladders-React-Native/blob/main/images/1.jpg?raw=true",
    liveAt:
      "https://github.com/undefinedzack/A2OJ-Ladders-React-Native/releases/tag/1.0.0",
  },
  {
    name: "Car Rental Database Management UI",
    link: "https://github.com/undefinedzack/car_rental.project",
    date: "December 2020",
    description:
      "A Web App for managing a Car Rental database through various query filters, graphs and charts. Made with Django.",
    image:
      "https://github.com/undefinedzack/car_rental.project/blob/master/Output/homepage.png?raw=true",
    liveAt: "https://hidden-garden-61757.herokuapp.com/",
  },
  {
    name: "To-Do in Django",
    link: "https://github.com/undefinedzack/TUTORIAL-how-to-create-a-todo-app-in-Django",
    date: "November 2020",
    description: "A tutorial to create a To-Do app in Django.",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1608114198326/tOU3-U6XR.png",
    liveAt: "https://salty-peak-80429.herokuapp.com/",
  },
  {
    name: "Full Stack Personal Diary",
    link: "https://github.com/undefinedzack/project-Diary",
    date: "December 2020",
    description:
      "Diary where you can make daily writing's made with React for frontend and Django for backend.",
    image:
      "https://github.com/undefinedzack/project-Diary/blob/master/Images/2.jpg?raw=true",
    liveAt: "https://keen-newton-5799e3.netlify.app/",
  },
  {
    name: "Stock Market Predictor",
    link: "https://github.com/undefinedzack/stock-market-backend",
    date: "June 2021",
    description:
      "A Web app to predict stock market based on market history and tweets sentiment from websites like Twitter and Stocktwits",
    image:
      "https://github.com/undefinedzack/stock-market-backend/blob/master/screencapture-127-0-0-1-8000-2021-04-28-20_47_32.png?raw=true",
  },
  {
    name: "News Reader #REDUX",
    link: "https://github.com/undefinedzack/NEWS_REDUX_REACT",
    date: "April 2021",
    description:
      "A web application for reading News from various sources, making use of newsapi.org, made completely using Redux",
    image:
      "https://github.com/undefinedzack/NEWS_REDUX_REACT/blob/master/images/2.jpg?raw=true",
  },
  {
    name: "React Static and Responsive Landing Page",
    link: "https://github.com/undefinedzack/react-static-website",
    date: "March 2021",
    description: "A simple React web application made responsive",
    image:
      "https://github.com/undefinedzack/react-static-website/blob/master/Images/1.jpg?raw=true",
    liveAt: "http://react-static-website-undefinedzack.vercel.app/",
  },
  {
    name: "Admin/Users Permissions and Roles management Django app",
    link: "https://github.com/undefinedzack/Django-User-Roles-and-Permissions",
    date: "March 2021",
    description:
      "A Django app made with Bootstrap for styling for managing Admin/User permissions and roles",
    image:
      "https://github.com/undefinedzack/Django-User-Roles-and-Permissions/blob/master/images/1.jpg?raw=true",
  },
];

export default Projects;
