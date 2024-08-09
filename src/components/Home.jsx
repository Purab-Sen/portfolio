import Nav from './Nav';
import { Typography, Stack, Button } from '@mui/material';
import ButtonGroup from "./ButtonGroup"

const Image = ()=>{
    return(
        <div className="image">
            <img src="../../images/profile.jpeg" />
        </div>
    )
}

const Home = () => {
    return (
        <section className="home section" id="Home">
            <div className='navcover'>
                <Nav />
            </div>
            <Image />
            <Typography variant="h5" textAlign="center" color='white' className='typotext'>
                👋
                <span
                    className="txt-rotate"
                    data-period="400"
                    data-rotate='[ "Hello, I am Purab."," Aspiring Software Developer.", "A Passionate Coder." ]'
                ></span>
            </Typography>
            <ButtonGroup />
        </section>
    )
}
export default Home;