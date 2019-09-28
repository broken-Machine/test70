// window.addEventListener('resize', onResize, false);
// function onResize() {
// }
var fishStrings = [
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197.31 30.31"><g id="图层_2" data-name="图层 2"><g id="大鱼"><polygon points="34.92 14.99 0.04 6.25 0 23.58 34.92 14.99" fill="#fcba63"/><path d="M116.08,30.31c44.84.1,81.23-15,81.23-15S161,.09,116.14,0,34.92,15,34.92,15,71.24,30.22,116.08,30.31ZM172.41,12a4.21,4.21,0,1,1-4.21,4.2A4.21,4.21,0,0,1,172.41,12Z" fill="#aa3e23"/></g></g></svg>',
  '<svg viewBox="0 0 197.31 30.31" xmlns="http://www.w3.org/2000/svg"><g fill="#7a8a2e"><path d="m34.92 14.99-34.88-8.74-.04 17.33z"/><path d="m116.08 30.31c44.84.1 81.23-15 81.23-15s-36.31-15.22-81.17-15.31-81.22 15-81.22 15 36.32 15.22 81.16 15.31zm56.33-18.31a4.21 4.21 0 1 1 -4.21 4.2 4.21 4.21 0 0 1 4.21-4.2z"/></g></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197.31 30.31"><title>资源 17</title><g id="图层_2" data-name="图层 2"><g id="大鱼"><polygon points="34.92 14.99 0.04 6.25 0 23.58 34.92 14.99" fill="#fcba63"/><path d="M116.08,30.31c44.84.1,81.23-15,81.23-15S161,.09,116.14,0,34.92,15,34.92,15,71.24,30.22,116.08,30.31ZM172.41,12a4.21,4.21,0,1,1-4.21,4.2A4.21,4.21,0,0,1,172.41,12Z" fill="#1461ad"/></g></g></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197.31 30.31"><title>资源 29</title><g id="图层_2" data-name="图层 2"><g id="大鱼"><polygon points="34.92 14.99 0.04 6.25 0 23.58 34.92 14.99" fill="#aa3e23"/><path d="M116.08,30.31c44.84.1,81.23-15,81.23-15S161,.09,116.14,0,34.92,15,34.92,15,71.24,30.22,116.08,30.31ZM172.41,12a4.21,4.21,0,1,1-4.21,4.2A4.21,4.21,0,0,1,172.41,12Z" fill="#efae39"/></g></g></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197.31 30.31"><title>资源 19</title><g id="图层_2" data-name="图层 2"><g id="大鱼"><polygon points="34.92 14.99 0.04 6.25 0 23.58 34.92 14.99" fill="#aa3e23"/><path d="M116.08,30.31c44.84.1,81.23-15,81.23-15S161,.09,116.14,0,34.92,15,34.92,15,71.24,30.22,116.08,30.31ZM172.41,12a4.21,4.21,0,1,1-4.21,4.2A4.21,4.21,0,0,1,172.41,12Z" fill="#7a8a2e"/></g></g></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197.31 30.31"><title>资源 21</title><g id="图层_2" data-name="图层 2"><g id="大鱼"><polygon points="34.92 14.99 0.04 6.25 0 23.58 34.92 14.99" fill="#fcba63"/><path d="M116.08,30.31c44.84.1,81.23-15,81.23-15S161,.09,116.14,0,34.92,15,34.92,15,71.24,30.22,116.08,30.31ZM172.41,12a4.21,4.21,0,1,1-4.21,4.2A4.21,4.21,0,0,1,172.41,12Z" fill="#eab3a4"/></g></g></svg>'
];
var fishSvgString = fishStrings[0];
var config = (isMobile.any) ? {
    w: 750,
    h: 1334,
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    trans: {x: 0, y: 0}, // anim canvas trans
} : {
    w: 750,
    h: 1334,
    // windowWidth: 750 / 1334 * window.innerHeight,
    // windowHeight: window.innerHeight,
    trans: {x: 0, y: 0}, // anim canvas trans
};

var positions = {
    // random1: [],
    // random: []
};

if (isMobile.any) {
    $('body').addClass('mobile');
} else {
    $('body').addClass('pc');
}
