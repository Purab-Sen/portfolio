import EducationDetails from "./EducationDetails";
import BallStick from "./BallStick";
import { useState, useEffect } from "react";
const Datediv = ({pos, date }) => {
    let stylep = {
        alignSelf: "center",
        color: "#6B7280",
        fontWeight: "600",
        width: "100%"
    }
    let styled = {
        width: "400px",
        height: "70px",
        display: "flex",
    }
    let invert = "right";
    if (pos === "right") {
        invert = "left";
    }
    return (
        <div className={`animator ${invert}`} style={styled}>
            <p style={{ ...stylep, textAlign: `${pos}` }}>{date}</p>
        </div>
    )
}
const EducationCard = ({ index, detail }) => {
    const [width, setwidth] = useState(window.innerWidth);
    function handleresize() {
        setwidth(window.innerWidth);
    }
    window.addEventListener('resize', handleresize);
    if (width > 890) {
        if (index % 2 == 0) {
            return (

                <div className="educationCard">
                    <EducationDetails pos="left" detail={{ ...detail, date: null }} />
                    <BallStick />
                    <Datediv pos="left" date={detail.date} />
                </div>
            )
        } else {
            return (

                <div className="educationCard">
                    <Datediv pos="right" date={detail.date} />
                    <BallStick />
                    <EducationDetails pos="right" detail={{ ...detail, date: null }} />
                </div>
            )
        }
    } else {
        return (
            <div className="educationCard">
                <BallStick />
                <EducationDetails pos="right" detail={detail} />
            </div>
        )
    }
}
export default EducationCard;