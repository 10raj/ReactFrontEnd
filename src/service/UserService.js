import {axiosForCalls} from "./urls"


export const logIn = async (user) =>{
    const res = await axiosForCalls.post('/auth/login',user);
    return res.data;
} 

export const signUp = async (user) =>{
    const res = await axiosForCalls.post('/api/v1/user/register',user);
    return res.data;
} 
export const getBookDetails = async (props) =>{
    const res = await axiosForCalls.get('/book/book_name/{props.bookName}');
    return res.data;
} 