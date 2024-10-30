export function open_modal(){
    const $modal = document.getElementById("modal-cv") as HTMLDialogElement;
    $modal.showModal();
}//  Abrir modal

export function close_modal(e:any){e.target.parentElement.close()} // Cerrar modal