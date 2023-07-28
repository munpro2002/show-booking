import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    TextField,
    Grid,
    Typography,
    CircularProgress,
    InputAdornment
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCalendarDays,
    faFilm,
    faLocationDot,
    faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const MyTicket = () => {
    const [focused, setFocuses] = useState(false)

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
                placeholder="Type your confirmation code..."
                onFocus={() => setFocuses(true)}
                onBlur={() => setFocuses(false)}
                // onChange={async (event) => {
                //     setIsLoading(true);
                //     let eventSearchResult: [Type_EventItem];
                //     if (event.currentTarget.value === '') {
                //         eventSearchResult = await handleGetPublishedEvents();
                //     } else {
                //         eventSearchResult = await handleSearchPublishedEvent(
                //             event.currentTarget.value
                //         );
                //     }
                //     setEventList(eventSearchResult);
                //     setTimeout(() => setIsLoading(false), 500);
                // }}
                sx={{
                    width: '300px',
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: '#2DC275',
                    },
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                        {
                            borderColor: '#2DC275',
                        },
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                color={focused ? '#2DC275' : ''}
                            />
                        </InputAdornment>
                    ),
                }}
            />

            {/* Main page */}
            <Grid container spacing={4}>

            </Grid>
        </Box>
    );
};

export default MyTicket;
