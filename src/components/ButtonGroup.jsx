import '@fortawesome/fontawesome-free/css/all.min.css';
import { Stack, Button } from '@mui/material';
const ButtonGroup = () => {
    return (
        <div className='buttongroupcover'>
            <Stack spacing={2} direction="row" justifyContent="center">
                <Button variant="contained">
                    <a href='https://www.linkedin.com/in/purab-sen-541725274/' target='_blank' style={{ textDecoration: "none", color: "white" }}><i className="fab fa-linkedin"></i> Linked in</a>
                </Button>
                <Button variant="contained" color="success">
                    <a href='https://github.com/Purab-Sen' target='_blank' style={{ textDecoration: "none", color: "inherit" }}>GitHub <i className="fab fa-github"></i></a>
                </Button>
            </Stack>
        </div>
    )
}
export default ButtonGroup;