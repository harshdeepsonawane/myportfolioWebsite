/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Harshdeep Sonawane",
  title: "Hi all, I'm Harshdeep",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with Java / Spring Boot/ JavaScript / Reactjs / Nodejs / and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1v1cdZYOyRL2djy1br_gaMBthZOwoIhL8/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/harshdeepsonawane",
  linkedin: "https://www.linkedin.com/in/harshdeep-sonawane-51649a1ba/",
  gmail: "harshdeep.sonawane@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@harshdeep.sonawane",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji(
      "⚡ Develop RESTful services and microservices for high-performance web applications"
    ),
    emoji("⚡ Integration of third party services such as AWS"),
    emoji(
      "⚡ Build scalable and secure Backend APIs using Java, Spring Boot, and Node.js"
    ),
    emoji(
      "⚡ Design and integrate MySQL / PostgreSQL databases with ORM tools like Hibernate and Sequelize"
    ),
    emoji(
      "⚡ Implement authentication, authorization, and session management (JWT/OAuth2)"
    ),
    emoji(
      "⚡ Containerize applications using Docker for consistent and portable deployment"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    // {
    //   skillName: "Spring Boot",
    //   iconifyClassname: "custom-spring-boot",
    //   customIconSrc: require("./assets/images/spring-original.svg")
    // },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Department Of Computer Science, Pune University",
      logo: require("./assets/images/pucsdLogo1.jpeg"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2021 - June 2023",
      desc: [
        "Specialized in Advanced Computing, Machine Learning,Distributed Systems,Java, Python, ReactJS, and Spring Boot.",
        // "Gained strong command over Java, Python, ReactJS, and Spring Boot through academic and project-based learning.",
        // "Focused on real-world applications of AI, web application development, and cloud-based systems."
      ],
      descBullets: [
        "Inventory Management System (Spring Boot + ReactJS + MySQL) Developed a complete CRUD-based inventory system as a capstone project, deployed locally and demonstrated during internal presentations.",
        "AI-Based Student Performance Predictor (Python, Scikit-learn) Designed a machine learning model to predict academic performance using student datasets and trained models like Decision Trees and Logistic Regression.",
        "Distributed File Sharing System (Java RMI) Created a peer-to-peer file sharing network simulating distributed systems concepts and fault tolerance."
      ]
    },
    {
      schoolName: "College Of Computer Science, Wakad, Pune University",
      logo: require("./assets/images/CCSLogo1.jpeg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2018 - June 2021",
      desc: [
        "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Networking, Operating Systems, Databases, Data Structure and Algorithm",
        // "Built strong foundational skills in Java, C, HTML/CSS, JavaScript, and MySQL."
      ],
      descBullets: [
        "Developed multiple academic projects, including a mini social networking site and a library management system.",
        "Participated in coding competitions and inter-college tech fests representing the department",
        "Collaborated on team-based software projects, gaining hands-on experience with Agile methodology and version control (Git).",
        "Attended workshops and seminars on cybersecurity and cloud computing to stay updated with industry trends.",
        "Demonstrated strong problem-solving and analytical thinking through lab assignments and real-world simulations."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },

    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Gsquare TechSystem",
      companylogo: require("./assets/images/GsquareLogo1.jpeg"),
      date: "August 2023 – Present",
      desc: "Worked on full-stack applications using Java, Spring Boot and Nodejs, Express  for backend and ReactJS for frontend",
      descBullets: [
        "Designed and implemented RESTful APIs to enable smooth communication between frontend and backend systems.",
        "Created dynamic and responsive user interfaces using ReactJS, Bootstrap, and Tailwind CSS.",
        "Wrote complex SQL queries and managed MySQL databases, ensuring data integrity and performance.",
        "Worked closely with cross-functional teams including designers and testers to deliver project requirements."
      ]
    }
    // {
    //   role: "Front-End Developer",
    //   company: "Quora",
    //   companylogo: require("./assets/images/quoraLogo.png"),
    //   date: "May 2017 – May 2018",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle:
    "PORTFOLIO WEBSITE AND SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Harshdeep_Sonawane_Logo.webp"),
      projectName: "Portfolio Website",
      projectDesc: "A Portfolio website of Full Stack Web Developer",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://harshdeep-sonawane.netlify.app"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Dynamic_CSV_To_MySQL.webp"),
      projectName: "Dynamic CSV to MySQL API",
      projectDesc:
        "Developed a RESTful Node.js API to dynamically create MySQL tables and insert records based on uploaded CSV files",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/harshdeepsonawane/Dynamic-CSV-to-MySQL-API.git"
        }
      ]
    },
    {
      image: require("./assets/images/Image_Steganography.webp"),
      projectName: "Image Steganography Application",
      projectDesc:
        "Created a Java-based application to hide and retrieve textual data in images",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/harshdeepsonawane/-Image-Steganography-Tool.git"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        " 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "http://harshdeep-sonawane.netlify.app"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 8698829534",
  email_address: "harshdeep.sonawane@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
