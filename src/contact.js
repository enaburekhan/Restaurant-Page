const displayContactSection = (() => {
  // container
  const dataContainer = document.querySelector('#content');
  const contactSection = document.createElement('div');
  contactSection.setAttribute('id', 'contact');
  contactSection.setAttribute('data-tab-content', '');
  contactSection.innerHTML = `<div class="header">
  <h1>Contact us</h1>
</div>
<div class="contact-container contact" >
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
    <div class="phone">
      <p><i class='fas'>&#xf095;</i>(+234)-810 592 1847</p>
    </div>
     <div class="contact-form">
       <form onsubmit="return false">
         <h3><i class="fi-xwsuxl-envelope-solid"></i>Message us</h3>
         <div class="input-box">
           <input type="text" required />
           <span>Full Name</span>
         </div>
         <div class="input-box">
           <input type="text" required />
           <span>Email</span>
         </div>
         <div class="input-box">
           <textarea required></textarea>
           <span>Type your message...</span>
         </div>
         <input type="submit" value="Send" />
       </form>
     </div>
  </div>
  

  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11210.179421081382!2d3.295866798763569!3d6.597490141139069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9051c67a01c5%3A0xe3229cb022ead9ee!2sEgbeda!5e0!3m2!1sen!2sng!4v1611060774770!5m2!1sen!2sng" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
</div>`;

  dataContainer.appendChild(contactSection);
})();

export default displayContactSection;
