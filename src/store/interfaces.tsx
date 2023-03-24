export interface NavbarItem {
  name: string;
  uri: string;
}

export interface NavbarData {
  items: NavbarItem[];
}

export interface NavbarApiResponse {
  id: number;
  name: string;
  slug: string;
  locale: string;
  publishDate: string;
  web: {
    id: number;
  };
  data: NavbarData;
}

interface ColumnItem {
  name: string;
  url: string;
}

// export interface FooterColumns {
//   items: ColumnItem[];
// }

export interface FooterColumn {
  items: ColumnItem[];
}

export interface FooterData {
  id: number;
  name: string;
  slug: string;
  locale: string;
  publishDate: string;
  web: {
    id: number;
  };
  data: {
    columns: FooterColumn[];
    address: string;
    facebook: string;
    twitter: string;
    youtube: string;
    instagram: string;
    copyright: string;
  };
}
