import React, { useContext } from "react";
import ManageLike from "../../feature/ManageLike";
import SaveForLater from "../../feature/SaveForLater";
import { useAuth0 } from "@auth0/auth0-react";
import NewsContext from "../../store/Context";
import Skeleton from "./Skeleton";

const Card = React.memo(({ news }) => {
  const { isAuthenticated } = useAuth0();
  const { isLoading } = useContext(NewsContext);
  const { setSavedNewsItems } = useContext(NewsContext);

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

  /**
   * get id from save for later component in OnDeletedata
   * @param {*} newsId
   */

  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  return (
    <>
      {news || !isLoading ? (
        <div className=" mx-auto max-w-7xl rounded-xl shadow-lg flex  flex-col md:flex-row m-6 overflow-hidden bg-card-fill ">
          {/*Display News Image */}
          <div className="h-52 lg:h-72 md:h-80 bg-cover w-full md:w-1/3">
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
              <div className="font-bold text-sm md:text-xl mb-2 text-primary">
                {news.title}
              </div>
              {/* Save news for later */}
              {isAuthenticated && (
                <div className=" absolute -top-5 right-5 md:static">
                  <SaveForLater news={news} newsId={news.news_id} />
                </div>
              )}
            </div>
            {/* Display news author details and generation time */}

            <div className="flex mb-4 w-full">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="Author profile"
                className="w-10 h-10 rounded-full me-4 hidden md:block"
              />
              <div>
                <p className="font-bold text-sm md:text-base text-primary">
                  Short by: {news.author_name}
                </p>
                <p className="text-xs md:text-sm text-primary">
                  {formattedDate}
                </p>
              </div>
            </div>
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
      ) : (
        <Skeleton />
      )}
    </>
  );
});

export default Card;
