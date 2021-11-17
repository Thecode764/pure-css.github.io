"use strict";(self.webpackChunkpure=self.webpackChunkpure||[]).push([[419],{4208:function(e,a,t){var l=t(7294),n=t(7762),m=t(8101),r=t(4204);a.Z=function(e){var a=e.children,t=(0,r.html)(n.renderToStaticMarkup(a),{inline:"b"});return l.createElement("div",{className:"example"},l.createElement("div",{dangerouslySetInnerHTML:{__html:t}}),l.createElement(m.Z,null,t))}},1435:function(e,a,t){function l(e){var a=e.module,t=e.decimals,l=void 0===t?1:t;return(e.filesizes[a]/1024).toFixed(l)+"KB"}function n(e){var a=e.modules,t=e.module,l=e.filesizes,n=a.reduce((function(e,a){return e+l[a]}),0);return(l[t]/n*100).toFixed(4)+"%"}function m(e){e.preventDefault(),e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()}t.d(a,{jb:function(){return l},B9:function(){return n},qk:function(){return m}})},6666:function(e,a,t){t.r(a);var l=t(6742),n=t(7294),m=t(3947),r=t(1899),u=t(4208),s=t(6393),c=t(1435),i="Menus",o="Simple CSS for menus.",p=!1;a.default=function(){return(0,n.useEffect)((function(){if(!p){var e=document.createElement("script");e.type="text/javascript",e.src="/js/menus.js",document.head.appendChild(e),p=!0}})),n.createElement(m.Z,{description:o,title:i},n.createElement(r.Z,{description:o,title:i}),n.createElement("div",{className:"content",onClick:c.qk},n.createElement(s.Z,{heading:"Vertical Menu"}),n.createElement("p",null,"Menus are vertical by default. Minimal default styling and low-specificity selectors make them easy to customize. By default, menu items take up 100% of the width of their container, so you may want to limit the menu width or set the menu to display:inline-block."),n.createElement(u.Z,null,n.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                        .custom-restricted-width {\n                            /* To limit the menu width to the content of the menu: */\n                            display: inline-block;\n                            /* Or set the width explicitly: */\n                            /* width: 10em; */\n                        }\n                    "}}),n.createElement("div",{className:"pure-menu custom-restricted-width"},n.createElement("span",{className:"pure-menu-heading"},"Yahoo Sites"),n.createElement("ul",{className:"pure-menu-list"},n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Flickr")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Messenger")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Sports")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Finance")),n.createElement("li",{className:"pure-menu-heading"},"More Sites"),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Games")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"News")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"OMG!"))))),n.createElement(s.Z,{heading:"Horizontal Menu"}),n.createElement("p",null,"To create a horizontal menu, add the ",n.createElement("code",null,"pure-menu-horizontal")," class name."),n.createElement(u.Z,null,n.createElement("div",{className:"pure-menu pure-menu-horizontal"},n.createElement("a",{href:"#",className:"pure-menu-heading pure-menu-link"},"BRAND"),n.createElement("ul",{className:"pure-menu-list"},n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"News")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Sports")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Finance"))))),n.createElement(s.Z,{heading:"Selected and Disabled Items"}),n.createElement("p",null,"Mark a selected list element by adding the ",n.createElement("code",null,"pure-menu-selected")," class to the list element. To mark a link as disabled, add the class name ",n.createElement("code",null,"pure-menu-disabled")," to the list element. Disabled items appear faded and do not inherit hover styles."),n.createElement(u.Z,null,n.createElement("div",{className:"pure-menu pure-menu-horizontal"},n.createElement("ul",{className:"pure-menu-list"},n.createElement("li",{className:"pure-menu-item pure-menu-selected"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Selected")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Normal")),n.createElement("li",{className:"pure-menu-item pure-menu-disabled"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Disabled"))))),n.createElement(s.Z,{heading:"Dropdowns"}),n.createElement("p",null,"We recommend enabling submenus via JavaScript to enable accessibility. To help get you started, ",n.createElement("a",{href:"/js/menus.js"},"an example script")," written in vanilla JS provides ARIA support, limited submenu arrow-key navigation, and the ability to dismiss menus with an outside event or the ESC key. But you may wish to go further by adding edge detection, comprehensive arrow-key navigation, and polyfills for compatibility with old browsers."),n.createElement("p",null,"Even with JavaScript in place, you still might want to display submenus on hover. Just add ",n.createElement("code",null,"pure-menu-allow-hover")," to the ",n.createElement("code",null,"pure-menu-has-children")," list item. This can be nice for desktop users and provides a fallback for users with no JavaScript."),n.createElement(u.Z,null,n.createElement("div",{className:"pure-menu pure-menu-horizontal"},n.createElement("ul",{className:"pure-menu-list"},n.createElement("li",{className:"pure-menu-item pure-menu-selected"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Home")),n.createElement("li",{className:"pure-menu-item pure-menu-has-children pure-menu-allow-hover"},n.createElement("a",{href:"#",id:"menuLink1",className:"pure-menu-link"},"Contact"),n.createElement("ul",{className:"pure-menu-children"},n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Email")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Twitter")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Tumblr Blog"))))))),n.createElement(s.Z,{heading:"Vertical Menu with Submenus"}),n.createElement("p",null,"The same construct used to create dropdowns works in vertical menus as well. You may nest submenus, but keep in mind that complex menus can present usability challenges on small screens."),n.createElement(u.Z,null,n.createElement("div",{className:"pure-menu custom-restricted-width"},n.createElement("ul",{className:"pure-menu-list"},n.createElement("li",{className:"pure-menu-item pure-menu-selected"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Flickr")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Messenger")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Sports")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Finance")),n.createElement("li",{className:"pure-menu-item pure-menu-has-children"},n.createElement("a",{href:"#",id:"menuLink1",className:"pure-menu-link"},"More"),n.createElement("ul",{className:"pure-menu-children"},n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Autos")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Flickr")),n.createElement("li",{className:"pure-menu-item pure-menu-has-children"},n.createElement("a",{href:"#",id:"menuLink1",className:"pure-menu-link"},"Even More"),n.createElement("ul",{className:"pure-menu-children"},n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Foo")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Bar")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Baz"))))))))),n.createElement(s.Z,{heading:"Scrollable Horizontal Menu"}),n.createElement("p",null,"To create a scrollable horizontal menu, add the ",n.createElement("code",null,"pure-menu-scrollable")," class name. When there isn't enough room, the menu items can be scrolled or flicked. Dropdown menus are not supported. If you would like momentum-based scrolling we recommend using a JS library like ",n.createElement("a",{href:"https://github.com/ilyashubin/scrollbooster"},"scrollbooster")," to add such effects."),n.createElement(u.Z,null,n.createElement("div",{className:"pure-menu pure-menu-horizontal pure-menu-scrollable"},n.createElement("a",{href:"#",className:"pure-menu-link pure-menu-heading"},"Yahoo"),n.createElement("ul",{className:"pure-menu-list"},n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Home")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Flickr")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Messenger")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Sports")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Finance")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Autos")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Beauty")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Movies")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Small Business")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Cricket")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Tech")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"World")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"News")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Support"))))),n.createElement(s.Z,{heading:"Scrollable Vertical Menu"}),n.createElement("p",null,"To create a scrollable vertical menu, limit the height of your menu, and then add the ",n.createElement("code",null,"pure-menu-scrollable")," class name. The menu items can be scrolled or flicked. Submenus are not supported."),n.createElement(u.Z,null,n.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                        /* Customization to limit height of the menu */\n                        .custom-restricted {\n                            height: 160px;\n                            width: 150px;\n                            border: 1px solid gray;\n                            border-radius: 4px;\n                        }\n                    "}}),n.createElement("div",{className:"pure-menu pure-menu-scrollable custom-restricted"},n.createElement("a",{href:"#",className:"pure-menu-link pure-menu-heading"},"Yahoo"),n.createElement("ul",{className:"pure-menu-list"},n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Home")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Flickr")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Messenger")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Sports")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Finance")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Autos")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Beauty")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Movies")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Small Business")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Cricket")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Tech")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"World")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"News")),n.createElement("li",{className:"pure-menu-item"},n.createElement("a",{href:"#",className:"pure-menu-link"},"Support"))))),n.createElement(s.Z,{heading:"Responsive Menus That Hide"}),n.createElement("p",null,"Check out our ",n.createElement(l.Z,{to:"/layouts/"},"Layout Examples")," to see how you can use Pure as a foundation for more complex menus, such as:"),n.createElement(u.Z,null,n.createElement("ul",null,n.createElement("li",null,n.createElement("a",{href:"/layouts/side-menu/"},"Responsive Vertical Menu"),", which collapses behind a hamburger, similar to the menu on this Pure website."),n.createElement("li",null,n.createElement("a",{href:"/layouts/tucked-menu/"},"Responsive Horizontal-Scrollable Menu"),", which tucks out of the way on small screens."),n.createElement("li",null,n.createElement("a",{href:"/layouts/tucked-menu-vertical/"},"Responsive Horizontal-to-Vertical Menu"),", which slides out of view.")))))}}}]);