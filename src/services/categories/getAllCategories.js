import api from "../../api";

export default async function () {
    const {data} = await api.get('categories')
    return data;
}