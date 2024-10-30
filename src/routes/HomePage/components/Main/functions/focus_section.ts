export default function focus_section(){
    const screen   = window.matchMedia("(max-width: 460px)");
    const $section = document.getElementById("projects") as HTMLElement;
    let   observer;

    function intersecting(entries:any){if(entries[0].isIntersecting) entries[0].target.style.opacity = "1"}

    function screenMatch(match:MediaQueryList){
        match.matches
        ? observer = new IntersectionObserver(intersecting, {threshold: 0.080})
        : observer = new IntersectionObserver(intersecting, {threshold: 0.5});
        observer.observe($section);
    }
    screenMatch(screen);
    screen.addEventListener("change", ()=>{screenMatch});
}