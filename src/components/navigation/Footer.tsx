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
      <div>
        {data.data.columns.map((column, index) => (
          <div key={index}>
            <ul>
              {column.links?.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div dangerouslySetInnerHTML={{ __html: data.data.address }}></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <a href={data.data.facebook}>Facebook</a>
        <a href={data.data.twitter}>Twitter</a>
        <a href={data.data.youtube}>Youtube</a>
        <a href={data.data.instagram}>Instagram</a>
      </div>
      <p>{data.data.copyright.replace(/(<([^>]+)>)/gi, "")}</p>
    </footer>
  );
};

export default Footer;
