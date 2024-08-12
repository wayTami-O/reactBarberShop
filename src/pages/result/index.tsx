import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import BackgroundComponent from '../../components/Background';

function ResultPage() {
    return (
        <>
            <Header active={"записаться"}/>
            <div className="">result</div>
            <Link to="/">back</Link> 
            <BackgroundComponent />
        </>
    );
}

export default ResultPage;