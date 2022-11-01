aboutme = document.getElementById('page_aboutme');
portfolio = document.getElementById('page_portfolio');
a2 = document.getElementById('page_a2');
a3 = document.getElementById('page_a3');
a4 = document.getElementById('page_a4');
reflection = document.getElementById('page_reference');
reference = document.getElementById('page_reflect');


document.getElementById('button_aboutme').addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
})


document.getElementById('button_portfolio').addEventListener("click", function(){
    let windowHeight = $(window).height() - 60;
    window.scrollTo({
        left: 0,
        top: $(aboutme).height(),
        behavior: 'smooth'
    });
    console.log(`${$(aboutme).height()}`)
})


document.getElementById('button_a2').addEventListener("click", function(){
    let windowHeight = $(window).height() - 60;
    window.scrollTo({
        left: 0,
        top: $(aboutme).height()+$(portfolio).height(),
        behavior: 'smooth'
    });
    console.log(`${$(aboutme).height()}`)
    console.log(`${$(portfolio).height()}`)
})


document.getElementById('button_a3').addEventListener("click", function(){
    let windowHeight = $(window).height() - 60;
    window.scrollTo({
        left: 0,
        top: $(aboutme).height()+$(portfolio).height()+$(a2).height(),
        behavior: 'smooth'
    });
})


document.getElementById('button_a4').addEventListener("click", function(){
    let windowHeight = $(window).height() - 60;
    window.scrollTo({
        left: 0,
        top: $(aboutme).height()+$(portfolio).height()+$(a2).height()+$(a3).height(),
        behavior: 'smooth'
    });
})


document.getElementById('button_reflection').addEventListener("click", function(){
    let windowHeight = $(window).height() - 60;
    window.scrollTo({
        left: 0,
        top: $(aboutme).height()+$(portfolio).height()+$(a2).height()+$(a3).height()+$(a4).height(),
        behavior: 'smooth'
    });
})


document.getElementById('button_reference').addEventListener("click", function(){
    let windowHeight = $(window).height() - 60;
    window.scrollTo({
        left: 0,
        top: $(aboutme).height()+$(portfolio).height()+$(a2).height()+$(a3).height()+$(a4).height()+$(reflection).height(),
        behavior: 'smooth'
    });
})