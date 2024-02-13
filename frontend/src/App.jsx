// componentes
import Modal from "./components/Modal.jsx";
// react dependencies
import { useState } from "react";

function App() {

  const [test, setTest] = useState(false);

  const handleClick = () => {
    setTest(true)
  }

  return (
    <>
      <h1>Holaaa</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus doloribus repellat, nostrum odio reprehenderit veniam minima adipisci dolore quas, maxime eaque. Perspiciatis vitae nobis, corporis aperiam doloribus ipsam omnis sunt.</p>
      <button onClick={handleClick}>asdasd</button>
      {
        test && <Modal/>
      }
    </>
  )
}

export default App