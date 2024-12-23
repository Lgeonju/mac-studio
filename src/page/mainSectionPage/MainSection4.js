import "../../scss/main.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger) //플러그인 꼭 연결해줘야함 안하면 스크롤 트리거가 작동이 안됨

function MainSection4(){

    useGSAP(()=>{

        const main4_Images = document.querySelectorAll('.mainSection4 .imgAni > img');
  
        let imagesAni2 = gsap.timeline({
            scrollTrigger: {
            trigger: ".mainSection4",
            start: "top top",
            end:"bottom top",
            pin:true,
            pinSpacing:true,
            markers:false, //가상으로 스크롤이벤트 범위를 보여줌
            scrub:true,
            }
        });
        imagesAni2.to(main4_Images, {opacity:1, stagger:6, duration: 10});
    });

    return(
        <section className="mainSection4">
            <div className="sectionContent">
                <div className="introCopy">적당한 크기.</div>
                <div className="imgAni">
                    <img src={`${process.env.PUBLIC_URL}/images/xrayMac/001.jpg`} alt="맥이미지"/>
                    <img src={`${process.env.PUBLIC_URL}/images/xrayMac/002.jpg`} alt="맥이미지"/>
                    <img src={`${process.env.PUBLIC_URL}/images/xrayMac/003.jpg`} alt="맥이미지"/>
                    <img src={`${process.env.PUBLIC_URL}/images/xrayMac/004.jpg`} alt="맥이미지"/>
                    <img src={`${process.env.PUBLIC_URL}/images/xrayMac/005.jpg`} alt="맥이미지"/>
                    <img src={`${process.env.PUBLIC_URL}/images/xrayMac/006.jpg`} alt="맥이미지"/>
                </div>
            </div>
        </section>
    )
}

export default MainSection4;