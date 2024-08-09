import Skillcard from "./Skillcard"
const Skills = ()=>{
    return(
        <section className="skills section" id="Skills">
            <p className="sectionHead" >My Skills</p>
            <Skillcard sname = "HTML" source="../../images/html.svg"/>
            <Skillcard sname = "CSS" source="../../images/css.svg"/>
            <Skillcard sname = "JavaScript" source="../../images/js.svg"/>
            <Skillcard sname = "Bootstrap" source="../../images/bootstrap.svg"/>
            <Skillcard sname = "React" source="../../images/react.svg"/>
            <Skillcard sname = "Nodejs" source="../../images/nodejs.svg"/>
            <Skillcard sname = "Expressjs" source="../../images/express.svg"/>
            <Skillcard sname = "MySQL" source="../../images/mysql.svg"/>
            <Skillcard sname = "PostgreSQL" source="../../images/postgresql.svg"/>
            <Skillcard sname = "MongoDB" source="../../images/mongodb.svg"/>
            <Skillcard sname = "C++" source="../../images/c++.svg"/>
        </section>
    )
}
export default Skills