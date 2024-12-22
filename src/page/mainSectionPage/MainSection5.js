import "../../scss/main.scss";

function MainSection5(){

    return(
        <section className="mainSection5">
            <div className="sectionContent">
                <div className="introCopy">적당을 모르는 성능.</div>
                <div className="imgArea"><img src={`${process.env.PUBLIC_URL}/images/main_se5.jpg`} alt="맥이미지"/></div>
                <div className="imgText">Autodesk Maya</div>
                <p>Apple Silicon의 놀라운 효율성은 MAC Studio의 놀랍도록 자그마한 폼 팩터 안에서도 M2 Max 및 M2 Ultra가 그 성능을 온전히 발휘하도록, 그래서 작업자가 어떠한 제약도 없이 마음껏 창의력을 펼칠수 있도록 해줍니다. 대부분의 디스플레이 아래에 배치했을 대 완벽하게 들어맞는 디자인으로 손만 뻗으면 닿는 책상 위 공간에 경이로운 파워와 연결성을 선사하는 Mac Studio. 그야말로 독보적인 고성능 데스크탑입니다.</p>
            </div>
        </section>
    )
}

export default MainSection5;