import { useLocation } from 'react-router-dom';
import FlowDetail from '../../components/FlowDetail/FlowDetail';

export default function FlowDetailPage(props) {
    const { state: { flow } } = useLocation();

    return (
        <>
            <FlowDetail
                flow={flow}
                key={flow._id}
            />
        </>
    );
}