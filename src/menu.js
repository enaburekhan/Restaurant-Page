const displayMenuSection = (() => {
  //container
  const dataContainer = document.querySelector('#content');
  const menuSection = document.createElement('div');
  menuSection.setAttribute('id', 'menu');
  menuSection.setAttribute('data-tab-content', '');
  menuSection.innerHTML = `<div class="header">
  <h1>Menu</h1>
  <img src="./img/chef.png" alt="" width="50" height="50" />
</div>

<div class="menu-section">
  <div class="menu-item">
      <img src="./img/sandwich1.jpg" alt="sandwich" />
      <div class="item-content">
        <h4>Sandwich: <span>#1k</span></h4>
        <p>
          Buns, patty, tomato, onions, lettuce, and our secret family
          recipe.
        </p>
      </div>
  </div>
  <div class="menu-item">
    <img src="./img/sandwich2.jpg" alt="sandwich" />
    <div class="item-content">
      <h4>Yommy Sandwich: <span>#1.2k</span></h4>
      <p>
        Buns, patty, tomato, onions, lettuce, and our secret family
        recipe reloaded++.
      </p>
    </div>
  </div> 
  <div class="menu-item">
    <img src="./img/salad.jpg" alt="salad" />
    <div class="item-content">
      <h4>Salad: <span>#2.5k</span></h4>
      <p>
        lettuce, spinach, Baked Tortilla, fresh fruits, Beans and Legumes, and our secret family
        recipe.
      </p>
    </div>
  </div> 
  <div class="menu-item">
    <img src="./img/coffee.jpg" alt="coffee" />
    <div class="item-content">
      <h4>Caffè Latte: <span>#0.7k</span></h4>
      <p>
        espresso coffee ground, milk, sugar, and our secret family
        recipe.
      </p>
    </div>
  </div>      

</div>`;

dataContainer.appendChild(menuSection);


})();

export { displayMenuSection };