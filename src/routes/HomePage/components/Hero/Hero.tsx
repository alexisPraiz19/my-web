// Componentes de complementación
import Stars from "./components/Stars"
import Presentation from "./components/Presentation"
import HeroLinks from "./components/HeroLinks"
import ModalCv from "./components/ModalCv"

export default function Hero(){
    return (
        <header className="header">
            <Stars/>{/*Contenedor de la animación "estrellas"*/}
            <Presentation/>{/*Figure*/}
            <HeroLinks/>{/*Enlaces*/}
            <ModalCv/>{/*Modal*/}
        </header>
    )
}