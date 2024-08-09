import Skillcard from "./Skillcard"
const Skills = ()=>{
    return(
        <section className="skills section" id="Skills">
            <p className="sectionHead" >My Skills</p>
            <Skillcard sname = "HTML" source="../../public/images/html.svg"/>
            <Skillcard sname = "CSS" source="../../public/images/css.svg"/>
            <Skillcard sname = "JavaScript" source="../../public/images/js.svg"/>
            <Skillcard sname = "Bootstrap" source="../../public/images/bootstrap.svg"/>
            <Skillcard sname = "React" source="../../public/images/react.svg"/>
            <Skillcard sname = "Nodejs" source="../../public/images/nodejs.svg"/>
            <Skillcard sname = "Expressjs" source="../../public/images/express.svg"/>
            <Skillcard sname = "MySQL" source="../../public/images/mysql.svg"/>
            <Skillcard sname = "PostgreSQL" source="../../public/images/postgresql.svg"/>
            <Skillcard sname = "MongoDB" source="../../public/images/mongodb.svg"/>
            <Skillcard sname = "C++" source="../../public/images/c++.svg"/>
        </section>
    )
}
export default Skills