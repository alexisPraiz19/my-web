const shadow = document.createElement("DIV");
     shadow.style.position = "fixed";
     shadow.style.inset = "0";
     shadow.style.width = "100vw";
     shadow.style.height = "100vh";
     shadow.style.backgroundColor = "#0005";
     shadow.style.zIndex = "50";

export function open_menu(e:any){
    const menu = e.target.parentElement;
    menu.classList.toggle("menu_opened");
    menu.classList.contains("menu_opened")
      ? document.body.appendChild(shadow) 
      : document.body.removeChild(shadow);
}