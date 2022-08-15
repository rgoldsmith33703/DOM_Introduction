const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.style.color = 'red';
para.textContent = "Hey, I'm red!";

container.appendChild(para);

const headThree = document.createElement('h3');
headThree.style.color = 'blue';
headThree.textContent = "I'm a blue h3!";

container.appendChild(headThree);

const newDiv = document.createElement('div');
newDiv.style.borderColor = 'black';
newDiv.style.backgroundColor = 'pink';

const headOne = document.createElement('h1');
headOne.textContent = "I'm in a div"

const para2 = document.createElement('p');
para2.textContent = 'ME TOO!'

newDiv.appendChild(headOne);
newDiv.appendChild(para2);

container.appendChild(newDiv);