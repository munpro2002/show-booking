import { useState, useEffect } from 'react';
import {
    Box,
    TextField,
    Grid,
    Typography,
    CircularProgress,
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

type handleGetAllEvents = () => [Type_EventItem]

type handleSearchEvent = (keyword: string) => [Type_EventItem]

const handleGetAllEvents = async () => {
    const response = await axios.get('http://localhost:3001/events')
    return response.data
}

const handleSearchEvent = async (keyword: string) => {
    const response = await axios.get('http://localhost:3001/events/search', {
        params: {
            query: keyword
        }
    })
    return response.data
}

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
            {/* Poster image */}
            <Box
                component="img"
                alt={props.title}
                src={props.posterImg}
                sx={{
                    marginBottom: '10px'
                }}
            />

            {/* Main content */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                }}
            >
                {/* Event title */}
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 'bold',
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
    const [loading, setIsLoading] = useState(false)
    const [eventList, setEventList] = useState<Array<Type_EventItem>>([]);
    useEffect(() => {
        const FetchEvents = async () => {
            const eventGetAllResult = await handleGetAllEvents()
            setEventList(eventGetAllResult);
        };
        FetchEvents();
    }, []);

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
            {/* Search event */}
            <TextField
                placeholder="Search events..."
                onChange={async (event) => {
                    setIsLoading(true);
                    let eventSearchResult: [Type_EventItem];
                    if (event.currentTarget.value === '') {
                        eventSearchResult = await handleGetAllEvents()
                    } else {
                        eventSearchResult= await handleSearchEvent(event.currentTarget.value)
                    }
                    setEventList(eventSearchResult)
                    setTimeout(() => setIsLoading(false), 500);
                }}
                sx={{
                    width: '250px',
                }}
            />

            {/* Main page */}
            {
                loading ?  
                <CircularProgress
                    sx={{
                        color: '#2DC275'
                    }}
                /> :
                (
                    eventList.length === 0 ? 
                    <Typography>No result found</Typography> :
                    <Grid container spacing={4}>
                        {eventList.map((event, index) => {
                            return (
                                <EventItem
                                    key={index}
                                    title={event.title}
                                    posterImg={event.posterImg}
                                    eventDate='29/07/2023'
                                    location="Ho Chi Minh"
                                    eventType={event.eventType}
                                    price={event.price}
                                />
                            );
                        })}
                    </Grid>
                )
            }
        </Box>
    );
};

export default LandingPage;
