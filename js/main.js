let swiper1 = document.querySelector('.slider-container');
let swiper2 = document.querySelector('.swiper-container');
let burger = document.querySelector('.burger');
let close = document.querySelector('.menu__close');
let menu = document.querySelector('.menu');
let playButtonsFirst = document.querySelectorAll('.main-slider__play')

//sl 1
let swiperSlider1 = new Swiper(swiper1, {
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 105,
});

//sl 2
let swiperSlider2 = new Swiper(swiper2, {
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    fadeEffect: {
        crossFade: true
    },
    effect: 'fade',
    navigation: {
        nextEl: '.btn-right',
        prevEl: '.btn-left',
    },
});

//pause sl 2
swiperSlider2.on('transitionEnd', function () {
    let videos = document.querySelectorAll('.first__slider video');
    videos.forEach(function (el) {
        el.pause();
        el.currentTime = 0;
    });
    playButtonsFirst.forEach(function (el) {
        el.style.display = 'block';
    });
});

//burger
burger.addEventListener('click', function () {
    menu.classList.add('menu--visible');
});

close.addEventListener('click', function () {
    menu.classList.remove('menu--visible');
});

//play move
playButtonsFirst.forEach(function (el) {
    el.addEventListener('click', function (e) {
        let video = e.currentTarget.closest('.main-slider__media').querySelector('video');
        video.play();
        e.currentTarget.style.display = 'none';
        setTimeout(function () {
            video.volume = 0.5;
        }, 1000);
    });
});

// inputMask
let selector = document.querySelectorAll('input[type=tel]');

let im = new Inputmask('+7 (999) 999-99-99');

im.mask(selector);

// validate forms
let validateForms = function (selector, rules) {

    new window.JustValidate(selector, {
        rules: rules,
        submitHandler: function (form, values, ajax) {
            var formData = new FormData(form);

            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {

                    if (xhr.status === 200) {
                        console.log('Отправлено!')
                    } else {

                    }
                }
            }

            xhr.open('POST', "mail.php", true);
            xhr.send(formData);

            form.reset();
        },
    });
}

// validateForms('.mailing__form', { email: { required: true, email: true } }, 'mailing-window', 'materialy s proshloj konferencii');
validateForms('.newsletter__form', {
    email: {
        required: true,
        email: true
    },
    tel: {
        required: true
    }
});
validateForms('.subs-form', {
    email: {
        required: true,
        email: true
    }
});
