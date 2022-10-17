import { gsap } from "gsap";
import { useEffect } from "react";

export default function Animation(){
    
    const tl = gsap.timeline();

    useEffect(()=>{
      const imgNav = document.querySelectorAll('nav img');
      const allNavUl = document.querySelectorAll('nav ul');
      const divImg = document.querySelectorAll('#logo img');
  
      tl
      
      .to("#h1_vignes", {autoAlpha: 1, y:10,opacity:1, duration:0.75, delay:0.2})
      .to("#middle-line", {autoAlpha: 1, height:"150px", durantion:1.2})
      .to("#grape_logo", {autoAlpha: 1, y:"15px", duration:0.75}, "-=0.2")
      .to("#button_discover", {autoAlpha: 1,y:"12px", duration:0.4},"-=0.3")
      .to("#copyright", {autoAlpha: 1, duration: 0.4})
      .to(divImg, {autoAlpha: 1, duration:0.4, stagger:0.2}, '<')
      .to(allNavUl, {autoAlpha: 1, y:0, duration: 0.4, stagger:0.1})
      .to(imgNav, {autoAlpha: 1, y:0})
  
    })

}