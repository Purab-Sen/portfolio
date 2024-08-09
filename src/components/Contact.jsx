import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
const Contact = () => {
    return (
        <section className="section" id="Contact">
            <div className="sectionHead">Contact Me</div>
            <p>Please contact me directly at <a href="mailto:98190barup@gmail.com">98190barup@gmail.com</a> or through this form</p>
            <input className="inputclass" type="email" name = "email" placeholder="Your email" />
            <textarea className="inputclass" name="message" placeholder="Your message" required/>
            <div className='sendcover'>
                <Button variant="contained" style={{backgroundColor:"#030712"}} endIcon={<SendIcon />}>Send</Button>
            </div>
        </section>
    )
}

export default Contact;