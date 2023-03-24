import { useSelector } from "react-redux";
import { FooterData } from "../../store/interfaces";
import { StoreStateAll } from "../../store/reducers/interfaces";

const Footer = () => {
    const data: FooterData | null = useSelector(
        (state: StoreStateAll) => state.footer.data
    );

    if (!data) return null;

    return (
        <footer className="footer">
            <div className="footer-row">
                <div className="footer-column">
                    {data.data.columns.map((column, index) => (
                        <ul key={index}>
                            {column.items?.map((link, index) => (
                                <li key={index}>
                                    <a href={link.url}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
                <div className="footer-address" dangerouslySetInnerHTML={{ __html: data.data.address }}></div>
                <div className="footer-social">
                    <a href={data.data.facebook}>Facebook</a>
                    <a href={data.data.twitter}>Twitter</a>
                    <a href={data.data.youtube}>Youtube</a>
                    <a href={data.data.instagram}>Instagram</a>
                </div>
            </div>
            <p className="footer-copyright">
                {data.data.copyright.replace(/(<([^>]+)>)/gi, "")}
            </p>
        </footer>
    );
};

export default Footer;


