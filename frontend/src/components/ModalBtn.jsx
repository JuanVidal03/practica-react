

const ModalBtn = ({backgroundState, text}) => {

    return (
        <button className={`${backgroundState ? "bg-green-500" : "bg-red-500"} transition-all text-white p-2 font-bold shadow-lg ${backgroundState ? "hover:shadow-trueShadow" : "hover:shadow-falseShadow"}`}>
            {text.toUpperCase()}
        </button>
    );

}

export default ModalBtn;