import { useState } from "react";
import "../../scss/main.scss";

function MainSection3(){
    let [ tab, setTab ] = useState({
        tabType : "tab1",
        graph1:"100%",
        graph2:"59.0164%",
        graph3:"29.5082%",
        graph4:"22.9508%",
        graph5:"16.3934%",
        graphNum1:"6.1배",
        graphNum2:"3.6배"
      });
    
      let tabName = {
        tab1 : "더 빠른 OTOY Octane X 렌더링 성능",
        tab2 : "더 빠른 Topaz Video AI 비디오 업스케일링 성능",
        tab3 : "더 빠른 Final Cut Pro 8K 렌더링 성능",
        tab4 : "더 빠른 Autodesk Maya 실시간 3D 성능",
        tab5 : "더 빠른 Compressor ProRes 트랜스코딩 성능",
        tab6 : "더 빠른 Xcode 프로젝트 빌드 성능",
        tab7 : "더 빠른 DaVinci Resolve Studio 노이즈 감소 성능",
        tab8 : "더 빠른 Photoshop 필터 및 기능 성능",
      }
    
      const tabClick = (e) => {
        // 현재 클릭된 노드
        let currentNode = e.currentTarget;
    
        // 부모 노드
        let parentNode = currentNode.parentNode;
    
        // 형제 노드 선택
        let siblings = Array.from(parentNode.children).filter(
          (child) => child !== currentNode
        );
    
        // 현재 노드에 클래스 추가
        if(!currentNode.classList.contains('on')){
          currentNode.className += ' on';
        }
    
        // 스테이터스 업데이트
        let tabData = currentNode.dataset.name;
        
        if(tabData == "tab1"){
          setTab(() => ({
            tabType:"tab1",
            graph1:"100%",
            graph2:"59.0164%",
            graph3:"29.5082%",
            graph4:"22.9508%",
            graph5:"16.3934%",
            graphNum1:"6.1배",
            graphNum2:"3.6배"
          }));
    
        }else if(tabData == "tab2"){
          setTab(() => ({
            tabType:"tab2",
            graph1:"100%",
            graph2:"74.5763%",
            graph3:"88.1356%",
            graph4:"57.6271%",
            graph5:"16.9492%",
            graphNum1:"5.9배",
            graphNum2:"4.4배"
          }));
    
        }else if(tabData == "tab3"){
          setTab(() => ({
            tabType:"tab3",
            graph1:"100%",
            graph2:"68%",
            graph3:"76%",
            graph4:"56%",
            graph5:"20%",
            graphNum1:"5배",
            graphNum2:"3.4배"
          }));
    
        }else if(tabData == "tab4"){
          setTab(() => ({
            tabType:"tab4",
            graph1:"100%",
            graph2:"52.5%",
            graph3:"82.5%",
            graph4:"45%",
            graph5:"25%",
            graphNum1:"4배",
            graphNum2:"2.1배"
          }));
    
        }else if(tabData == "tab5"){
          setTab(() => ({
            tabType:"tab5",
            graph1:"100%",
            graph2:"53.8462%",
            graph3:"53.8462%",
            graph4:"53.8462%",
            graph5:"25.641%",
            graphNum1:"3.9배",
            graphNum2:"2.1배"
          }));
    
        }else if(tabData == "tab6"){
          setTab(() => ({
            tabType:"tab6",
            graph1:"100%",
            graph2:"54.5455%",
            graph3:"81.8182%",
            graph4:"42.4242%",
            graph5:"30.303%",
            graphNum1:"3.3배",
            graphNum2:"1.8배"
          }));
    
        }else if(tabData == "tab7"){
          setTab(() => ({
            tabType:"tab7",
            graph1:"100%",
            graph2:"51.8519%",
            graph3:"66.6667%",
            graph4:"37.037%",
            graph5:"37.037%",
            graphNum1:"2.7배",
            graphNum2:"1.4배"
          }));
    
        }else{
          setTab(() => ({
            tabType:"tab8",
            graph1:"100%",
            graph2:"90.9091%",
            graph3:"81.8182%",
            graph4:"72.7273%",
            graph5:"45.4545%",
            graphNum1:"2.2배",
            graphNum2:"2배"
          }));
    
        }
    
        // 주변 노트 클래스 제거
        siblings.forEach((e) => {
          e.classList.remove('on');
        })
      }

    return(
        <section className="mainSection3">
            <div className="sectionContent">
            <div className="introCopy">
                <p>무엇을 돌리든<br/>더욱 강력하게.</p>
            </div>
            <div className='content'>
                <div className="introLink">
                <button className='tab on' onClick={tabClick} data-name="tab1">3D 렌더링</button>
                <button className='tab' onClick={tabClick} data-name="tab2">동영상 처리</button>
                <button className='tab' onClick={tabClick} data-name="tab3">동영상 편집</button>
                <button className='tab' onClick={tabClick} data-name="tab4">3D 상호작용</button>
                <button className='tab' onClick={tabClick} data-name="tab5">동영상 트랜스코딩</button>
                <button className='tab' onClick={tabClick} data-name="tab6">코드 컴파일링</button>
                <button className='tab' onClick={tabClick} data-name="tab7">색상 그레이딩</button>
                <button className='tab' onClick={tabClick} data-name="tab8">사진 편집</button>
                </div>
                
                <div className='graphTit'>{tabName[tab.tabType]}</div>

                <ul className="graphList">
                <li>
                    <div className='graphWrap'>
                    <div className="graphItem" style={{width: tab.graph1}}>
                        <div className="graph"></div>
                    </div>                
                    <span>M2 Ultra 탑재 Mac Studio</span>
                    </div>
                    <span>{tab.graphNum1}</span>
                </li>

                <li>
                    <div className='graphWrap'>
                    <div className="graphItem" style={{width: tab.graph2}}>
                        <div className="graph"></div>
                    </div>                
                    <span>M2 Max 탑재 Mac Studio</span>
                    </div>
                    <span>{tab.graphNum2}</span>
                </li>

                <li>
                    <div className='graphWrap'>
                    <div className="graphItem" style={{width: tab.graph3}}>
                        <div className="graph"></div>
                    </div>                
                    <span>M1 Ultra 탑재 Mac Studio</span>
                    </div>
                </li>

                <li>
                    <div className='graphWrap'>
                    <div className="graphItem" style={{width: tab.graph4}}>
                        <div className="graph"></div>
                    </div>                
                    <span>M1 Max 탑재 Mac Studio</span>
                    </div>
                </li>

                <li>
                    <div className='graphWrap'>
                    <div className="graphItem" style={{width: tab.graph5}}>
                        <div className="graph"></div>
                    </div>                
                    <span>10코어 Intel Core i9 및 Radeon Pro 5700 XT 탑재 iMac 27(기준치)</span>
                    </div>
                </li>
                </ul>
            </div>
            </div>
        </section>
    )
}

export default MainSection3;