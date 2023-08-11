import React from "react";
import ManageLike from "../../feature/ManageLike";
import SaveForLater from "../../feature/SaveForLater";
import { useAuth0 } from "@auth0/auth0-react";
const Card = ({ news }) => {
  const { isAuthenticated } = useAuth0();
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
  return (

    <div className=" mx-auto max-w-7xl rounded-xl shadow-lg flex  flex-col md:flex-row m-6 overflow-hidden bg-card-fill ">
      {/*Display News Image */}
      <div className="h-52 lg:h-72 md:h-80 bg-cover w-full md:w-1/3">
        {/* <img className="h-full w-full" src={data.urlToImage}></img> */}
        <img
          className="w-full h-full object-cover overflow-hidden"
          src={news.image_url}
          alt="No image found"
        />
      </div>

      {/* Start: News Content */}
      <div className="w-full md:w-2/3 p-6   relative md:static">
        <div className="flex justify-between">
          {/* Display news title */}
          <div className="font-bold text-sm md:text-lg mb-2 text-primary">
            {news.title}
          </div>
          {/* Save news for later */}
          {isAuthenticated && <SaveForLater news={news} />}
        </div>
        {/* Display news auhtor name and generation time */}
        <p className="text-xs text-muted mb-2">
          <span className="font-bold">short by</span> {news.author_name} /{" "}
          {formattedDate}
        </p>
        {/* Display aggrigated news */}
        <p className="text-muted  text-justify mb-2 text-xs md:text-sm lg:text-base">
          {news.content}
        </p>
        {/* Link of source */}
        <p className="text-xs text-primary">
          <span>read more at</span>
          <a href={news.source_url} target="_blank">
            <span className="text-blue-600 ms-1">{news.source_name}</span>
          </a>
        </p>
      </div>
      {/* End: News Content */}
    </div>

  );
};

export default Card;
