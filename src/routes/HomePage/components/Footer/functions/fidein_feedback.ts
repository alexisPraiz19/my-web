export default function fidein_feedback(){
    function intersecting(entries:any){
        for(let entrie of entries) if(entrie.isIntersecting) entrie.target.querySelector(".feedback-form").style.translate = "0";
    }

    const observer  = new IntersectionObserver(intersecting);
    const $feedback = document.getElementById("feedback") as HTMLElement;
    observer.observe($feedback);

    console.log("hoa")
}