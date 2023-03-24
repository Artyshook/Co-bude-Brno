import styled from 'styled-components'

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

const ContentContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Perex = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const ContentText = styled.div`

  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 40px;

  p {
    margin-bottom: 20px;
  }
  a {
    text-decoration: none;
  }
`;

const Img = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`


const ContactInfo = styled.div`
  font-size: 16px;
  margin-bottom: 40px;

  p {
    margin-bottom: 10px;
  }
`;

const SidebarList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 18px;
  margin-bottom: 40px;

  li {
    margin-bottom: 10px;
  }

  a {
    color: #2581dc;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: #1b5ca6;
    }
  }
`;

const HeroCTA = styled.div`
  margin-bottom: 40px;

  a {
    display: inline-block;
    background-color: #2581dc;
    color: #ffffff;
    font-size: 20px;
    font-weight: 900;
    text-decoration: none;
    padding: 15px 30px;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #1b5ca6;
    }
  }
`;


const Content = ({ contents }: ContentProps) => {
  const {
    perex,
    content,
    image,
    contact,
    sidebar,
    heroCta
  } = contents || {};

  return (
      <ContentContainer>
        {perex && <Perex>{perex}</Perex>}
        {content && <ContentText dangerouslySetInnerHTML={{ __html: content }} />}
        {image && <Img src={image} alt="Article" />}
        {contact && (
            <ContactInfo>
              <p>Email: {contact.phone}</p>
              <p>Phone: {contact.email}</p>
            </ContactInfo>
        )}
        {sidebar && (
            <SidebarList>
              {sidebar.items.map(({ name, url }, index) => (
                  <li key={index}>
                    <a href={url}>{name}</a>
                  </li>
              ))}
            </SidebarList>
        )}
        {heroCta && (
            <HeroCTA>
              <a href={heroCta.url}>{heroCta.name}</a>
            </HeroCTA>
        )}
      </ContentContainer>
  );
};

export default Content;
