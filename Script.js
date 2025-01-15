function toggleMenu() {
  const menu = document.querySelector(".menu-links");   
  const icon = document.querySelector(".hamburger-icon");   
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});


window.addEventListener('scroll', function() {
  const hiddenText = document.querySelector('.personal-identity-text-container');
  
  // If the user has scrolled 500px or more from the top
  if (window.scrollY > 500) {
    hiddenText.classList.add('show1');
  } else {
    hiddenText.classList.remove('show1');
  }
});


window.addEventListener('scroll', function() {
  const hiddenText = document.querySelector('.professional-identity-container-text');
  
  // If the user has scrolled 1500px or more from the top
  if (window.scrollY > 1500) {
    hiddenText.classList.add('show2');
  } else {
    hiddenText.classList.remove('show2');
  }
});


window.addEventListener('scroll', function() {
  const hiddenText = document.querySelector('.past-present-future-container-text');
  
  // If the user has scrolled 2500px or more from the top
  if (window.scrollY > 2500) {
    hiddenText.classList.add('show3');
  } else {
    hiddenText.classList.remove('show3');
  }
});




