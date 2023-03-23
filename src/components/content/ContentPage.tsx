import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Content, { ContentProps, ContentData } from "./Content";

export const ContentPage = ({ contents }: ContentProps) => {
  const { slug } = useParams();
  const [content, setContent] = useState<ContentData>();
  useEffect(() => {
    // Fetch data based on slug
    axios
      .get<ContentData>(
        `https://acecmsmock.z6.web.core.windows.net/api/content/slug/${slug}?webId=3`
      )
      .then((response) => {
        const content = response.data;
        // Render content using fetched data
        console.log("content:", content);
        setContent(content);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [slug]);
  if (!slug) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Content contents={content?.data} />
    </div>
  );
};
