import { Link } from 'react-router-dom';
// We can call any exported function with this import as userService
import * as usersService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
	// Add the following function
	function handleLogOut() {
		// Delegate to the users-service
		usersService.logOut();
		// Update the state will also cause a re-render
		setUser(null);
	}

	return (
		<nav>
			<Link to='/flows'>All Flows</Link>
			&nbsp; | &nbsp;
			<Link to='flows/create'>Create a Flow</Link>
			&nbsp; | &nbsp;
			<span>
				<b>Namaste, {user.name}</b>
			</span>
			&nbsp; | &nbsp;
			<Link to='' onClick={handleLogOut}>
				Log Out
			</Link>
		</nav>
	);
}

