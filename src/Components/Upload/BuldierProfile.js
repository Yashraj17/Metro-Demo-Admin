import React, { useState } from "react";
import camera from "../../Assest/Subtract1.png";
import cancel from "../../Assest/icons8-cancel-64 2.png";
import { convertBase64Image } from "./ConvertImage64";
import axios from "axios";

const BuldierProfile = ({ data, handleSubmit, setData }) => {
  const [photo, setPhoto] = useState();
  // const [file, setFile] = useState([]);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("http://52.66.198.155/api/v1/project/bulkupload", {
  //       firstName: data.propertyName,
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };
  const handleChange = (e) =>
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  // const handleSingleImg = (e) => {
  //   setFile({ ...file, [e.target.name]: e.target.files[0] });
  // };

  // const handleUserImage = (e) => {
  //   e.preventDefault();
  //   setFile(URL.createObjectURL(e.target.files[0]));
  // };


  // const uploadImage = async (e) => {
  //   const file = e.target.files[0];
  //   const base64 = await convertBase64Image(file);
  //   await setPhoto;
  //   await setPhoto((prevState) => ({
  //     ...prevState,
  //     builderimage: base64,
  //   }));
  //   await setData((prevState) => ({
  //     ...prevState,
  //     builderimage: file,
  //   }));
  //   // setBaseImage(base64);
  // };

  const uploadImage = async(e)=>{
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("image",file);
        console.log("this is image",formData);
    
  await fetch("http://localhost:4000/api/v1/image/upload", {
      method: "POST",
      // headers: {
      //   "Content-Type": "multipart/form-data",
      // },
      body: formData,
    })
      .then((res) => res.json(
        setPhoto(data.imgUrl)
      ))
      .then((data) => 
        setData((prevState) => ({
        ...prevState,
        builderimage: data.imgUrl,
      }
      )));
   console.log("this is full project data",data)
  }
  const deleteImage = async(tag)=>{
      
    console.log("hello",tag)
    await axios.post("http://localhost:4000/api/v1/image/delete",{tag})
      .then(() => 
        setData((prevState) => ({
        ...prevState,
        builderimage: null,
      }
      )));
   
  }

  console.log(data?.builderimage?.secure_url);

  return (
    <div className="px-12 mt-14 pb-12">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-4 justify-center items-center gap-32">
          <div className="col-span-3">
            <div className="grid grid-cols-2 gap-12">
              <input
                className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
                type="text"
                placeholder="Builder/company Name"
                name="buildername"
                defaultValue={data?.buildername || ""}
                onChange={handleChange}
              />
              <input
                className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
                type="text"
                name="builderemail"
                defaultValue={data?.builderemail || ""}
                placeholder="Email Id "
                onChange={handleChange}
              />
              <input
                className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
                type="text"
                placeholder="Year of Establishment
              "
                defaultValue={data?.builderyoe || ""}
                name="builderyoe"
                onChange={handleChange}
              />
              <input
                className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
                type="text"
                placeholder="Projects "
                name="builderproject"
                defaultValue={data?.builderproject || ""}
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="avatar flex flex-col justify-center items-center gap-2">
            <div class="w-24 rounded-full ">
<<<<<<< HEAD
              <img src={data?.builderimage} alt="" />
=======
              {/* {file?.builderimage?.name ? (
                <img src={URL.createObjectURL(file?.builderimage)} alt="" />
              ) : (
                ""
              )} */}
              <img className="hover:bg-red-300 " src={photo?.builderimage || data?.builderimage?.secure_url} alt="" />
>>>>>>> e8241ab9420c408f3f82e8908e66a03b9fe4fc83
            </div>
            { data.builderimage ? ""
            :
            <input
            hidden
            onChange={uploadImage}
            name="builderimage"
            type="file"
            id="imageUser"
            />
          }
            <label htmlFor="imageUser" className="w-6  h-6 cursor-pointer">
              { data.builderimage ?  <img className="img-fluid" onClick={()=>deleteImage(data.builderimage)} src={cancel} alt="" /> :
              <img className="img-fluid"  src={camera} alt="" /> }
            </label>
          </div>
        </div>

        <div className="flex justify-between gap-x-14 mt-14">
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            name="companytype"
            defaultValue={data?.companytype || ""}
            placeholder="Type Of Company "
            onChange={handleChange}
          />
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            placeholder="Website   "
            name="builderwebsite"
            defaultValue={data?.builderwebsite || ""}
            onChange={handleChange}
          />
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            placeholder="Mobile No."
            name="buildercontact"
            defaultValue={data?.buildercontact || ""}
            onChange={handleChange}
          />
        </div>

        <input
          className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm mt-12"
          type="text"
          placeholder="Address"
          name="builderaddress"
          defaultValue={data?.builderaddress || ""}
          onChange={handleChange}
        />

        <input
          className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm mt-8"
          type="text"
          name="builderdescription"
          defaultValue={data?.aboutproject || ""}
          placeholder="Descriptions"
          onChange={handleChange}
        />

        {/* <div className="grid grid-cols-4 gap-24 mt-16">
          <input
            className="btn btn-outline btn-primary w-full"
            type="submit"
            value="Back"
          />
          <input
            className="col-span-3 btn btn-primary w-full"
            type="submit"
            value="Submit"
          />
        </div> */}
        {/* <button
          className=" p-2 px-6 text-white rounded-sm cursor-pointer border-none bg-[#1E90A5] mb-4"
          type="submit"
        >
          Submit
        </button> */}
      </form>
    </div>
  );
};

export default BuldierProfile;
