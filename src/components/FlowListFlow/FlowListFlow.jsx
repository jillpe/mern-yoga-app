import { Link } from 'react-router-dom';

export default function FlowListFlow({ flow }) {
    return (
        <>

            <Link>
                <h2>{flow.name}</h2>
            </Link>
            <Link>
                Edit
            </Link>
            <button>Delete</button>
        </>
    );
}