export interface SidebarItem {
  name: string;
  url: string;
}

export interface SidebarData {
  items: SidebarItem[];
}

export interface ContentData {
  id: number;
  name: string;
  slug: string;
  locale: string;
  publishDate: string;
  web: {
    id: number;
  };
  data: {
    perex: string;
    image: string;
    content: string;
    contact: {
      phone: string;
      email: string;
    };
    sidebar: SidebarData;
    heroCta: SidebarItem;
  };
}

export type ContentProps = {
  contents?: ContentData["data"];
};

const Content = ({ contents }: ContentProps) => {
  return (
    <div>
      {contents && (
        <>
          <div>{contents.perex && <p>{contents.perex}</p>}</div>
          {contents.content && (
            <p>
              <div dangerouslySetInnerHTML={{ __html: contents.content }}></div>
            </p>
          )}
          {contents.contact && (
            <div>
              <p>Email: {contents.contact.phone}</p>
              <p>Phone: {contents.contact.email}</p>
            </div>
          )}
          {contents.image && <img src={contents.image} alt="Article" />}
          {contents.sidebar && (
            <ul>
              {contents.sidebar.items.map((item, index) => (
                <li key={index}>
                  <a href={item.url}>{item.name}</a>
                </li>
              ))}
            </ul>
          )}
          {contents.heroCta && (
            <div>
              <a href={contents.heroCta.url}>{contents.heroCta.name}</a>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Content;
