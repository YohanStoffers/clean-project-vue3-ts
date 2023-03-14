import axios from 'axios';

export const templateDataCall = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

    return response ? response.data : undefined;
};
export const templateCustomDataCall = async (url: string) => {
    const response = await axios.get(url);

    return response ? response.data : undefined;
};
