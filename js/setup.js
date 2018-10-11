'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var userDialog = document.querySelector('.setup');
var userDialogClose = userDialog.querySelector('.setup-close');
var userDialogOpen = document.querySelector('.setup-open');
var userDialogOpenIcon = userDialogOpen.querySelector('.setup-open-icon');

var similarWizardList = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizardCoat = userDialog.querySelector('.wizard-coat');
var wizardEyes = userDialog.querySelector('.wizard-eyes');
var wizardFireball = userDialog.querySelector('.setup-fireball-wrap');



var onUserDialogOpenIconEnter = function(event) {
  if (event.keyCode === 13) {
    openUserDialog();
  }
};

var onUserDialogCloseEnter = function(event) {
  if (event.keyCode === 13) {
    closeUserDialog();
  }
};

var onUserDialogEsc = function(event) {
  if (event.keyCode === 27) {
    closeUserDialog();
  }
};

var onWizardCoatClick = function() {
  wizardCoat.style.fill = getRandomElement(WIZARD_COAT_COLORS);
};

var onWizardEyesClick = function() {
  wizardEyes.style.fill = getRandomElement(WIZARD_EYES_COLORS);
};

var onWizardFireballClick = function() {
  wizardFireball.style.backgroundColor = getRandomElement(WIZARD_FIREBALL_COLORS);
};



var openUserDialog = function() {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onUserDialogEsc);
};

var closeUserDialog = function() {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onUserDialogEsc);
};

var getRandomElement = function(array) {
  var element = array[Math.floor(Math.random() * array.length)];
  return element;
};

var renderWizard = function(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var createFragment = function(array) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < array.length; i++) {
    fragment.appendChild(renderWizard(array[i]));
  }
  return fragment;
};


var wizards = [
  {
    name: getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES),
    coatColor: getRandomElement(WIZARD_COAT_COLORS),
    eyesColor: getRandomElement(WIZARD_EYES_COLORS)
  },
  {
    name: getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES),
    coatColor: getRandomElement(WIZARD_COAT_COLORS),
    eyesColor: getRandomElement(WIZARD_EYES_COLORS)
  },
  {
    name: getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES),
    coatColor: getRandomElement(WIZARD_COAT_COLORS),
    eyesColor: getRandomElement(WIZARD_EYES_COLORS)
  },
  {
    name: getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES),
    coatColor: getRandomElement(WIZARD_COAT_COLORS),
    eyesColor: getRandomElement(WIZARD_EYES_COLORS)
  }
];



userDialogOpen.addEventListener('click', function() {
  openUserDialog();
});

userDialogClose.addEventListener('click', function() {
  closeUserDialog();
});

userDialogOpenIcon.addEventListener('keydown', onUserDialogOpenIconEnter);
userDialogClose.addEventListener('keydown', onUserDialogCloseEnter);

wizardCoat.addEventListener('click', onWizardCoatClick);
wizardEyes.addEventListener('click', onWizardEyesClick);
wizardFireball.addEventListener('click', onWizardFireballClick);



similarWizardList.appendChild(createFragment(wizards));

userDialog.querySelector('.setup-similar').classList.remove('hidden');



