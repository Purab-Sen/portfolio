import '@fortawesome/fontawesome-free/css/all.min.css';
import { Button } from '@mui/material';
const ProjectCard = (props)=>{
    return(
        <>
            <div className="projectcard">
                <div className="projectname"><p>{props.inputs.title}</p></div>
                <div className="projectimage"><img src = {props.inputs.image}/></div>
                <div className="projectuses"><span>Made with:</span>
                {props.inputs.tools.map((obj,index) => <i className={obj.icon} style={{color:obj.color,marginRight:"10px"}} key = {index}></i>)}
                </div>
                <div className="projectcontent"><p>{props.inputs.content}</p></div>
                <div className="gitbutton">
                <Button variant="outlined" color="success" className='gb'>
                    <a href={props.inputs.gitlink} target='_blank' style={{ textDecoration: "none", color: "inherit" }}>GitHub <i className="fab fa-github"></i></a>
                </Button>
                </div>
            </div>
        </>
    )
}
export default ProjectCard;