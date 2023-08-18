import { useState } from 'react';
import { Link } from 'react-scroll/modules';

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <Link to="home" className="brand-name">
        <img src="./images/LogoNegro.png" alt="Fernando Cabrera Logo" />
      </Link>
      <div className="social">
        <a href="https://twitter.com/cabreracomposer" target='_blank'>
          <img src="./images/twitter.png" alt="Twitter logo" />
        </a>
        <a href="https://www.instagram.com/fernandocabrera_composer/" target='_blank'>
          <img src="./images/instagram.png" alt="Instagram logo" />
        </a>
        <a href="https://soundcloud.com/fcabreracomposer" target='_blank'>
          <img src="./images/soundcloud.png" alt="Soundcloud logo" />
        </a>
        <a href="https://www.youtube.com/channel/UC0xigPLk87l1mo8c_sPRdUQ" target='_blank'>
          <img src="./images/youtube.png" alt="Youtube logo" />
        </a>
        <a href="https://open.spotify.com/artist/246U74OvO6lJ8ELkn8RREB?si=68kID3xoTc-6uosL7D76uA" target='_blank'>
          <img src="./images/spotify.png" alt="Spotify logo" />
        </a>
      </div>
      <button
        aria-label="Hamburger button"
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="black"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'}
        onClick={() => setIsNavExpanded(false)}
      >
        <ul>
          <li>
            <Link to="home" onClick={() => setIsNavExpanded(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="projects" onClick={() => setIsNavExpanded(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="about" onClick={() => setIsNavExpanded(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="contact" onClick={() => setIsNavExpanded(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
