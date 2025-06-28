import axios from 'axios';

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: '868dfc5e250b4d518a7f3b7e5d7aca87'
    }
})