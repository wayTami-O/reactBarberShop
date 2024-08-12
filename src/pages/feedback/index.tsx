import { Link } from 'react-router-dom';
import BackgroundComponent from '../../components/Background';

function FeedbackPage() {
    return (
        <>
            <div className="">feedback</div>
            <Link to="/">back</Link>
            <BackgroundComponent />
        </>
    );
}

export default FeedbackPage;