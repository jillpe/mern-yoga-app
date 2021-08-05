import { Link } from 'react-router-dom';

export default function FlowDetail({ flow }) {
    return (
        <>
        <div class="container">
            <div class="row">
                <h1>{flow.name}</h1>
            </div>
            <div class="row">
                <h5>{flow.category} Yoga</h5>
            </div>
            <div>
                <h9>Difficulty: {flow.difficulty}</h9>
            </div>
            &nbsp;
            <div>
                <label>Pose Sequence:</label>
                <p>{flow.poses}</p>
            </div>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <div class="row align-items-center">
            <button class="btn btn-outline-info btn-sm">
                <Link to='/flows'>GO BACK</Link>
            </button>
            </div>
        </div>
        </>
    )
}