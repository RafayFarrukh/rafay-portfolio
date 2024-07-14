// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: '#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1',
  firstName: 'Rafay',
  middleName: '',
  lastName: 'Farrukh',
  message: ' Passionate about changing the world with technology. ',
  icons: [
    {
      image: 'fa-github',
      url: 'https://github.com/RafayFarrukh',
    },
    {
      image: 'fa-facebook',
      url: 'https://www.facebook.com/rafay_farrukh/',
    },
    {
      image: 'fa-instagram',
      url: 'https://www.instagram.com/rafay_farrukh/',
    },
    {
      image: 'fa-linkedin',
      url: 'https://www.linkedin.com/in/rafay-farrukh-96532b201/',
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/RafayFarrukh.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: 'About Me',
  imageLink: require('../editable-stuff/profile.png'),
  imageSize: 375,
  message:
    'My name is Rafay Farrukh. I graduated in 2023 from Comsats University Islamabad with a degree in Computer Science. I am an experienced JavaScript developer with over one year of experience in web development. I am skilled in cross-technologies and data management, and proficient in ReactJS, Node.js, Express.js, MySQL, MongoDB, Next.js, and React Native. I stay up-to-date with the latest web development trends and maintain a positive attitude. In my free time, I enjoy working on open source projects.',
  resume:
    'https://docs.google.com/document/d/1GmBPuFDMEPS8cWumtQU0JpnBvvUEKxK3966IrMn64CA',
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: 'Recent Projects',
  gitHubUsername: 'RafayFarrukh', //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: 'Leadership',
  message:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.',
  images: [
    {
      img: require('../editable-stuff/rafay.png'),
      label: 'First slide label',
      paragraph: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
    {
      img: require('../editable-stuff/rafay.png'),
      label: 'Second slide label',
      paragraph: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
  ],
  imageSize: {
    width: '615',
    height: '450',
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: 'Skills',
  hardSkills: [
    { name: 'Javascript', value: 90 },
    { name: 'SQL', value: 90 },
    { name: 'React.js', value: 85 },
    { name: 'React-Native', value: 65 },
    { name: 'Node.js', value: 90 },
    { name: 'Express.js', value: 65 },
    { name: 'Aws Development', value: 55 },
  ],
  softSkills: [
    { name: 'Goal-Oriented', value: 80 },
    { name: 'Collaboration', value: 90 },
    { name: 'Positivity', value: 75 },
    { name: 'Adaptability', value: 85 },
    { name: 'Problem Solving', value: 75 },
    { name: 'Empathy', value: 90 },
    { name: 'Organization', value: 70 },
    { name: 'Creativity', value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: 'Get In Touch',
  message:
    'I am available for projects related to my skills mentioned above. Please contact me at',
  email: 'rafayfarrukh941@gmail.com',
};

const experiences = {
  show: false,
  heading: 'Experiences',
  data: [
    {
      role: 'Backend Developer', // Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'March 2023 – Present',
    },
    {
      role: 'Full Stack Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'Oct 2022 – Dev 2022',
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
