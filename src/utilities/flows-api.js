const BASE_URL = '/api/flows';

export function getAll() {
    return fetch(BASE_URL).then(res => res.json);
}
