!function(a,l,n,r){"use strict";var e={k:function(a){e.s(),e.methods()},s:function(r){this._window=n(a),this._document=n(l)},methods:function(a){e.mouseMOve(),e.mouseParalax()},mouseMOve:function(){n.fn.parallax=function(l,r){var e;e=n(this),TweenLite.to(e,.2,{x:-(r.clientX-a.innerWidth/2)/l,y:-(r.clientY-a.innerHeight/2)/l})}},mouseParalax:function(){n(".paralax-area").mousemove((function(a){n(".paralax-1").parallax(10,a),n(".paralax-2").parallax(35,a),n(".paralax-3").parallax(15,a),n(".paralax-4").parallax(5,a),n(".paralax-5").parallax(10,a),n(".paralax-6").parallax(35,a),n(".paralax-7").parallax(15,a),n(".paralax-8").parallax(5,a)}))}};e.k()}(window,document,jQuery);
//# sourceMappingURL=custom-parallax.js.map