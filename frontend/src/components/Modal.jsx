// iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
// componentes
import ModalBtn from './ModalBtn.jsx';
// contexto
import { GlobalContext } from '../context/GlobalContext.jsx';
import { useContext } from 'react';

const Modal = () => {
    // contexto para cerrar el modal
    const context = useContext(GlobalContext);
    const { closeModal } = context;

    return (
        <div className="absolute top-0 w-screen backdrop-blur-sm h-screen bg-[#000000b6] flex justify-center items-center transition-all">
            {/* contenedor inputs */}
            <div className="w-full relative max-w-[500px] p-8 rounded-lg bg-[#1e1e1e] gap-7 flex flex-col">
                {/* icono de cerrar */}
                <FontAwesomeIcon onClick={closeModal} className="text-red-500 absolute top-3 right-3 size-6 cursor-pointer" icon={faCircleXmark}/>
                <div className="flex flex-col gap-2">
                    <label className="text-white font-bold">Nombre:</label>
                    <input
                        type="text"
                        className="rounded-sm p-2 focus:outline-none transition-all focus:bg-gray-300 focus:text-white"
                        />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-white font-bold">Descripcion:</label>
                    <textarea className="transition-all focus:bg-gray-300 focus:text-white focus:outline-none p-2" rows="5"></textarea>
                </div>
                {/* contenedor botones */}
                <div className='flex gap-4'>
                    <ModalBtn text="aceptar" backgroundState={true}/>
                    <ModalBtn text="cancelar" backgroundState={false}/>
                </div>
            </div>
        </div>
    );
}

export default Modal;