import React from "react";
import IMG1 from "../../public/assets/bookstore.png";
import IMG2 from "../../public/assets/todo.png";
import IMG3 from "../../public/assets/shelter.png";
import IMG4 from "../../public/assets/fake.png";
import IMG5 from "../../public/assets/news.png";
import IMG6 from "../../public/assets/math.png";

import machineLearning from "../../public/assets/machineLearning.png";
import selfLearningLang from "../../public/assets/selfLearningLang.png";
import travelCalendar from "../../public/assets/travelCalendar.png";

import styles from "./Portfolio.module.css";
import ShowMany from "../utilities/ShowMany";
import ShowOnce from "../utilities/ShowOnce";
import Image from "next/image";

type Props = {
  src?: string | undefined;
};

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Sound Event Detection",
      img: machineLearning,
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
      img: selfLearningLang,
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
      img: travelCalendar,
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
      // img: IMG3.src,
      description:
        "Fully responsive interactive website built based on Figma design",
      technologies: "JavaScript | CSS",
      link: "https://meri-mg.github.io/shelter/pages/main/index.html",
      github: "https://github.com/Meri-MG/shelter",
    },
    {
      id: 5,
      title: "MERN - GPS Expense Tracker",
      img: IMG5.src,
      description:
        "A mobile app allows users to track how much they have spent by visiting places, depends on how long they have stayed in shops",
      frontend: "React Native, Redux",
      backend: "NodeJS, Express",
      database: "MongoDB",
      link: "https://meri-mg.github.io/Unilab-world-news/",
      github: "https://github.com/Meri-MG/Unilab-world-news",
    },
    {
      id: 6,
      title: "Laundry Label helper",
      // img: IMG6.src,
      description: "Coming...",
      technologies: "JavaScript | Scss | Python",
      link: "https://lukinoo.github.io/math-resource/",
      github: "https://github.com/lukinoo/math-resource",
    },
  ];

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
        <ShowOnce mode={"animate__zoomInDown"} speed={"animate__fast"}>
          <div className={styles["portfolio__container"]}>
            {soloProjects.map((pro, index) => (
              <article
                className={styles["portfolio__item"]}
                key={pro.id}
                // style={{ animationDelay: `${index}s` }}
              >
                <div className={styles["portfolio__item-image"]}>
                  {/* <img src={pro.img} alt={pro.title} /> */}
                  <Image
                    src={pro.img}
                    alt={pro.title}
                    width={200}
                    height={200}
                  />
                </div>
                <div className={styles["portfolio__item-content"]}>
                  <h3>
                    <div className={styles["title"]}>{pro.title}</div>
                  </h3>
                  <p className={styles["description"]}>{pro.description}</p>
                  <p className={styles["techniques"]}>
                    {pro.frontend && (
                      <div className={styles["flex"]}>
                        <div className={styles["prefix"]}>Frontned</div>
                        <div>{pro.frontend}</div>
                      </div>
                    )}
                    {pro.backend && (
                      <div className={styles["flex"]}>
                        <div className={styles["prefix"]}>Backend</div>
                        <div>{pro.backend}</div>
                      </div>
                    )}
                    {pro.database && (
                      <div className={styles["flex"]}>
                        <div className={styles["prefix"]}>Database</div>
                        <div>{pro.database}</div>
                      </div>
                    )}
                  </p>
                </div>
                <div className={styles["portfolio__item-cta"]}>
                  <a
                    href={pro.github}
                    target="_blank"
                    className="btn"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={pro.link}
                    target="_blank"
                    className="btn btn-primary"
                    rel="noreferrer"
                  >
                    Visit Website
                  </a>
                </div>
              </article>
            ))}
          </div>
        </ShowOnce>
      </div>
    </section>
  );
};

export default Portfolio;
