/* eslint-disable no-unused-vars */

import { pageLoader } from './pageloader';
import displayHomeSection from './home';
import displayMenuSection from './menu';
import displayContactSection from './contact';

/* eslint-enable no-unused-vars */

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');
const changeBtn = document.querySelector('.change');

// change menu
changeBtn.addEventListener('click', () => {
  document.querySelector('ul').classList.toggle('active');
  changeBtn.classList.toggle('toggle');
});

// Navigation tabs
tabs.forEach((tab) => tab.addEventListener('click', () => {
  document.querySelector(tab.dataset.tabTarget);
  tabContents.forEach((tabContent) => {
    tabContent.classList.remove('active');
  });
}));
