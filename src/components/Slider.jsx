// RAFCE
import React, { useEffect, useState } from 'react';
import { CssBaseline, Box, Container, styled, Paper, ButtonBase, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { allInformation } from '../functions/functions';
import PersonIcon from '@mui/icons-material/Person';
import TransgenderIcon from '@mui/icons-material/Transgender';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import '../components/Components.css'


export default function BasicGrid() {

    const [selectedColor, setSelectedColor] = useState("rgb(90, 137, 165)");

    const [information, setInformation] = useState(null);
    const [element, setElement] = useState(null);
    let slicedCards;

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : selectedColor,
        textAlign: 'center',
        color: 'white',
        // color: theme.palette.text.secondary,
    }));

    const cardDefault = {
        id: 1,
        location: "Citadel of Ricks",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        name: "Rick Sanchez",
        gender: "Male",
        origin: "Citadel of Ricks",
        species: "Human",
        status: "Alive",
        color: "rgb(90, 137, 165)"
    }

    useEffect(() => {
        allInformation(setInformation);
        setElement(cardDefault)
    }, [])

    function getRandomColor() {
        const randomColor = () => Math.floor(Math.random() * 256);
        const r = randomColor();
        const g = randomColor();
        const b = randomColor();
        return `rgb(${r}, ${g}, ${b})`;
    }

    const cards = information?.map(info => ({
        id: info.id,
        location: info.location.name,
        gender: info.gender,
        origin: info.origin.name,
        species: info.species,
        status: info.status,
        name: info.name,
        image: info.image,
        color: getRandomColor()
    }));
    console.log(cards)

    if (cards && Array.isArray(cards)) {
        slicedCards = cards;
    }

    const ImageButton = styled(ButtonBase)(({ theme }) => ({
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('sm')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &.Mui-focusVisible': {
            zIndex: 1,
            '& .MuiImageBackdrop-root': {
                opacity: 0.15,
            },
            '& .MuiImageMarked-root': {
                opacity: 0,
            },
            '& .MuiTypography-root': {
                border: '4px solid currentColor',
            },
        },
    }));

    const ImageSrc = styled('span')({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    });

    const Image = styled('span')(({ theme }) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    }));

    const ImageBackdrop = styled('span')(({ theme }) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    }));

    const ImageMarked = styled('span')(({ theme }) => ({
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    }));

    const handleSelectElement = (card) => {
        setElement(card);
        setSelectedColor(card.color);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="100%" style={{ padding: '0px' }}>
                <Box
                    className='bg'
                >
                    <Grid container>
                        <Grid xs={12} sx={{ display: 'flex', zIndex: '-1', position: 'absolute', marginTop: '5%', height: '40vh', }} >
                            <Item sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '2%' }}>
                                {
                                    element && (
                                        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <div style={{ width: '100%' }}>
                                                <h1>Character Information  </h1>
                                                <Grid container spacing={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Grid style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                                                        <Item>
                                                            <PersonIcon />
                                                        </Item>
                                                    </Grid>
                                                    <Grid style={{ padding: '0px' }} >
                                                        <Item>
                                                            <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}> Name: {element.name}</p>
                                                        </Item>
                                                    </Grid>
                                                </Grid>
                                                <Grid container spacing={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Grid style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                                                        <Item>
                                                            <TransgenderIcon />
                                                        </Item>
                                                    </Grid>
                                                    <Grid style={{ padding: '0px' }}>
                                                        <Item>
                                                            <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}> Gender: {element.gender}</p>
                                                        </Item>
                                                    </Grid>
                                                </Grid>
                                                <Grid container spacing={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Grid style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                                                        <Item>
                                                            <FingerprintIcon />
                                                        </Item>
                                                    </Grid>
                                                    <Grid style={{ padding: '0px' }}>
                                                        <Item>
                                                            <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}> Specie: {element.species}</p>
                                                        </Item>
                                                    </Grid>
                                                </Grid>
                                                <Grid container spacing={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Grid style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                                                        <Item>
                                                            <FmdGoodIcon />
                                                        </Item>
                                                    </Grid>
                                                    <Grid style={{ padding: '0px' }}>
                                                        <Item>
                                                            <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}> Origin: {element.origin}</p>
                                                        </Item>
                                                    </Grid>
                                                </Grid>
                                                <Grid container spacing={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Grid style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                                                        <Item>
                                                            <MonitorHeartIcon />
                                                        </Item>
                                                    </Grid>
                                                    <Grid style={{ padding: '0px' }}>
                                                        <Item>
                                                            <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}> Status: {element.status}</p>
                                                        </Item>
                                                    </Grid>
                                                </Grid>
                                                <Grid container spacing={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Grid style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                                                        <Item>
                                                            <MyLocationIcon />
                                                        </Item>
                                                    </Grid>
                                                    <Grid style={{ padding: '0px' }}>
                                                        <Item>
                                                            <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}> Location: {element.location}</p>
                                                        </Item>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                        </div>
                                    )
                                }
                            </Item>
                            <div style={{ width: "100%", display: 'flex', justifyContent: 'center' }}>
                                {element && (
                                    <img src={element.image} alt="" style={{ borderRadius: '5px' }} />
                                )}
                            </div>
                        </Grid>
                        <Grid xs={12} sx={{ marginBottom: "1%", padding: '4%', marginTop: '30%' }}>

                            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                {Array.isArray(slicedCards) && slicedCards.map(card => (
                                    <ImageButton
                                        focusRipple
                                        key={card.name}
                                        style={{
                                            width: '30%',
                                            marginLeft: '1%',
                                            marginBottom:'1%'
                                        }}
                                        // onClick={() => setElement(card)}
                                        onClick={() => handleSelectElement(card)}
                                    >
                                        <ImageSrc style={{ backgroundImage: `url(${card.image})` }} />
                                        <ImageBackdrop className="MuiImageBackdrop-root" />
                                        <Image>
                                            <Typography
                                                component="span"
                                                variant="subtitle1"
                                                color="inherit"
                                                sx={{
                                                    position: 'relative',
                                                    p: 4,
                                                    pt: 2,
                                                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                                }}
                                            >
                                                {card.name}
                                                <ImageMarked className="MuiImageMarked-root" />
                                            </Typography>
                                        </Image>
                                    </ImageButton>
                                ))
                                }
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    );
}