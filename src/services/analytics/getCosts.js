import api from "../../api";

export default async function (year, month) {
    const { data } = await api.get('analytics/costs', {
        params: {
            year, month
        }
    })
    return data;
}