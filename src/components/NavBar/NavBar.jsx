import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
	function handleLogOut() {
		usersService.logOut();
		setUser(null);
	}

	async function handleCheckToken() {
		const expDate = await usersService.checkToken();
		console.log(expDate);
	}

	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container-fluid">
				<span class="navbar-brand">
					<b>Namaste, {user.name}</b>
				</span>
				<div class="nav justify-content-end">
					<Link to='/flows'>All Flows</Link>
					&nbsp; &nbsp;
					<Link to='flows/create'>Create a Flow</Link>
					&nbsp; &nbsp;
					<Link onClick={handleCheckToken}>
						Login Expiration
					</Link>
					&nbsp; &nbsp;
					<Link to='' onClick={handleLogOut}>
						Log Out
					</Link>
				</div>
			</div>
		</nav >
	);
}

