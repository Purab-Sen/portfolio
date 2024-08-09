import EducationCard from "./EducationCard";
const myEducation = [
    {
        title:"Pursuing B.Tech in CSE",
        college:"Amrita Vishwa Vidyapeetham",
        location:"Bengaluru 560-035, Karnataka, India",
        marks:"CGPA:9.46",
        date:"November 2022 - July 2026"
    },
    {
        title:"Higher Secondary Education",
        college:"Shikshadeep Higher Secondary School",
        location:"Biratnagar, Morang, Nepal",
        marks:"GPA:3.64",
        date:"September 2019 - July 2021"
    },
    {
        title:"Secondary Education",
        college:"Galaxy Public High School",
        location:"Biratnagar-7, Morang, Nepal",
        marks:"GPA:3.75",
        date:"Completed in 2019"
    }
]
const Education = ()=>{
    return(
        <section id="Education" className="section">
        <div className="sectionHead">My Education</div>
        {myEducation.map((detail,index)=>{
            return <EducationCard key={index} index = {index} detail = {detail}/>
        })}
        </section>
    )
}

export default Education;