const displayHomeSection = (() => {
//container
const dataContainer = document.querySelector('#content'); 

const homeSection = document.createElement('div');

homeSection.setAttribute('id', 'home');
homeSection.setAttribute('data-tab-content', '');

homeSection.innerHTML = `<div class="home-section header" data-tab-content>
<div class="make-order">
    <h1>Make your order within Lagos, and we deliver to your doorstep</h1>
    <p>We take pride in making affordable healthy foods for a healthy society</p>
    <div class="btn-container">
     <a data-tab-target="#menu" class="order-now">Make Your Order</a>
   </div>
</div>
<div class="location">
  <div class="address">
    <span><i class='fas fa-map-marker-alt'></i></span>
    <p>plot 17, Glory land Estate, Winners avenue<br />Egbeda, Lagos</p>
  </div>
  <div class="work-hours">
    <span><i class='far fa-clock'></i></span>
    <p>
      <span>Mon-Fri:</span>8am-8pm<br /><span>Fri-Sun:</span
      >9am-10pm
    </p>
  </div>
</div>
</div>`;

dataContainer.appendChild(homeSection);
})();

export { displayHomeSection };