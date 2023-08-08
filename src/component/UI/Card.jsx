import React from "react";
import ManageLike from "../../feature/ManageLike";
import SaveForLater from "../../feature/SaveForLater";

const Card = () => {
  return (
    <div className="mx-auto mb-6 max-w-screen-lg  rounded-xl overflow-hidden shadow-lg flex">
      {/*Display News Image */}
      <img
        className="w-full h-full object-cover"
        src="https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/07_jul/21_fri/img_1689930448868_503.jpg?"
        alt="News image"
      />
      {/* Start: News Content */}
      <div className="p-6 bg-card-fill">
        <div className="flex justify-between">
          {/* Display news title */}
          <p className="font-bold text-lg mb-2 text-base">
            {" "}
            Lorem ipsum dolor sit
          </p>
          {/* Save news for later */}
          <SaveForLater />
        </div>
        {/* Display news auhtor name and generation time */}
        <p className="text-xs text-muted mb-2">
          <span className="font-bold">short by</span> Lorem ipsum / 03:22 pm on
          21 Jul 2023,Friday
        </p>
        {/* Display aggrigated news */}
        <p className="text-muted text-base text-justify mb-2 text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ipsam
          fugit, nulla ut error incidunt itaque odit tempore, quasi quaerat
          repellendus amet porro officiis ab. Hic delectus sequi illo debitis
          nesciunt excepturi, obcaecati deserunt! Esse repudiandae hic itaque
          excepturi expedita quia perspiciatis voluptatem possimus at aperiam
          sapiente, omnis animi sed atque repellendus facere consectetur,
          dolorem, quas non ullam adipisci. Distinctio.
        </p>
        {/* Link of source */}
        <p className="text-xs text-base">read more at Lorem ipsum</p>
      </div>
      {/* End: News Content */}
    </div>
  );
};

export default Card;
