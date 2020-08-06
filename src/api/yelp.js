import axios from 'axios';

export default axios.create ({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer 2yFd49kfRIn-UVFfTIWC8wyYyq2PTmRLl-_50HERLLCmXL7HZaWc7diqC_RDQcTP_tO3XhXJ4yf8FOx1L3w3ZxUK4-NsRS6nMTpJ1s_LFmxjL0PRW1mD7vPvZ0D0XnYx'
    }
})