function openNav() {
    document.getElementById("mySidebar").style.width = "200px";
    // document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

var links = document.querySelectorAll('a[href^="#"]');

links.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        var targetId = this.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);

        var offsetTop = targetElement.offsetTop;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('scroll', function () {
    const bioleoMan = document.querySelector('.bioleo-man');
    const rect = bioleoMan.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

    if (rect.top <= windowHeight && rect.bottom >= 0) {
        bioleoMan.classList.add('visible');
    }
});