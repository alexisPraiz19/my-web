import { Email, GitHubSvg, Linkedin } from "../assets/Icons"

export default function ContactLinks(){
    return(
        <div className="contact-links">
            <a 
            href="mailto:alexispraiz18@gmail.com" className="contact" 
            title="mail">
            <Email/>
            </a>

            <a href="#" className="contact" 
            title="github">
            <GitHubSvg/>
            </a>
            
            <a href="https://www.linkedin.com/in/alexis-praiz-880392265/" className="contact"
            title="linkeind"
            target="_blank">
            <Linkedin/>
            </a>
        </div>
    )
}