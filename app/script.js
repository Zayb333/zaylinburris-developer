document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", function () {
            this.classList.toggle("expanded");
        });
    });
});

//function checkboxes() {
//    const trigger = window.innerHeight / 5 * 4;
//    cards.forEach((card, idx) => {
//        const cardTop = card.getBoundingClientRect().top;

//        if (cardTop < trigger) {
//            card.classList.add('show');
//        }
//        else {
//            card.classList.remove('show');
//        }
//    });
//}

//const cards = document.querySelectorAll('.card', '.about-card');
//window.addEventListener('scroll', checkBoxes);
//checkBoxes();




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault;
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
}); 


