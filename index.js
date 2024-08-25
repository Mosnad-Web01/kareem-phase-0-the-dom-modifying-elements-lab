// Write your code here!
const mainElement = document.getElementById('main');

mainElement.remove();

const newHeader = document.createElement('h1');

newHeader.id = 'victory';

const userName = 'YourName';
const headerText = `${userName} is the champion`;

newHeader.textContent = headerText;

document.body.appendChild(newHeader);