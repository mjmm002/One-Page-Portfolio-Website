const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');


hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', ()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 150){
        header.style.backgroundColor='#29323c';
        
     }  else{
        header.style.backgroundColor='transparent';

        }

});

menu_item.forEach(item=>{
    item. addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
});

document.addEventListener("DOMContentLoaded", function(){

  el_autohide = document.querySelector('.autohide');
  
  // add padding-top to bady (if necessary)
  // navbar_height = document.querySelector('.navbar').offsetHeight;
  // document.body.style.paddingTop = navbar_height + 'px';

  if(el_autohide){
    var last_scroll_top = 0;
    window.addEventListener('scroll', function() {
          let scroll_top = window.scrollY;
         if(scroll_top < last_scroll_top) {
              el_autohide.classList.remove('scrolled-down');
              el_autohide.classList.add('scrolled-up');
          }
          else {
              el_autohide.classList.remove('scrolled-up');
              el_autohide.classList.add('scrolled-down');
          }
          last_scroll_top = scroll_top;
    }); 
    // window.addEventListener
  }
  // if

}); 

