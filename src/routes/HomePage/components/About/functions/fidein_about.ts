export default function fidein_about(){
    function intersecting(entries:any){
        for(let entrie of entries) if(entrie.isIntersecting) entrie.target.style.translate = "0";
    }

    const observer      = new IntersectionObserver(intersecting, {rootMargin: "0px 0px -10px 0px"});
    const $about        = document.getElementById("about") as HTMLElement;
    const $aboutContent = $about.querySelectorAll(".content");

    $aboutContent.forEach((content)=> observer.observe(content));
}