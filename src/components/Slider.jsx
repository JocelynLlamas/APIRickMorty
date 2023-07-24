// RAFCE
import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Background from '../assets/bg.jpg'
import { allInformation } from '../functions/functions'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid() {

    const [information, setInformation] = React.useState(null);


    React.useEffect(() => {
        allInformation(setInformation)

    }, [])

    const cards = information?.map(info => ({
        id: info.id,
        name: info.name,
        image: info.image
    }));
    console.log(cards)

    let slicedCards;

    if (cards && Array.isArray(cards)) {
        slicedCards = cards.slice(0, 3);
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="100%" style={{ padding: '0px' }}>
                <Box

                    sx={{
                        // bgcolor: '#cfe8fc',
                        height: '100vh',
                        backgroundImage: `url(${Background})`, // Utiliza la URL de la imagen importada
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}>
                    <Grid container>
                        <Grid xs={12} sx={{ marginBottom: "1%", marginTop: '1%' }} >
                            <Item sx={{ height: '50vh', width: '50%' }}>
                                {Array.isArray(slicedCards) && slicedCards.map(card => (
                                    <div key={card.name}>
                                        <h3>{card.name}</h3>
                                    </div>
                                ))}
                            </Item>
                        </Grid>
                        <Grid xs={12} sx={{ marginBottom: "1%" }}>
                            <Box>
                                <Grid container >
                                    <Grid xs={1}>
                                        <Item>xs=8</Item>
                                    </Grid>
                                    <Grid xs={10}>
                                        <Item>
                                            {Array.isArray(slicedCards) && slicedCards.map(card => (
                                                <div key={card.image}>
                                                    <img src={card.image} alt="" />
                                                </div>
                                            ))}
                                        </Item>
                                    </Grid>
                                    <Grid xs={1} >
                                        <Item>xs=4</Item>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    );
}