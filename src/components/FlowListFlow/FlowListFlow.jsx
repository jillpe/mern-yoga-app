import { Link } from 'react-router-dom';

export default function FlowListFlow({ flow }) {
    return (
        <>

            <Link to="/flows/details">
                <h2>{flow.name}</h2>
            </Link>
            <Link to="/flows/edit">
                Edit
            </Link>
            <button>Delete</button>
        </>
    );
}