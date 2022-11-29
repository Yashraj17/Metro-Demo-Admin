import React, { useState } from "react";

import { useEffect } from "react";
import Amenties from "../../Upload/Amenties";
import BasicInfo from "../../Upload/BasicInfo";
import BasicInformation from "../../Upload/BasicInformation";
import BuldierProfile from "../../Upload/BuldierProfile";
import Congratulation from "../../Upload/Congratulation";
import Legal from "../../Upload/Legal";
import Plan from "../../Upload/Plan";
import Project from "../../Upload/Project";
const axios = require("axios");

const PropertyModal = ({ saveData }) => {
  const [data, setData] = useState({
    projectname: "",
    projectlocation: "",
    projectlocality: "",
    projectcity: "",
    projectstate: "",
    projecttype: "",
    projectsubtype: "",
    projectconfiguration: [],
    projecttowerunit: "",
    projectpossessionstatus: "",
    projectarea: 0,
    projectfacing: "",
    projectfurnishing: "",
    projectreranumber: "",
    projectminspace: 0,
    projectmaxspace: 0,
    projectminprice: 0,
    projectmaxprice: 0,
    aboutproject: "",
    projectspecification: "",
    externalimages: [],
    internalimages: [],
    amenitiesimages: [],
    othersimages: [],
    floorplan: [],
    country: "",
    projectlongitude: "",
    projectlatitude: "",
    basicamenities: "",
    projectamenities: [],
    convenienceamenities: "",
    environmentamenities: "",
    securityamenities: "",
    sportsamenities: "",
    buildername: "",
    builderimage: "",
    builderaddress: "",
    builderyoe: 0,
    builderlocality: "",
    builderproject: "",
    companytype: "",
    buildercontact: 0,
    builderwebsite: "",
    builderemail: "",
    builderdescription: "",
    ocimage: "",
    ccimage: "",
    khatano: 0,
    khatatype: "",
    reraapproved: false,
    reraauthority: "",
  });

  const [aboutProject, setAboutProject] = useState("");
  const [projectSpecs, setProjectSpecs] = useState("");
  const [arrayData, setArrayData] = useState([]);
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [internalImage, setInternalImage] = useState([]);
  const [amentiesImage, setAmentiesImage] = useState([]);
  const [othersImage, setOthersImage] = useState([]);
  const [allDatas, setAllDatas] = useState([]);
  const [image, setImage] = useState([]);
  // console.log("data", data);
  // console.log("image", image);
  // console.log("images", images);
  // console.log("internalImage", internalImage);
  // console.log("amentiesImage", amentiesImage);
  // console.log("othersImage", othersImage);
  // console.log("aboutProject", aboutProject);
  // console.log("projectSpecs", projectSpecs);

  // console.log(images, internalImage, amentiesImage, othersImage);

  // if (csvData.length > 0) {
  //   setData(csvData);
  // }
  // if (saveData) {
  //   setData(saveData);
  // }
  useEffect(() => {
    if (saveData) {
      setData(saveData);
    }
  }, [saveData]);

  const goNextPage = () => {
    // e.preventDefault();
    setPage((page) => page + 1);
  };

  function goBackPage() {
    setPage((page) => page - 1);
  }

  const {
    projectsize,
    reraauthority,
    reraapproved,
    khatatype,
    khatano,

    projectreranumber,
    tag,
    projectspacetype,

    projectmaxprice,
    projectmaxspace,
    projectminprice,
    projectminspace,
    projectpossessionstarts,
    projecttype,
    projectlocation,
    projectarea,
    projectcity,
    projectlocality,
    projectstate,
    projectname,
    projectsubtype,

    projectconfiguration,
    projectfacing,
    projectfurnishing,

    buildername,
    builderimage,
    builderaddress,

    builderyoe,
    builderproject,
    companytype,
    buildercontact,
    builderwebsite,
    builderemail,
    builderdescription,
    projectamenities,
    projectlatitude,
    projectlongitude,
    projectcc,
    projectoc,
  } = data;

  const [reraBool, setReraBool] = useState(false);

  useEffect(() => {
    if (data?.reraapproved === "yes") {
      setReraBool(true);
    } else {
      setReraBool(false);
    }
  }, [data?.reraapproved]);
  // projecttype
  // projectsubtype
  // projectconfiguration
  const postData = {
    projectname: projectname,
    projectlocation: projectlocation,
    projectlocality: projectlocality,
    projectcity: projectcity,
    projectstate: projectstate,
    projecttype: projecttype,
    projectsubtype: projectsubtype,
    projectconfiguration: projectconfiguration,
    projectsize: projectsize,
    projectarea: projectarea,
    projectfacing: projectfacing,
    projectfurnishing: projectfurnishing,
    projectreranumber: projectreranumber,
    tag: tag,
    projectminspace: projectminspace,
    projectmaxspace: projectmaxspace,
    projectminprice: projectminprice,
    projectmaxprice: projectmaxprice,
    projectpossessionstarts: projectpossessionstarts,
    projectspacetype: projectspacetype,
    aboutproject: aboutProject,
    projectspecification: projectSpecs,
    projectamenities: projectamenities,
    externalimages: images,
    internalimages: internalImage,
    amenitiesimages: amentiesImage,
    othersimages: othersImage,
    projectlatitude: projectlatitude,
    projectlongitude: projectlongitude,
    buildername: buildername,
    builderimage: builderimage,
    builderaddress: builderaddress,

    builderyoe: builderyoe,
    builderproject: builderproject,
    companytype: companytype,
    buildercontact: buildercontact,
    builderwebsite: builderwebsite,
    builderemail: builderemail,
    builderdescription: builderdescription,
    ocimage: data?.legalImg?.ocimage,
    ccimage: data?.legalImg?.ccimage,
    khataimage: data?.legalImg?.khataimage,
    // reraimage: data?.legalImg?.reraimage,
    khatano: khatano,
    khatatype: khatatype,
    reraapproved: reraBool,
    reraauthority: reraauthority,

    projectcc: projectcc,
    projectoc: projectoc,
    // floortype: allDatas[0]?.floortype,
    // typeofbhk: allDatas[0]?.typeofbhk,
    // carpetarea: allDatas[0]?.carpetarea,
    // pricepersqft: allDatas[0]?.pricepersqft,
    // totalprice: allDatas[0]?.totalprice,
    // floorimage: allDatas[0]?.floorimage,
    projectlatitude: data.lati,
    projectlongitude: data.longi,
  };

  console.log("data", data);

  // const formdata = new FormData();
  // formdata.append('myFile',csv,csv.name)
  // console.log('this is image',csv);
  // try {
  //   const data = await axios.post('http://localhost:8081/api/csv',
  //   formdata
  //   );
  //   if (data.status === 200) {
  //     setAlert({
  //       open:true,
  //       message:'inseted Successfull !!',
  //       type:'success'
  //     })
  //   }

  // bulk upload : Post: http://52.66.198.155/api/v1/project/bulkupload

  // Post: http://52.66.198.155/api/v1/project/add

  // Delete: http://52.66.198.155/api/v1/project/id

  // Get: http://52.66.198.155/api/v1/projects

  // Update:PUT: http://52.66.198.155/api/v1/project/id
  // console.log(data);

  // http://52.66.198.155/api/v1/project/add

  // let formData = new FormData();
  // console.log("postData: ", postData);
  // for (let d in postData) {
  //   // console.log(d, typeof postData[d], postData[d]);
  //   if (Array.isArray(postData[d]))
  //     for (let i = 0; i < postData[d].length; i++)
  //       formData.append(d, postData[d][i]);
  //   else formData.append(d, postData[d]);
  // }

  // console.log("formData", formData);

  const handleMultipleImage = (images) => {
    return images.map((img) => img.file);
  };

  const getFloorPlanId = async (flrs) => {
    let res = [];
    console.log(flrs);
    for (let val of flrs) {
      let floorFormData = new FormData();
      console.log(val);
      for (let k in val) {
        // console.log(k,floorData[k]);
        floorFormData.append(k, val[k]);
      }
      let r = await axios
        .post(
          "http://localhost:4000/api/v1/project/add/floorplan",
          floorFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => res.data.floorplan._id)
        .catch((err) => "");
      res.push(r);
    }
    return res;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    let s = await getFloorPlanId(allDatas);
    postData.externalimages = handleMultipleImage(postData.externalimages);
    postData.internalimages = handleMultipleImage(postData.internalimages);
    postData.amenitiesimages = handleMultipleImage(postData.amenitiesimages);
    postData.othersimages = handleMultipleImage(postData.othersimages);
    postData.floorplan = await s;
    console.log(postData);
    for (let d in postData) {
      console.log(d, typeof postData[d], postData[d]);
      if (typeof postData[d] != undefined) {
        if (Array.isArray(postData[d])){
          for (let i = 0; i < postData[d].length; i++){
            formData.append(d, postData[d][i]);
          }
        }
        else{
          if(typeof postData[d] != undefined){
            formData.append(d, postData[d]);
          }  
        }
      } else {
        console.log("err");
      }
    }
    console.log("postData: ", formData);
    console.log(postData);
    // if (data._id === undefined) {
    // axios
    //   .post("http://localhost:4000/api/v1/project/add", formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    if (data._id === undefined) {
      axios
        .post("http://52.66.198.155/api/v1/project/add", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    if (data._id !== undefined) {
      axios
        .put(`http://52.66.198.155/api/v1/admin/project/${data._id}`, postData)
        .then((res) => console.log(res.data));
    }
  };

  // delete
  // http://3.110.32.88
  const handleDelete = (id) => {
    console.log(id);

    const d = allDatas.filter((item) => item.unique_id !== id);
    setAllDatas(d);
  };

  return (
    <div className="w-full">
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-full p-0 rounded-none">
          <div className="flex justify-center items-center border-b my-4 sticky top-0 z-40 bg-white">
            <h3 className="font-bold text-lg mb-2">Upload Listing</h3>
            <label
              htmlFor="my-modal-3"
              className="btn-sm text-2xl cursor-pointer absolute right-4 mb-2"
            >
              ✕
            </label>
          </div>

          {/* <div className="">
            <div className={page === 1 ? "flex" : "hidden"}></div>
            <div className={page === 2 ? "block" : "hidden"}></div>
          </div> */}

          <div className="div">
            {page === 7 ? "" : <BasicInfo setPage={setPage} page={page} />}
            {page === 1 && (
              <BasicInformation
                setData={setData}
                setArrayData={setArrayData}
                arrayData={arrayData}
                data={data}
                aboutProject={aboutProject}
                setAboutProject={setAboutProject}
                projectSpecs={projectSpecs}
                setProjectSpecs={setProjectSpecs}
              />
            )}
            {page === 2 && (
              <Plan
                setAllDatas={setAllDatas}
                handleDelete={handleDelete}
                allDatas={allDatas}
              />
            )}
            {page === 3 && <Amenties setData={setData} />}
            {page === 4 && <Legal setData={setData} />}
            {page === 5 && (
              <Project
                setImages={setImages}
                setImage={setImage}
                image={image}
                images={images}
                setData={setData}
                setInternalImage={setInternalImage}
                internalImage={internalImage}
                setAmentiesImage={setAmentiesImage}
                amentiesImage={amentiesImage}
                setOthersImage={setOthersImage}
                othersImage={othersImage}
              />
            )}
            {page === 6 && (
              <BuldierProfile
                setData={setData}
                data={data}
                handleSubmit={handleSubmit}
              />
            )}
            {page === 7 && <Congratulation />}
          </div>

          {page === 7 ? (
            ""
          ) : (
            <div
              className={`grid justify-center mt-6 px-8 gap-x-2 mx-auto ${
                page === 1 ? "grid-cols-1" : "grid-cols-4"
              }`}
            >
              {/* <label
              htmlFor="my-modal-3"
              className=" p-2 px-6 text-white rounded-sm cursor-pointer border-none bg-[#1E90A5] mb-4"
            >
              Continue
            </label> */}
              {page === 1 ? (
                ""
              ) : (
                <button
                  className="w-full p-2 px-6 text-primary rounded-sm cursor-pointer btn mb-4 btn-outline"
                  onClick={goBackPage}
                >
                  Back
                </button>
              )}

              {page === 6 ? (
                <button
                  onClick={handleSubmit}
                  className="col-span-3 p-2 px-6 text-white rounded-sm cursor-pointer border-none bg-[#1E90A5] mb-4"
                  type="submit"
                >
                  Submit
                </button>
              ) : (
                <button
                  className="col-span-3 p-2 px-6 text-white rounded-sm cursor-pointer border-none bg-[#1E90A5] mb-4"
                  onClick={goNextPage}
                >
                  Continue
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;
