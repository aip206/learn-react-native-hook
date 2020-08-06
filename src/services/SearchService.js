import Yelp from '../api/yelp';

const Service =
{
    search: async (term) => {
        return await Yelp.get('/search', {
            params: {
                limit: 50,
                term: term,
                location: 'san jose'
            }
        })
    }

}

export default Service;



