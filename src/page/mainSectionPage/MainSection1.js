import "../../scss/main.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger) //플러그인 꼭 연결해줘야함 안하면 스크롤 트리거가 작동이 안됨

function MainSection1(){

    useGSAP(()=>{

        // text 교체 애니
        const main1_Text = document.querySelectorAll('.mainSection1 .mTextArea > p');
  
        let textAni = gsap.timeline({
            scrollTrigger: {
            trigger: ".mainSection1",
            start: "+=200 top",
            end:"+=1900",
            markers:false, //가상으로 스크롤이벤트 범위를 보여줌
            scrub:true,
            }
        });
        textAni.to(main1_Text, {opacity:1, stagger:3, duration: 0.7});


        // 맥이미지 교체 애니
        const main1_Images = document.querySelectorAll('.mainSection1 .imgAni > img');
  
        let imagesAni = gsap.timeline({
            scrollTrigger: {
            trigger: ".mainSection1",
            start: "top top",
            end:"+=3000",
            pin:true,
            pinSpacing:true,
            markers:false, //가상으로 스크롤이벤트 범위를 보여줌
            scrub:true,
            }
        });
        imagesAni.to(main1_Images, {opacity:1, stagger:43, duration: 0.2});
    });

    return(
        <section className="mainSection1">
            <div className="sectionContent">
                <div className="introCopy">
                    <p className="s">Mac Studio</p>
                    <div className="mTextArea">
                        <p className="m">강력함의 집약체.</p>
                        <p className="m">놀라운 콤팩트함.</p>
                        <p className="m">빈틈없는 연결성.</p>
                    </div>
                </div>
                <div className="imgAni">
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0000.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0001.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0002.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0003.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0004.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0005.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0006.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0007.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0008.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0009.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0010.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0011.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0012.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0013.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0014.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0015.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0016.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0017.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0018.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0019.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0020.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0021.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0022.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0023.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0024.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0025.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0026.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0027.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0028.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0029.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0030.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0031.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0032.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0033.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0034.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0035.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0036.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0037.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0038.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0039.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0040.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0041.jpg`} alt=""/>
                    <img src={`${process.env.PUBLIC_URL}/images/hero/0042.jpg`} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default MainSection1;