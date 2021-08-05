import FlowListFlow from '../../components/FlowListFlow/FlowListFlow';

export default function FlowListPage(props) {
	

	return (
		<>
			<h1>Pick a Flow</h1>
			<div>
				{props.flows.map(flow => (
					<FlowListFlow
						flow={flow}
						key={flow._id}
						handleDeleteFlow={props.handleDeleteFlow}
					/>
				))}
			</div>
			
		</>
	);
}
