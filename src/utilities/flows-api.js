import {getToken} from './users-service';

const BASE_URL = '/api/flows';

export function getAll() {
	return fetch(BASE_URL).then(res => res.json());
}

export function create(newFlowData) {
	const token = getToken();
	console.log(token);
	return fetch(BASE_URL, {
		method: 'POST',
		headers: { 'content-type': 'application/json', 
		'Authorization': `Bearer ${token}`},
		body: JSON.stringify(newFlowData),
	}).then(res => res.json());
}
