function addVisibleClass() {
    const playButton = document.querySelector('.video__content__play');
    const modalVideo = document.querySelector('.modal-video');

    playButton.addEventListener('click', () => {
        modalVideo.classList.add('visible');
    });
}

addVisibleClass();

$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        infinite: false,
        speed: 1000,
        cssEase: 'linear',
        width: 1240,
        autoplay: true,
        autoplaySpeed: 5000,
    })
});

$(document).ready(function () {
    $('.stories__blog').slick({
        infinite: false,
        width: 397,
        slidesToScroll: 1,
        slidesToShow:3,
        responsive: [
            {
                breakpoint: 950,
                settings: {
                    arrows: true,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })
});


$(document).ready(function () {
    $('.dropdown').hover(function () {
        $(this).addClass('show');
        $(this).find('.dropdown-menu').addClass('show');

        $('.dropdown').not(this).each(function () {;
            $(this).find('i').removeClass('bi-chevron-up');
        });
        const icon = $(this).find('i');
        icon.toggleClass('bi-chevron-up');
        
    }, function () {
        $(this).removeClass('show');
        $(this).find('.dropdown-menu').removeClass('show');
    });
});


$(document).ready(function () {
    $('.nav__li').click(function () {
        const icon = $(this).find('i');
        icon.toggleClass('bi-chevron-up');

        $(this).toggleClass('show ');
        $(this).find('.collapse').toggleClass('show');
    });
});