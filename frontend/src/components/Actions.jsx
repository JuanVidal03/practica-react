// iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const Actions = () => {

    return (
        <div className="flex gap-5 justify-center items-center">
            <FontAwesomeIcon className="size-5 cursor-pointer text-red-700" icon={faCircleXmark} />
            <FontAwesomeIcon className="size-5 cursor-pointer text-blue-900" icon={faPenToSquare} />
        </div>
    );
}

export default Actions;
