import '../styles/index.scss';
import '../../node_modules/tachyons/css/tachyons.min.css';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../../node_modules/@fortawesome/fontawesome-free/js/all.js';

var player = videojs('bg-video', {
  autoplay: true,
  volume: '0',
  techOrder: ['shaka', 'flash', 'html5'],
  shaka: {
    debug: false,
  },
});
player.src([
  {
    type: 'application/x-mpegURL',
    src: 'public/video/video-bg/index.m3u8',
  },
  {
    type: 'video/mp4',
    src: 'public/video/video-bg/progressive.mp4',
  },
]);

var playerI = videojs('bg-video-i', {
  autoplay: true,
  volume: '0',
  techOrder: ['shaka', 'flash', 'html5'],
  shaka: {
    debug: false,
  },
});
playerI.src([
  {
    type: 'application/x-mpegURL',
    src: 'public/video/video-bg/index.m3u8',
  },
  {
    type: 'video/mp4',
    src: 'public/video/video-bg/progressive.mp4',
  },
]);

var playerT = videojs('bg-video-t', {
  autoplay: true,
  volume: '0',
  techOrder: ['shaka', 'flash', 'html5'],
  shaka: {
    debug: false,
  },
});
playerT.src([
  {
    type: 'application/x-mpegURL',
    src: 'public/video/video-bg/index.m3u8',
  },
  {
    type: 'video/mp4',
    src: 'public/video/video-bg/progressive.mp4',
  },
]);

var playerW = videojs('bg-video-w', {
  autoplay: true,
  volume: '0',
  techOrder: ['shaka', 'flash', 'html5'],
  shaka: {
    debug: false,
  },
});
playerW.src([
  {
    type: 'application/x-mpegURL',
    src: 'public/video/video-bg/index.m3u8',
  },
  {
    type: 'video/mp4',
    src: 'public/video/video-bg/progressive.mp4',
  },
]);

function initMobileMenu(toggle, menu) {
  menu.classList.add('mobile-menu-closed');
  ['click', 'touchstart'].forEach(function (eventName) {
    toggle.addEventListener(eventName, function (evt) {
      evt.preventDefault();
      menu.classList.toggle('mobile-menu-open');
      menu.classList.toggle('mobile-menu-closed');
    });
  });
}

var toggle = document.getElementById('mobile-menu-toggle');
var menu = document.getElementById('main-nav-mobile');
initMobileMenu(toggle, menu);

(function () {
  'use strict';

  var section = document.querySelectorAll('.section');
  var sections = {};
  var i = 0;

  Array.prototype.forEach.call(section, function (e) {
    sections[e.id] = e.offsetTop - 67;
  });

  sections.berufsberatung -= 160;
  window.onscroll = function () {
    var scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        var els_nu = document.querySelectorAll('.underline');
        for (var nu = 0; nu < els_nu.length; nu++) {
          els_nu[nu].setAttribute(
            'class',
            'link f4 underline-hover ph2 color-inherit'
          );
        }
        var els_u = document.querySelectorAll('a[href*=' + i + ']');
        for (var u = 0; u < els_u.length; u++) {
          els_u[u].setAttribute(
            'class',
            'link f4 underline-hover ph2 color-inherit underline'
          );
        }
      }
    }
    if (scrollPosition <= sections.fachbereiche) {
      player.play();
    } else {
      player.pause();
    }
    if (scrollPosition <= sections.studienberatung) {
      playerW.play();
      playerI.play();
      playerT.play();
    } else {
      playerW.pause();
      playerI.pause();
      playerT.pause();
    }
  };
})(playerW, playerI, playerT, player);

var s = document.createElement('script');
s.src = 'public/dist/jquery.slim.min.js';
s.onload = function (e) {
  var section = $('.accordion-li');
  var clickNotice = Array.from(document.querySelectorAll('.section-title h3'));

  function toggleAccordion() {
    if ($(this).hasClass('active')) {
      section.removeClass('active');
    } else {
      section.removeClass('active');
      $(this).addClass('active');
    }
    clickNotice.forEach(function (node, idx) {
      console.log(node.classList);
      if (node.classList.contains('opac-0')) {
        node.classList.remove('opac-0');
      } else {
        node.classList.add('opac-0');
      }
    });
  }

  section.on('click', toggleAccordion);
};
document.head.appendChild(s);

// /* <source
//     src="public/video/video-bg/index.m3u8"
//     type="application/vnd.apple.mpegurl"     type: 'application/x-mpegURL',
// />
// <source
//     src="public/video/video-bg/progressive.mp4"
//     type='video/mp4; codecs="mp4a.40.2,avc1.4d401f"'
// /> */
