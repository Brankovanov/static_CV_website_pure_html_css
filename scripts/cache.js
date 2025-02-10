const VERSION = '1';
const CACHE_NAME = `cv-site-cache-v${VERSION}`;
const SERVICE_WORKER = 'serviceWorker';
const SERVICE_WORKER_LINK = 'scripts/cache.js';
const INSTALL_EVENT = 'install';
const FETCH_EVENT = 'fetch';
const ACTIVATE_EVENT = 'activate';
const ASSETS =
  [
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
  ];

manageCache();
function manageCache() {
  setServiceWorker();
  // Install Service Worker and Cache Assets
  installAssets();
  // Fetch Event - Serve from Cache if Available
  fetchAssets();
  // Activate Event - Clean Old Caches
  activateAssets();
}

function activateAssets() {
  self.addEventListener(ACTIVATE_EVENT, event => {
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(name => name !== CACHE_NAME)
            .map(name => caches.delete(name))
        );
      }).catch((error) => {
        showError(error)
      })
    )
  });
}

function fetchAssets() {
  self.addEventListener(FETCH_EVENT, event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      }).catch((error) => {
        showError(error)
      })
    );
  });
}

function installAssets() {
  self.addEventListener(INSTALL_EVENT, event => {
    event.waitUntil(
      caches.open(CACHE_NAME).then(cache => {
        return cache.addAll(ASSETS);
      }).catch((error) => {
        showError(error)
      })
    );
  });
}

function setServiceWorker() {
  if (SERVICE_WORKER in navigator) {
    navigator.serviceWorker.register(SERVICE_WORKER_LINK).catch(err => showError(err));
  }
}

function showError(error) {
  document.body.classList.add(constants.noScroll);
  let errorElement = document.querySelector(constants.errorSectionId);
  let errorMessage  = errorElement.children[0];
  errorMessage.innerHTML = constants.errorMessage;
 
  let technicalMessage = errorElement.children[1];
  technicalMessage.innerHTML = error;
 
  errorElement.classList.add(constants.displayFlex);
}