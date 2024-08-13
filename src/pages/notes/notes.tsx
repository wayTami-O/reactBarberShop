import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import BackgroundComponent from '../../components/Background';

function NotesPage() {
    return ( 
        <>
            <Header active={"Мои записи"}/>
            <div className="">notes</div>
            <Link to="/">back</Link>
            <BackgroundComponent />
        </>
    );
}

export default NotesPage;