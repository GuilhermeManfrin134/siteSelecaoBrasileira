import axios from "axios";

const api = axios.create({
    baseURL: 'https://defaltentretenimento.github.io/Data/jogadores_brasileiros.geojson'
});

export default api;