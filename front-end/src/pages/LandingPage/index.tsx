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

const mockupData = [
    {
        event_name: 'D&E WORLD TOUR FANCON - [DElight PARTY] IN HO CHI MINH',
        image_url: 'https://i.imgur.com/ILVQADd.jpeg',
        date: '29/07/2023',
        location: 'Ho Chi Minh City',
        event_type: 'Live Music',
        price: '80.000',
    },
    {
        event_name: 'D&E WORLD TOUR FANCON - [DElight PARTY] IN HO CHI MINH',
        image_url: 'https://i.imgur.com/ILVQADd.jpeg',
        date: '29/07/2023',
        location: 'Ho Chi Minh City',
        event_type: 'Live Music',
        price: '80.000',
    },
    {
        event_name: 'D&E WORLD TOUR FANCON - [DElight PARTY] IN HO CHI MINH',
        image_url: 'https://i.imgur.com/ILVQADd.jpeg',
        date: '29/07/2023',
        location: 'Ho Chi Minh City',
        event_type: 'Live Music',
        price: '80.000',
    },
    {
        event_name: 'D&E WORLD TOUR FANCON - [DElight PARTY] IN HO CHI MINH',
        image_url: 'https://i.imgur.com/ILVQADd.jpeg',
        date: '29/07/2023',
        location: 'Ho Chi Minh City',
        event_type: 'Live Music',
        price: '80.000',
    },
];

type Type_EventItem = {
    event_name: string;
    image_url: string;
    date: string;
    location: string;
    event_type: string;
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
                src={props.image_url}
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
                    {props.event_name}
                </Typography>

                {/* Price ---- Date */}
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
                    {/* Date */}
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
                        <Typography>{props.date}</Typography>
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
                        <Typography>{props.event_type}</Typography>
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
                {mockupData.map((event) => {
                    return <EventItem {...event} />;
                })}
            </Grid>
        </Box>
    );
};

export default LandingPage;
