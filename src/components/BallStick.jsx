const BallStick = () => {
    const style1 = {
        width: "100px",
        marginRight:window.innerWidth<890?"5px":"0px"
    }
    const style2 = {
        width: "70px",
        height: "70px",
        backgroundColor:"#f3f4f6",
        boxShadow:"3px 3px 3px rgb(177, 183, 188)",
        margin: "auto",
        borderRadius: "50%",
        display: "flex"
    }
    const style3 = {
        width: "60px", 
        height: "60px",
        backgroundColor: "white", 
        boxShadow:"3px 3px 3px rgb(177, 183, 188) inset",
        borderRadius: "inherit", 
        margin: "auto", 
        alignSelf: "center", 
        display: "flex"
    }
    const style4={
        width:"5px",
        height:"180px",
        backgroundColor:"#f3f4f6",
        boxShadow:"3px 3px 3px rgb(177, 183, 188)",
        margin:"auto"
    }

    return (
        <div style={style1}>
            <div style={style2}>
                <div style={style3}>
                    <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="25px" width="25px" style={{ display: "block", margin: "auto" }} xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17 7C17 5.34315 15.6569 4 14 4H10C8.34315 4 7 5.34315 7 7H6C4.34315 7 3 8.34315 3 10V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V10C21 8.34315 19.6569 7 18 7H17ZM14 6H10C9.44772 6 9 6.44772 9 7H15C15 6.44772 14.5523 6 14 6ZM6 9H18C18.5523 9 19 9.44772 19 10V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V10C5 9.44772 5.44772 9 6 9Z" fill="currentColor"></path></svg>
                </div>
            </div>
            <div style={style4}/>
        </div>
    )
}
export default BallStick;