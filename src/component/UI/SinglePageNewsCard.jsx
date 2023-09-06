import React, { useContext } from "react";
import SaveForLater from "../../feature/SaveForLater";
import NewsContext from "../../store/Context";

const SinglePageNewsCard = ({ news, id, onDeleteSavedNews }) => {
  const { setSavedNewsItems } = useContext(NewsContext);
  // Change the date formate
  const date = new Date(news.created_at);
  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    day: "numeric",
    month: "short",
    year: "numeric",
    weekday: "long",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  // Delete saved news data
  const deleteDataHandler = (newsId) => {
    onDeleteSavedNews(newsId);
    if (newsId) {
      setSavedNewsItems((prev) => {
        return prev.filter((res) => res.news_id !== newsId);
      });
    }
  };
  return (
    <div className="relative md:static flex flex-col grow mx-auto p-6 rounded-xl shadow-lg m-6 overflow-hidden bg-card-fill ">
      <div className="flex justify-between ">
        {/* Display news title */}
        <div className="font-bold text-sm md:text-2xl mb-6 text-primary ">
          {news.title}
        </div>
        {/* Save for later functionality component */}
        <div className=" absolute bottom-5 right-5 md:static">
          <SaveForLater
            news={news}
            newsId={id}
            onDeletedata={deleteDataHandler}
          />
        </div>
      </div>
      {/* Display news author details and generation time  */}
      <div className="flex mb-8 ">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="Author profile"
          className="w-10 h-10 rounded-full me-4 hidden md:block"
        />
        <div>
          <p className="font-bold text-sm md:text-base text-primary">
            Short by: {news.author_name}
          </p>
          <p className=" text-xs md:text-sm text-primary">{formattedDate}</p>
        </div>
      </div>

      <div className="h-52 lg:h-96 md:h-80 bg-cover bg-black w-full  mb-4 rounded-xl flex justify-center">
        {/*Display News Image */}
        <img
          className="w-full h-full object-contain overflow-hidden"
          src={news.image_url}
          alt="No image found"
        />
      </div>
      <div>
        {/* Display news categories */}
        {news.category_names.map((res, index) => (
          <span
            key={res}
            className={`text-xs font-medium px-3 py-1 me-2 rounded hidden md:inline dark:text-blue-300 ${
              index % 2 === 0
                ? "bg-blue-100 text-blue-800"
                : "bg-green-100 text-green-800"
            }`}
          >
            {res}
          </span>
        ))}
        {/* Display aggrigated news */}
        <p className="text-muted text-justify my-4 text-xs md:text-sm lg:text-base lg:h-20">
          {news.content}
        </p>
        {/* Link of source */}
        <p className="text-xs md:text-sm text-primary">
          <span>read more at</span>
          <a href={news.source_url} target="_blank">
            <span className="text-blue-600 ms-1">{news.source_name}</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default SinglePageNewsCard;
