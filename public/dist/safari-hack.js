(function () {
  var isSafari = /constructor/i.test(window.HTMLElement);
  var isSafari5 = /a/.__proto__ == '//';

  if (isSafari || isSafari5) {
    var head = document.getElementsByTagName('HEAD')[0];
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'public/dist/safari-hack.css';
    head.appendChild(link);
  }
})();
