import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import {
    Box,
    Typography
} from '@mui/material'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type EventDetailTitle = {
    title: string
}

const Back = () => {
    const navigation = useNavigate()

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
            <FontAwesomeIcon icon={faArrowLeft} color='#000000' />
            <Typography
                variant='subtitle1'
            >
                Back
            </Typography>
        </Box>
    )
}

const EventDetailTitle = (props: EventDetailTitle) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                alignItems: 'center'
            }}
        >
            <Typography
                sx={{
                    backgroundColor: '#2DC275',
                    fontWeight: 'bold',
                    borderRadius: 2,
                    color: 'white',
                    p: '10px 25px'
                }}
            >
                BOOKING
            </Typography>
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 'bold',
                    width: '600px',
                    textAlign: 'center'
                }}
            >
                {props.title}
            </Typography>
        </Box>
    )
}

const SeatMap = () => {
    return (
        <></>
    )
}

const EventDetailPage = () => {
    const location = useLocation();
    return (
        <Box
            sx={{
                height: '100%',
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '30px',
                position: 'relative'
            }}
        >
            <Back/>
            <EventDetailTitle title={location.state.title}/>
        </Box>
    )
}

export default EventDetailPage;