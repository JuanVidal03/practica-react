
const ModalBtn = ({backgroundState, text, onclick}) => {

    return (
        <button onClick={onclick} className={`${backgroundState ? "bg-green-500" : "bg-red-500"} transition-all text-white p-2 font-bold shadow-lg ${backgroundState ? "hover:shadow-trueShadow" : "hover:shadow-falseShadow"}`}>
            {text.toUpperCase()}
        </button>
    );

}

export default ModalBtn;