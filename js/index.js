const clockContainer = document.querySelector('.clock');
setInterval( () => clockContainer.innerText = (new Date()).toLocaleTimeString(), 1000);

const dateContainer = document.querySelector('.calendar');
setInterval( () => dateContainer.innerText = (new Date()).toLocaleDateString(), 1000);
 
