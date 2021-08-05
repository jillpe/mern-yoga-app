import { Link } from 'react-router-dom';

export default function FlowListFlow({ flow, handleDeleteFlow }) {
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-8">
                    <Link
                        to={{
                            pathname: '/flows/details',
                            state: { flow },
                        }}>
                        <h3>{flow.name}</h3>
                    </Link>
                    </div>
                    <div class="col-1">
                    <Link
                        to={{
                            pathname: '/flows/edit',
                            state: { flow },
                        }} >
                        Edit
                    </Link>
                    </div>
                    <div class="col-1">
                    <button class="btn btn-outline-danger btn-sm" onClick={() => handleDeleteFlow(flow._id)}>X</button>
                    </div>
                </div>
            </div>
        </>
    );
}