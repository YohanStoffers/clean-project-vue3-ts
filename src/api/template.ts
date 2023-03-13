import axios from 'axios';

export const templateDataCall = () => axios.get('https://jsonplaceholder.typicode.com/posts/1');
