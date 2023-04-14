import api from "../../api";

export default async function (id) {
    await api.delete('transactions/' + id)
}