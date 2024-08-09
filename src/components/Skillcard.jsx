const Skillcard = (props)=>{
    return(
        <div className="skillcard">
            <img src = {props.source}/>
            <p>{props.sname}</p>
        </div>
    )
}
export default Skillcard;