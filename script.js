const tl = gsap.timeline({defaults:{duration:0.75,ease:"power1.out"}});

 tl.fromTo('.cat-food-image',{y:0,rotation:'0deg'},{y:-20,rotation:'-5deg',yoyo:true,repeat:-1});

const burgerMenu = document.querySelector('.burger-menu');

if(burgerMenu){
    const navigationMenu = document.querySelector('.header-navigation');
    
    burgerMenu.addEventListener("click",function(e){
        burgerMenu.classList.toggle('_active');
        navigationMenu.classList.toggle('_active');
    });
}

