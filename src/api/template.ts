import axios from 'axios';

export const templateDataCall = () => axios.get('https://jsonplaceholder.typicode.com/posts/1a');
export const templateCustomDataCall = (url: string) => axios.get(url);
