// dependecias
import { useContext } from "react";

// componentes
import Actions from "./Actions.jsx";
// contexto
import { GlobalContext } from "../context/GlobalContext.jsx";

const AreaConocimiento = ({id, nombre, descripcion}) => {

    // contexto 
    const context = useContext(GlobalContext);
    const {areasConocimiento, setAreasConocimiento} = context

    // eliminar area de conocimiento

    const deleteArea = () => {
        areasConocimiento.find(area => {
            if(area.id === id){
                areasConocimiento.splice(areasConocimiento.indexOf(area), 1)
            }
        })
        setAreasConocimiento([...areasConocimiento])
    }


    return (
        <tr className="bg-white">
            <td className="w-[10%] border-solid border-black border-2 text-center">{id}</td>
            <td className="w-[45%] border-solid border-black border-2 text-center">{nombre}</td>
            <td className="w-[45%] border-solid border-black border-2 p-2">{descripcion}</td>
            <td className="w-[10%] border-solid border-black border-2 text-center"><Actions onClick={deleteArea}/></td>
        </tr>
    );
}

export default AreaConocimiento;
