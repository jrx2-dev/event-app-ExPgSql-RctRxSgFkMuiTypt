const PATH = {
    HOME: '/',
    ADD_EVENT: '/addEvent',
    EVENT_LIST: '/eventList',
};

export const API_PATH = `${process.env.REACT_APP_API_BASE_URL}:${process.env.REACT_APP_API_PORT}${process.env.REACT_APP_API_VERSION}`;

export default PATH;