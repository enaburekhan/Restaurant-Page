const pageLoader = (() => {
//container
 
  const dataContainer = document.querySelector('#content');

  const header = document.createElement('header')
  header.innerHTML = `<nav class="nav-bar">
    <p class="food">Healthy Food</p> 

  <a href="#" class="change">
    <span class="line line1"></span>
    <span class="line line2"></span>
    <span class="line line3"></span>
  </a>
  <ul class="nav-home">
  <li data-tab-target="#home" class="tab red">Home</li>
  <li data-tab-target="#menu" class="tab">Menu</li>
  <li data-tab-target="#contact" class="tab">Contact us</li>
  </ul>
</nav> `;

dataContainer.appendChild(header);

})();

