// Lyte.Router.configureDefaults({baseURL:'',history : "html5"});

Lyte.Router.configureRoutes(function(){
	this.route('index',{path:'/tweets/svg'});
});

Lyte.Router.beforeRouteTransition = function() {
	//console.log('before Route Change');
}

Lyte.Router.afterRouteTransition = function() {
	//console.log('after Route Change');
}


Lyte.Router.registerRoute('index',{
	model : function()	{
		return {

		}
	},
	renderTemplate : function()	{
		return {outlet : "#outlet",component : "responsive-webpage"}
	}
});

Lyte.Component.register("responsive-webpage",{
_template:"<template tag-name=\"responsive-webpage\"> <div class=\"mainContent {{bgcolor}}\"> <div id=\"header\"> <h2> *** Responsive Web Page *** </h2> </div> <div class=\"flexboxView\"> <div id=\"twitter\"> <a class=\"twitter-timeline\" href=\"https://twitter.com/zoho?ref_src=twsrc%5Etfw\">Tweets by zoho</a> </div> <div id=\"zoho\"> <div class=\"dropdown\"> <button class=\"dropbtn\">ANIMATIONS</button> <div class=\"dropdown-content\"> <div onclick=\"{{action('applyAnimation','animateZoom')}}\">ZOOM OUT</div> <div onclick=\"{{action('applyAnimation','animateZoomIn')}}\">ZOOM IN</div> <div onclick=\"{{action('applyAnimation','animateVertical')}}\">VERTICAL MOVE</div> <div onclick=\"{{action('applyAnimation','animateHorizontal')}}\">HORIZONTAL MOVE</div> <div onclick=\"{{action('applyAnimation','animateRotate')}}\">ROTATE</div> </div> </div> <div class=\"svgContainer\"> <svg viewBox=\"0 0 512 177\" class=\"zohoLogo\"> <defs> <linearGradient id=\"a\" class=\"letterLastO\"> <stop stop-color=\"#FFE513\" offset=\".562%\"></stop> <stop stop-color=\"#FDB924\" offset=\"100%\"></stop> </linearGradient> <linearGradient id=\"b\" class=\"letterH\"> <stop stop-color=\"#008CD2\" offset=\".562%\"></stop> <stop stop-color=\"#00649D\" offset=\"100%\"></stop> </linearGradient> <linearGradient id=\"c\" class=\"letterO\"> <stop stop-color=\"#26A146\" offset=\"0%\"></stop> <stop stop-color=\"#008A52\" offset=\"100%\"></stop> </linearGradient> <linearGradient id=\"d\" class=\"letterZ\"> <stop stop-color=\"#D92231\" offset=\"0%\"></stop> <stop stop-color=\"#BA2234\" offset=\"100%\"></stop> </linearGradient> </defs> <g class=\"letterLastO\"> <path d=\"M512 37.7v121.4l-16.8 16.4V56.7l16.8-19z\" fill=\"#E79225\"></path> <path d=\"M401.9 37.8l-17.4 18.9.9 1.2 109.1-.4 1-.8 16.5-19-110.1.1z\" fill=\"#FFF16D\"></path> <path fill=\"url(#a)\" d=\"M.5 19.7h111v118.9H.5z\" transform=\"translate(384 37)\"></path> <path d=\"M478.6 99.5c-2.2-5.5-5.5-10.5-9.8-14.8-4.1-4.2-8.7-7.4-13.9-9.5-5.1-2.1-10.6-3.2-16.6-3.2-6 0-11.6 1.1-16.7 3.2-5.2 2.1-9.8 5.3-13.9 9.5-4.3 4.3-7.5 9.3-9.7 14.8-2.2 5.5-3.2 11.5-3.2 18.1 0 6.4 1.1 12.4 3.3 18 2.2 5.6 5.4 10.6 9.7 15 4 4.1 8.6 7.2 13.7 9.3 5.1 2.1 10.8 3.2 16.9 3.2 5.9 0 11.4-1.1 16.5-3.2s9.8-5.2 13.9-9.3c4.3-4.4 7.6-9.4 9.8-14.9 2.2-5.5 3.3-11.6 3.3-18 0-6.7-1.1-12.7-3.3-18.2zm-22.9 39.2c-4.3 5.1-10 7.7-17.4 7.7-7.4 0-13.2-2.6-17.5-7.7-4.3-5.1-6.4-12.2-6.4-21.2 0-9.2 2.2-16.3 6.4-21.5 4.3-5.2 10-7.7 17.5-7.7 7.4 0 13.1 2.6 17.4 7.7 4.2 5.2 6.4 12.3 6.4 21.5 0 9-2.1 16.1-6.4 21.2z\" fill=\"#FFF\"></path> </g> <g class=\"letterH\"> <path d=\"M373.6 27.8v.6l14.2 109.1-8.3 23-1.1-.8-14.6-104.6.3-1.4 9.1-25.3.4-.6z\" fill=\"#009ADA\"></path> <path d=\"M264.3 43l109.3-15.2-9.2 26.2-1.3 1.4-102.2 15 .5-18.7 2.9-8.7z\" fill=\"#91C9ED\"></path> <path d=\"M107.4 27l15.1 106.5-107.7 15.1L.3 45.7l6.3-4.9L107.4 27z\" fill=\"url(#b)\" transform=\"translate(257 27)\"></path> <path d=\"M346.1 74.4c-.5-3.3-1.6-5.8-3.4-7.5-1.5-1.3-3.3-2-5.4-2-.5 0-1.1 0-1.7.1-2.8.4-4.9 1.7-6.2 3.8-1 1.5-1.4 3.4-1.4 5.6 0 .8.1 1.7.2 2.6l3.9 27.7-31 4.6-3.9-27.7c-.5-3.2-1.6-5.7-3.4-7.4-1.5-1.4-3.3-2.1-5.3-2.1-.5 0-1 0-1.5.1-2.9.4-5.1 1.7-6.5 3.8-1 1.5-1.4 3.4-1.4 5.6 0 .8.1 1.7.2 2.7l10.6 72.1c.5 3.3 1.6 5.8 3.6 7.5 1.5 1.3 3.3 1.9 5.5 1.9.6 0 1.2 0 1.8-.1 2.7-.4 4.7-1.7 6-3.8.9-1.5 1.3-3.3 1.3-5.4 0-.8-.1-1.7-.2-2.6l-4.3-28.5 31-4.6 4.3 28.5c.5 3.3 1.6 5.8 3.5 7.4 1.5 1.3 3.3 2 5.4 2 .5 0 1.1 0 1.7-.1 2.8-.4 4.9-1.7 6.2-3.8.9-1.5 1.4-3.3 1.4-5.5 0-.8-.1-1.7-.2-2.6l-10.8-72.3z\" fill=\"#FFF\"></path> </g> <g class=\"letterO\"> <path d=\"M162 0l-38.9 92.4 5.3 40.6.3-.1 43.7-98.3-.2-2.1-9.4-31.2L162 0z\" fill=\"#66BF6B\"></path> <path d=\"M162 0l10.1 33.9.2.7 96.2 43.1.3-.2-8.2-32.4L162 0z\" fill=\"#98D0A0\"></path> <path d=\"M49.1 33.9l96.7 43.6-43.7 99.1L5.4 133l43.7-99.1z\" fill=\"url(#c)\" transform=\"translate(123)\"></path> <path d=\"M239.5 85.5c-2.1-5.6-5-10.4-8.8-14.4-3.8-4-8.4-7.2-13.8-9.5s-10.8-3.4-16.3-3.4h-.3c-5.6 0-11.1 1.3-16.5 3.7-5.7 2.5-10.6 5.9-14.8 10.4-4.2 4.4-7.6 9.8-10.2 16-2.6 6.1-4 12.3-4.3 18.4v2.1c0 5.4.9 10.7 2.8 15.9 2 5.5 4.9 10.2 8.7 14.2 3.8 4 8.5 7.2 14.1 9.5 5.3 2.3 10.7 3.4 16.2 3.4h.1c5.5 0 11-1.2 16.4-3.5 5.7-2.5 10.7-6 14.9-10.5 4.2-4.4 7.7-9.7 10.3-15.9 2.6-6.2 4-12.3 4.3-18.4v-1.8c.1-5.5-.8-10.9-2.8-16.2zm-19.3 28.8c-3.6 8.6-8.5 14.5-14.4 17.7-3.2 1.7-6.5 2.6-9.8 2.6-2.9 0-6-.7-9.1-2-6.8-2.9-11-7.5-12.8-14.1-.6-2.2-.9-4.5-.9-6.9 0-4.8 1.2-10.1 3.6-15.8 3.7-8.8 8.6-14.8 14.5-18.1 3.2-1.8 6.5-2.6 9.8-2.6 3 0 6 .7 9.2 2 6.7 2.9 10.9 7.5 12.7 14.1.6 2.1.9 4.4.9 6.8 0 5-1.2 10.4-3.7 16.3z\" fill=\"#FFF\"></path> </g> <g class=\"letterZ\"> <path d=\"M115.4 15.7l15.8 105.8-7.2 37.2-1-1.3-15.4-102.2v-2l6.8-35.7 1-1.8z\" fill=\"#760D16\"></path> <path d=\"M0 70.4L7.5 33l107.9-17.3-7.3 38.1v2.5L1.3 71.4l-1.3-1z\" fill=\"#EF463E\"></path> <path d=\"M108.1 38.8L124 143.7 17.2 160.4 0 55.4l108.1-16.6z\" fill=\"url(#d)\" transform=\"translate(0 15)\"></path> <path d=\"M96.6 142c-.8-1-2-1.7-3.4-2.2-1.4-.5-3.1-.7-5.2-.7-1.9 0-4.1.2-6.5.6l-28.2 4.8c.3-2.2 1.4-5 3.3-8.5 2.1-3.9 5.3-8.6 9.4-14 1.4-1.9 2.5-3.3 3.3-4.3.5-.7 1.3-1.6 2.3-2.9 6.5-8.5 10.4-15.4 12-20.8.9-3.1 1.4-6.2 1.6-9.3.1-.9.1-1.7.1-2.5 0-2.2-.2-4.4-.6-6.6-.3-2-.8-3.6-1.5-4.9-.7-1.3-1.5-2.3-2.5-2.9-1.1-.7-2.8-1-4.9-1-1.7 0-3.8.2-6.3.6L36.9 73c-3.9.7-6.9 1.8-8.7 3.6-1.5 1.4-2.2 3.2-2.2 5.2 0 .5 0 1.1.1 1.7.5 2.8 1.9 4.8 4.2 5.8 1.4.6 3 .9 5 .9 1.3 0 2.8-.1 4.4-.4L66.9 85c0 .5.1 1 .1 1.4 0 1.7-.3 3.4-.9 5-.8 2.3-2.8 5.5-6.1 9.6-.9 1.1-2.3 2.9-4.2 5.2-7.4 8.9-12.6 16.5-15.8 22.8-2.3 4.4-3.8 8.6-4.7 12.9-.5 2.5-.8 4.8-.8 7.1 0 1.6.1 3.2.4 4.7.4 2.2.9 4 1.6 5.4.7 1.4 1.7 2.5 2.8 3.1 1.1.6 2.6.8 4.8.8 2.7 0 6.4-.4 11.1-1.2l29.6-5.1c5.2-.9 8.9-2.2 11-3.9 1.7-1.4 2.6-3.3 2.6-5.5 0-.6-.1-1.2-.2-1.8-.2-1.3-.7-2.5-1.6-3.5z\" fill=\"#FFF\"></path> </g> </svg> </div> </div> </div> <div id=\"popupTweet\" class=\"popup\"> <span class=\"close\" onclick=\"{{action('closeTwitterModal')}}\">×</span> <div class=\"popup-tweet\"> <div class=\"popupDiv\" id=\"popupDiv\"> </div> </div> </div> <div id=\"footer\"> <div class=\"themes\"> <div class=\"bgcolor1 rod\" onclick=\"{{action('applyTheme','theme1')}}\"></div> <div class=\"bgcolor2 rod\" onclick=\"{{action('applyTheme','theme2')}}\"></div> <div class=\"bgcolor3 rod\" onclick=\"{{action('applyTheme','theme3')}}\"></div> <div class=\"bgcolor4 rod\" onclick=\"{{action('applyTheme','theme4')}}\"></div> <div class=\"bgcolor5 rod\" onclick=\"{{action('applyTheme','theme5')}}\"></div> <div class=\"bgcolor6 rod\" onclick=\"{{action('applyTheme','theme6')}}\"></div> <div class=\"bgcolor7 rod\" onclick=\"{{action('applyTheme','theme7')}}\"></div> <div class=\"bgcolor8 rod\" onclick=\"{{action('applyTheme','theme8')}}\"></div> <div class=\"bgcolor9 rod\" onclick=\"{{action('applyTheme','theme9')}}\"></div> <div class=\"bgcolor10 rod\" onclick=\"{{action('applyTheme','theme10')}}\"></div> <div class=\"bgcolor11 rod\" onclick=\"{{action('applyTheme','theme11')}}\"></div> <div class=\"bgcolor12 rod\" onclick=\"{{action('applyTheme','theme12')}}\"></div> <div class=\"bgcolor13 rod\" onclick=\"{{action('applyTheme','theme13')}}\"></div> <div class=\"bgcolor14 rod\" onclick=\"{{action('applyTheme','theme14')}}\"></div> <div class=\"bgcolor15 rod\" onclick=\"{{action('applyTheme','theme15')}}\"></div> <div class=\"bgcolor16 rod\" onclick=\"{{action('applyTheme','theme16')}}\"></div> <div class=\"bgcolor17 rod\" onclick=\"{{action('applyTheme','theme17')}}\"></div> <div class=\"bgcolor18 rod\" onclick=\"{{action('applyTheme','theme18')}}\"></div> </div> </div> </div> </template>\n<style>:root {\n    --bgcolor1: #660000;\n    --bgcolor2: #990000;\n    --bgcolor3: #EA4C88;\n    --bgcolor4: #993399;\n    --bgcolor5: #663399;\n    --bgcolor6: #165151;\n    --bgcolor7: #37A5A5;\n    --bgcolor8: #D24143;\n    --bgcolor9: #DE4F5D;\n    --bgcolor10: #07385D;\n    --bgcolor11: #1E5598;\n    --bgcolor12: #2D72D9;\n    --bgcolor13: #018EE0;\n    --bgcolor14: #0099CC;\n    --bgcolor15: #E9A234;\n    --bgcolor16: #996633;\n    --bgcolor17: #553A48;\n    --bgcolor18: #313949;\n    --color1: whitesmoke;\n}\n\nbody {\n    margin: 0;\n}\n\nresponsive-webpage > .mainContent {\n    height: 100vh;\n    display: flex;\n    flex-flow: column;\n}\n\nresponsive-webpage > .mainContent > #header > h2{\n    font-size: 27px;\n    color: var(--color2);\n}\n\nresponsive-webpage > .mainContent > #header {\n    text-align: center;\n    height: 60px;\n    background-color: var(--color1);\n}\n\n.flexboxView {\n    flex: 1;\n    display: flex;\n    flex-direction: row;\n}\n\n.flexboxView > div {\n    flex: 1;\n    margin: 3px;\n    height: 85vh;\n}\n\nresponsive-webpage > .mainContent > .flexboxView > div {\n    border: 1px solid var(--color1);\n    border-radius: 5px;\n}\n\nresponsive-webpage > .mainContent > .flexboxView > #twitter {\n    overflow: scroll;\n}\n\n/** Theme Selector */\n.themes {\n    float: right;\n    margin: 20px 2px;\n}\n\n.rod {\n    width: 30px;\n    height: 15px;\n    float: left;\n    border-bottom: solid 2px #fff;\n}\n\n.theme1 {\n    --color1: #660000;\n    --color2: whitesmoke;\n}\n\n.theme2 {\n    --color1: #990000;\n    --color2: whitesmoke;\n}\n\n.theme3 { \n    --color1: #EA4C88;\n}\n\n.theme4 { \n    --color1: #993399;\n}\n\n.theme5 { \n    --color1: #663399;\n}\n\n.theme6 { \n    --color1: #165151;\n}\n\n.theme7 { \n    --color1: #37A5A5;\n}\n\n.theme8 { \n    --color1: #D24143;\n}\n\n.theme9 { \n    --color1: #DE4F5D;\n}\n\n.theme10 { \n    --color1: #07385D;\n    --color2: whitesmoke;\n}\n\n.theme11 { \n    --color1: #1E5598;\n}\n\n.theme12 { \n    --color1: #2D72D9;\n}\n\n.theme13 { \n    --color1: #018EE0;\n}\n\n.theme14 { \n    --color1: #0099CC;\n}\n\n.theme15 { \n    --color1: #E9A234;\n}\n\n.theme16 { \n    --color1: #996633;\n}\n\n.theme17 { \n    --color1: #553A48;\n    --color2: whitesmoke;\n}\n\n.theme18 { \n    --color1: #313949;\n    --color2: whitesmoke;\n}\n\n.bgcolor1 { \n    background-color: var(--bgcolor1);\n}\n\n.bgcolor2 { \n    background-color: var(--bgcolor2);\n}\n\n.bgcolor3 { \n    background-color: var(--bgcolor3);\n}\n\n.bgcolor4 { \n    background-color: var(--bgcolor4);\n}\n\n.bgcolor5 { \n    background-color: var(--bgcolor5);\n}\n\n.bgcolor6 { \n    background-color: var(--bgcolor6);\n}\n\n.bgcolor7 { \n    background-color: var(--bgcolor7);\n}\n\n.bgcolor8 { \n    background-color: var(--bgcolor8);\n}\n\n.bgcolor9 { \n    background-color: var(--bgcolor9);\n}\n\n.bgcolor10 { \n    background-color: var(--bgcolor10);\n}\n\n.bgcolor11 { \n    background-color: var(--bgcolor11);\n}\n\n.bgcolor12 { \n    background-color: var(--bgcolor12);\n}\n\n.bgcolor13 { \n    background-color: var(--bgcolor13);\n}\n\n.bgcolor14 { \n    background-color: var(--bgcolor14);\n}\n\n.bgcolor15 { \n    background-color: var(--bgcolor15);\n}\n\n.bgcolor16 { \n    background-color: var(--bgcolor16);\n}\n\n.bgcolor17 { \n    background-color: var(--bgcolor17);\n}\n\n.bgcolor18 { \n    background-color: var(--bgcolor18);\n}\n\n/** Twitter Tweets PopUp CSS Styling */\n.popup {\n    display: none;\n    position: fixed; \n    padding-top: 5%;\n    z-index: 1; \n    width: 100%;\n    height: 100%; \n    background-color: gray; \n    background-color: rgba(0,0,0,0.5);\n}\n\n.popup-tweet {\n    position: relative;\n    background-color: #fefefe;\n    margin: auto;\n    border: 1px solid #888;\n    border-radius: 10px;\n    width: 45%;\n    height: 80%;\n    overflow: auto;\n}\n\n.close {\n    color: whitesmoke;\n    font-size: 3rem;\n    font-weight: bold;\n    position: fixed;\n    top: 1.8rem;\n    right: 25rem;\n}\n\n.close:hover {\n    cursor: pointer;\n    color: black;\n}\n \n/** DropDown CSS Styling */\n.dropbtn {\n    position: relative;\n    background-color: var(--color1);\n    color: var(--color2);\n    margin: 3rem 0 0 20rem;\n    padding: 16px;\n    font-size: 16px;\n    width: 160px;\n    border-radius: 5px;\n  }\n  \n  .dropdown {\n    width: 160px;\n    position: relative;\n    border-radius: 5px;\n  }\n  \n  .dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f1f1f1;\n    min-width: 160px;\n    margin-left: 20rem;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n  }\n  \n  .dropdown-content div {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n  }\n  \n  .dropdown-content div:hover {\n      background-color: #ddd;\n    }\n  \n  .dropdown:hover .dropdown-content {\n      display: block;\n      cursor: pointer;\n    }\n\n    .displayNone {\n        display: none;\n    }\n  \n  .dropdown:hover .dropbtn {\n      opacity: 0.7;\n    }\n\n  /** STOP Button CSS Styling */\n  .stopbtn {\n    position: relative;\n    background-color: var(--color1);\n    color: var(--color2);\n    margin: 7rem 0 0 20rem;\n    padding: 16px;\n    font-size: 16px;\n    min-width: 160px;\n    border-radius: 5px;\n  }\n\n  /** SVG CSS Styling */\n\n  .zohoLogo {\n    position: relative;\n    margin: 7rem 0 0 12rem ;\n    width: 400px;\n    height: 200px;\n    overflow: visible;\n  }\n\n    /** Animation Zoom Out */\n    @keyframes zoom {\n        0%\t{transform: scale(1);}\n        100%\t{transform: scale(1.25);}\n    }\n\n    .animateZoom .letterZ {\n        animation: zoom 1s ease-in-out;\n        animation-iteration-count: infinite;\n    }\n\n    .animateZoom .letterO {\n        animation: zoom 1s ease-in-out;\n        animation-delay: 1s;\n        animation-iteration-count: infinite;\n    }\n\n    .animateZoom .letterH {\n        animation: zoom 1s ease-in-out;\n        animation-delay: 2s;\n        animation-iteration-count: infinite;\n    }\n\n    .animateZoom .letterLastO {\n        animation: zoom 1s ease-in-out;\n        animation-delay: 3s;\n        animation-iteration-count: infinite;\n    }\n\n    /** Animation Zoom in */\n    @keyframes zoomIn {\n        0%\t{transform: scale(1);}\n        100%\t{transform: scale(0.75);}\n    }\n\n    .animateZoomIn .letterZ {\n        animation: zoomIn 1s ease-in;\n        animation-iteration-count: infinite;\n    }\n\n    .animateZoomIn .letterO {\n        animation: zoomIn 1s ease-in;\n        animation-delay: 1s;\n        animation-iteration-count: infinite;\n    }\n\n    .animateZoomIn .letterH {\n        animation: zoomIn 1s ease-in;\n        animation-delay: 2s;\n        animation-iteration-count: infinite;\n    }\n\n    .animateZoomIn .letterLastO {\n        animation: zoomIn 1s ease-in;\n        animation-delay: 3s;\n        animation-iteration-count: infinite;\n    }\n\n    /** Animation Vertical CSS Styling */\n    @keyframes upDown {\n        from {top: -120px;}\n        to {top: 240px;}\n    }\n\n    .animateVertical {\n        animation: upDown 2s infinite;\n        animation-direction: alternate;\n    }\n\n    /** Animation Horizontal CSS Styling */\n    @keyframes side {\n        from {left: -190px;}\n        to {left: 200px;}\n    }\n\n    .animateHorizontal {\n        animation: side 2s infinite;\n        animation-direction: alternate;\n    }\n\n    /** Animation Rotate CSS Styling */\n    @keyframes rotate { \n        50% {\n            transform: scaleX(-1);\n            /* transform: rotate(360deg);\n            transform-origin: center; */\n        }\n    }\n\n    /* .animateRotate .letterZ {\n        animation: rotate 1s;\n    }\n    \n    .animateRotate .letterO {\n        animation: rotate 1s;\n        animation-delay: 1s;\n    }\n    \n    .animateRotate .letterH {\n        animation: rotate 1s;\n        animation-delay: 2s;\n    }\n    \n    .animateRotate .letterLastO {\n        animation: rotate 1s;\n        animation-delay: 3s;\n    }\n     */\n    .animateRotate {\n        animation: rotate 2s infinite;\n    }</style>",
_dynamicNodes : [{"type":"attr","position":[1]},{"type":"attr","position":[1,3,3,1,3,1]},{"type":"attr","position":[1,3,3,1,3,3]},{"type":"attr","position":[1,3,3,1,3,5]},{"type":"attr","position":[1,3,3,1,3,7]},{"type":"attr","position":[1,3,3,1,3,9]},{"type":"attr","position":[1,5,1]},{"type":"attr","position":[1,7,1,1]},{"type":"attr","position":[1,7,1,3]},{"type":"attr","position":[1,7,1,5]},{"type":"attr","position":[1,7,1,7]},{"type":"attr","position":[1,7,1,9]},{"type":"attr","position":[1,7,1,11]},{"type":"attr","position":[1,7,1,13]},{"type":"attr","position":[1,7,1,15]},{"type":"attr","position":[1,7,1,17]},{"type":"attr","position":[1,7,1,19]},{"type":"attr","position":[1,7,1,21]},{"type":"attr","position":[1,7,1,23]},{"type":"attr","position":[1,7,1,25]},{"type":"attr","position":[1,7,1,27]},{"type":"attr","position":[1,7,1,29]},{"type":"attr","position":[1,7,1,31]},{"type":"attr","position":[1,7,1,33]},{"type":"attr","position":[1,7,1,35]}],









_observedAttributes :["bgcolor","previousClass"],
	data : function(){
		return {
			bgcolor : Lyte.attr("string",{'default':'theme7'}),
			previousClass : Lyte.attr("string")
		}
	},

	init : function() {
		window.responsiveWebpage = this;
		twttr.ready(function(event){
			twttr.events.bind('loaded',function (event) {
				event.widgets.forEach(function (widget) {
					if(widget.id == "twitter-widget-0"){
						widget.contentWindow.addEventListener("click", function(event1){
							event1.preventDefault();
							let tweetId = responsiveWebpage.actions.parentNodeOfClass(event1.target, "timeline-Tweet").dataset.tweetId;
							responsiveWebpage.actions.openTwitterModal(tweetId);
						});
					}
				});			   
			});
			
		});

		document.addEventListener("DOMContentLoaded", function(event) { 
			document.getElementById("popupTweet").addEventListener("click", function(event){
				if(event.target.id != "popupDiv"){
					this.closeTwitterModal();
				}
			});		
		});
	},
	
	createTweet : function(response){
		let modelContent = document.getElementById("popupDiv");
		modelContent.innerHTML = response.html;
		twttr.widgets.load();	
	},

	removeAnimation : async function(option) {
		let svgZoho = this.$node.querySelector('.zohoLogo');
		svgZoho.classList.remove(option);
	},	

	actions : {
		applyTheme : function(bgcolor) {
			this.setData('bgcolor',bgcolor);
		},

		openTwitterModal : function(tweetId){
			let script = document.createElement('script');
			let url = "https://publish.twitter.com/oembed?url=https://twitter.com/zoho/status/"+tweetId;
			script.src = url + "&callback=responsiveWebpage.createTweet" ;
			document.getElementsByTagName('head')[0].appendChild(script);
		
			let modal = document.getElementById('popupTweet');	
			modal.style.display = "block";
			sessionStorage.setItem('lastTwitterId', tweetId);
		},
	
		closeTwitterModal : function(){
			let modal = document.getElementById('popupTweet');
			modal.style.display = "none";
		},
		
		parentNodeOfClass : function(element, classname) {
			if (element.className.split(' ').indexOf(classname)>=0) {
				return element;
			} 
			else {
				return element.parentNode && this.parentNodeOfClass(element.parentNode, classname);
			}
		},

		applyAnimation : function(option){
			let svgZoho = this.$node.querySelector('.zohoLogo');
			svgZoho.classList.remove(this.data.previousClass);
			svgZoho.classList.add(option);
			this.setData('previousClass',option);
		}
	}
});


Lyte.Component.register("twitter-popup", {
_template:"<template tag-name=\"twitter-popup\"> <blockquote class=\"twitter-tweet\"><p lang=\"en\" dir=\"ltr\">Sunsets don't get much better than this one over <a href=\"https://twitter.com/GrandTetonNPS?ref_src=twsrc%5Etfw\">@GrandTetonNPS</a>. <a href=\"https://twitter.com/hashtag/nature?src=hash&amp;ref_src=twsrc%5Etfw\">#nature</a> <a href=\"https://twitter.com/hashtag/sunset?src=hash&amp;ref_src=twsrc%5Etfw\">#sunset</a> <a href=\"http://t.co/YuKy2rcjyU\">pic.twitter.com/YuKy2rcjyU</a></p>— US Department of the Interior (@Interior) <a href=\"https://twitter.com/Interior/status/463440424141459456?ref_src=twsrc%5Etfw\">May 5, 2014</a></blockquote> <script async=\"\" src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script> </template>",
_dynamicNodes : [],


_observedAttributes :["tweetLink"],
	data : function(){
		return {
			tweetLink: Lyte.attr('string')
		};	
	}
});
