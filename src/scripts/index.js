import '../styles/index.scss';
import '../../node_modules/tachyons/css/tachyons.min.css';

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

// /* <source
//     src="public/video/video-bg/index.m3u8"
//     type="application/vnd.apple.mpegurl"     type: 'application/x-mpegURL',
// />
// <source
//     src="public/video/video-bg/progressive.mp4"
//     type='video/mp4; codecs="mp4a.40.2,avc1.4d401f"'
// /> */
