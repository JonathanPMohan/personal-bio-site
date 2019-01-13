import 'bootstrap';
import $ from 'jquery';

const allButton = $('#all');
const techButton = $('#navToTech');
const bioButton = $('#navToBio');
const projectsButton = $('#navToProjects');
const contactButton = $('#navToContact');

const allButtonEvent = () => {
  allButton.on('click', () => {
    $('#bioContainer').fadeIn(300);
    $('#techContainer').fadeIn(300);
    $('#projectsContainer').fadeIn(300);
    $('#contactContainer').fadeIn(300);
    $(bioButton).addClass('active');
    $(techButton).addClass('active');
    $(projectsButton).addClass('active');
    $(contactButton).addClass('active');
  });
};


const techButtonEvent = () => {
  techButton.on('click', () => {
    $('#bioContainer').fadeOut(300);
    $('#techContainer').fadeIn(300);
    $('#projectsContainer').fadeOut(300);
    $('#contactContainer').fadeOut(300);
    $(bioButton).removeClass('active');
    $(techButton).addClass('active');
    $(projectsButton).removeClass('active');
    $(contactButton).removeClass('active');
  });
};

const bioButtonEvent = () => {
  bioButton.on('click', () => {
    $('#bioContainer').fadeIn(300);
    $('#techContainer').fadeOut(300);
    $('#projectsContainer').fadeOut(300);
    $('#contactContainer').fadeOut(300);
    $(bioButton).addClass('active');
    $(techButton).removeClass('active');
    $(projectsButton).removeClass('active');
    $(contactButton).removeClass('active');
  });
};

const projectsButtonEvent = () => {
  projectsButton.on('click', () => {
    $('#bioContainer').fadeOut(300);
    $('#techContainer').fadeOut(300);
    $('#projectsContainer').fadeIn(300);
    $('#contactContainer').fadeOut(300);
    $(bioButton).removeClass('active');
    $(techButton).removeClass('active');
    $(projectsButton).addClass('active');
    $(contactButton).removeClass('active');
  });
};

const contactButtonEvent = () => {
  contactButton.on('click', () => {
    $('#bioContainer').fadeOut(300);
    $('#techContainer').fadeOut(300);
    $('#projectsContainer').fadeOut(300);
    $('#contactContainer').fadeIn(300);
    $(bioButton).removeClass('active');
    $(techButton).removeClass('active');
    $(projectsButton).removeClass('active');
    $(contactButton).addClass('active');
  });
};

const setEvents = () => {
  bioButtonEvent();
  techButtonEvent();
  projectsButtonEvent();
  contactButtonEvent();
  allButtonEvent();
};

export default { setEvents };
