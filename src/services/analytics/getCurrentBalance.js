import api from "../../api";

export default async function (year, month) {
    const { data } = await api.get('analytics/currentBalance', {
        params: {
            year, month
        }
    })
    return data;
}