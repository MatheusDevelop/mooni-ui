import api from "../../api";

export default async function (id, paid) {
    const { data } = await api.put('transactions/payment/' + id, paid)
    return data;
}