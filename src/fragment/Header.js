import {Link} from 'react-router-dom';
import '../scss/header.scss';

function Header() {
    return (
        <header>
            <div className="headerInner">
                <h1><Link to="/">Mac Studio</Link></h1>

                <nav>
                    <ul>
                        <li><Link to="/">개요</Link></li>
                        <li><Link to="/">제품사양</Link></li>
                    </ul>
                </nav>
            </div>
        </header>    
    );
}

export default Header;