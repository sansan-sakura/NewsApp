import { useEffect, useState } from "react";
import NewsPost from "./component/NewsPost";
import Header from "./component/Header";
import NewsPostWithoutImage from "./component/NewsPostWithoutImage";
import { ChakraProvider } from "@chakra-ui/react";

import "./App.css";

function App() {
  const [news, setNews] = useState([]);
  const [currGenre, setCurrGenre] = useState("general");
  const [currCountry, setCurrCountry] = useState("us");

  useEffect(() => {
    fetch(`
https://newsapi.org/v2/top-headlines?country=${currCountry}&category=${currGenre}&apiKey=7025ccab01974941adfa4010d0ef0e48`)
      .then((results) => results.json())
      .then((data) => {
        setNews(data.articles);
      });
  }, [currGenre, currCountry]);

  return (
    <ChakraProvider>
      <div>
        <Header setCurrGenre={setCurrGenre} setCurrCountry={setCurrCountry} />

        <h3 className="text-gray-400 ml-2 md:ml-10 md:text-xl lg:ml-28 xl:text-2xl xl:mx-44 xl:mb-4">
          Top News
        </h3>
        <div className=" grid grid-cols-1 lg:mx-20 lg:gap-4 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-6 2xl:mx-40 ">
          <div className="grid md:gap-4 md:grid-cols-2 lg:col-span-2 2xl:grid-cols-3 2xl:col-span-3">
            {news.map(
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
            <h3 className="text-gray-400 ml-2">More to explore</h3>
            <hr className="border-gray-700 mb-4 mt-2" />
            {news.map(
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
      </div>
    </ChakraProvider>
  );
}

export default App;
