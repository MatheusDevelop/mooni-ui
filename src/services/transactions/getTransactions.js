import api from "../../api";

export default async function (id) {
    const { data } = await api.get('transactions')
    return data;
}