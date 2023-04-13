import api from "../../api";

export default async function (id) {
    const { data } = await api.get('/users/' + id)
    return data;
}