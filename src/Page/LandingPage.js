import React from "react";

import twitterLogo from "../Image/SocialNetwork/Twitter.svg";
import githubLogo from "../Image/SocialNetwork/Github.svg";
import linkedInLogo from "../Image/SocialNetwork/LinkedIn.svg";
import facebookLogo from "../Image/SocialNetwork/Facebook.svg";
import instagramLogo from "../Image/SocialNetwork/Instagram.svg";
import cvLogo from "../Image/SocialNetwork/CV.svg";

// import AmazingGamesLogo from "../Image/Logos/AmazingGamesLogo.png";
// import BluebaymobLogo from "../Image/Logos/BLUEBAYMOBLogo.png";
// import BoomwareLogo from "../Image/Logos/BoomwareLogo.png";
// import InartLogo from "../Image/Logos/InartLogo.png";
// import DroptekLogo from "../Image/Logos/DroptekLogo.svg";

import WebCardList from "../Components/ComponentLists/WebCardList";
import GameCardList from "../Components/ComponentLists/GameCardList";
import PublishedCardList from "../Components/ComponentLists/PublishedCardList";

class LandingPage extends React.Component {
  webCardData = {
    data: [
      {
        id: 1,
        url: "https://codepen.io/burningal15/pen/zYxzoOa",
        imageUrl: "https://i.imgur.com/ORL73yJ.png",
        title: "Tribute Page",
      },
      {
        id: 2,
        url: "https://codepen.io/burningal15/pen/mdywxVm",
        imageUrl: "https://i.imgur.com/zUwJ6lP.png",
        title: "Product Landing Page",
      },
      {
        id: 3,
        url: "https://codepen.io/burningal15/pen/gObRoOB",
        imageUrl: "https://i.imgur.com/A2FiOHe.png",
        title: "Survey Form",
      },
      {
        id: 4,
        url: "https://codepen.io/burningal15/pen/mdypbpa",
        imageUrl: "https://i.imgur.com/aZlGlqC.png",
        title: "Technical Documentation",
      },
      {
        id: 5,
        ur: "https://codepen.io/burningal15/pen/JjoMjMz",
        imageUrl: "https://i.imgur.com/pJuXKpy.png",
        title: "Music App",
      },
      {
        id: 6,
        url: "https://codepen.io/burningal15/pen/povpoWd",
        imageUrl: "https://i.imgur.com/rm4v07F.png",
        title: "Layout: Love Old Times",
      },
    ],
  };

  gameCardData = {
    data: [
      {
        id: 1,
        url: "https://www.youtube.com/embed/1dl4aTZT5GU",
        title: "Pizza Master",
      },
      {
        id: 2,
        url: "https://www.youtube.com/embed/wo1B7hiIZ74",
        title: "Lazy Love",
      },
      {
        id: 3,
        url: "https://www.youtube.com/embed/rZJOCW_fjQY",
        title: "Safari Rescue",
      },
      {
        id: 4,
        url: "https://www.youtube.com/embed/HVlr5NpkPJk",
        title: "Billiards Game",
      },
      {
        id: 5,
        url: "https://www.youtube.com/embed/51BqSTw-HY8",
        title: "Silent Scream",
      },
      {
        id: 6,
        url: "https://www.youtube.com/embed/XmtUJ3wQnsk",
        title: "Sound Visualizer",
      },
    ],
  };

  workCardData = {
    data: [
      {
        id: 1,
        job: "Jr. Game Programmer",
        place: "Boomware Technologies",
        time: "April 2018 - January 2019",
        // jobDescription:"Program 2d videogame mechanics for mobile games",
        descriptionCardData: {
          data: [
            {
              descriptionID: 1,
              description: "Program a prototype of a 3d billiards game.",
              url: "",
            },
            {
              descriptionID: 2,
              description: "Program the shopping system of Cinema Panic 2",
              url: "https://bit.ly/39C8oxn",
            },
          ],
        },
      },
      {
        id: 2,
        job: "Gameplay Programmer",
        place: "BlueBayMob LLC.",
        time: "February 2019 - May 2019",
        // jobDescription:"Program 2d videogame mechanics for mobile games",
        descriptionCardData: {
          data: [
            {
              descriptionID: 1,
              description: "Program 'Cube Rush'.",
              url: "",
            },
            {
              descriptionID: 2,
              description: "Program 'Dash Ball'.",
              url: "",
            },
          ],
        },
      },
      {
        id: 3,
        job: "Game Programmer",
        place: "Amazing Games Studio",
        time: "May 2019 - June 2019",
        descriptionCardData: {
          data: [
            {
              descriptionID: 1,
              description:
                "Program some minigames in 'The Absolute Value of Acorns', an educative game where you teach the theory of positive and negative numbers and put it into practice in the minigames.",
              url: "https://bit.ly/2UHFmIH",
            },
          ],
        },
      },
      {
        id: 4,
        job: "Gameplay Programmer and Game Designer",
        place: "Insomnia Art Studio",
        time: "January 2019 - Present",
        descriptionCardData: {
          data: [
            {
              descriptionID: 1,
              description:
                "Program and design Pig Year Food Fight, a 2d mobile party game for two players in one phone",
              url: "https://bit.ly/2RbLre7",
            },
            {
              descriptionID: 2,
              description:
                "Program and design Lazy Love, this video game participated in the Lima Game Fest in the student's section",
              url: "https://bit.ly/3bLnXEv",
            },
            {
              descriptionID: 3,
              description:
                "Design 4 minigames and program 2 of them in 'Pizza Master', an educative game where you teach the theory of fractions and put it into practice in the minigames.",
              url: "https://bit.ly/2UYN8Nb",
            },
          ],
        },
      },
      {
        id: 5,
        job: "UI and Gameplay Programmer",
        place: "Droptek",
        time: "July 2019 - January 2020",
        descriptionCardData: {
          data: [
            {
              descriptionID: 1,
              description:
                "Program and design a froggy videolottery game for their own platform",
              url: "",
            },
            {
              descriptionID: 2,
              description:
                "Program and design a roulette videolottery game for their own platform",
              url: "",
            },
            {
              descriptionID: 3,
              description:
                "                                                                      ",
              url: "",
            },
          ],
        },
      },
      {
        id: 6,
        job: "Gameplay Programmer / Game Designer",
        place: "Vahn Khatchadourian",
        time: "September 2019 - February 2020",
        descriptionCardData: {
          data: [
            {
              descriptionID: 1,
              description:
                "Program and design Safari Rescue, a bubble shooter 2d mobile game",
              url: "https://linktr.ee/aldhairvera",
            },
            {
              descriptionID: 2,
              description:
                "                                                                      ",
              url: "",
            },
            {
              descriptionID: 3,
              description:
                "                                                                      ",
              url: "",
            },
          ],
        },
      },
      {
        id: 7,
        job: "VR Developer",
        place: "PHVA Perú",
        time: "January 2020 -  Now",
        descriptionCardData: {
          data: [
            {
              descriptionID: 1,
              description:
                "Make simulations of possible danger situations for industrial business, like factory fires and how a worker should try to fight the fire using extinguishers or run if the fire goes out of control.",
              url: "",
            },
          ],
        },
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <section className="welcome-section" id="welcome-section">
          {/* <p className="welcome-section-subtitle">Welcome! I am</p> */}

          <h1 className="welcome-section-title">
            Aldhair Vera <br /> Camacho
          </h1>
          <p className="welcome-section-subtitle">
            Game Developer and Front-End Developer
          </p>

          <p className="welcome-section-about">
            Computer Science Student
            <br />
            Unity3D / C# / VR
            <br />
            HTML / CSS / JS / React JS / Vue JS
          </p>

          {/* <form className="subscribe" action="mailto:aldhairvera15@gmail.com" method="post">
            <input
              className="email"
              name="email"
              placeholder="Email Adress"
              type="email"
              aria-required="true"
              autoComplete="off"
              required
            />

            <input
              className="subscribe-button"
              name="subscribe-button"
              type="submit"
              value="Submit"
            />
          </form> */}

          <h3 className="welcome-section-element">Find me on</h3>
          <div className="welcome-section-socialContainer">
            <a
              href="https://twitter.com/AldhairVeraDev"
              target="_blank"
              rel="noopener noreferrer"
              className="social-network"
            >
              <img
                src={twitterLogo}
                width="125"
                alt="twitter icon"
                className="social-network-content"
              />
            </a>
            <a
              href="https://github.com/BurningAl15"
              target="_blank"
              rel="noopener noreferrer"
              className="social-network"
            >
              <img
                src={githubLogo}
                width="125"
                alt="twitter icon"
                className="social-network-content"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/aldhairvera/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-network"
            >
              <img
                src={linkedInLogo}
                width="125"
                alt="twitter icon"
                className="social-network-content"
              />
            </a>
            <a
              href="https://www.facebook.com/aldhair.Vera"
              target="_blank"
              rel="noopener noreferrer"
              className="social-network"
            >
              <img
                src={facebookLogo}
                width="125"
                alt="twitter icon"
                className="social-network-content"
              />
            </a>
            <a
              href="https://www.instagram.com/al_vera15/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-network"
            >
              <img
                src={instagramLogo}
                width="125"
                alt="twitter icon"
                className="social-network-content"
              />
            </a>
            <a
              href="https://drive.google.com/open?id=1NdD8mh6Idrd5HK1vUjvgmL5uG6MM4L1V"
              target="_blank"
              rel="noopener noreferrer"
              className="social-network"
            >
              <img
                src={cvLogo}
                width="125"
                alt="twitter icon"
                className="social-network-content"
              />
            </a>
          </div>
        </section>

        <section className="projects-section-game" id="projects-games">
          <h2 className="projects-section-header-game">
            Some of my videogame projects
          </h2>
          <GameCardList gameCardElements={this.gameCardData.data} />
        </section>

        <section className="published-projects-section" id="published-projects">
          <h2 className="published-header">Some of my work experience</h2>

          <PublishedCardList publishedCardElements={this.workCardData.data} />
        </section>

        <section className="projects-section" id="projects-web">
          <h2 className="projects-section-header">Some of my web projects</h2>

          <WebCardList webCardElements={this.webCardData.data} />
        </section>

        <section className="about-me" id="about-me">
          <h2 className="about-me-title">ABOUT ME</h2>
          <p className="about-me-content">
            A passionate computer scientist who loves game development.
          </p>
          <p className="about-me-content">
            I've found motivation for programming because i know that you can
            teach a lot with videogames, apps and blogging about my experiences.
          </p>
          <p className="about-me-content">
            Also love the visual feedback from videogame programming and
            front-end development because you can see quickly what i am doing.
          </p>

          <p className="about-me-content">
            I enjoy learning about new technologies in my free time and have
            passion in teaching and share my experiences with experienced or
            newbie developers too.
          </p>

          <p className="about-me-content">
            I consider myself a never ending learner, love to work in
            multidisciplinary teams because i know i can learn things from every
            person i met and apply what i learn in my projects.
          </p>

          <p className="about-me-content mark-red top-margin big-text">
            "Programming gives pleasure to creative people"
          </p>
        </section>

        <section className="contact-me" id="contact-me">
          <h2 className="contact-me-title">CONTACT</h2>
          <p className="contact-me-content">
            Feel free to email me to provide feedback or if you have any
            question about my projects.
          </p>
          <a href="mailto:aldhairvera15@gmail.com" className="my-mail">
            <p className="my-mail">aldhairvera15@gmail.com</p>
          </a>
        </section>
      </React.Fragment>
    );
  }
}

export default LandingPage;
