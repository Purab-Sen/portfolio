import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
    const form = useRef();
    const [email,setEmail] = useState("");
    const [text,setText] = useState("");
    const[process,setProcess]=useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        setProcess(true);
        emailjs.sendForm(
            import.meta.env.VITE_SID,  
            import.meta.env.VITE_TID, 
            form.current,
            import.meta.env.VITE_PID
        )
        .then((result) => {
            toast.success('Thank you for contacting me. I will get back to you soon!', {
                style: { 
                    fontSize: '18px', 
                    fontWeight:'bolder',  
                    color:'black'     
                }
            });
            setEmail("");
            setText("");
            setProcess(false);
        }, (error) => {
            toast.error('Failed to send message, please try again.', {
                style: { 
                    fontSize: '18px', 
                    color:'black',
                    fontWeight:'bolder',   
                }
            });
            setProcess(false);
        });
    };

    return (
        <section className="section" id="Contact">
            <div className="sectionHead">Contact Me</div>
            <p>Please contact me directly at <a href="mailto:98190barup@gmail.com">98190barup@gmail.com</a> or through this form</p>
            <form ref={form} onSubmit={sendEmail}>
                <input className="inputclass" type="email" name="user_email" placeholder="Your email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                <textarea className="inputclass" name="message" placeholder="Your message" value={text} onChange={(e)=>setText(e.target.value)} required />
                <div className='sendcover'>
                    <Button type="submit"  variant="contained" style={{ backgroundColor: "#030712",pointerEvents:process?'none':'auto' }} endIcon={process?null:<SendIcon />}>
                        {process?"Sending":"Send"}
                    </Button>
                </div>
            </form>
        </section>
    );
}

export default Contact;
