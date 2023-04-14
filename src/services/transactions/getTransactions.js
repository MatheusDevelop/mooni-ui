import api from "../../api";

export default async function (query) {
    if (query) {
        const { data } = await api.get('transactions/quicksearch', {
            params: {
                query
            }
        })
        return data;
    }
    const { data } = await api.get('transactions')
    return data;
}