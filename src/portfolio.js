
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";


const splashScreen = {
  enabled: true, 
  animation: splashAnimation,
  duration: 2000 
};

// Summary And Greeting Section

const illustration = {
  animated: true 
};

const greeting = {
  username: "Nadeem Ahmed",
  title: "Hey I'm Nadeem Ahmed",
  subTitle: emoji(
    "A passionate Full Stack Developer having an experience of building Web applications with / Java / Spring boot / JavaScript / Reactjs and other cool libraries and frameworks."
  ),
  resumeLink:
    "./src/containers/greeting/nadeemahmed.pdf", 
  displayGreeting: true
};  

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/nadeem072",
  linkedin: "https://www.linkedin.com/in/nadeem-ahmed/",
  gmail: "nadeemahmed0270@gmail.com",
  gitlab: "https://gitlab.com/nadeem072",
  stackoverflow: "https://stackoverflow.com/users/15361456/nadeem-ahmed",
  display: true 
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: " FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(" Develop highly interactive Front end / User Interfaces "),
    emoji("Develop Scalable web applications to transform and migrate the data"),
    emoji("Integration of multiple Tools like jenkins, SonarQube, ServiceNow")
  ],

  //using the fontawesome library to dialay the logos of the skills 

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true 
};

// Education Section

const educationInfo = {
  display: true, 
  schools: [
    {
      schoolName: "Kalpataru Institute of Technology",
      logo: require("./assets/images/vtulogo1.jpg"),
      subHeader: "Bachelor of Engineering ",
      duration: "June 2017 - August 2021",
      desc: "Specification : Electronics And Communication Engineering",
      descBullets: ["University : Visvesvaraya technological University",
                    "CGPA : 8.0",
                    "Place : Tiptur"
                   ]
    },
    {
      schoolName: "Govt Boys PU college",
      logo: require("./assets/images/kseab.jpg"),
      subHeader: "Pre University Education",
      duration: "June 2015- August 2017",
      desc: "Specification : PCMB",
      descBullets: ["Board : KSEAB",
                   "Percentage: 76.24",
                   "Place: Tiptur"]
    },
    {
      schoolName: "Stella Maris English High School",
      logo: require("./assets/images/sslcboard.jpg"),
      subHeader: "SSC",
      duration: "June 2005 - August 2015",
      desc: "",
      descBullets: ["Board : KSEAB",
                    "Percentage: 82.54",
                    "Place : Tiptur"
                   ]
    }
  ]
};

//skills for the profieciency 

const techStack = {
  viewSkillBars: true, 
  experience: [
    {
      Stack: "Frontend/Design", 
      progressPercentage: "60%" 
    },
    {
      Stack: "Backend ",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming",
      progressPercentage: "50%"
    }
  ],
  
};

// Work experience section

const workExperiences = {
  display: true, 
  experience: [
    {
      role: "Senior Systems Engineer",
      company: "INFOSYS ltd",
      companylogo: require("./assets/images/infosyslogo.jpg"),
      date: "Nov 2021 – Aug 2024",
      desc: "Contributed for multiple Projects for Insurance, Supply Chain and other sectors of the Industry with multiple Cross functional Teams Involving different Responsibilities and different Stake holders.",
      descBullets: [
        "Worked on projects in waterfall and agile methodology.",
        "Experience in identifying and fixing web application security vulnerabilities.",
        "Created webservices for consumption by external clients, and created reactive and responsive web UI pages "
      ]
    }
  
  ]
};

//github section

const openSource = {
  showGithubProfile: "true",
  display: true 
};

// projects

const bigProjects = {
  title: "Projects",
  subtitle: "SOME CLIENT THAT I HAVE BEEN PART OF THEIR TECH TEAM",
  projects: [
    {
      image: require("./assets/images/Allstate-Logo.png"),
      projectName: "Allstate ltd",
      projectDesc: "Part of the TG program for their new User expierience Application,TG Focuses on the taking the consumer online for Insurance related purchases enquiries and all other stuff related to the products they have provide.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.allstate.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/cmacgm.png"),
      projectName: "CMACGM",
      projectDesc: "Part of the Integration team for Enhancement in the ServiceNow Tool, for ease in business process",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.allstate.com/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true 
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements And Certifications  "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "ServiceNow Certified System Administrator",
      subtitle:
        "Completed Certification from ServiceNow for CSA",
      image: require("./assets/images/CSAahmed.png"),
      imageAlt: "CSA certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://partnerportal.service-now.com/partnerhome?id=verify_certificate"
        }
      ]
    },
    {
      title: "ServiceNow Certified Implementation Specialist - CSM",
      subtitle:
        "Completed Certification from ServiceNow for CIS-CSM",
      image: require("./assets/images/csmahmed.png"),
      imageAlt: "CIS-CSM certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://partnerportal.service-now.com/partnerhome?id=verify_certificate"
        }
      ]
    }
  ],
  display: true 
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true 
};

const contactInfo = {
  title: emoji("Reach Out to me!"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address:"nadeemahmed0270@gmail.com",
  display: true 
};


const isHireable = true;
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
  contactInfo,
  isHireable,
  resumeSection
};
