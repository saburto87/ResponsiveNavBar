const navSlide = () => {
    const burger = document.querySelector('.menu_bar');
    const nav = Document.querySelector('.nav-links');
    burger.addEventListener('click', () => {
        nav.ClassList.toggle('.nav-active');
    });
}
navSlide();