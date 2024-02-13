// dependencias
import { useContext } from "react";
// contexto
import { GlobalContext } from "../context/GlobalContext.jsx";


const ModalBtn = ({backgroundState, text}) => {
    // cerrar el modal
    const context = useContext(GlobalContext);
    const { closeModal } = context;

    return (
        <button onClick={closeModal} className={`${backgroundState ? "bg-green-500" : "bg-red-500"} transition-all text-white p-2 font-bold shadow-lg ${backgroundState ? "hover:shadow-trueShadow" : "hover:shadow-falseShadow"}`}>
            {text.toUpperCase()}
        </button>
    );

}

export default ModalBtn;