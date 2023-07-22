import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import CreateEventPage from "../pages/CreateEventPage";
import EventReportPage from "../pages/EventReportPage";
import EventDetailPage from "../pages/EventDetailPage";
import EventBookingPage from "../pages/EventBookingPage";

const routes = [
    { 'path': '/', 'component': <LandingPage/> },
    { 'name': 'Home', 'path': '/browse_event', 'component': <LandingPage/> },
    { 'name': 'Create Event', 'path': '/create_event', 'component': <CreateEventPage/> },
    { 'name': 'Event Report', 'path': '/event_report', 'component': <EventReportPage/> },
    { 'path': '/event_detail', 'component': <EventDetailPage/> },
    { 'path': '/event_booking', 'component': <EventBookingPage/> }
]

const PublicRoutes = () => {
    return (
        <Routes>
            {routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.component}
                    />
                )
            })}
        </Routes>
    )
}

export { routes }

export default PublicRoutes;