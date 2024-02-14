// dependencias
import { useContext, useEffect } from "react";
// componentes
import Actions from "./Actions.jsx";
import AreaConocimiento from "./AreaConocimiento.jsx";
// contexto
import { GlobalContext } from "../context/GlobalContext.jsx";

const Table = () => {
    // traer areas de conocimiento del contexto
    const context = useContext(GlobalContext);
    const { areasConocimiento } = context;

    return (
        <table className="w-full">
            <thead>
                <tr>
                    <td className="p-2 border-solid border-black border-2 bg-blue-900 text-white font-bold uppercase w-[10%]">Id</td>
                    <td className="p-2 border-solid border-black border-2 bg-blue-900 text-white font-bold uppercase w-[40%]">Nombre</td>
                    <td className="p-2 border-solid border-black border-2 bg-blue-900 text-white font-bold uppercase w-[40%]">Descripcion</td>
                    <td className="p-2 border-solid border-black border-2 bg-blue-900 text-white font-bold uppercase w-[10%]">Acciones</td>
                </tr>
            </thead>
            <tbody>
                {
                    areasConocimiento?.map(area => {
                        return <AreaConocimiento key={area.id} id={area.id} nombre={area.nombre} descripcion={area.descripcion}/>;
                    })
                }
            </tbody>
        </table>
    );
}

export default Table;