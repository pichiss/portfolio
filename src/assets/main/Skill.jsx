import SkillList from "../component/skillist";

function Skills(){
    return(
        <>
        <section id="skills" className="skills">
           <h2 
           data-aos="flip-left" data-aos-duration="1500"
           >SKILLS</h2>
           <h3 
           data-aos="flip-left" data-aos-duration="1000"
           >Skills</h3>
           <SkillList />
        </section>
        </>
    )
}

export default Skills;