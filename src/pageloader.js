const pageLoader = (() => {
//container
 
  const dataContainer = document.querySelector('#content');

  const header = document.createElement('header')
  header.innerHTML = `<nav class="nav-bar">
  <div class="food">
    <p>Healthy Food</p>
    
  </div>
  <ul class="nav-home">
    <li>
        <a href="#home" class="">Home</a>
    </li>
    <li>
        <a href="#menu" class="">Menu</a>
    </li>
    <li>
        <a href="#contact" class="">Contact us</a>
    </li>   
  </ul>
</nav>`;

dataContainer.appendChild(header);


})();