import api from "../../api";

export default async function (body) {
    const {data} = await api.post('transactions',body)
    return data;
}