const Modal = () => {
    return (
        <div className="w-full max-w-[500px] absolute top-[25%] left-[35%] p-8 rounded-lg bg-[#1e1e1e] gap-7 flex flex-col">
            <div className="flex flex-col gap-2">
                <label className="text-white font-bold">Nombre:</label>
                <input
                    type="text"
                    className="rounded-sm p-2 focus:outline-none focus:bg-red-500 focus:text-white"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-white font-bold">Descripcion:</label>
                <textarea className="focus:bg-red-500 focus:text-white focus:outline-none p-2" rows="5"></textarea>
            </div>
        </div>
    );
}

export default Modal;