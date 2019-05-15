const navSlide = () => {
    const burger = document.querySelector('.bt-menu');
    const nav = Document.querySelector('.nav-links');
    burger.addEventListener('click', () => {
        nav.ClassList.toggle('nav-active');
    });
}
navSlide();