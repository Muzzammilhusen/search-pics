import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID MelghQIB_OQvfhIZ32b5kwEPxHUfdGU8lKApK0MLcK0'
    }
});