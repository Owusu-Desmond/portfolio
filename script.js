const hamburger = document.querySelector('.Menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');
// array of object for each project
const projects = [
  {
    imageSrc: './images/projects-screenshot/global-events-hompage-plus-login.jpg',
    screenShotVideo: './videos/global-events.mp4',
    title: 'Global Events',
    client: 'Global',
    role: 'Back End Dev',
    year: '2022',
    description: `
                Global Events is live-streaming website that allow users to see upcoming events,
                record and broadcast video simultaneously;
                accounts or sign- ups required for streamers.
                  `,
    tagsLanguages: ['HTML', 'CSS', 'JavaScript'],
    privateClasses: {
      reverseCardContent: '',
      seeProjectBtn: 'global-events-see-project-btn',
      modalContainer: 'global-events-tonic-modal-container',
      modalCloseBtn: 'global-events-tonic-modal-close-btn',
    },
    details: `
              Global Events is live-streaming website that allow users 
              to record and broadcast video simultaneously.
              Also allows users to broadcast live recordings of videos and 
              sound to others who have access to the stream Global Events Live video 
              streaming have fueled influencer marketing, entertainment, business marketing,
              and the way people interact over the internet. 
              Global Events is the best website for sharing and streaming live event in 2022.  
    `,
    liveLink: 'https://owusu-desmond.github.io/global-events/',
    sourceLink: 'https://github.com/Owusu-Desmond/global-events',
  },
  {
    imageSrc: './images/projects-screenshot/awesome-books-list-page.jpg',
    screenShotVideo: './videos/awesome-books.mp4',
    title: 'Awesome Books',
    client: 'Users',
    role: 'Front End Dev',
    year: '2022',
    description: `
                  Awesome Books is a website that allow users to create a 
                  book with title and author name and add 
                  to their books list on the page.
                  `,
    tagsLanguages: ['HTML', 'CSS', 'JavaScript'],
    privateClasses: {
      reverseCardContent: 'card-reverse',
      seeProjectBtn: 'multi-see-project-btn',
      modalContainer: 'multi-modal-container',
      modalCloseBtn: 'multi-modal-close-btn',
    },
    details: `
            Awesome Books is a website that allow users to create
            a book with title and author name and add to 
            their books list on the page. A user can add book and remove book.
            This website have the following sections <hr>
            <b>All Awesome Books(Home page)</b> : This section is where you can find the your added books.<hr>
            <b>Add Book</b> : This section is where you can add books.<hr>
            <b>Contact Information</b> : Users can find contact information if they have any questions.<hr>
          `,
    liveLink: 'https://owusu-desmond.github.io/awesome-books/',
    sourceLink: 'https://github.com/Owusu-Desmond/awesome-books/',
  },
  {
    imageSrc: './images/patupa.png',
    screenShotVideo: './videos/patupa.mp4',
    title: 'Patupa',
    client: 'Users',
    role: 'Full Stack Dev',
    year: '2022',
    description: `
                  Patupa is a simple and fast online shopping application that helps users can 
                  purchase with no cost of delivery and short time delivery.
                  `,
    tagsLanguages: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    privateClasses: {
      reverseCardContent: '',
      seeProjectBtn: 'patupa-see-projec-btn',
      modalContainer: 'patupa-modal-container',
      modalCloseBtn: 'patupa-modal-close-btn',
    },
    details: `
              Patupa is a simple and fast online shopping application that helps users can purchase 
              with no cost of delivery and short time delivery. Products are available in different 
              categories and users can also search for any products of their choice. Users can add products 
              to their cart and checkout anytime. 
              Products can be rated by users and top-rated products are displayed on the home page.
                `,
    liveLink: 'https://patupa.herokuapp.com/',
    sourceLink: 'http://github.com/Owusu-Desmond/patupa',
  },
  {
    imageSrc: './images/showbizz.png',
    screenShotVideo: './videos/showbizz.mp4',
    title: 'ShowBizz',
    client: 'Shows',
    role: 'Lead Developer',
    year: '2022',
    description: `
                  ShowBizz is a website that shows you all the latest Tv-shows and Movies, you can browse, 
                  like, and comment on your favorites.
                      `,
    tagsLanguages: ['HTML', 'CSS', 'JavaScript', 'webpack', 'API'],
    privateClasses: {
      reverseCardContent: 'card-reverse',
      seeProjectBtn: 'showbizz-see-projec-btn',
      modalContainer: 'showbizz-modal-container',
      modalCloseBtn: 'showbizz-modal-close-btn',
    },
    details: `
              ShowBizz is a website that shows you all the latest Tv-shows and Movies, you can browse, 
              like, and comment on your favorites. Users can get the details about a particular show and movie. 
              ShowBizz also has a search feature that allows you to search for a particular show or movie.
                `,
    liveLink: 'http://github.com/PinkMoon25/showbizz',
    sourceLink: 'https://github.com/Owusu-Desmond/showbizz',
  },
  {
    imageSrc: './images/showbizz.png',
    screenShotVideo: './videos/react-todo-app.mp4',
    title: "Today's Todo's",
    client: "Todo's",
    role: 'Lead Developer',
    year: '2022',
    description: `
                  This is a To-do List app, where you can add your tasks to do, and It will be saved 
                  so you will have access to your tasks anytime you come back to the app.
                      `,
    tagsLanguages: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Redux'],
    privateClasses: {
      reverseCardContent: 'card-reverse',
      seeProjectBtn: 'todos-see-projec-btn',
      modalContainer: 'todos-modal-container',
      modalCloseBtn: 'todos-modal-close-btn',
    },
    details: `
              This is a To-do List app, where you can add your tasks to do, and It will be saved 
              so you will have access to your tasks anytime you come back to the app. 
              You can add Tasks, mark them as complete, delete tasks, or delete all that are completed at once.
                `,
    liveLink: 'https://todays-todos.herokuapp.com/',
    sourceLink: 'https://github.com/Owusu-Desmond/todos',
  },
];
/*
    - loop through the array of object storing project data
    - show these projects on UI when page onload
*/
document.addEventListener('DOMContentLoaded', () => {
  const projectsContainer = document.querySelector('.work-section-container');
  let projectCardContent;
  let modalContent;
  let projectLangs;
  let projectCardContainer;
  let modalContainer;
  projects.sort(() => 0.5 - Math.random());
  projects.forEach((project) => {
    // loop through projects languages and display them
    projectLangs = project.tagsLanguages.map(
      (lang) => `<li class="card-skills-btn"><a href="#">${lang}</a></li>`,
    );
    projectCardContent = `
                      <div>
                      <video class="modal-video-container" autoplay loop muted>
                      <source src="${project.screenShotVideo}" type="video/mp4">
                    </video>
                      </div>
                          <div class='card-content ${project.privateClasses.reverseCardContent}'>
                          <h2 class="card-title">${project.title}</h2>
                          <div class="skills">
                              <span>${project.client}</span>
                              <span>${project.role}</span>
                              <span class="dot"></span>
                              <span>${project.year}</span>
                          </div>
                          <p class="card-text">${project.description}</p>
                          <ul class="card-skills-btns-container">
                              ${projectLangs.join('')}
                          <span class="dot"></span>
                          </ul>
                          <button type="button" 
                            class="see-project-btn ${project.privateClasses.seeProjectBtn}
                          ">
                            See project
                          </button>
                      </div>
                  `;
    modalContent = `
                  <div class="modal-content">
                      <div class="modal-header">
                        <div class="modal-close-btn-container">
                          <button 
                              class="modal-close-btn ${project.privateClasses.modalCloseBtn}">&times;
                          </button>
                        </div>
                        <h2 class="card-title">${project.title}</h2>
                        <div class="skills">
                            <span>${project.client}</span>
                            <span class="dot"></span>
                            <span>${project.role}</span>
                            <span class="dot"></span>
                            <span>${project.year}</span>
                        </div>
                      </div>
                      <div>
                        <video class="modal-video-container" autoplay loop muted>
                          <source src="${project.screenShotVideo}" type="video/mp4">
                        </video>
                      </div>
                      <div class="project-details-container">
                        <div class="project-content">
                            ${project.details}
                        </div>
                        <div>
                          <div>
                              <ul class="card-skills-btns-container">
                              ${projectLangs.join('')}
                              </ul>
                          </div>
                          <div class="modal-buttons-container">
                              <a href="${project.liveLink}" class='modal-button' type='button'>
                              See live 
                                <img src="./images/icons/see-live-icon.jpg" alt="see live icon"/> 
                              </a>
                              <a href="${project.sourceLink}" class='modal-button' type='button'>Source Code
                              <img src="./images/icons/see-source-code.jpg" alt="see source code icon"/>
                              </a>
                          </div>
                        </div>
                      </div>
                  </div>
              `;
    /*
        create an element with class for card
    */
    projectCardContainer = document.createElement('div');
    projectCardContainer.innerHTML = projectCardContent;
    // set element class card
    projectCardContainer.setAttribute('class', 'card');
    projectsContainer.appendChild(projectCardContainer);
    /*
        create an element with class for modal
    */
    modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalContent;
    // set element class and id attributes for modal
    modalContainer.setAttribute('class', `modal ${project.privateClasses.modalContainer}`);
    modalContainer.setAttribute('id', `${project.privateClasses.modalContainer}`);
    // append modal
    projectsContainer.appendChild(modalContainer);
  });
});
// show and hide modal
document.addEventListener('click', (event) => {
  let modalContainer;
  projects.forEach((project) => {
    modalContainer = document.getElementById(project.privateClasses.modalContainer);
    if (event.target.classList.contains(project.privateClasses.seeProjectBtn)) {
      modalContainer.classList.remove('hide-modal');
      modalContainer.classList.add('show-modal');
      document.body.style.overflowY = 'hidden';
    }
    if (event.target.classList.contains(project.privateClasses.modalCloseBtn)) {
      modalContainer.classList.remove('show-modal');
      modalContainer.classList.add('hide-modal');
      document.body.style.overflowY = 'scroll';
    }
  });
});
// When the menu is click
hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('visible');
  // disable scroll when mobile menu appear
  document.body.style.overflow = 'hidden';
});
// close nav links when the close button is click
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('visible');
  // enable scroll when mobile menu appear
  document.body.style.overflow = 'scroll';
});
mobileMenu.addEventListener('click', (event) => {
  if (event.target.classList.contains('link')) {
    // hide moblile menu
    mobileMenu.classList.remove('visible');
    // enable scroll when mobile menu appear
    document.body.style.overflow = 'scroll';
  }
});
// form Validation
document.querySelector('.form-submit-btn').addEventListener('click', (event) => {
  const email = document.getElementById('email').value;
  const error = document.querySelector('.email-error-message');
  const isLowerCase = (str) => str === str.toLowerCase();
  if (!isLowerCase(email)) {
    event.preventDefault();
    error.style.display = 'block';
    // hide error 5 seconds time so it can show up if the there is another error when click again
    setTimeout(() => {
      error.style.display = 'none';
    }, 5000);
  }
});
// store form data in the localStorage of the browser
const form = document.getElementById('contact-form');
const [username, email, message] = form.elements;

if (!localStorage.getItem('form-data')) {
  const data = { usernameValue: '', emailValue: '', messageValue: '' };
  localStorage.setItem('form-data', JSON.stringify(data));
}

const setDataInBrowser = (element, elementValue) => {
  element.addEventListener('change', () => {
    const retrivedData = JSON.parse(localStorage.getItem('form-data'));
    retrivedData[elementValue] = element.value;
    localStorage.setItem('form-data', JSON.stringify(retrivedData));
  });
};

const setDataInFormFields = (element, elementValue) => {
  element.value = elementValue;
};

document.addEventListener('DOMContentLoaded', () => {
  // set form fields data in the local storage of the browser.
  setDataInBrowser(username, 'usernameValue');
  setDataInBrowser(email, 'emailValue');
  setDataInBrowser(message, 'messageValue');
  // load form previous data from storage and set them in form field
  const data = JSON.parse(localStorage.getItem('form-data'));
  setDataInFormFields(username, data.usernameValue);
  setDataInFormFields(email, data.emailValue);
  setDataInFormFields(message, data.messageValue);
});