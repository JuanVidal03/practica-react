// componentes
import Modal from "./components/Modal.jsx";
import Table from "./components/Table.jsx";
import ModalBtn from "./components/ModalBtn.jsx";
// react dependencies
import { useContext, useEffect } from "react";
// contexto
import { GlobalContext } from "./context/GlobalContext.jsx";

function App() {
  // contexto para abrir el modal
  const context = useContext(GlobalContext);
  const { openModal, isOpen, areasConocimiento } = context;

  // actualizar el contenido cada vez que cambie
  useEffect(() => {
    areasConocimiento
  }, [areasConocimiento]);


  return (
    <div className="w-full h-screen flex flex-col gap-12 justify-center items-center p-8 bg-[#1e1e1e]">
      <h1 className="uppercase font-bold text-5xl text-center text-white relative after:w-[200px] after:absolute after:h-[3px] after:bg-white after:top-[120%] after:left-[35%]">Areas de conocimiento</h1>
      <div className="w-full max-w-[1000px] flex justify-center flex-col items-center p-6 bg-white rounded-lg">
        {
          areasConocimiento.length > 0 ? <Table/> :<p className="text-center text-xl font-bold">No hay areas de conocimiento :(</p>
        }
        <div className={`w-full mt-4 flex ${areasConocimiento.length > 0 ? "justify-start" : "justify-center"}`}>
          <ModalBtn backgroundState={true} text="Agregar" onclick={openModal}/>
        </div>
      </div>
      {
        isOpen && <Modal/>
      }
    </div>
  )
}

export default App