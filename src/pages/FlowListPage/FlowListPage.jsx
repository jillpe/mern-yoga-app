import * as usersService from '../../utilities/users-service';

export default function FlowListPage() {
	async function handleCheckToken() {
		const expDate = await usersService.checkToken();
		console.log(expDate);
	}

	return (
		<>
			<h1>FlowListPage</h1>
			<button onClick={handleCheckToken}>
				Check When My Login Expires
			</button>
		</>
	);
}
