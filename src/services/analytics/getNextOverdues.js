import api from "../../api";

export default async function (year, month, day) {
    const { data } = await api.get('analytics/overdues', {
        params: {
            year, month, day
        }
    })
    return data;
}