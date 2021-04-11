import axios from 'axios';

export const getBoards = async () => {
    let res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=3`)
    return res.data
}