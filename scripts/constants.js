export const constants = {
  //Tags
  openSpanBoldTag: "<span class=\"bold\">",
  closeSpanTag: "</span>",
  openSpanTag: "<span>",
  openLabelBoldTag: "<label class=\"bold\">",
  closeLabelTag: "</label>",
  span: "span",
  tbody: "tbody",
  tr: "tr",
  th: "th",
  td: "td",
  scope: "scope",
  row: "row",
  class: "class",
  bold: "bold",
  for: "for",
  checked: "checked",
  button: "button",
  click: "click",
  html: "html",
  hidden: "hidden",
  style: "style",
  toggleContent: '[class="toggle-content"]',
  
  // Main content 
  mainContentId: '[id="main-content"]',

  // Header ids
  titleId: "title",
  metaTagId: '[name="apple-mobile-web-app-title"]',
  descriptionTagId: '[name="description"]',
  logoId: "header-logo",

  // Header navigation ids
  headerNavItemId: '[id="header-navigation-list"]',

  // Side navigation ids 
  sideNavigationId: '[id="navigation-side-menu"]',
  navItemId: '[id="navigation-list"]',
  footerLanguageSelectId: '[id="footer-language-select"]',

  // About us ids
  aboutMeSectionId: '[id="bio"]',
  aboutMeImageId: '[id="about-me-image"]',
  aboutMeTitleId: '[id="about-me-title"]',
  aboutMeBodyId: '[id="about-me-body"]',
  aboutMePersonNameId: '[id="about-me-name"]',
  aboutMePersonAgeId: '[id="about-me-age"]',
  aboutMePersonContactsId: '[id="about-me-contacts"]',
  aboutMeNavigationId: "#bio",

  //WorkExperience ids
  experienceSectionId: '[id="work-experience"]',
  experienceListTitleId: '[id="experiences-title"]',
  experienceContainerId: '[id="experience-wrapper"]',
  experienceTitleId: '[id="experience-title"]',
  experienceContentId: '[id="experience-content"]',
  experienceDetailsId: '[id="experience-details"]',
  workExperienceNavigationId: "#work-experience",

  //Education ids
  educationsSectionId: '[id="education"]',
  educationsTitleId: '[id="educations-title"]',
  educationsContentWrapperId: '[id="education-list"]',
  educationTitleId: '[id="education-title"]',
  educationDescriptionId: '[id="education-description"]',
  educationAttributes: '[id="education-attributes"]',
  educationNavigationId: "#education",

  //Courses and certificates ids
  coursesAndCertificatesNavigationId: "#courses-and-certificates",
  coursesAndCertificatesSectionId: '[id="courses-and-certificates-wrapper"]',
  coursesAndCertificatesTitleId: '[id="courses-and-certificates-title"]',
  coursesAndCertificatesSlidesWrapper: '[id="courses-and-certificates-slides-wrapper"]',

  //Projects ids
  projectsNavigationId: "#projects",
  projectsSectionId: '[id="projects-wrapper"]',
  projectsTitleId: '[id="projects-title"]',

  //Skills ids 
  skillsNavigationId: "#skills",
  skillsSectionId: '[id="skills-wrapper"]',
  technicalSkillInputId: 'technical-skill-',
  softSkillInputId: 'soft-skill-',

  //Courses and certificates
  slidesNameAttribute: '[name="slides"]',
  slideIdPrefix: 'slide-',
  slideImageIdPrefix: 'courses-image-',
  slideContentIdPrefix: 'courses-content-',

  //Languages ids
  languagesNavigationId: "#languages",
  languagesSectionId: '[id="languages-wrapper"]',

  //Contacts 
  contactsNavigationId: "#contacts",
  contactsSectionId: '[id="contact-section-container"]',
  phone: "phone",
  mail: "mail",
  link: "link",
  href: "href",
  telAttribute: "tel:",
  mailAttribute: "mailto:",
  target: "target",
  blank: "_blank",

  //Footer
  footerSectionId: '[id="footer-wrapper"]',

  //Spinner
  spinnerIdentifier: '[id="spinner"]',

  //Error
  errorSectionId: '[id="error"]',

  //Classes 
  displayFlex: 'flex',
  noScroll: 'no-scroll',

  //Language
  bulgarianLanguage: 'bg',
  englishLanguage: 'en',
  germanLanguage: 'de',

  // Cookies
  cookieTypes: {
    language: 'language'
  },

  // Home
  contentAssetOrigin: 'assets/content/',
  contentJsonFile: '-content.json',

  //Error
  httpError: 'HTTP error! Status: ',
  errorMessage: 'Something went wrong. Please try later.',
  yearCreated: 2024,
  
  //Cached
  cacheVersion: '1',
  cacheName: 'cv-site-cache-v',
  serviceWorker: 'serviceWorker',
  serviceWorkerLink: 'scripts/cache.js',
  install_event: 'install',
  fetch_event: 'fetch',
  activate_event: 'activate',
  cache_assets:  [
    '../index.html',
    // CSS Files
    '../styles/components.css',
    '../styles/definitions.css',
    '../styles/layout.css',
    '../styles/reset.css',
    '../styles/styles.css',
    '../styles/typography.css',

    // Component Styles
    '../styles/component-styles/aside.css',
    '../styles/component-styles/bio.css',
    '../styles/component-styles/contacts.css',
    '../styles/component-styles/courses-and-certificates.css',
    '../styles/component-styles/education.css',
    '../styles/component-styles/error.css',
    '../styles/component-styles/experience.css',
    '../styles/component-styles/footer.css',
    '../styles/component-styles/header.css',
    '../styles/component-styles/languages.css',
    '../styles/component-styles/projects.css',
    '../styles/component-styles/skills.css',
    '../styles/component-styles/spinner.css',
    //Scripts
    './aboutMe.js',
    './cache.js',
    './constants.js',
    './contacts.js',
    './content.js',
    './cookies.js',
    './courses.js',
    './education.js',
    './error.js',
    './footer.js',
    './languages.js',
    './main.js',
    './navigation.js',
    './projects.js',
    './skills.js',
    './spinner.js',
    './template.js',
    './workExperience.js',
    //Images
    `../assets/images/certificate_1.webp`,
    `../assets/images/certificate_2.webp`,
    `../assets/images/pexels-simon-robben-614810.webp`
  ]
}