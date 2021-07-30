import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import CreateFlowPage from '../CreateFlowPage/CreateFlowPage';
import FlowListPage from '../FlowListPage/FlowListPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
	const [user, setUser] = useState(getUser());
	return (
		<main className='App'>
			{user ? (
				<>
					<NavBar user={user} setUser={setUser} />
					<Switch>
						<Route path='/flows/create'>
							<CreateFlowPage />
						</Route>
						<Route path='/flows'>
							<FlowListPage />
						</Route>
						<Redirect to='/flows' />
					</Switch>
				</>
			) : (
				<AuthPage setUser={setUser} />
			)}
		</main>
	);
}

