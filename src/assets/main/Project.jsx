import ProList from "../component/ProList";

function Project(){
    return(
        <>
        <section id="project" className="project">
           <h2>PROJECT</h2>
           <h3
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
           >Project</h3>
           <p>Desktop /  Tablet / Mobile</p>
        </section>
        <ProList />
        </>
    )
}

export default Project;