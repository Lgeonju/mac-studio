import RoundIconbutton from '../../component/button';
import "../../scss/main.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger) //플러그인 꼭 연결해줘야함 안하면 스크롤 트리거가 작동이 안됨

function MainSection2(){
  
    let buttonText = "M2 Max 및 M2 Ultra 심층 탐구";

    useGSAP(()=>{
      
      // width 넓어지는 애니
      gsap.to(".mainSection2 .widthAni",{
        width:"200%",
        duration:2,
        scrollTrigger:{
          trigger:".mainSection2 .widthAni",  //스크롤 할떄 화면 안에 물체가 있으면 인식됨 
          start:"top center", // 물체 start, 스크롤러 start
          end:"800 400", // 물체 end, 스크롤러 end
          markers:false, //가상으로 스크롤이벤트 범위를 보여줌
          scrub:true
        }
      });
      
      // width 좁아지는 애니
      const con1_widthAni2 = gsap.timeline();
      con1_widthAni2.from(".mainSection2 .widthAni2", {width:"200%"})
  
      ScrollTrigger.create({
        animation: con1_widthAni2,
        trigger: '.mainSection3',
        start: '+=3800 center',
        end: "+=500",
        markers:false,
        scrub:true,
      });
  
  
      /* 첫번째 컨텐츠 스크롤 텍스트 애니 */
      const con1_scrollText = gsap.timeline();
      con1_scrollText.from(".mainSection2 .content .scrollAni > .scrollText", {bottom:"-15%"})
      
      ScrollTrigger.matchMedia({

        "(min-width: 427px)": function() {
          ScrollTrigger.create({
            animation: con1_scrollText,
            trigger: '.mainSection2 .content .scrollAni',
            start: 'top top',
            end:"+=2000",
            pin:true,
            pinSpacing:true,
            markers:false,
            scrub:true,
          });

          const con1_scrollText2 = document.querySelectorAll(".mainSection2 .content .scrollAni > .scrollText > li");
  
          let con1_textAni = gsap.timeline({
            scrollTrigger: {
              trigger: ".mainSection2 .content .scrollAni",
              start: "-=20",
              end:"+=300",
              markers:false,
              scrub:true,
            }
          });
          con1_textAni.from(con1_scrollText2, {opacity:0, stagger:5});
      
      
          /* 두번째 컨텐츠 스크롤 텍스트 애니 */
          const con2_scrollText = gsap.timeline();
          con2_scrollText.from(".mainSection2 .content2 .scrollAni > .scrollText", {bottom:"-15%"})
      
          ScrollTrigger.create({
            animation: con2_scrollText,
            trigger: '.mainSection2 .content2 .scrollAni',
            start: 'top top',
            end:"+=2000",
            pin:true,
            pinSpacing:true,
            markers:false,
            scrub:true,
          });
      
      
          const con2_scrollText2 = document.querySelectorAll(".mainSection2 .content2 .scrollAni > .scrollText > li");
      
          let con2_textAni = gsap.timeline({
            scrollTrigger: {
              trigger: ".mainSection2 .content2 .scrollAni",
              start: "-=20",
              end:"+=300",
              markers:false,
              scrub:true,
            }
          });
          con2_textAni.from(con2_scrollText2, {opacity:0, stagger:5});

        },
        "(max-width: 426px)": function() {
          ScrollTrigger.create({
            animation: con1_scrollText,
            trigger: '.mainSection2 .content .scrollAni',
            start: 'top top',
            end:"bottom",
            pin:true,
            pinSpacing:true,
            markers:false,
            scrub:true,
            invalidateOnRefresh: true,
          });

          const con1_scrollText2 = document.querySelectorAll(".mainSection2 .content .scrollAni > .scrollText > li");
  
          let con1_textAni = gsap.timeline({
            scrollTrigger: {
              trigger: ".mainSection2 .content .scrollAni",
              start: "-=20",
              end:"+=300",
              markers:false,
              scrub:true,
            }
          });
          con1_textAni.from(con1_scrollText2, {opacity:0, stagger:5});
      
      
          /* 두번째 컨텐츠 스크롤 텍스트 애니 */
          const con2_scrollText = gsap.timeline();
          con2_scrollText.from(".mainSection2 .content2 .scrollAni > .scrollText", {bottom:"-15%"})
      
          ScrollTrigger.create({
            animation: con2_scrollText,
            trigger: '.mainSection2 .content2 .scrollAni',
            start: 'top top',
            end:"bottom",
            pin:true,
            pinSpacing:true,
            markers:false,
            scrub:true,
            invalidateOnRefresh: true,
          });
      
      
          const con2_scrollText2 = document.querySelectorAll(".mainSection2 .content2 .scrollAni > .scrollText > li");
      
          let con2_textAni = gsap.timeline({
            scrollTrigger: {
              trigger: ".mainSection2 .content2 .scrollAni",
              start: "-=20",
              end:"+=300",
              markers:false,
              scrub:true,
            }
          });
          con2_textAni.from(con2_scrollText2, {opacity:0, stagger:5});

        },
        

      });

    });

    return (
        <section className="mainSection2">
            <div className="sectionContent">
            <div className="introCopy">
                <p>전 세계 크리에이티브 프로들의 선택을 받은<br/>Mac Studio가 이제 쏜살같이 빠른 M2 Max, 그리고<br/> 놀라운 M2 Ultra를 통해 차세대 성능을 선사합니다.</p>
                <RoundIconbutton text={buttonText}/>
            </div>

            <div className='content widthAni'>
                <div className='textArea'>
                <div className='tit'>M2 Max</div>
                <p>M2 Max는 거의 모든 규모의 작업을 거뜬히 처리해 내는 탁월한 성능을 자랑합니다. 직접 짠 비트를 녹음하거나 전문가급 품질의 음악을 믹싱할 때도, 초보자가 처음 동영상 편집을 하거나 전문가가 극장용 장편 영화에 효과를 추가할 때도, 쏜살같이 빠른 M2 Max만 있으면 든든하죠.</p>
                <ul>
                    <li>
                    <span>최대</span>
                    <p>1.8배</p>
                    <span>더 빠른 CPU 성능<sup>1</sup></span>
                    </li>

                    <li>
                    <span>최대</span>
                    <p>3.6배</p>
                    <span>더 빠른 GPU 성능<sup>2</sup></span>
                    </li>

                    <li>
                    <span>최대</span>
                    <p>4.4배</p>
                    <span>더 빠른 머신 러닝 성능<sup>3</sup></span>
                    </li>
                </ul>
                </div>

                <div className='videoWrap scrollAni'>
                <video autoPlay muted loop playsInline>
                    <source src={require('../../media/main.mp4')} type='video/mp4'/>
                </video>

                <ul className='scrollText'>
                    <li>최대 10개의 8K ProRes 동영상 스트림 재생</li>
                    <li>670억 개의 트랜지스터</li>
                    <li>초당 최대 15조 8천억 회의 연산 처리</li>
                    <li>디스플레이 최대 5대 지원</li>
                    <li>H.264, HEVC, ProRes 인코딩 및 디코딩</li>
                </ul>
                </div>            
            </div>

            <div className='content2 widthAni2'>
                <div className='textArea'>
                <div className='tit'>M2 Ultra</div>
                <p>M2 Max 칩 두 개로 이루어진 M2 Ultra는 그 어떤 워크플로도 놀랍도록 수월하게 처리해 줍니다.</p>
                <ul>
                    <li>
                    <span>최대</span>
                    <p>3.3배</p>
                    <span>더 빠른 CPU 성능<sup>1</sup></span>
                    </li>

                    <li>
                    <span>최대</span>
                    <p>6.1배</p>
                    <span>더 빠른 GPU 성능<sup>2</sup></span>
                    </li>

                    <li>
                    <span>최대</span>
                    <p>5.9배</p>
                    <span>더 빠른 머신 러닝 성능<sup>3</sup></span>
                    </li>
                </ul>
                </div>

                <div className='videoWrap scrollAni'>
                <video autoPlay muted loop playsInline>
                    <source src={require('../../media/main2.mp4')} type='video/mp4'/>
                </video>

                <ul className='scrollText'>
                    <li>최대 22개의 8K ProRes 동영상 스트림 재생</li>
                    <li>1,340억 개의 트랜지스터</li>
                    <li>초당 최대 31조 6천억 회의 연산 처리</li>
                    <li>디스플레이 최대 8대 지원</li>
                    <li>H.264, HEVC, ProRes 인코딩 및 디코딩</li>
                </ul>
                </div>            
            </div>

            </div>
        </section>
    )
}

export default MainSection2;