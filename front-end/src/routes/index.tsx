import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import CreateEvent from "../pages/CreateEvent";
import EventReportPage from "../pages/EventReportPage";
import EventDetail from "../pages/EventDetail";
import EventBookingPage from "../pages/EventBookingPage";
import PublishEvent from "../pages/PublishEvent";
import MyTicket from "../pages/MyTicket";

const routes = [
    { 'path': '/', 'component': <LandingPage/> },
    { 'name': 'Home', 'path': '/browse_event', 'component': <LandingPage/> },
    { 'name': 'My Ticket', 'path': '/my_ticket', 'component': <MyTicket/> },
    { 'name': 'Create Event', 'path': '/create_event', 'component': <CreateEvent/> },
    { 'name': 'Publish Event', 'path': '/publish_event', 'component': <PublishEvent/> },
    { 'name': 'Event Report', 'path': '/event_report', 'component': <EventReportPage/> },
    { 'path': '/event_detail/:id', 'component': <EventDetail/> },
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