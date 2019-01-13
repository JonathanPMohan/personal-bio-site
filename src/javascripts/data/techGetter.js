import axios from 'axios';

const getTech = () => axios.get('http://localhost:3004/tech');

export default { getTech };
