import '../scss/button.scss';

function RoundIconbutton(props){
    return(
        <button type="button" className="roundIconBtn">{props.text}<i className="xi xi-plus"></i></button>
    );
}

export default RoundIconbutton;