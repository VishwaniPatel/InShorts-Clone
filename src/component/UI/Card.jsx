import React from "react";
import ManageLike from "../../feature/ManageLike";
import SaveForLater from "../../feature/SaveForLater";

const Card = ({ news }) => {
  const date = new Date(news.news_obj.created_at);
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
  return (
    <div className=" mx-auto max-w-7xl rounded-xl shadow-lg flex m-6 overflow-hidden bg-card-fill">
      {/*Display News Image */}
      <div className="h-[16rem] w-1/3 bg-cover   ">
        {/* <img className="h-full w-full" src={data.urlToImage}></img> */}
        <img
          className="w-full h-full object-cover  overflow-hidden"
          src={news.news_obj.image_url}
          alt="No image found"
        />
      </div>

      {/* Start: News Content */}
      <div className="w-2/3 p-6 ">
        <div className="flex justify-between">
          {/* Display news title */}
          <p className="font-bold text-lg mb-2 text-primary">
            {news.news_obj.title}
          </p>
          {/* Save news for later */}
          <SaveForLater />
        </div>
        {/* Display news auhtor name and generation time */}
        <p className="text-xs text-muted mb-2">
          <span className="font-bold">short by</span> {news.author_name} /{" "}
          {formattedDate}
        </p>
        {/* Display aggrigated news */}
        <p className="text-muted text-primary text-justify mb-2 text-sm">
          {news.news_obj.content}
        </p>
        {/* Link of source */}
        <p className="text-xs text-primary">
          <a href={news.news_obj.source_url} target="_blank">
            {news.news_obj.source_name}
          </a>
        </p>
      </div>
      {/* End: News Content */}
    </div>
  );
};

export default Card;
