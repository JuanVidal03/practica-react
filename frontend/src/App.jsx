// componentes
import Modal from "./components/Modal.jsx";
// react dependencies
import { useContext } from "react";
// contexto
import { GlobalContext } from "./context/GlobalContext.jsx";

function App() {
  // contexto para abrir el modal
  const context = useContext(GlobalContext);
  const { openModal, isOpen } = context; 

  return (
    <>
      <h1>Holaaa</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus doloribus repellat, nostrum odio reprehenderit veniam minima adipisci dolore quas, maxime eaque. Perspiciatis vitae nobis, corporis aperiam doloribus ipsam omnis sunt.</p>
      <button onClick={openModal}>asdasd</button>
      {
        isOpen && <Modal/>
      }
    </>
  )
}

export default App