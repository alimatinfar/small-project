import {ReactNode} from "react";

type ModalProps = {
  open: boolean,
  onClose: () => void,
  children?: ReactNode,
}

function Modal({open, onClose, children}: ModalProps) {
  return (
    <>
      <div onClick={onClose}
           className={`bg-black/50 fixed inset w-screen h-screen top-0 right-0 ${!open && 'hidden'}`}></div>
      <div className={`fixed bottom-0 right-0 origin-bottom md:origin-center md:inset-0 m-auto w-full max-w-xl
       bg-white rounded h-3/4 z-50 duration-200 p-5 ${!open && 'opacity-0 scale-95 invisible'}`}>
        {children}
      </div>
    </>
  );
}

export default Modal;