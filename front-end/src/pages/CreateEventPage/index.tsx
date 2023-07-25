import { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    InputAdornment,
    Button,
    InputLabel,
} from '@mui/material';
import {
    faFilm,
    faVolleyball,
    faLocationDot,
    faDollarSign,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import axios from 'axios';

const EventInputField = (props: any) => {
    const [focused, setFocuses] = useState(false);
    const IconMapping: { [key: string]: React.ReactElement } = {
        eventtitle: <FontAwesomeIcon icon={faVolleyball} color={focused ? '#2DC275' : ''}/>,
        eventtype: <FontAwesomeIcon icon={faFilm} color={focused ? '#2DC275' : ''}/>,
        location: <FontAwesomeIcon icon={faLocationDot} color={focused ? '#2DC275' : ''}/>,
        'price(vnd)': <FontAwesomeIcon icon={faDollarSign} color={focused ? '#2DC275' : ''} />,
    };
    const iconType = props.type.replace(/\s/g, '').toLowerCase();

    return (
        <TextField
            fullWidth
            onFocus={() => setFocuses(true)}
            onBlur={() => setFocuses(false)}
            label={props.type}
            sx={{
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
                        {IconMapping[iconType]}
                    </InputAdornment>
                ),
            }}
        />
    );
};

const CreateEventPage = () => {
    const [selectedFile, setSelectedFile] = useState<any>(null);

    const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

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
            {/* Title */}
            <Typography
                variant="h5"
                sx={{
                    color: '#2DC275',
                    fontWeight: 'bold',
                }}
            >
                Create event
            </Typography>

            {/* Fields */}
            <Box
                sx={{
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '20px',
                    border: '3px solid #2DC275',
                    borderRadius: 2,
                    width: '20%',
                }}
            >
                {/* Text fields */}
                {['Event title', 'Event type', 'Location', 'Price (VND)'].map(
                    (type, index) => {
                        return <EventInputField key={index} type={type} />;
                    }
                )}

                {/* Event date */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Event date"
                        sx={{
                            width: '100%',
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: '#2DC275',
                            },
                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                                {
                                    borderColor: '#2DC275',
                                },
                        }}
                    />
                </LocalizationProvider>

                {/* File upload input */}
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        gap: 2,
                    }}
                >
                    <InputLabel>Poster image</InputLabel>
                    <Button
                        component="label"
                        sx={{
                            backgroundColor: '#2DC275',
                            p: 1,
                            color: 'white',
                            border: '1px solid #2DC275',
                            fontWeight: 'bold',
                            '&:hover': {
                                color: '#2DC275',
                                backgroundColor: 'white',
                            },
                        }}
                    >
                        Upload File
                        <input type="file" accept="image/*" hidden onChange={handleFileChange} />
                    </Button>
                </Box>
                
                {/* File upload name */}
                <Typography
                    sx={{
                        fontSize: 13,
                        alignSelf: 'flex-start',
                        fontWeight: 'bold',
                        color: '#2DC275',
                        height: 40,
                        width: '100%'
                    }}
                >
                    Selected file: {selectedFile && selectedFile.name}
                </Typography>

                {/* Submit button */}
                <Button
                    sx={{
                        width: '100%',
                        backgroundColor: '#2DC275',
                        p: 1,
                        color: 'white',
                        border: '1px solid #2DC275',
                        fontWeight: 'bold',
                        '&:hover': {
                            color: '#2DC275',
                            backgroundColor: 'white',
                        },
                    }}
                >
                    SUBMIT
                </Button>
            </Box>
        </Box>
    );
};

export default CreateEventPage;
