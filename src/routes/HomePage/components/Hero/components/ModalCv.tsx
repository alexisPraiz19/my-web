import { close_modal } from "../functions/open_modal"

export default function ModalCv(){
    return(
        <dialog className="modal-cv" id="modal-cv">
            <iframe src="/images/static/me.png" allow="fullscreen" title="cv-pdf"/>
            <button type="submit" onClick={close_modal}>Cerrar</button>
        </dialog>
    )
}