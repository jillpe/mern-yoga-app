import { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as flowAPI from '../../utilities/flows-api';
import AuthPage from '../AuthPage/AuthPage';
import CreateFlowPage from '../CreateFlowPage/CreateFlowPage';
import FlowListPage from '../FlowListPage/FlowListPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App(props) {
	const [user, setUser] = useState(getUser());
	const [flows, setFlows] = useState([]);
	const history = useHistory();

	useEffect(() => {
		async function getFlows(){
			const flows = await flowAPI.getAll();
			setFlows(flows);
		}
		getFlows();
	}, [])

	useEffect(() => {
		history.push('/flows')
	}, [flows, history])

	async function handleAddFlow (newFlowData) {
		console.log(newFlowData);
		const newFlow = await flowAPI.create(newFlowData);
		setFlows([...flows, newFlow])
	}

	return (
		<main className='App'>
			{user ? (
				<>
					<NavBar user={user} setUser={setUser} />
					<Switch>
						<Route exact path='/flows/create'>
							<CreateFlowPage handleAddFlow={handleAddFlow}/>
						</Route>
						<Route  exact path='/flows'>
							<FlowListPage flows={flows}/>
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

