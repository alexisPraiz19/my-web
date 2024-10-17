export default function alert_download(e:any):void{
    if(!confirm("Estas apunto de descargar un PDF, ¿quieres continuar?")) e.preventDefault();
    else e.target.setAttribute("download", "alexis-leonel-praiz-cv")
}