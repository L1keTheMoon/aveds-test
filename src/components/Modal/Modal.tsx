import { createPortal } from "react-dom";
import type { ReactNode, MouseEvent } from "react";
import { switchModal } from "@/store/modalSlice";
import { useAppDispatch } from "@/store";
import "./Modal.css";

interface ModalProps {
  title: string;
  children?: ReactNode;
}

export default function Modal({ children, title }: ModalProps) {
  const dispatch = useAppDispatch();

  const handleClickOutside = (event: MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      dispatch(switchModal());
    }
  };

  return createPortal(
    <div className="modal" onClick={handleClickOutside}>
      <div className="modal__content">
        <div className="modal__box">
          <h2 className="modal__title">{title}</h2>
          <button
            className="modal__close"
            onClick={() => dispatch(switchModal())}
          >
            ✖
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.querySelector("#modal-root")!
  );
}
