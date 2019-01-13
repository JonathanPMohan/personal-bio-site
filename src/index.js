import $ from 'jquery';
import 'bootstrap';
import firebase from 'firebase/app';

import apiKeys from '../db/apiKeys.json';

import './index.scss';

import projects from './javascripts/components/projects';
import tech from './javascripts/components/tech';
import events from './javascripts/helpers/events';
import headshot from './images/headshot.jpg';
import webLogo from './images/web_logo.png';
import githubLogo from './images/github_logo.png';
import linkedLogo from './images/linked_logo.png';
import icons from './images/icons.png';
// import getProjects from './javascripts/data/projectGetter';


$('#headshot').attr('src', headshot);
$('#webLogo').attr('src', webLogo);
$('#githubLogo').attr('src', githubLogo);
$('#linkedLogo').attr('src', linkedLogo);
$('#icons').attr('src', icons);

const initApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  events.setEvents();
  projects.initView();
  projects.getProjects();
  tech.getTech();
};
initApp();
