import React from "react";

const Timeline = ({ timelineData }) => {
  return (
    <div className="container">
      <h1 className="my-10 text-center font-light text-4xl tracking-[15px] uppercase mb-8">
        Timeline
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="container">
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
          {timelineData.map((item, index) => (
            <React.Fragment key={index}>
              {/* Alternate between left and right directions */}
              {index % 2 === 0 ? (
                // Left direction
                <div className="flex flex-row-reverse md:contents">
                  <div className="bg-teal-600 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="leading-tight text-justify">
                      {item.description}
                    </p>
                  </div>
                  <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 bg-teal-700 pointer-events-none" />
                    </div>
                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-teal-500 shadow" />
                  </div>
                </div>
              ) : (
                // Right direction
                <div className="flex md:contents">
                  <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 bg-teal-700  pointer-events-none" />
                    </div>
                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-teal-900 shadow" />
                  </div>
                  <div className="bg-teal-900 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="leading-tight text-justify">
                      {item.description}
                    </p>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
