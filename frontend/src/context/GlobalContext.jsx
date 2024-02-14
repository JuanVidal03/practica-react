// dependencias react
import { createContext, useState } from "react";
// crear contexto
export const GlobalContext = createContext();

const GlobalContextProvider = ({children}) => {
    // estado para verificar si está abierto o cerrado el modal
    const [isOpen, setIsOpen] = useState(false);
    // abrir modal
    const openModal = () => setIsOpen(true);
    // cerrar modal
    const closeModal = () => setIsOpen(false);

    // almacenar las areas del conocimiento
    const [areasConocimiento, setAreasConocimiento] = useState([]);

    return (
        <GlobalContext.Provider value={{
            isOpen,
            openModal,
            closeModal,
            areasConocimiento,
            setAreasConocimiento,
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;