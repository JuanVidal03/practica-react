// componentes
import Actions from "./Actions.jsx";
import Modal from "./Modal.jsx";

const Table = () => {
    return (
        <table className="w-full">
            <tr>
                <td className="p-2 border-solid border-black border-2 bg-blue-900 text-white font-bold uppercase w-[10%]">Id</td>
                <td className="p-2 border-solid border-black border-2 bg-blue-900 text-white font-bold uppercase w-[40%]">Nombre</td>
                <td className="p-2 border-solid border-black border-2 bg-blue-900 text-white font-bold uppercase w-[40%]">Descripcion</td>
                <td className="p-2 border-solid border-black border-2 bg-blue-900 text-white font-bold uppercase w-[10%]">Acciones</td>
            </tr>
            <tr className="bg-white">
                <td className="w-[10%] border-solid border-black border-2 text-center">123</td>
                <td className="w-[45%] border-solid border-black border-2 text-center">Desarrollo web</td>
                <td className="w-[45%] border-solid border-black border-2 p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dignissimos.</td>
                <td className="w-[10%] border-solid border-black border-2 text-center"><Actions/></td>
            </tr>
        </table>
    );
}

export default Table;