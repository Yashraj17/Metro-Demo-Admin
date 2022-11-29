import React from "react";

const DisplayImage = ({ imageList, onImageRemove }) => {
  // if(imageList.length < 2){
  //   alert("maximum add 2 photo");
  //   console.log("hh");
  // }
  console.log("hello", imageList.length);

  return (
    <>
      {/* {image?.map((url, index) => (
        <div key={index} className="flex justify-end relative ">
          <img className="img-fluid  w-fit h-32 mt-0" src={url} alt="" />
          <button
            onClick={() => handleImageRemove(url)}
            className=" absolute hover:text-black bg-gray-400 p-1 hover:bg-white text-white mt-0 z-40"
          >
            X
          </button>
        </div>
      ))} */}

      {imageList.map((image, index) => (
        <div key={index} className="flex justify-end relative">
          <img
            className="img-fluid  w-fit h-32 mt-0"
            src={image.data_url}
            alt=""
          />

          <button
            className="absolute hover:text-black bg-gray-400 p-1 hover:bg-white text-white mt-0 z-40"
            onClick={() => onImageRemove(index)}
          >
            X
          </button>
        </div>
      ))}
    </>
  );
};

export default DisplayImage;
