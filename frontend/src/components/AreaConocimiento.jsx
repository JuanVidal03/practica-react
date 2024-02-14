// componentes
import Actions from "./Actions.jsx";

const AreaConocimiento = ({id, nombre, descripcion}) => {
    return (
        <tr className="bg-white">
            <td className="w-[10%] border-solid border-black border-2 text-center">{id}</td>
            <td className="w-[45%] border-solid border-black border-2 text-center">{nombre}</td>
            <td className="w-[45%] border-solid border-black border-2 p-2">{descripcion}</td>
            <td className="w-[10%] border-solid border-black border-2 text-center"><Actions/></td>
        </tr>
    );
}

export default AreaConocimiento;
