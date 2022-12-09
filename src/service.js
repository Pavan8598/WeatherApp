import axios from 'axios';


const url = "http://127.0.0.1:3003/user";

export const getallUsers = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addUser = async (user) => {
    return await axios.post(url,user);
}

export const editUser = async (id, user) => {
    return await axios.put(`${url}/${id}`,user);
}


export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}



const url1 = "http://127.0.0.1:3003/added";


export const getallAdded = async (id) => {
    id = id || '';
    return await axios.get(`${url1}/${id}`);
}

export const addIntoAdded = async (user) => {
    return await axios.post(url1,user);
}

export const editAdded = async (id, user) => {
    return await axios.put(`${url1}/${id}`,user);
}


export const deleteAdded = async (id) => {
    return await axios.delete(`${url1}/${id}`);
}



const url2 = "http://127.0.0.1:3003/favorite";


export const getallFavorite = async (id) => {
    id = id || '';
    return await axios.get(`${url2}/${id}`);
}

export const addIntoFavorite = async (user) => {
    return await axios.post(url2,user);
}

export const editFavorite = async (id, user) => {
    return await axios.put(`${url2}/${id}`,user);
}


export const deleteFavorite = async (id) => {
    return await axios.delete(`${url2}/${id}`);
}

