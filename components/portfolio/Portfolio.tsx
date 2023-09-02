import React, { useEffect, useState } from "react";
import IMG1 from "../../public/assets/bookstore.png";
import IMG2 from "../../public/assets/todo.png";
import IMG3 from "../../public/assets/shelter.png";
import IMG4 from "../../public/assets/fake.png";
import IMG5 from "../../public/assets/news.png";
import IMG6 from "../../public/assets/math.png";

import ML from "../../public/assets/machineLearning.jpg";
import SL from "../../public/assets/selfLearningLang.jpg";
import TC from "../../public/assets/travelCalendar.jpg";
import EXAM from "../../public/assets/examination.png";
import GET from "../../public/assets/gps_ET.png";
import EC from "../../public/assets/Amazona.png";

import styles from "./Portfolio.module.css";
import ShowMany from "../utilities/ShowMany";
import ShowOnce from "../utilities/ShowOnce";
import Image from "next/image";

// export interface ILogo {
//   //   image: HTMLImageElement;
//   src: string | StaticImageData;
//   className?: string;
// }

interface Project {
  id: number;
  title: string;
  img: string | undefined;
  description: string;
  frontend: string;
  backend: string;
  link: string;
  github: string;
}

type State = {
  // Other state properties...
  [key: string]: boolean;
};

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Sound Event Detection",
      img: ML.src,
      description:
        "Integrating Machine Learning and Web Development, and it is like the Sound Event Detection of IPhone",

      frontend: "React, Redux, ChartJS",
      backend: "Python, FastAPI",
      link: "https://master--zesty-longma-6d7cc7.netlify.app/",
      github: "https://github.com/aufung1999/FYPWeb",
    },
    {
      id: 2,
      title: "Self-Learning Language",
      img: SL.src,
      description:
        "Users can record words they are not familiar with, and memorize them through some mini-games",
      frontend: "React, Redux",
      database: "Firebase",
      link: "https://master--poetic-mermaid-0421c2.netlify.app/",
      github: "https://github.com/aufung1999/LearnLanguageWebsite",
    },
    {
      id: 3,
      title: "Travel Calenther",
      img: TC.src,
      description:
        "This website is for people who always travel around the world, so that they can know the local weather and temperature.",
      technologies: "JavaScript | Webpack",
      frontend: "Next, Redux",
      database: "Firebase",
      link: "https://sage-biscochitos-c3e89c.netlify.app/weather",
      github: "https://github.com/aufung1999/travel-weather",
    },
    {
      id: 4,
      title: "Examination System",
      img: EXAM.src,
      description:
        "Fully responsive interactive website built based on Figma design",
      frontend: "HTML/Javascript",
      backend: "PHP",
      database: "MySql",
      link: "https://connectpolyu-my.sharepoint.com/:v:/r/personal/18050085d_connect_polyu_hk/Documents/Courses/2020.1/EIE4432/GroupProj/Group.mp4?csf=1&web=1&e=GMowBN",
      github: "https://github.com/Meri-MG/shelter",
    },
    {
      id: 5,
      title: "MERN - GPS Expense Tracker",
      img: GET.src,
      description:
        "A mobile app allows users to track how much they have spent by visiting places, depends on how long they have stayed in shops. ",
      frontend: "React Native, Redux",
      backend: "NodeJS, Express",
      database: "MongoDB",
      link: "https://master--marvelous-bombolone-fb8b6f.netlify.app/",
      github: "https://github.com/aufung1999/GPS_expenxetracker",
    },
    {
      id: 6,
      title: "E-commerce - Amazon clone",
      img: EC.src,
      description: "It is an Amazon clone which contains the admin and user",
      account: "admin@example.com",
      pw: "123456",
      frontend: "Nextjs, Redux",
      backend: "NodeJS",
      database: "MongoDB",
      link: "https://splendid-paprenjak-1ed3df.netlify.app/",
      github: "https://github.com/aufung1999/GPS_expenxetracker",
    },
  ];

  //array.map(each=>const [animateComponent${each.id}, setAnimateComponent${each.id}] = useState(false))
  const initialState = Object.fromEntries(
    soloProjects.map((item: Project | any) => [
      `animateComponent${JSON.stringify(item.id)}`,
      false,
    ])
  );

  const [animateStates, setAnimateStates] = useState<State>(initialState);

  useEffect(() => {
    let delay = 0;

    soloProjects.map((each: Project | any, i: number) => {
      setTimeout(
        () =>
          setAnimateStates((prevState: State) => ({
            ...prevState,
            [`animateComponent${each.id}`]: true,
          })),
        i * 1000
      );
      console.log(animateStates);
    });
  }, []);

  // const toggleAnimation = (itemId: string, shouldSwitch: boolean) => {
  //   setAnimateStates((prevState: State) => ({
  //     ...prevState,
  //     [`animateComponent${itemId}`]: shouldSwitch,
  //   }));
  // };

  return (
    <section id="portfolio" className="">
      <h5>
        <ShowMany
          mode_IN={"animate__zoomInDown"}
          mode_OUT={"animate__zoomOutDown"}
          speed={"animate__fast"}
        >
          My Recent Works
        </ShowMany>
      </h5>
      <h2>
        <ShowMany
          mode_IN={"animate__zoomInDown"}
          mode_OUT={"animate__zoomOutDown"}
          speed={"animate__fast"}
        >
          Portfolio
        </ShowMany>
      </h2>
      <div className="container">
        <div className={` ${styles["portfolio__container"]} w-full flex`}>
          {soloProjects.map((pro, index) => (
            <div
              className={`${styles["portfolio__item"]} group`}
              key={pro.id}
              // style={{ animationDelay: `${index}s` }}
            >
              <div
                className={` w-full h-32 ${styles["portfolio__item-image"]} `}
              >
                <img
                  className=" w-full h-full object-fit"
                  // className={` ${
                  //   pro.id == 7 || pro.id == 5 || pro.id == 3
                  //     ? styles["adjustment"]
                  //     : ""
                  // } ${pro.id == 6 ? styles["scale_up"] : ""} `}
                  src={pro.img}
                  alt={pro.title}
                />
              </div>
              <div
                className={` ${styles["portfolio__item-content"]} ${styles["hover-trigger"]}`}
              >
                <h3>
                  <div className={styles["title"]}>{pro.title}</div>
                </h3>
                <div className={` group-hover:block ${styles["description"]}`}>
                  {pro.description}
                  {pro.account && (
                    <div className=" text-sm font-semibold underline">
                      account: {pro.account}
                    </div>
                  )}
                  {pro.pw && (
                    <div className="text-sm font-semibold underline">
                      password: {pro.pw}
                    </div>
                  )}
                </div>
                <div
                  className={` group-hover:opacity-100  transition ${styles["techniques"]}  opacity-0 transition-opacity duration-500 ease-in-out `}
                >
                  <div>
                    {pro.frontend && (
                      <div className={styles["flex"]}>
                        <div className={styles["prefix"]}>Frontned</div>
                        <div>{pro.frontend}</div>
                      </div>
                    )}
                  </div>
                  <div>
                    {pro.backend && (
                      <div className={styles["flex"]}>
                        <div className={styles["prefix"]}>Backend</div>
                        <div>{pro.backend}</div>
                      </div>
                    )}
                  </div>
                  <div>
                    {pro.database && (
                      <div className={styles["flex"]}>
                        <div className={styles["prefix"]}>Database</div>
                        <div>{pro.database}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles["portfolio__item-cta"]}>
                {pro.github && (
                  <a
                    href={pro.github}
                    target="_blank"
                    className="btn"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {pro.link && (
                  <a
                    href={pro.link}
                    target="_blank"
                    className="btn btn-primary"
                    rel="noreferrer"
                  >
                    Visit Website
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
