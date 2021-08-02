import * as usersService from '../../utilities/users-service';
import FlowListFlow from '../../components/FlowListFlow/FlowListFlow';

export default function FlowListPage(props) {
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
			<div>
				{props.flows.map(flow =>
					<FlowListFlow
						flow={flow}
						key={flow._id}
					/>
				)}
			</div>
		</>
	);
}
