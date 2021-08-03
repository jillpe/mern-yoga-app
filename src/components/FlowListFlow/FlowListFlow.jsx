import { Link } from 'react-router-dom';

export default function FlowListFlow({ flow, handleDeleteFlow }) {
    return (
        <>

            <Link
                to={{
                    pathname: '/flows/details',
                    state: { flow },
                }}>
                <h2>{flow.name}</h2>
            </Link>
            <Link to={{
                pathname: '/flows/edit',
                state: { flow },
            }} >
                Edit
            </Link>
            <button onClick={() => handleDeleteFlow(flow._id)}>Delete</button>
        </>
    );
}