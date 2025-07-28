
var typed = new Typed("#text", {
    strings: ["Web Developer", "Java Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});

 const menuIcon = document.getElementById('menu-icon');
  const navbar = document.getElementById('navbar');

  menuIcon.onclick = () => {
    navbar.classList.toggle('active')
  };




