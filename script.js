const hamburger = document.querySelector('.Menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');
// array of object for each project
const projects = [
  (Tonic = {
    imageSrc: './images/nature-snapshot.png',
    title: 'Tonic',
    client: 'CANOPY',
    counter: '',
    role: 'Back End Dev',
    year: '2019',
    description: `
                      A daily selection of privately personalized reads;
                      no accounts or sign- ups required.
                  `,
    tagsLanguages: ['HTML', 'CSS', 'JavaScript', 'Ruby on Rails'],
    privateClasses: {
      reverseCardContent: '',
      seeProjectBtn: 'tonic-see-project-btn',
      modalContainer: 'tonic-modal-container',
      modalCloseBtn: 'tonic-modal-close-btn',
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
  }),
  (multiProjectStories = {
    imageSrc: './images/professional-art-snapshot.jpg',
    title: 'Multi-Project Stories',
    client: 'FACEBOOK',
    counter: '',
    role: 'Full Stack Dev',
    year: '2020',
    description: `
                      Experimental content creation feature that allows users 
                      to add to an existing story over the course of a day without 
                      spamming their friends.
                  `,
    tagsLanguages: ['HTML', 'Ruby on Rails', 'SCSS', 'JavaScript'],
    privateClasses: {
      reverseCardContent: 'card-reverse',
      seeProjectBtn: 'multi-see-project-btn',
      modalContainer: 'multi-modal-container',
      modalCloseBtn: 'multi-modal-close-btn',
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
  }),
  (facebook360 = {
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
  }),
  (uberNavigation = {
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
      seeProjectBtn: 'tonic-see-projec-btn',
      modalContainer: 'tonic-modal-container',
      modalCloseBtn: 'tonic-modal-close-btn',
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
  }),
];
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
