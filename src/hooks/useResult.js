import { useState, useEffect } from 'react';
import Service from '../services/SearchService';

export default () => {
    const [result, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const response = async (term) => {
        try {
            const res = await Service.search(term)
            setResult(res.data.businesses)
        } catch (e) {
            setErrorMessage("Something went wrong")
        }
    }

    useEffect(() => {
        response('pasta');
    }, []);
    return [response, result, errorMessage]
};