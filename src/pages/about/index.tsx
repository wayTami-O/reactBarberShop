import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import BackgroundComponent from '../../components/Background';

function AboutPage() {
    return (  
        <>
            <Header active={"о нас"}/>
            <div className="">about</div>
            <Link to="/">back</Link>
            <BackgroundComponent />
        </>
    );
}

export default AboutPage;