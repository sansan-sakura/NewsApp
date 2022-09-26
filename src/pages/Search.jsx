import { useEffect, useState } from "react";
import NewsPost from "../component/NewsPost";
import Header from "../component/Header";
import NewsPostWithoutImage from "../component/NewsPostWithoutImage";

export default function Search(props) {
  const [searchNews, setSearchNews] = useState([]);
  useEffect(() => {
    fetch(`
  https://newsapi.org/v2/everything?q=${props.topic}&language=en&sortBy=relevancy&apiKey=7025ccab01974941adfa4010d0ef0e48`)
      .then((results) => results.json())
      .then((data) => {
        setSearchNews(data.articles);
      });
  }, [props.topic]);
  console.log(0);
  return (
    <>
      <Header />
      <h3 className="text-gray-400 text-2xl mx-44 mb-4">Search results</h3>
      <div className="mx-40  grid grid-cols-4 gap-6">
        <div className="grid grid-cols-3 col-span-3">
          {searchNews.map(
            (el, i) =>
              el.urlToImage && (
                <NewsPost
                  key={i}
                  author={el.author}
                  content={el.content}
                  description={el.description}
                  publishedAt={el.publishedAt}
                  title={el.title}
                  image={el.urlToImage}
                  url={el.url}
                  sourse={el.source.name}
                />
              )
          )}
        </div>
        <div className="mt-12">
          <h3 className="text-gray-400">More</h3>
          <hr className="border-gray-700 mb-4 mt-2" />
          {searchNews.map(
            (el, i) =>
              !el.urlToImage && (
                <NewsPostWithoutImage
                  key={i}
                  publishedAt={el.publishedAt}
                  title={el.title}
                  url={el.url}
                  sourse={el.source.name}
                />
              )
          )}
        </div>
      </div>
    </>
  );
}
