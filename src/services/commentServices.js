import api from "./api";
import { comments } from './comments'
export const getComments = async () => {
    // const { data } = await api.get("http://localhost:1337/api/comments?populate=*&pagination[page]=1&pagination[pageSize]=6");
    return comments;
};