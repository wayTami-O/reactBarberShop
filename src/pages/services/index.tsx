import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import BackgroundComponent from '../../components/Background';

function ServicesPage() {
    return (
        <>
            <Header active={"услуги"}/>
            <div className="">services</div>
            <Link to="/">back</Link>
            <BackgroundComponent />
        </>
    );
}

export default ServicesPage;