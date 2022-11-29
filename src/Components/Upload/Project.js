import React from "react";
import ImageUploading from "react-images-uploading";
import DisplayImage from "./DisplayImage";

const Project = ({
  setImages,
  images,
  setInternalImage,
  internalImage,
  setAmentiesImage,
  amentiesImage,
  setOthersImage,
  othersImage,
  setImage,
  image,
}) => {
  // const navigate = useNavigate();
  // const [images, setImages] = useState([]);
  // if (images?.length) {
  //   setData(images);
  // }

  /* externalimages
internalimages
amenitiesimages
othersimages */

  // const [imagesUrl, setImageUrl] = useState([]);
  // console.log(images);

  // useEffect(() => {
  //   if (images.length < 1) return;
  //   const newImageUrls = [];
  //   images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
  //   setImageUrl(newImageUrls);
  // }, [images]);
  // const imageUpload = (e) => {
  //   setImages((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };
  // const handleImage = (e) => {
  //   e.preventDefault();
  //   // setData(imagesUrl);
  // };

  // const [img, setImg] = useState([]);
  // const uploadImage = async (e) => {
  //   e.preventDefault();
  // let imgs = [];
  // let targetFiles = Array.from(e.target.files);
  // // const targetFiles = e.target.files;
  // const targetFilesObject = [...targetFiles];
  // targetFilesObject.map(async (file) => {
  //   const base64 = await convertBase64Image(file);
  //   return imgs.push(base64);
  // });

  // let files = Array.from(e.target.files);
  // files.map(async (val) => {
  //   const base64 = await convertBase64Image(val);
  //   imgs.push(base64);
  // });
  // setImg({ ...img, [e.target.name]: imgs });
  // setImages([...images, ...imgs]);

  // console.log("ih", image);
  // setImages([...images, ...imgs]);

  // const file = e.target.files[0];
  // const base64 = await convertBase64Image(file);
  // setLegalImg(base64);

  // const selectedFIles = [];
  // const targetFiles = e.target.files;
  // console.log("targetFiles", targetFiles);
  // const targetFilesObject = [...targetFiles];
  // console.log("targetFilesObject", targetFilesObject);
  // targetFilesObject.map(async (file) => {
  // const base64 = await convertBase64Image(file);
  // return await selectedFIles.push(base64);
  // return selectedFIles.push(await convertBase64Image(file));
  //   return selectedFIles.push(URL.createObjectURL(file));
  // });
  // const name = { [e.target.name]: selectedFIles };

  // setImages([...images, name]);
  // console.log(name);
  // await setImages([{ ...images, [e.target.name]: selectedFIles }]);
  // };
  // console.log("images", images);
  // const d = images.map((i) => console.log(i));
  // console.log(img);
  // console.log("i", images);

  // const handleMultipleImage = (e) => {
  //   let imgs = [];
  //   let files = Array.from(e.target.files);
  //   files.map((val) => imgs.push(val));
  //   setImage({ ...image, [e.target.name]: imgs });
  // };

  // const handleMultipleImages = (e) => {
  //   e.preventDefault();
  //   const selectedFIles = [];
  //   const targetFiles = e.target.files;
  //   const targetFilesObject = [...targetFiles];
  //   targetFilesObject.map((file) => {
  //     return selectedFIles.push(file);
  //   });
  //   setImages([...images, ...selectedFIles]);
  // };
  // const imagei = images?.map(async (img) => await convertBase64Image(img));
  // console.log(imagei);
  // const handleMultipleImagesInternal = (e) => {
  //   e.preventDefault();
  //   const selectedFIles = [];
  //   const targetFiles = e.target.files;
  //   const targetFilesObject = [...targetFiles];
  //   targetFilesObject.map((file) => {
  //     return selectedFIles.push(URL.createObjectURL(file));
  //   });
  //   setInternalImage([...selectedFIles, ...internalImage]);
  // };
  // const handleMultipleImagesAmenties = (e) => {
  //   e.preventDefault();
  //   const selectedFIles = [];
  //   const targetFiles = e.target.files;
  //   const targetFilesObject = [...targetFiles];
  //   targetFilesObject.map((file) => {
  //     return selectedFIles.push(URL.createObjectURL(file));
  //   });
  //   setAmentiesImage([...selectedFIles, ...amentiesImage]);
  // };
  // const handleMultipleImagesOthers = (e) => {
  //   e.preventDefault();
  //   const selectedFIles = [];
  //   const targetFiles = e.target.files;
  //   const targetFilesObject = [...targetFiles];
  //   targetFilesObject.map((file) => {
  //     return selectedFIles.push(URL.createObjectURL(file));
  //   });
  //   setOthersImage([...selectedFIles, ...othersImage]);
  // };
  // const handleImageRemove = (img) => {
  //   let newImage = image?.externalimages?.filter((i) => i.name !== img.name);
  //   setImage(newImage);
  // };

  // const handleImageRemoveInternal = (image) => {
  //   let newImage = internalImage.filter((i) => i !== image);
  //   setInternalImage(newImage);
  // };
  // const handleImageRemoveAmenties = (image) => {
  //   let newImage = amentiesImage.filter((i) => i !== image);
  //   setAmentiesImage(newImage);
  // };
  // const handleImageRemoveOthers = (image) => {
  //   let newImage = othersImage.filter((i) => i !== image);
  //   setOthersImage(newImage);
  // };

  // const handleMultipleImg = (e) => {
  //   e.preventDefault();
  // };
  // const [array, setArray] = useState([]);

  // const fileBase64 = (img) => {
  //   let result = [...img];

  //   result &&
  //     result.map(function (img) {
  //       let fileReader = new FileReader();
  //       fileReader.readAsDataURL(img);
  //       fileReader.onloadend = async () => {
  //         let res = await fileReader.result;
  //         setArray([...array, res]);
  //       };
  //     });
  // };
  // console.log("array", array);

  // const handleImage = (e) => {
  //   e.preventDefault();
  //   let image = [...e.target.files];

  //   fileBase64(image);
  // };

  // const handleImageRemove = (url) => {
  //   const removeImage = array?.map((arr) => console.log(arr));

  //   setArray(removeImage);
  // };

  // const [images, setImages] = useState([]);
  // const [imaged, setImaged] = useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log("imageList", imageList);
    setImages(imageList);
  };
  const internalImageChanged = (imageList, addUpdateIndex) => {
    // data for submit

    setInternalImage(imageList);
  };

  const amentiesImageChange = (imageList, addUpdateIndex) => {
    // data for submit

    setAmentiesImage(imageList);
  };
  const othersImageChange = (imageList, addUpdateIndex) => {
    // data for submit

    setOthersImage(imageList);
  };

  console.log("images", images);
  console.log("amentiesImage", amentiesImage);
  console.log("internalImage", internalImage);
  console.log("othersImage", othersImage);

  return (
    <div className="mt-12 px-12 pb-12">
      <h2 className="font-bold">Property Image/Video</h2>

      <div onSubmit={""} className="mt-8">
        <div className="flex flex-row justify-between gap-36">
          <div className="w-full">
            <h2 className="text-gray-400">Property External Images</h2>
            <div class={`${images.length > 0 &&  images.length < 2  ? "border p-2 w-full border-red-300" : "border p-2 w-full"}`}>
              <label class="block">
                <span class="sr-only">Select Image </span>

                <ImageUploading
                  multiple
                  value={images}
                  name="externalimages"
                  onChange={onChange}
                  maxNumber={maxNumber}
                  dataURLKey="data_url"
                  acceptType={["png"]}
                >
                  {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                  }) => (
                    // write your building UI
                    <div
                      className={`block w-full text-sm 
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-none file:border-0
                      file:text-sm file:font-semibold
                      
                      hover:file:bg-violet-100 ${ images.length > 0 &&  images.length < 2  ? "file:bg-red-500 text-red-500" : "file:bg-violet-50 text-slate-500"}`}
                    >
                      <button
                        style={isDragging ? { color: "red" } : null}
                        onClick={onImageUpload}
                        {...dragProps}
                      >
                        Upload image
                      </button>
                    
                      {/* &nbsp;
                      <button onClick={onImageRemoveAll}>
                        Remove all images
                      </button> */}
                      {
                        images.length > 0 &&  images.length < 2 ? <p>minimum add 2 photo</p> : ''
                      }
                    </div>
                      
                  )}
                </ImageUploading>
                {/* <input
                  name="externalimages"
                  multiple={true}
                  onChange={""}
                  type="file"
                  class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-none file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50
      hover:file:bg-violet-100
    "
                /> */}
              </label>
              {/* {images.length >= 1 ? (
                <DisplayImage
                  images={images}
                  handleImageRemove={handleImageRemove}
                />
              ) : (
                ""
              )} */}
              <div className="grid grid-cols-4 gap-x-4  text-blue-400">
                {/* {image?.externalimages?.length >= 1
                  ? image?.externalimages?.map((img, index) => (
                      <p key={index}>{img.slice(15, 25) + "..."}</p>
                    ))
                  : ""} */}
              </div>
            </div>
          </div>
          <div className="w-full">
            <h2 className="text-gray-400">Property Internal Image</h2>
            <div class={`${internalImage.length > 0 &&  internalImage.length < 2  ? "border p-2 w-full border-red-300" : "border p-2 w-full"}`}>
              <label class="block">
                <span class="sr-only">Select Image </span>

                <ImageUploading
                  multiple
                  value={internalImage}
                  name="internalimage"
                  onChange={internalImageChanged}
                  maxNumber={maxNumber}
                  dataURLKey="data_url"
                  acceptType={["png"]}
                >
                  {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                  }) => (
                    // write your building UI
                    <div
                    className={`block w-full text-sm 
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-none file:border-0
                    file:text-sm file:font-semibold
                    
                    hover:file:bg-violet-100 ${ internalImage.length > 0 &&  internalImage.length < 2  ? "file:bg-red-500 text-red-500" : "file:bg-violet-50 text-slate-500"}`}
                    >
                      <button
                        style={isDragging ? { color: "red" } : null}
                        onClick={onImageUpload}
                        {...dragProps}
                      >
                        Upload image
                      </button>

                      {
                        internalImage.length > 0 &&  internalImage.length < 2 ? <p>minimum add 2 photo</p> : ''
                      }
                      {/* &nbsp;
                      <button onClick={onImageRemoveAll}>
                        Remove all images
                      </button> */}
                    </div>
                  )}
                </ImageUploading>

                {/* <input
                  multiple
                  name="internalimage"
                  onChange={""}
                  type="file"
                  class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-none file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50
      hover:file:bg-violet-100
    "
                /> */}
              </label>
              {/* {internalImage?.length >= 1 ? (
                <DisplayImage
                  images={internalImage}
                  handleImageRemove={handleImageRemoveInternal}
                />
              ) : (
                ""
              )} */}
              <div className="grid grid-cols-4 gap-x-4 text-blue-400">
                {/* {image?.internalimage?.length >= 1
                  ? image?.internalimage?.map((img, index) => (
                      <p key={index}>{img.slice(15, 25) + "..."}</p>
                    ))
                  : ""} */}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between mt-16 gap-36">
          <div className="w-full">
            <h2 className="text-gray-400">Property Amenties</h2>
            <div class={`${amentiesImage.length > 0 &&  amentiesImage.length < 2  ? "border p-2 w-full border-red-300" : "border p-2 w-full"}`}>
              <label class="block">
                <span class="sr-only">Select Image </span>

                <ImageUploading
                  multiple
                  value={amentiesImage}
                  name="amentiesimage"
                  onChange={amentiesImageChange}
                  maxNumber={maxNumber}
                  dataURLKey="data_url"
                  acceptType={["png"]}
                >
                  {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                  }) => (
                    // write your building UI
                    <div
                    className={`block w-full text-sm 
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-none file:border-0
                    file:text-sm file:font-semibold
                    
                    hover:file:bg-violet-100 ${ amentiesImage.length > 0 &&  amentiesImage.length < 2  ? "file:bg-red-500 text-red-500" : "file:bg-violet-50 text-slate-500"}`}
                    >
                      <button
                        style={isDragging ? { color: "red" } : null}
                        onClick={onImageUpload}
                        {...dragProps}
                      >
                        Upload image
                      </button>
                      {/* &nbsp;
                      <button onClick={onImageRemoveAll}>
                        Remove all images
                      </button> */}
                        {
                        amentiesImage.length > 0 &&  amentiesImage.length < 2 ? <p>minimum add 2 photo</p> : ''
                      }
                    </div>
                  )}
                </ImageUploading>
                {/* <input
                  multiple
                  name="amentiesimage"
                  onChange={""}
                  type="file"
                  class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-none file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50
      hover:file:bg-violet-100
    "
                /> */}
              </label>
              {/* {amentiesImage?.length >= 1 ? (
                <DisplayImage
                  images={amentiesImage}
                  handleImageRemove={handleImageRemoveAmenties}
                />
              ) : (
                ""
              )} */}
              <div className="grid grid-cols-4 gap-x-4 text-blue-400">
                {/* {amentiesImage.length >= 1
                  ? amentiesImage?.map((img, index) => (
                      <p key={index}>{img.slice(15, 25) + "..."}</p>
                    ))
                  : ""} */}
                {/* {image?.amentiesimage?.length >= 1
                  ? image?.amentiesimage?.map((img, index) => (
                      <p key={index}>{img.slice(15, 25) + "..."}</p>
                    ))
                  : ""} */}
              </div>
            </div>
          </div>
          <div className="w-full">
            <h2 className="text-gray-400">Other Images</h2>
            <div class={`${othersImage.length > 0 &&  othersImage.length < 2  ? "border p-2 w-full border-red-300" : "border p-2 w-full"}`}>
              <label class="block">
                <span class="sr-only">Select Image </span>

                <ImageUploading
                  multiple
                  value={othersImage}
                  name="otherimage"
                  onChange={othersImageChange}
                  maxNumber={maxNumber}
                  dataURLKey="data_url"
                  acceptType={["png"]}
                >
                  {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                  }) => (
                    // write your building UI
                    <div
                    className={`block w-full text-sm 
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-none file:border-0
                    file:text-sm file:font-semibold
                    
                    hover:file:bg-violet-100 ${ othersImage.length > 0 &&  othersImage.length < 2  ? "file:bg-red-500 text-red-500" : "file:bg-violet-50 text-slate-500"}`}
                    >
                      <button
                        style={isDragging ? { color: "red" } : null}
                        onClick={onImageUpload}
                        {...dragProps}
                      >
                        Upload image
                      </button>
                      {
                        othersImage.length > 0 &&  othersImage.length < 2 ? <p>minimum add 2 photo</p> : ''
                      }
                      {/* &nbsp;
                      <button onClick={onImageRemoveAll}>
                        Remove all images
                      </button> */}
                    </div>
                  )}
                </ImageUploading>
                {/* <input
                  multiple
                  accept="image/*"
                  name="otherimage"
                  onChange={""}
                  type="file"
                  class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-none file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50
      hover:file:bg-violet-100
    "
                /> */}
              </label>
              {/* {othersImage?.length >= 1 ? (
                <DisplayImage
                  images={othersImage}
                  handleImageRemove={handleImageRemoveOthers}
                />
              ) : (
                ""
              )} */}
              <div className="grid grid-cols-4 gap-x-4 text-blue-400">
                {/* {image?.othersimage?.length >= 1
                  ? image?.othersimage?.map((img, index) => (
                      <p key={index}>{img.slice(15, 25) + "..."}</p>
                    ))
                  : ""} */}
              </div>
            </div>
          </div>
        </div>

        <div class="mt-36 w-full">
          <table class=" border w-full">
            <thead className="border">
              <tr>
                <th className="border border-slate-300 w-72 p-2">Image Type</th>
                <th className="border p-2 border-slate-300">Image </th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr className="border">
                {/* {imagesUrl?.map((image) => (
                  <>
                    <td className="border border-slate-300 p-6">
                      External Images
                    </td>
                    <td className="border border-slate-300 p-6"> {image}</td>
                  </>
                ))} */}

                <td className="p-3 border">External Images</td>
                <td className="p-3 overflow-x-auto space-x-4 w-full  text-blue-500 flex">
                  {/* {" "}
                  {images.length >= 1
                    ? images?.map((img, index) => (
                        <p key={index}>{img.slice(20, 35) + "..."}</p>
                      ))
                    : ""} */}
                  {/* {data?.externalimages?.map((photo) => (
                    <img src={URL.createObjectURL(photo)} alt="" />
                  ))} */}
                  {/* {image?.externalimages?.length >= 1 &&
                  image?.externalimages !== undefined ? (
                    <DisplayImage
                      image={image?.externalimages}
                      types={"externalimages"}
                      handleImageRemove={handleImageRemove}
                    />
                  ) : (
                    ""
                  )} */}
                  {/* {array?.length >= 1 ? (
                    <DisplayImage
                      image={array}
                      handleImageRemove={handleImageRemove}
                    />
                  ) : (
                    ""
                  )} */}

                  <ImageUploading
                    multiple
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                    acceptType={["png"]}
                  >
                    {({
                      imageList,
                      onImageUpload,
                      onImageRemoveAll,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps,
                    }) => (
                      // write your building UI

                      <div className="flex-shrink-0 flex gap-x-4 relative">
                        {/* {imageList.map((image, index) => (
                          <div key={index} className="image-item">
                            <img src={image.data_url} alt="" width="100" />
                            <div className="image-item__btn-wrapper">
                              <button onClick={() => onImageRemove(index)}>
                                Remove
                              </button>
                            </div>
                          </div>
                        ))} */}
                        <DisplayImage
                          imageList={imageList}
                          onImageRemove={onImageRemove}
                        />
                      </div>
                    )}
                  </ImageUploading>
                </td>
              </tr>
              <tr className="border">
                <td className="p-3 border"> Internal Images</td>
                <td className="p-3  overflow-x-auto space-x-4 w-full gap-x-3 text-blue-500 flex">
                  {/* {internalImage.length >= 1
                    ? internalImage?.map((img, index) => (
                        <p key={index}>{img.slice(20, 35) + "..."}</p>
                      ))
                    : ""} */}

                  {/* {image?.internalimage?.length >= 1 ? (
                    <DisplayImage
                      image={image?.internalimage}
                      handleImageRemove={handleImageRemove}
                    />
                  ) : (
                    ""
                  )} */}

                  <ImageUploading
                    multiple
                    value={internalImage}
                    onChange={internalImageChanged}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                    acceptType={["png"]}
                  >
                    {({
                      imageList,
                      onImageUpload,
                      onImageRemoveAll,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps,
                    }) => (
                      // write your building UI
                      <div className="flex-shrink-0 flex gap-x-4 relative">
                        <DisplayImage
                          imageList={imageList}
                          onImageRemove={onImageRemove}
                        />
                        {/* {imageList.map((image, index) => (
                          <div key={index} className="image-item">
                            <img src={image.data_url} alt="" width="100" />
                            <div className="image-item__btn-wrapper">
                              <button onClick={() => onImageRemove(index)}>
                                Remove
                              </button>
                            </div>
                          </div>
                        ))} */}
                      </div>
                    )}
                  </ImageUploading>
                </td>
              </tr>
              <tr className="border">
                <td className="border p-3">Amenties Images</td>
                <td className="p-3 overflow-x-auto space-x-4 w-full gap-x-3 text-blue-500 flex">
                  {" "}
                  {/* {amentiesImage.length >= 1
                    ? amentiesImage?.map((img, index) => (
                        <p key={index}>{img.slice(20, 35) + "..."}</p>
                      ))
                    : ""} */}
                  {/* {image?.amentiesimage?.length >= 1 ? (
                    <DisplayImage
                      image={image?.amentiesimage}
                      handleImageRemove={handleImageRemove}
                    />
                  ) : (
                    ""
                  )} */}
                  <ImageUploading
                    multiple
                    value={amentiesImage}
                    onChange={amentiesImageChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                    acceptType={["png"]}
                  >
                    {({
                      imageList,
                      onImageUpload,
                      onImageRemoveAll,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps,
                    }) => (
                      // write your building UI

                      <div className="flex-shrink-0 flex gap-x-4 relative">
                        {/* {imageList.map((image, index) => (
                          <div key={index} className="image-item">
                            <img src={image.data_url} alt="" width="100" />
                            <div className="image-item__btn-wrapper">
                              <button onClick={() => onImageRemove(index)}>
                                Remove
                              </button>
                            </div>
                          </div>
                        ))} */}
                        <DisplayImage
                          imageList={imageList}
                          onImageRemove={onImageRemove}
                        />
                      </div>
                    )}
                  </ImageUploading>
                </td>
              </tr>
              <tr className="border">
                <td className="border p-3">Other Images</td>
                <td className="p-3  overflow-x-auto space-x-4 w-full gap-x-3 text-blue-500 flex">
                  {" "}
                  {/* {othersImage.length >= 1
                    ? othersImage?.map((img, index) => (
                        <p key={index}>{img.slice(20, 35) + "..."}</p>
                      ))
                    : ""} */}
                  {/* {image?.otherimage?.length >= 1 ? (
                    <DisplayImage
                      image={image?.otherimage}
                      handleImageRemove={handleImageRemove}
                    />
                  ) : (
                    ""
                  )} */}
                  <ImageUploading
                    multiple
                    value={othersImage}
                    onChange={othersImageChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                    acceptType={["png"]}
                  >
                    {({
                      imageList,
                      onImageUpload,
                      onImageRemoveAll,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps,
                    }) => (
                      // write your building UI

                      <div className="flex-shrink-0 flex gap-x-4 relative">
                        {/* {imageList.map((image, index) => (
                          <div key={index} className="image-item">
                            <img src={image.data_url} alt="" width="100" />
                            <div className="image-item__btn-wrapper">
                              <button onClick={() => onImageRemove(index)}>
                                Remove
                              </button>
                            </div>
                          </div>
                        ))} */}
                        <DisplayImage
                          imageList={imageList}
                          onImageRemove={onImageRemove}
                        />
                      </div>
                    )}
                  </ImageUploading>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* {image?.externalimages?.map((photo) => (
          <img src={URL.createObjectURL(photo)} alt="" />
        ))} */}

        {/* {
        data.externalimages.length > 0 && data.externalimages.map((val,i)=>{
          
         
              <img src={URL.createObjectURL(val)}  alt="" />
        
      }
      } */}

        {/* <div className="grid grid-cols-4 gap-24 mt-16">
          <input
            className="btn btn-outline btn-primary w-full"
            type="submit"
            value="Back"
          />
          <button className="col-span-3 btn btn-primary w-full" type="submit">
            continue
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Project;
