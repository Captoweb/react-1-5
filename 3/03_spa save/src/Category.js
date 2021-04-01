import {useRouteMatch} from 'react-router-dom';
import { Link } from 'react-router-dom';


function Category() {
    let match = useRouteMatch(); 
    return(
        <>
            <nav>
                <li><Link to={`${match.url}/notebook`}>Ноутбуки</Link></li>
                <li><Link to={`${match.url}/monitor`}>Мониторы</Link></li>
                <li><Link to={`${match.url}/cellphoner`}>Мобильные телефоны</Link></li>
            </nav>
        </>
    );
}

export default Category;