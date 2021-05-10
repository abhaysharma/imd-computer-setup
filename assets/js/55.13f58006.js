(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{222:function(a,p,e){"use strict";e.r(p);var t=e(0),m=Object(t.a)({},function(){var a=this,p=a.$createElement,e=a._self._c||p;return e("div",{staticClass:"content"},[a._m(0),a._v(" "),a._m(1),a._v(" "),e("Youtube",{attrs:{id:"IEqccPhsqgA",citation:"Published by <a href='https://www.youtube.com/channel/UC8ZyvXxO0tvyct3ixFUbdiA'>silentfilmhouse</a>"}}),a._v(" "),e("p",[a._v("This sequence of images has since entered public domain and we can use it to introduce a new animation property "),e("a",{attrs:{href:"http://designmodo.com/steps-css-animations/",target:"_blank",rel:"noopener noreferrer"}},[a._v("steps"),e("OutboundLink")],1),a._v(". We'll start looking at the public domain image.")]),a._v(" "),e("iframe",{staticStyle:{width:"100%"},attrs:{src:"//codepen.io/IMD/embed/ORLzGz/?height=565&theme-id=0&default-tab=result&embed-version=2",width:"300",height:"565",allowfullscreen:"allowfullscreen"}},[a._v('See the Pen &amp;amp;amp;amp;amp;amp;amp;lt;a href="https://codepen.io/IMD/pen/ORLzGz/"&amp;amp;amp;amp;amp;amp;amp;gt;ORLzGz&amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;gt; by IMD (&amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;amp;amp;amp;amp;amp;gt;@IMD&amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;gt;) on &amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io"&amp;amp;amp;amp;amp;amp;amp;gt;CodePen&amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;gt;.')]),a._v(" "),a._m(2),a._v(" "),e("p",[a._v("If we were building our own sprite we would keep the coordinates of the image in a singular row or column to make the measurements easier.  To simulate that we're going to resize our container for only the first row of pictures. Let's pretend our sprite is just these four pictures arranged in this order. We've adjusted the size of the image container and the position so only the first four frames are visible in the container.")]),a._v(" "),e("iframe",{staticStyle:{width:"100%"},attrs:{src:"//codepen.io/IMD/embed/rrBpgR/?height=365&theme-id=0&default-tab=css,result&embed-version=2",width:"300",height:"365",allowfullscreen:"allowfullscreen"}},[a._v('See the Pen &amp;amp;amp;amp;amp;lt;a href="https://codepen.io/IMD/pen/rrBpgR/"&amp;amp;amp;amp;amp;gt;rrBpgR&amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;gt; by IMD (&amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;amp;amp;amp;gt;@IMD&amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;gt;) on &amp;amp;amp;amp;amp;lt;a href="http://codepen.io"&amp;amp;amp;amp;amp;gt;CodePen&amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;gt;.')]),a._v(" "),a._m(3),a._v(" "),e("p",[a._v("Each frame is about 250px.")]),a._v(" "),e("iframe",{staticStyle:{width:"100%"},attrs:{src:"//codepen.io/IMD/embed/ORLzZQ/?height=365&theme-id=0&default-tab=css,result&embed-version=2",width:"300",height:"365",allowfullscreen:"allowfullscreen"}},[a._v('See the Pen &amp;amp;amp;amp;lt;a href="https://codepen.io/IMD/pen/ORLzZQ/"&amp;amp;amp;amp;gt;ORLzZQ&amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;gt; by IMD (&amp;amp;amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;amp;amp;gt;@IMD&amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;gt;) on &amp;amp;amp;amp;lt;a href="http://codepen.io"&amp;amp;amp;amp;gt;CodePen&amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;gt;.')]),a._v(" "),a._m(4),a._v(" "),e("p",[a._v("We can leverage the steps property to break up the animation into (#) parts from 0 - 100%. In our example below we break the transition from sliding the image left the width of itself into 4 parts. This automatically calculates the position at 4 points, these four points line up with the width of our pictures.")]),a._v(" "),e("iframe",{staticStyle:{width:"100%"},attrs:{src:"//codepen.io/IMD/embed/qaWpgO/?height=665&theme-id=0&default-tab=css,result&embed-version=2",width:"300",height:"665",allowfullscreen:"allowfullscreen"}},[a._v('See the Pen &amp;amp;amp;amp;amp;amp;amp;amp;lt;a href="https://codepen.io/IMD/pen/qaWpgO/"&amp;amp;amp;amp;amp;amp;amp;amp;gt;qaWpgO&amp;amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;amp;gt; by IMD (&amp;amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;amp;amp;amp;amp;amp;amp;gt;@IMD&amp;amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;amp;gt;) on &amp;amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io"&amp;amp;amp;amp;amp;amp;amp;amp;gt;CodePen&amp;amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;amp;gt;.')]),a._v(" "),e("p",[a._v("Without steps its a smooth transition. This example is slowed down from the previous example.")]),a._v(" "),e("iframe",{staticStyle:{width:"100%"},attrs:{src:"//codepen.io/IMD/embed/yaBpmw/?height=665&theme-id=0&default-tab=css,result&embed-version=2",width:"300",height:"665",allowfullscreen:"allowfullscreen"}},[a._v('See the Pen &amp;amp;lt;a href="https://codepen.io/IMD/pen/yaBpmw/"&amp;amp;gt;yaBpmw&amp;amp;lt;/a&amp;amp;gt; by IMD (&amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;gt;@IMD&amp;amp;lt;/a&amp;amp;gt;) on &amp;amp;lt;a href="http://codepen.io"&amp;amp;gt;CodePen&amp;amp;lt;/a&amp;amp;gt;.')])],1)},[function(){var a=this.$createElement,p=this._self._c||a;return p("h1",{attrs:{id:"sprite-animation"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#sprite-animation","aria-hidden":"true"}},[this._v("#")]),this._v(" Sprite Animation")])},function(){var a=this.$createElement,p=this._self._c||a;return p("p",[this._v("In 1878 "),p("span",[this._v("Edward Muybridge produced")]),this._v(" the first sequence of photography setup using a device known as a "),p("a",{attrs:{href:"/content/enforced/39845-17W_MTM6230_010/wiki_content/%24WIKI_REFERENCE%24/pages/css-sprite-animations","data-api-endpoint":"https://algonquin.instructure.com/api/v1$WIKI_REFERENCE$/pages/css-sprite-animations","data-api-returntype":"Page"}},[this._v("Zoopraxiscope ")]),this._v("to produce the first known instance of videography.")])},function(){var a=this.$createElement,p=this._self._c||a;return p("h2",{attrs:{id:"the-first-four-frames"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#the-first-four-frames","aria-hidden":"true"}},[this._v("#")]),this._v(" The first four frames")])},function(){var a=this.$createElement,p=this._self._c||a;return p("h2",{attrs:{id:"resizing-for-one-frame"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#resizing-for-one-frame","aria-hidden":"true"}},[this._v("#")]),this._v(" Resizing for one frame")])},function(){var a=this.$createElement,p=this._self._c||a;return p("h2",{attrs:{id:"steps-timing-function"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#steps-timing-function","aria-hidden":"true"}},[this._v("#")]),this._v(" Steps Timing Function")])}],!1,null,null,null);p.default=m.exports}}]);