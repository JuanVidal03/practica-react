// iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
// componentes
import ModalBtn from './ModalBtn.jsx';
// contexto
import { GlobalContext } from '../context/GlobalContext.jsx';
import { useContext,useState } from 'react';

const Modal = () => {
    // contexto
    const context = useContext(GlobalContext);
    const { closeModal, areasConocimiento, setAreasConocimiento } = context;

    // almacenar los datos de los inputs
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    // obteniendo el nombre
    const getNombre = (e) => {
        setNombre(e.target.value);
    }
    // obteniendo la descripcion
    const getDescripcion = (e) => {
        setDescripcion(e.target.value);
    }
    // objeto base del area de conocimiento
    const areaConocimiento = {
        id: Math.floor(Math.random() * 1000),
        nombre,
        descripcion
    }
    // guardando la informacion en el array de areas de conocimiento
    const storageData = () => {
        // verificando que se haya ingresado un nombre en el input de nombre
        const {nombre} = areaConocimiento
        if(nombre !== "") {
            setAreasConocimiento([...areasConocimiento, areaConocimiento]);
            closeModal();
        } else{
            alert("Debes ingresar el nombre del area de conocimiento!")
        }
    }

    return (
        <div className="absolute top-0 w-screen backdrop-blur-sm h-screen bg-[#000000b6] flex justify-center items-center transition-all">
            {/* contenedor inputs */}
            <div className="w-full relative max-w-[500px] p-8 rounded-lg bg-[#1e1e1e] gap-7 flex flex-col">
                {/* icono de cerrar */}
                <FontAwesomeIcon onClick={closeModal} className="text-red-500 absolute top-3 right-3 size-6 cursor-pointer" icon={faCircleXmark}/>
                {/* inputs */}
                <div className="flex flex-col gap-2">
                    <label className="text-white font-bold">Nombre:</label>
                    <input
                        type="text"
                        name='nombre'
                        className="rounded-sm p-2 focus:outline-none transition-all focus:bg-gray-300"
                        onChange={getNombre}
                        />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-white font-bold">Descripcion:</label>
                    <textarea
                        onChange={getDescripcion}
                        name='descripcion'
                        className="transition-all focus:bg-gray-300 focus:outline-none p-2" rows="5">
                    </textarea>
                </div>
                {/* contenedor botones */}
                <div className='flex gap-4'>
                    <ModalBtn onclick={storageData} text="aceptar" backgroundState={true}/>
                    <ModalBtn onclick={closeModal} text="cancelar" backgroundState={false}/>
                </div>
            </div>
        </div>
    );
}

export default Modal;