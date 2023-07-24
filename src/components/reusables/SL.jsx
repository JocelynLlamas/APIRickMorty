// RAFCE
import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
// import { Container, Row, Col } from "react-bootstrap";

const Slider = () => {

    const [loop, setLoop] = React.useState(0);
    const [isDeleting, setIsDeleting] = React.useState(false);
    const [text, setText] = React.useState('');
    const [time, setTime] = React.useState(250 - Math.random() * 100);
    const period = 2000;
    const toRotate = ["Web Developer", "Frontend Developer"];

    React.useEffect(() => {
        let ticket = setInterval(() => {
            tick();
        }, time)

        return () => { clearInterval(ticket) };
    }, [text])

    const tick = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) :
            fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setTime(prevTime => prevTime / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setTime(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoop(loop + 1);
            setTime(400);
        }
    }

    return (
        // <div>Slider</div>
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="100%" style={{ padding: '0px' }}>
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>HOLA MUNDO</Box>
            </Container>

            <section className="banner" id="home">
                {/* <Container> */}
                <div className="align-items-center">
                    <div xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Jocelyn Llamas`} <span className="wrap">{text}</span> </h1>
                        <p>Computer Engineering student focused on
                            improving his skills and interested in web
                            development.</p>
                    </div>
                    <div xs={12} md={6} xl={5}>
                        {/* <img src={headerImg} alt="Header Img" /> */}
                    </div>
                </div>
                {/* </Container> */}
            </section>
        </React.Fragment>
    )
}

export default Slider