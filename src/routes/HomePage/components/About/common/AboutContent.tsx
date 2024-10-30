export default function AboutContent({img, children}:any){
    return(
        <figure className="content">
            <img src={img} alt="ilustración imágen" className="thumbnail"/>

            <p className="paragraph-about">
                {children}
            </p>
        </figure>
    )
}