import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import {
    Box, 
    Typography, 
    Button, 
    Grid
} from '@mui/material';
import {
    faArrowLeft,
    faCalendar,
    faFilm,
    faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type EventDetailTitle = {
    title: string;
};

type Seat = {
    seatPos: number;
    seatSelectedArray: any;
    setSeatSelectedArray: any;
};

const Back = () => {
    const navigation = useNavigate();

    return (
        <Box
            onClick={() => navigation(-1)}
            sx={{
                display: 'flex',
                gap: '10px',
                position: 'absolute',
                left: '30px',
                top: '30px',
                alignItems: 'center',
                cursor: 'pointer',
            }}
        >
            <FontAwesomeIcon icon={faArrowLeft} color="#000000" />
            <Typography variant="subtitle1">Back</Typography>
        </Box>
    );
};

const EventDetailTitle = (props: EventDetailTitle) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                alignItems: 'center',
            }}
        >
            {/* <Typography
                sx={{
                    backgroundColor: '#2DC275',
                    fontWeight: 'bold',
                    borderRadius: 2,
                    color: 'white',
                    p: '10px 25px',
                }}
            >
                BOOKING
            </Typography> */}
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 'bold',
                    width: '600px',
                    textAlign: 'center',
                }}
            >
                {props.title}
            </Typography>
        </Box>
    );
};

const EventBooking = (props: any) => {
    const location = useLocation()
    const [totalCost, setTotalCost] = useState(0)

    useEffect(() => {
        const ticketPrice = location.state.event.price
        const totalSeats = 
            props.seatSelectedArray.normal.length + 
            props.seatSelectedArray.vip.length + 
            props.seatSelectedArray.sweetbox.length
        setTotalCost(ticketPrice * totalSeats)
    }, [props.seatSelectedArray])

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '35px',
                alignItems: 'center',
            }}
        >
            {/* Title */}
            <Typography
                variant="h5"
                sx={{
                    color: '#2DC275',
                    fontWeight: 'bold',
                }}
            >
                Check information & Booking
            </Typography>

            {/* Content */}
            <Grid container sx={{ gap: '20px' }} >
                {/* Check seat and price */}
                <Grid item xs={5}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        border: '3px solid #2DC275',
                        borderRadius: 2,
                        p: 2,
                        height: 'fit-content'
                    }}
                >
                    <Typography sx={{ fontWeight: 'bold' }} >Seat selected:</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }} >
                        <Typography>&#x25CF; Normal:</Typography>
                        <Typography><b>{props.seatSelectedArray.normal.length} seat(s)</b></Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }} >
                        <Typography>&#x25CF; VIP:</Typography>
                        <Typography><b>{props.seatSelectedArray.vip.length} seat(s)</b></Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }} >
                        <Typography>&#x25CF; Sweetbox:</Typography>
                        <Typography><b>{props.seatSelectedArray.sweetbox.length} seat(s)</b></Typography>
                    </Box>
                    <Box sx={{ width: '100%', height: '2px', backgroundColor: 'black', m: '10px 0px' }}></Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }} >
                        <Typography><b>Total cost:</b></Typography>
                        <Typography><b>{totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND</b></Typography>
                    </Box>
                    <Button
                        sx={{
                            mt: 2,
                            backgroundColor: '#2DC275',
                            p: 2,
                            color: 'white',
                            fontWeight: 'bold',
                            border: '1px solid #2DC275',
                            '&:hover': {
                                color: '#2DC275'
                            }
                        }}
                    >
                        Submit booking
                    </Button>
                </Grid>

                {/* Event information */}
                <Grid item xs={6}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        border: '3px solid #2DC275',
                        borderRadius: 2,
                        p: 2,
                        height: 'fit-content'
                    }}
                >
                    {/* Price and date */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        {/* Price */}
                        <Box sx={{ display: 'flex', gap: '5px' }}>
                            <Typography>From:</Typography>
                            <Typography
                                sx={{
                                    color: '#2DC275',
                                    fontWeight: 'bold',
                                }}
                            >
                                {location.state.event.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND
                            </Typography>
                        </Box>
                        {/* eventDate */}
                        <Box
                            sx={{
                                display: 'flex',
                                gap: '6px',
                                alignItems: 'center',
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faCalendar}
                                style={{ color: '#2DC275' }}
                            />
                            <Typography>
                                {location.state.event.eventDate}
                            </Typography>
                        </Box>
                    </Box>

                    {/* Type and location */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            color: '#828282',
                        }}
                    >
                        {/* Event type */}
                        <Box
                            sx={{
                                display: 'flex',
                                gap: '10px',
                                alignItems: 'center',
                            }}
                        >
                            <FontAwesomeIcon icon={faFilm} />
                            <Typography>
                                {location.state.event.eventType}
                            </Typography>
                        </Box>
                        {/* Location */}
                        <Box
                            sx={{
                                display: 'flex',
                                gap: '10px',
                                alignItems: 'center',
                                border: '1px solid #828282',
                                padding: '10px',
                            }}
                        >
                            <FontAwesomeIcon icon={faLocationDot} />
                            <Typography>
                                {location.state.event.location}
                            </Typography>
                        </Box>
                    </Box>

                    {/* Poster image */}
                    <Box
                        component="img"
                        alt={location.state.event.title}
                        src={location.state.event.posterImg}
                        sx={{
                            width: '100%',
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

const SeatMapAnnotation = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                gap: '40px',
            }}
        >
            {/* Normal */}
            <Box
                sx={{
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        width: '15px',
                        height: '15px',
                        borderRadius: '50%',
                        backgroundColor: '#3d5afe',
                    }}
                ></Box>
                <Typography>Normal</Typography>
            </Box>

            {/* VIP */}
            <Box
                sx={{
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        width: '15px',
                        height: '15px',
                        borderRadius: '50%',
                        backgroundColor: '#ffea00',
                    }}
                ></Box>
                <Typography>VIP</Typography>
            </Box>

            {/* Sweetbox */}
            <Box
                sx={{
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        width: '15px',
                        height: '15px',
                        borderRadius: '50%',
                        backgroundColor: '#f50057',
                    }}
                ></Box>
                <Typography>Sweetbox</Typography>
            </Box>
        </Box>
    );
};

const Seat = (props: Seat) => {
    const [selected, setSelected] = useState(false);
    let color;
    if (props.seatPos <= 20) color = '#ffea00';
    else if (props.seatPos >= 21 && props.seatPos <= 80) color = '#3d5afe';
    else color = '#f50057';

    const handleSetSeatSelectedArray = (seatPos: any, seatSelectedArray: any, setSeatSelectedArray: any) => {
        if (seatPos <= 20) {
            if (seatSelectedArray.vip.includes(seatPos)) {
                setSeatSelectedArray((prevState: any) => ({
                    ...prevState,
                    vip: prevState.vip.filter((num: any) => num !== seatPos)
                }));
            } else {
                setSeatSelectedArray((prevState: any) => ({
                    ...prevState,
                    vip: [...prevState.vip, seatPos]
                }));
            }
        } else if (seatPos >= 21 && seatPos <= 80) {
            if (seatSelectedArray.normal.includes(seatPos)) {
                setSeatSelectedArray((prevState: any) => ({
                    ...prevState,
                    normal: prevState.normal.filter((num: any) => num !== seatPos)
                }));
            } else {
                setSeatSelectedArray((prevState: any) => ({
                    ...prevState,
                    normal: [...prevState.normal, seatPos]
                }));
            }
        } else {
            if (seatSelectedArray.sweetbox.includes(seatPos)) {
                setSeatSelectedArray((prevState: any) => ({
                    ...prevState,
                    sweetbox: prevState.sweetbox.filter((num: any) => num !== seatPos)
                }));
            } else {
                setSeatSelectedArray((prevState: any) => ({
                    ...prevState,
                    sweetbox: [...prevState.sweetbox, seatPos]
                }));
            }
        }
    }

    return (
        <Box
            onClick={() => {
                setSelected(!selected);
                handleSetSeatSelectedArray(props.seatPos, props.seatSelectedArray, props.setSeatSelectedArray)
                console.log(props.seatSelectedArray)
            }}
            sx={{
                cursor: 'pointer',
                userSelect: 'none',
                width: '30px',
                height: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: `2px solid ${color}`,
                backgroundColor: selected ? color : '',
                '&:hover': {
                    backgroundColor: color,
                },
            }}
        >
            {props.seatPos}
        </Box>
    );
};

const SeatMap = (props: any) => {
    const arraySeat = Array.from({ length: 100 }, (_, index) => index + 1);
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '35px',
                alignItems: 'center',
            }}
        >
            {/* Title */}
            <Typography
                variant="h5"
                sx={{
                    color: '#2DC275',
                    fontWeight: 'bold',
                }}
            >
                Book your favorite tickets
            </Typography>

            {/* Annotation */}
            <SeatMapAnnotation />

            {/* Seatmap */}
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(10, 1fr);',
                    gap: '10px',
                    p: '10px',
                    border: '3px solid #2DC275',
                    borderRadius: 2,
                }}
            >
                {arraySeat.map((seat, index) => {
                    return (
                        <Seat 
                            key={index}
                            seatPos={seat}
                            seatSelectedArray={props.seatSelectedArray}
                            setSeatSelectedArray={props.setSeatSelectedArray}
                        />
                    )
                })}
            </Box>
        </Box>
    );
};

const EventDetailPage = () => {
    const [seatSelectedArray, setSeatSelectedArray] = useState({
        normal: [],
        vip: [],
        sweetbox: []
    })

    const location = useLocation();
    return (
        <Box
            sx={{
                height: '100%',
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '50px',
                position: 'relative',
            }}
        >
            <Back />
            <EventDetailTitle title={location.state.event.title} />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <SeatMap seatSelectedArray={seatSelectedArray} setSeatSelectedArray={setSeatSelectedArray}/>
                </Grid>
                <Grid item xs={6}>
                    <EventBooking seatSelectedArray={seatSelectedArray}/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default EventDetailPage;
