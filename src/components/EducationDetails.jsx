
const EducationDetails = ({pos,detail}) => {
    const style1 = {
        fontSize: "18px",
        color: "#030712",
        fontWeight: "600"
    }
    const style2 = {
        color: "#6B7280",
        fontWeight: "400"
    }
    let styled = {
        width:window.innerWidth>890?"400px":"100%",
        height:"200px"
    }
    return (
        <div className={`animator ${pos}`} style={styled}>
            <div className="edetails">
                <p style={style1}>{detail.title}</p>
                <p style={style2}>{detail.college}</p>
                <p style={style2}>{detail.location}</p>
                <p style={style2}>{detail.marks}</p>
                {detail.date?<p style={{...style2,marginTop:"30px"}}>{detail.date}</p>:null}
            </div>
            <div className="arrow" style={pos === "left"?{right:"3px"}:{left:"3px"}} />
        </div>
    )
}

export default EducationDetails;