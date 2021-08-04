import { Link } from 'react-router-dom';

export default function FlowDetail({ flow }) {
    return (
        <>
            <div>
                <h1>{flow.name}</h1>
            </div>
            <div>
                <h3>{flow.category} Yoga</h3>
            </div>
            <div>
                <h3>Difficulty: {flow.difficulty}</h3>
            </div>
            <div>
                {flow.poses}
            </div>
            &nbsp; &nbsp;
            <div>
                <Link to='/flows'>GO BACK</Link>
            </div>
        </>
    )
}