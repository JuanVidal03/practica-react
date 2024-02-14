// dependencias react
import { createContext, useState } from "react";
// crear contexto
export const GlobalContext = createContext();

const GlobalContextProvider = ({children}) => {
    // estado para verificar si está abierto o cerrado el modal
    const [isOpen, setIsOpen] = useState(false);
    const [isUpdateOpen, setIsUpdateOpen] = useState(false);
    // abrir modal
    const openModal = () => setIsOpen(true);
    const openUpdateModal = () => setIsUpdateOpen(true);
    // cerrar modal
    const closeModal = () => setIsOpen(false);
    const closeUpdateModal = () => setIsUpdateOpen(false);

    const [updateArea, setUpdateArea] = useState({});

    // almacenar las areas del conocimiento
    const [areasConocimiento, setAreasConocimiento] = useState([]);

    return (
        <GlobalContext.Provider value={{
            isOpen,
            openModal,
            closeModal,
            areasConocimiento,
            setAreasConocimiento,
            openUpdateModal,
            closeUpdateModal,
            isUpdateOpen,
            closeUpdateModal,
            updateArea,
            setUpdateArea
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;