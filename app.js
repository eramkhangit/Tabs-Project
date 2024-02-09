const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function (event) {
    const id = event.target.dataset.id;
    // console.log(id);
    if (id) {
        // remove active from other button
        btns.forEach(function (btn) {
            btn.classList.remove('active');
            console.log("this" , event.target);
            event.target.classList.add('active');
        });
        // hide other articles
        articles.forEach(function(article){
            article.classList.remove('active');
            const element = document.getElementById(id);
            element.classList.add('active');
        });
    }
});