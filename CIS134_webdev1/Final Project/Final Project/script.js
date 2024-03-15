document.addEventListener('DOMContentLoaded', function() {
    var jpcarousel = document.getElementById('japanCarousel');
    var krcarousel = document.getElementById('koreaCarousel');
    var spcarousel = document.getElementById('spainCarousel');
    var auscarousel = document.getElementById('australiaCarousel');

    if (jpcarousel) {
        var jpshop = document.getElementById('jpshop');
        var jpfood = document.getElementById('jpfood');
        var jpanimals = document.getElementById('jpanimals');
        var jprelax = document.getElementById('jprelax');
        var jpsights = document.getElementById('jpsights');

        function jpUpdateDescriptions() {
            var jpitems = jpcarousel.querySelectorAll('.carousel-item');
            var activeIndex = -1;
            jpitems.forEach((item, index) => {
                if (item.classList.contains('active')) {
                    activeIndex = index;
                }
            });

            jpshop.style.display = activeIndex < 2 ? 'block' : 'none';
            jpfood.style.display = activeIndex >= 2 && activeIndex < 4 ? 'block' : 'none';
            jpanimals.style.display = activeIndex >= 4 && activeIndex < 6 ? 'block' : 'none';
            jprelax.style.display = activeIndex >= 6 && activeIndex < 8 ? 'block' : 'none';
            jpsights.style.display = activeIndex >= 8 ? 'block' : 'none';
        }

        jpUpdateDescriptions();
        jpcarousel.addEventListener('slid.bs.carousel', jpUpdateDescriptions);
    }

    if (krcarousel) {
        var krgaming = document.getElementById('krgaming');
        var krfood = document.getElementById('krfood');
        var kranimals = document.getElementById('kranimals');
        var krculture = document.getElementById('krculture');

        function krUpdateDescriptions() {
            var kritems = krcarousel.querySelectorAll('.carousel-item');
            var activeIndex = -1;
            kritems.forEach((item, index) => {
                if (item.classList.contains('active')) {
                    activeIndex = index;
                }
            });

            krgaming.style.display = activeIndex < 2 ? 'block' : 'none';
            krfood.style.display = activeIndex >= 2 && activeIndex < 4 ? 'block' : 'none';
            kranimals.style.display = activeIndex >= 4 && activeIndex < 6 ? 'block' : 'none';
            krculture.style.display = activeIndex >= 6 ? 'block' : 'none';
        }

        krUpdateDescriptions();
        krcarousel.addEventListener('slid.bs.carousel', krUpdateDescriptions);
    }

    if (spcarousel) {
        var spculture = document.getElementById('spculture');
        var spfood = document.getElementById('spfood');
        var spnature = document.getElementById('spnature');
        var sphistory = document.getElementById('sphistory');

        function spUpdateDescriptions() {
            var spitems = spcarousel.querySelectorAll('.carousel-item');
            var activeIndex = -1;
            spitems.forEach((item, index) => {
                if (item.classList.contains('active')) {
                    activeIndex = index;
                }
            });

            spculture.style.display = activeIndex < 2 ? 'block' : 'none';
            spfood.style.display = activeIndex >= 2 && activeIndex < 4 ? 'block' : 'none';
            spnature.style.display = activeIndex >= 4 && activeIndex < 6 ? 'block' : 'none';
            sphistory.style.display = activeIndex >= 6 ? 'block' : 'none';
        }

        spUpdateDescriptions();
        spcarousel.addEventListener('slid.bs.carousel', spUpdateDescriptions);
    }

    if (auscarousel) {
        var auswildlife = document.getElementById('auswildlife');
        var ausbeaches = document.getElementById('ausbeaches');
        var ausculture = document.getElementById('ausculture');
        var ausfood = document.getElementById('ausfood');

        function ausUpdateDescriptions() {
            var ausitems = auscarousel.querySelectorAll('.carousel-item');
            var activeIndex = -1;
            ausitems.forEach((item, index) => {
                if (item.classList.contains('active')) {
                    activeIndex = index;
                }
            });

            auswildlife.style.display = activeIndex < 2 ? 'block' : 'none';
            ausbeaches.style.display = activeIndex >= 2 && activeIndex < 4 ? 'block' : 'none';
            ausculture.style.display = activeIndex >= 4 && activeIndex < 6 ? 'block' : 'none';
            ausfood.style.display = activeIndex >= 6 ? 'block' : 'none';
        }

        ausUpdateDescriptions();
        auscarousel.addEventListener('slid.bs.carousel', ausUpdateDescriptions);
    }

    var hoverElements = document.querySelectorAll('.hover-text');
    var hoverImg = document.createElement('img');
    hoverImg.style.position = 'absolute';
    hoverImg.style.width = 'auto';
    hoverImg.style.height = '400px';
    hoverImg.style.zIndex = '10';
    hoverImg.id = 'hover-image';
    hoverImg.style.display = 'none';
    document.body.appendChild(hoverImg);

    hoverElements.forEach(function(element) {
        element.addEventListener('mouseover', function() {
            var imgSrc = this.getAttribute('data-hover-image');
            showImage(imgSrc, this);
        });

        element.addEventListener('mouseout', function() {
            hideImage();
        });
    });
});

function showImage(src, element) {
    var hoverImg = document.getElementById('hover-image');
    hoverImg.src = src;
    hoverImg.style.top = (element.getBoundingClientRect().top + window.scrollY - 340) + 'px';
    hoverImg.style.left = (element.getBoundingClientRect().left + window.scrollX - 140) + 'px';
    hoverImg.style.display = 'block';
}

function hideImage() {
    var hoverImg = document.getElementById('hover-image');
    hoverImg.style.display = 'none';
}