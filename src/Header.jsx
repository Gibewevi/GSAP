// typical import
import gsap from "gsap";
import { useEffect } from "react";

export default function Header(){

    useEffect(()=>{
        const timeline = gsap.timeline();
        timeline.to("#ethereum",{rotation: 360, duration: 5, y: 100, ease: "elastic.out(1, 0.3)"});
    })

    return(
            <div className="border border-2 border-red-400 max-w-4xl mx-auto flex justify-center items-center p-10">
                <img id="ethereum" src="./ethereum.png" className="w-[100px] mx-auto"/>
            </div>
        )
}