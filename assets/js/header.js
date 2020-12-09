const header = $("header");
const menuBtn = $("#menu-btn");
const menuLayout = $(".menu-layout");
const menu = $(".menu");
const menuItem = $(".menu li");

menuBtn.on('click', () => {
    menuLayout.css({display: "block"});   
    menu.css({left: 0});
});

menuLayout.on('click', () => {
    menuLayout.css({display: "none"});
    menu.css({left: '-255px'});
});

menuItem.on('click', () => {
    console.log('say hi');
    menuLayout.css({display: "none"});
    menu.css({left: '-255px'});
});

$(window).on('scroll', () => {
    if(window.scrollY >= 1) {
      header.css({padding: '5px'})
      header.addClass('shadow');  
    } else {
      header.removeClass('shadow');  
      header.css({padding: 0})
    }
});

const sections = $("[data-section]");
sections.on('click', (e) => {
  const section = e.target.dataset.section;
  window.scrollTo({
    top: $('.' + section).offset().top,
    behavior: 'smooth'
  })
});

