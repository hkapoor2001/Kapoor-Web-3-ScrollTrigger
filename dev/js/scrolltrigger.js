import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, ScrollTrigger);


const mainTL = gsap.timeline({scrollTrigger: {trigger:"#preloadersection", pin: true, scrub: true}});

function innerframefade(){
    const tl = gsap.timeline();
    tl.from(".innerframe",{alpha:0})
    .to(".innerframe",{alpha:1})
    return tl;
}


function outerframedraw(){
    const tl = gsap.timeline();

    tl.from(".outerframe", {drawSVG: "0"})

    return tl;
}

export function drawpainting(painting){
    const tl = gsap.timeline();

    tl.from(painting,{drawSVG: "0", ease:"none"})

    return tl;
}

export function rotate(painting){
    const tl = gsap.timeline();

    tl.from(painting,{rotation: "0", alpha: 1})

    tl.to(painting,{rotation: "90_cw", ease: "none", transformOrigin: "50% 50%", alpha: 0},"1same")

    tl.to("#innerframe",{rotation: "90_cw", ease: "none", transformOrigin: "50% 50%"},"1same")

    tl.to("#outerframe",{rotation: "90_cw", ease: "none", transformOrigin: "50% 50%"},"1same")

    return tl;
}



function fade(){
    const tl = gsap.timeline();

    tl.to("#preloadersection",{autoAlpha:0})

    return tl;
}





mainTL.add(innerframefade())
      .add (outerframedraw())
      .add(drawpainting())
      .add(rotate())
      .add(drawpainting())
      .add (rotate())
      .add(drawpainting())
      .add (rotate())
      .add(drawpainting())
      .add (rotate())
      .add(drawpainting())
      .add (rotate("same"))
      .add (fade("same"))


GSDevTools.create();