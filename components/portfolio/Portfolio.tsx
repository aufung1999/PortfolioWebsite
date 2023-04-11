import React from "react";
import IMG1 from "../../public/assets/bookstore.png";
import IMG2 from "../../public/assets/todo.png";
import IMG3 from "../../public/assets/shelter.png";
import IMG4 from "../../public/assets/fake.png";
import IMG5 from "../../public/assets/news.png";
import IMG6 from "../../public/assets/math.png";

import styles from "./Portfolio.module.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Bookstore",
      img: IMG1.src,
      description:
        "BookStore app that allows users to store books and update progress",
      technologies: "React | Redux | Ruby on Rails",
      link: "https://melodic-boba-111583.netlify.app/",
      github: "https://github.com/Meri-MG/bookstore---react",
    },
    {
      id: 2,
      title: "FakeStore",
      img: IMG4.src,
      description:
        "FakeStore app that provides information about available products and their details",
      technologies: "React | Redux",
      link: "https://fakestore-metrics.netlify.app/",
      github: "https://github.com/Meri-MG/Fakestore---react",
    },
    {
      id: 3,
      title: "To-Do-App",
      img: IMG2.src,
      description: "User friendly app to plan your day and manage tasks",
      technologies: "JavaScript | Webpack",
      link: "https://meri-mg.github.io/To-Do-List/dist/",
      github: "https://github.com/Meri-MG/To-Do-List",
    },
    {
      id: 4,
      title: "Shelter",
      img: IMG3.src,
      description:
        "Fully responsive interactive website built based on Figma design",
      technologies: "JavaScript | CSS",
      link: "https://meri-mg.github.io/shelter/pages/main/index.html",
      github: "https://github.com/Meri-MG/shelter",
    },
    {
      id: 5,
      title: "World News",
      img: IMG5.src,
      description:
        "Fully responsive interactive website built based on Adobe XD design",
      technologies: "JavaScript | CSS",
      link: "https://meri-mg.github.io/Unilab-world-news/",
      github: "https://github.com/Meri-MG/Unilab-world-news",
    },
    {
      id: 6,
      title: "Math Resource",
      img: IMG6.src,
      description:
        "Real-world group project which is still in progress and will provide educational platform for future young developers",
      technologies: "JavaScript | Scss | Python",
      link: "https://lukinoo.github.io/math-resource/",
      github: "https://github.com/lukinoo/math-resource",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container">
        <div className={styles["portfolio__container"]}>
          {soloProjects.map((pro) => (
            <article className={styles["portfolio__item"]} key={pro.id}>
              <div className={styles["portfolio__item-image"]}>
                <img src={pro.img} alt={pro.title} />
              </div>
              <div className={styles["portfolio__item-content"]}>
                <h3 style={{ fontSize: 18}}>{pro.title}</h3>
                <p style={{ fontSize: "1.5rem"}}>{pro.description}</p>
                <p style={{ fontSize: 18}}>
                  {pro.technologies}
                </p>
              </div>
              <div
                className={styles["portfolio__item-cta"]}
                // style={{ borderWidth: "thick", borderColor: "blueviolet" }}
              >
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
      </div>
    </section>
  );
};

export default Portfolio;
