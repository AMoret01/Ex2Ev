import './EXButton.css';

export const EXButton = (props) => {
    return (
        <button /*onClick={props.method}*/ type={'submit'}>{props.title}</button>
    );
}


export const JustDoIt = function DoIt() {
    const resultMessage = console.log("Exercise 4 done!");
    return resultMessage;
}
