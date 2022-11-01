aboutme = document.getElementById('button_aboutme');
aboutme.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
})

aboutme = document.getElementById('button_portfolio');
aboutme.addEventListener("click", function(){
    let windowHeight = $(window).height() - 60;
    window.scrollTo({
        left: 0,
        top: windowHeight*1,
        behavior: 'smooth'
    });
})

aboutme = document.getElementById('button_a2');
aboutme.addEventListener("click", function(){
    let windowHeight = $(window).height() - 60;
    window.scrollTo({
        left: 0,
        top: windowHeight*2,
        behavior: 'smooth'
    });
})

aboutme = document.getElementById('button_a3');
aboutme.addEventListener("click", function(){
    let windowHeight = $(window).height() - 60;
    window.scrollTo({
        left: 0,
        top: windowHeight*3,
        behavior: 'smooth'
    });
})

aboutme = document.getElementById('button_a4');
aboutme.addEventListener("click", function(){
    let windowHeight = $(window).height() - 60;
    window.scrollTo({
        left: 0,
        top: windowHeight*4,
        behavior: 'smooth'
    });
})

aboutme = document.getElementById('button_reflection');
aboutme.addEventListener("click", function(){
    let windowHeight = $(window).height() - 60;
    window.scrollTo({
        left: 0,
        top: windowHeight*5,
        behavior: 'smooth'
    });
})

aboutme = document.getElementById('button_reference');
aboutme.addEventListener("click", function(){
    let windowHeight = $(window).height() - 60;
    window.scrollTo({
        left: 0,
        top: windowHeight*6,
        behavior: 'smooth'
    });
})