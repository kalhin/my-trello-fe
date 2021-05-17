import axios from 'axios';

import { ENDPOINTS } from "./endpoints";

export async function getTodos () {
    try {
        let res = await axios.get(ENDPOINTS.TO_DOS);
        return res.data;
    } catch (error) {
        console.error(error);
    }
};