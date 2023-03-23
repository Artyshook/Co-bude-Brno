import { useSelector } from "react-redux";
import { NavbarApiResponse } from "../../store/interfaces";
import { StoreStateAll } from "../../store/reducers/interfaces";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links: NavbarApiResponse | null = useSelector(
    (state: StoreStateAll) => state.navbar.data
  );
  if (!links || !links.data.items) return null;
  return (
    <section className="navigation">
      <div className="nav-container">
        <nav>
          <ul>
            {links?.data.items?.map((link) => (
              <li key={link.name}>
                <Link to={`${link.uri}`}>{link.name}</Link>
              </li>
            ))}
            <li>
              <Link to="/vyrazte-za-kraskou-a-zviretem-nebo-za-loutkami-vikend-bude-kulturni">
                Article
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
