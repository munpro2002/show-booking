import { useState, useEffect } from 'react';
import {
    Box,
    TextField,
    Grid,
    Typography,
    CircularProgress
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCalendar,
    faFilm,
    faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

type Type_EventItem = {
    title: string;
    posterImg: string;
    eventDate: string;
    location: string;
    eventType: string;
    price: string;
};

const EventItem = (props: Type_EventItem) => {
    return (
        <Grid
            item
            xl={3}
            md={4}
            sm={6}
            xs={12}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'transform 0.3s',
                '&:hover': {
                    opacity: 0.5,
                },
            }}
        >
            <Box
                component="img"
                alt="The house from the offer."
                src={props.posterImg}
            />
            <Box
                style={{
                    padding: '20px',
                }}
            >
                {/* Event name */}
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 'bold',
                        marginBottom: '30px',
                    }}
                >
                    {props.title}
                </Typography>

                {/* Price ---- eventDate */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '20px',
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
                            {props.price} VND
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
                        <Typography>{props.eventDate}</Typography>
                    </Box>
                </Box>

                {/* Event type ---- Location */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '20px',
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
                        <Typography>{props.eventType}</Typography>
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
                        <Typography>{props.location}</Typography>
                    </Box>
                </Box>
            </Box>
        </Grid>
    );
};

const LandingPage = () => {
    const [eventList, setEventList] = useState<Array<Type_EventItem>>([])
    useEffect(() => {
        const FetchEvents = async () => {
            const response = await axios.get('http://localhost:3001/events', {
                headers : {
                    'Access-Control-Allow-Origin': '*',
                }
            })
            setEventList(response.data);
        }
        FetchEvents()
    }, [])


    return (
        <Box
            sx={{
                height: '100%',
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '30px',
            }}
        >
            <TextField
                placeholder="Search events..."
                sx={{
                    width: '250px',
                }}
            />
            <Grid container spacing={4}>
                {eventList.map((event) => {
                    return (
                        <EventItem
                            title={event.title}
                            posterImg={event.posterImg}
                            eventDate={event.eventDate}
                            location='Ho Chi Minh'
                            eventType={event.eventType}
                            price={event.price}
                        />
                    );
                })}
            </Grid>
        </Box>
    );
};

export default LandingPage;
