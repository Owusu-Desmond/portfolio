const hamburger = document.querySelector('.Menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');
// array of object for each project
const projects = [
  {
    imageSrc: './images/projects-screenshot/global-events-hompage-plus-login.jpg',
    title: 'Global Events',
    client: 'Global',
    counter: '',
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
      seeProjectBtn: 'tonic-see-project-btn',
      modalContainer: 'tonic-modal-container',
      modalCloseBtn: 'tonic-modal-close-btn',
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
    title: 'Awesome Books',
    client: 'Users',
    counter: '',
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
    imageSrc: './images/skills-snapshot.png',
    title: 'FaceBook 360',
    client: 'FACEBOOK',
    counter: '',
    role: 'Full Stack Dev',
    year: '2021',
    description: `
                      Exploring the future of media in Facebook's first Virtual 
                      Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.
                  `,
    tagsLanguages: ['HTML', 'Ruby on Rails', 'CSS', 'JavaScript'],
    privateClasses: {
      reverseCardContent: '',
      seeProjectBtn: 'fb360-see-projec-btn',
      modalContainer: 'fb360-modal-container',
      modalCloseBtn: 'fb360-modal-close-btn',
    },
    details: `
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it 1960s with the releaLorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it 1960s with the releorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum han
                printer took a galley of type and scrambled it 1960s with the
                releawn printer took a galley of type and scrambled it 1960s
                with the releaLorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it 1960s with the
                relea
                `,
  },
  {
    imageSrc: './images/avialability-snapshot.png',
    title: 'Uber Navigation',
    client: 'Uber',
    counter: '',
    role: 'Lead Developer',
    year: '2022',
    description: `
                          A smart assistant to make driving more safe, efficient, and fun by
                          unlocking your most expensive computer: your car.
                      `,
    tagsLanguages: ['HTML', 'Ruby on Rails', 'CSS', 'JavaScript'],
    privateClasses: {
      reverseCardContent: 'card-reverse',
      seeProjectBtn: 'uber-see-projec-btn',
      modalContainer: 'uber-modal-container',
      modalCloseBtn: 'uber-modal-close-btn',
    },
    details: `
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it 1960s with the releaLorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it 1960s with the releorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum han
                printer took a galley of type and scrambled it 1960s with the
                releawn printer took a galley of type and scrambled it 1960s
                with the releaLorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it 1960s with the
                relea
                `,
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
  projects.forEach((project) => {
    // loop through projects languages and display them
    projectLangs = project.tagsLanguages.map(
      (lang) => `<li class="card-skills-btn"><a href="#">${lang}</a></li>`,
    );
    projectCardContent = `
                      <div>
                          <img class="card-image" src= ${project.imageSrc} alt="skills snapshot"/>
                      </div>
                          <div class='card-content ${project.privateClasses.reverseCardContent}'>
                          <h2 class="card-title">${project.title}</h2>
                          <div class="skills">
                              <span>${project.client}</span>
                              <span class="dot"></span>
                              <span>${project.role}</span>
                              <span class="dot"></span>
                              <span>${project.year}</span>
                          </div>
                          <p class="card-text">${project.description}</p>
                          <ul class="card-skills-btns-container">
                              ${projectLangs.join('')}
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
                              class="modal-close-btn ${project.privateClasses.modalCloseBtn}">x
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
                          <img class="modal-image" src= ${project.imageSrc} alt="skills snapshot"/>
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
                                <img src="./images/see-live-icon.jpg" alt="see live icon"/> 
                              </a>
                              <a href="${project.sourceLink}" class='modal-button' type='button'>Source Code
                              <img src="./images/see-source-code.jpg" alt="see source code icon"/>
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
      modalContainer.style.display = 'block';
    }
    if (event.target.classList.contains(project.privateClasses.modalCloseBtn)) {
      modalContainer.style.display = 'none';
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