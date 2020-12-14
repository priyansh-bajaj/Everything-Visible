var mfapi1 = document.createElement('script');
mfapi1.textContent =
  "window.addEventListener('blur', function (event) {\
  event.stopImmediatePropagation();\
  }, true);";
(document.head || document.documentElement).prepend(mfapi1);

var mfapi2 = document.createElement('script')
mfapi2.textContent =
  '(function() {' +
  'var a = Node.prototype.addEventListener;' +
  'Node.prototype.addEventListener = function(e) {' +
  "if (e !== 'visibilitychange' && e !== 'webkitvisibilitychange' && e !== 'mozvisibilitychange' && e !== 'msvisibilitychange') {" +
  'a.apply(this, arguments)' +
  '}}' +
  '})()';
(document.head || document.documentElement).appendChild(mfapi2)
mfapi2.remove()
