document.addEventListener('scroll', function() {
    var bgImg = document.getElementById('bg-img');
    var scrollPosition = window.pageYOffset;

    bgImg.style.transform = 'translateY(' + scrollPosition * 0.4 + 'px)';
});
