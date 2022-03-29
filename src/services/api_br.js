import axios from 'axios';

const api_br = axios.create({
    baseURL: 'https://defaltentretenimento.github.io/Data/selecao_brasileira.geojson'
});

export default api_br;
