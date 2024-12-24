import "../../scss/main.scss";

function MainSection6(){

    return(
        <section className="mainSection6">
            <div className="sectionContent">
                <div className="introCopy">
                    <p className="m">쿨하게, 조용하게.</p>
                    <p className="s">가로세로 19.7cm의 Mac Studio 외장 안에는 획기적인 열 관리 시스템이 내장되어 있어 M2 Max 또는 M2 Ultra가 쏜살같은  속도로 막대한 작업량을 척척 처리해낼 때조차도 속삭이는 듯한 소리 이상으로 소음이 커지는 법이 없습니다. 덕분에 소음 때문에 방해받는 일 없이, 온전히 작업에 집중할 수 있죠.</p>
                </div>
                <div className="videoArea">
                    <video autoPlay muted loop playsInline>
                        <source src={require('../../media/cooling.mp4')} type='video/mp4'/>
                    </video>
                </div>
            </div>
        </section>
    )
}

export default MainSection6;