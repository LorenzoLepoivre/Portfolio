// components/Header.tsx
import { Link } from 'react-router-dom'; // Importer Link pour la navigation
import '../css/header.css'; // Importer le fichier CSS avec le bon chemin

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <nav>
                    <ul className="nav-links">
                        <li>
                            <Link to="/" className="nav-link">Projects</Link>
                        </li>
                        <li>
                            <Link to="/cv" className="nav-link">CV</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
