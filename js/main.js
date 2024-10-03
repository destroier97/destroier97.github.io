function toggleMenu() {
    const $navMenu = document.getElementById('nav__menu');
    $navMenu.classList.toggle('show');
}

function handleFloatingButton() {
    const $floatingButton = document.getElementById('floating-button');
    $floatingButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }

function init() {
    const $navToggle = document.getElementById('nav-toggle');
    $navToggle.addEventListener('click', () => {
        // main toggle
        toggleMenu();
    });

    const $navLinkList = document.querySelectorAll('.nav__link');
    $navLinkList.forEach(el => el.addEventListener('click', toggleMenu));

    handleFloatingButton();
}

init();

const options = {
    threshold: 1,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const sectionId = entry.target.id;
      if (entry.isIntersecting) {
        document
          .querySelector(`.nav__link[href*=${sectionId}]`)
          .classList.add('active-link');
  
        const $items = document.querySelectorAll(
          `.nav__link:not([href*=${sectionId}])`,
        );
        $items.forEach((el) => el.classList.remove('active-link'));
      }
    });
  }, options);

const $sectionList = document.querySelectorAll('.section');
$sectionList.forEach((el) => observer.observe(el))

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

scrollReveal.reveal('.home__data, .about__img, .skills__text');
scrollReveal.reveal('.home__img, about__data, .skills__img', {delay: 400});
scrollReveal.reveal('.skills__data, .work__link, .contact__input', {interval: 200});

const typeit = new TypeIt('#typeit', {
  speed: 70,
  startDelay: 1300,
  waitUntilVisible: true,
});

typeit
.type('안녕하세요!<br/>')
.type('<strong class="home__title-color">언제나 최선을 다하는</strong> <br>')
.type('<strong class="home__title-color">jiwon</strong> <br>')
.delete(7, {delay: 300})
.type('<strong class="home__title-color">김지원</strong>입니다!')
.go();

