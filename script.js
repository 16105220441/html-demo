
let mobileMenu = document.getElementById('mobile-menu')
mobileMenu.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');

    const navList = document.getElementById('nav-list');
    navList.classList.toggle('active');
});

let themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', function(){
    document.body.classList.toggle('night-mode');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const articleList = document.querySelectorAll('article');
    
    let i = themeToggle.querySelector('.fas');
    if(i.classList.contains('fa-moon')){
        i.classList.remove('fa-moon');
        i.classList.add('fa-sun');
    }else{
        i.classList.remove('fa-sun');
        i.classList.add('fa-moon')

    }
    header.classList.toggle('night-mode');
    footer.classList.toggle('night-mode');
    articleList.forEach(element => {
        element.classList.toggle('night-mode');
    });



} )
