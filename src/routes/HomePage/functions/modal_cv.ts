//  Abrir modal
export function open_modal():void{
    const $modal = document.getElementById("modal-cv") as HTMLDialogElement;
    $modal.showModal();
}

// Cerrar modal
export function close_modal(e:any):void{ e.target.parentElement.close() }