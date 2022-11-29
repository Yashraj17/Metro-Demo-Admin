import React, { useState } from "react";
import Select from "react-select";
import { optionList, property, propertySub } from "./DataList";
import TextField from "./TextField";

const BasicInformation = ({
  setData,
  data,
  aboutProject,
  setAboutProject,
  projectSpecs,
  setProjectSpecs,
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [propertyData, setPropertyDataUser] = useState(propertySub);
  const [propertyes, setPropertyes] = useState(property);
  const [subType, setSubType] = useState();
  const [projectsubtype, setPropertyss] = useState();

  // setInputs(property, selectedOptions);
  // const handleClick = (data) => {
  //   setInputs(data);
  // };


  // const projecttype = propertyes
  //   .filter((item) => item.check === true)
  //   .map((item) => item.value);
  const projecttype = "Residential"

  // const projectsubtype = propertyData
  //   .filter((property) => property.check === true)
  //   .map((property) => property.value);

  // const filterValue = newData?.map((property) => property.value);
  // console.log(newData);
  // setPropertyDatas(newData);
  const projectconfiguration = selectedOptions?.map((select) => select.value);
  // console.log(selectedData);
  // projectconfiguration
  // console.log(filterValue);

  // const filterConfirm = [];
  // for (let values of selectedOptions) {
  //   filterConfirm.push(values.value);
  // }

  const handleChange = (e) =>
  setData((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
    projectconfiguration,
    projectsubtype,
    projecttype
  }));

 
 

  const handleBuilder = (e) => {
    e.preventDefault();
    // builderProfileData(inputs);
    // navigate("/userInfo/plan");
  };

  // let k = data?.projectminprice / 1000;

  // let l = data?.projectminprice / 100000;
  // let c = data?.projectminprice / 1000000;

  // let maxK = data?.projectmaxprice / 1000;
  // let maxL = maxK / 1000;
  // let maxC = maxL / 1000;

  const numFormatter = (num) => {
    if (num > 999 && num < 100000) {
      if (num % 1000 === 0) {
        return num / 1000 + "K";
      }
      // if (num % 1000 !== 0 && num / 1000 >= 1.5) {
      //   return (num / 1000).toFixed(1) + "K";
      // }
      else {
        return (num / 1000).toFixed(1) + "K";
      }
    } else if (num >= 100000 && num < 10000000) {
      if (num % 100000 === 0) {
        return num / 100000 + "L";
      } else {
        return (num / 100000).toFixed(1) + "L";
      }
    } else if (num >= 10000000) {
      if (num % 10000000 === 0) {
        return num / 10000000 + "Cr";
      } else {
        return (num / 10000000).toFixed(1) + "Cr";
      }
    }
    // else if (num < 900) {
    //   return num; // if value < 1000, nothing to do
    // }
  };

  function handleSelect(data) {
    setSelectedOptions(data);
  }

  // setData(property);
  // setArrayData(selectedOptions);
  // { ...item, check: !item.check }
  // item.value.toLowerCase() === id.toLowerCase()
  // ? { ...item, check: !item.check }
  // : item
  // const setPropertyData = (id) => {
  //   const checkValue = propertyData;
  //   const changedCheckValue = checkValue.map((item) =>
  //     item.value.toLowerCase() === id.toLowerCase()
  //       ? { ...item, check: !item.check }
  //       : item
  //   );
  //   setPropertyDataUser(changedCheckValue);
  // };



  const handleSubType = (id) => {
    setSubType(id);
    const newp = propertyData.find(p => p.id === id);
    setPropertyss(newp.value);
   
  }

  // console.log(data);

  // const handleChange = (e) => {
  //   let f = e.target.value;
  //   console.log(f);
  //   setA(f);
  // };
  // console.log(a);
  // // propertyName
  // setData(a);



  return (
    <div className="px-12 pt-16 pb-12">
      
      <from onSubmit={handleBuilder}>
        <div className="flex justify-between gap-x-14">
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            placeholder="Project or property name"
            name="projectname"
            defaultValue={data?.projectname || ""}
            onChange={handleChange}
          />
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            placeholder="Project Address "
            name="projectlocation"
            defaultValue={data?.projectlocation || ""}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-between gap-x-14 mt-14">
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            placeholder="Project Locality  "
            name="projectlocality"
            defaultValue={data?.projectlocality || ""}
            onChange={handleChange}
          />
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            placeholder="Project City/District"
            name="projectcity"
            defaultValue={data?.projectcity || ""}
            onChange={handleChange}
          />
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            placeholder="Project State"
            name="projectstate"
            defaultValue={data?.projectstate || ""}
            onChange={handleChange}
          />
        </div>

        <div className="mt-12">
          <h2 className="font-bold">Property Type</h2>
          <div className="mt-8 flex justify-start gap-x-12">
            {propertyes.map((item) => (
              <div key={item.id} className="">
                <div>
                  <input hidden type="checkbox" id={item.id} />
                </div>
                <label
                  className={`${
                    item.check ? "text-white  bg-primary" : "text-primary"
                  } btn btn-md btn-outline  border-primary hover:bg-primary hover:border-none w-full hover:text-white`}
                  htmlFor={item.id}
                >
                  {item.value}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <h2 className="font-bold">Property Sub - Type</h2>
          <div className="flex flex-wrap gap-y-8 gap-x-8 w-full mt-6 justify-start items-center">
            {/* {propertyData.map((item) => (
              <div key={item.id} className="">
                <div onClick={() => setPropertyData(item.value)}>
                  <input hidden type="checkbox" id={item.id} />
                </div>
                <label
                  className={`${
                    item.check ? "text-white  bg-primary" : "text-primary"
                  } btn btn-md btn-outline  border-primary hover:bg-primary hover:border-none w-full hover:text-white`}
                  htmlFor={item.id}
                >
                  {item.value}
                </label>
              </div>
            ))} */}

            {propertyData.map((property,index) => (
              <>
                <p key={index} onClick={() => handleSubType(property.id)} className={`px-3 py-2 border border-primary rounded-lg cursor-pointer ${subType === property.id ? "bg-primary text-white" : "text-primary"}`}>{property.value}</p>
              </>
            ))}

            {/* {pre?.map((p) => (
              <div className="">
                <input hidden type="checkbox" value={p.value} />
                <input
                  className="btn btn-outline btn-primary w-full"
                  type="submit"
                  value={p.value}
                />
              </div>
            ))} */}
          </div>
          {/* <div className="mt-8 flex gap-6  justify-start gap-x-12">
            <input
              name="Apartment"
              onClick={() => handleClick("Apartment")}
              className="btn btn-outline btn-primary"
              type="button"
              value="Apartment "
            />
            <input
              onClick={() => handleClick("Residential Plot")}
              className="btn btn-outline btn-primary"
              type="button"
              value="Residential Plot"
            />
            <input
              onClick={() => handleClick("Independent House")}
              className="btn btn-outline btn-primary"
              type="button"
              value="Independent House"
            />
            <input
              onClick={() => handleClick("Studio Apartment")}
              className="btn btn-outline btn-primary"
              type="button"
              value="Studio Apartment"
            />
          </div> */}
          {/* <div className="flex justify-start gap-12 mt-8">
            <input
              onClick={() => handleClick("Independent Floor")}
              className="btn btn-outline btn-primary"
              type="button"
              value="Independent Floor"
            />
            <input
              onClick={() => handleClick("Duplex")}
              className="btn btn-outline btn-primary"
              type="button"
              value="Duplex"
            />
            <input
              onClick={() => handleClick("Penthouse")}
              className="btn btn-outline btn-primary text-white"
              type="button"
              value="Penthouse"
            />
            <input
              onClick={() => handleClick("Agricultural Land")}
              className="btn btn-outline btn-primary"
              type="button"
              value="Agricultural Land"
            />
            <input
              onClick={() => handleClick("Villa")}
              className="btn btn-outline btn-primary"
              type="button"
              value="Villa"
            />
          </div> */}
        </div>

        <div className="mt-12">
          <h2>Property Pricing </h2>
          <div className="flex justify-between gap-x-14 mt-8">
            <div className="text-lg mt-4 relative flex justify-between items-center w-full">
              <input
                className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
                type="number"
                placeholder="Min Price"
                name="projectminprice"
                defaultValue={data?.projectminprice || ""}
                onChange={handleChange}
              />
              <p class="absolute right-2 text-slate-400 z-30">
                {/* {k ? (k < 10000 ? k.toFixed(2) + "k" : l.toFixed(2) + "L") : ""} */}
                {/* {k
                  ? (k < 1000 && k.toFixed(1) + "k") ||
                    (k <= 100000 && l.toFixed(1) + "L") ||
                    (k > 100000 && c.toFixed(1) + "Cr")
                  : ""} */}
                {data?.projectminprice
                  ? numFormatter(data?.projectminprice)
                  : ""}
              </p>
            </div>
            <div className="text-lg mt-4 relative flex justify-between items-center w-full">
              <input
                className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
                type="number"
                placeholder="Max Price"
                name="projectmaxprice"
                defaultValue={data?.projectmaxprice || ""}
                onChange={handleChange}
              />

              <p class="absolute right-8 text-slate-400 z-30">
                {/* {maxK
                  ? maxK < 10000
                    ? maxK.toFixed(2) + "k"
                    : maxL.toFixed(2) + "L"
                  : ""} */}

                {/* {maxK
                  ? (maxK < 1000 && Math.round(maxK.toFixed(2)) + "k") ||
                    (maxK <= 100000 && Math.round(maxL.toFixed(2)) + "L") ||
                    (maxK > 100000 && Math.round(maxC.toFixed(2)) + "Cr")
                  : ""} */}

                {data?.projectmaxprice
                  ? numFormatter(data?.projectmaxprice)
                  : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2>Property Space </h2>
          <div className="flex justify-between gap-x-14 mt-12">
            <div class="text-lg mt-4 relative flex justify-between items-center w-full">
              <input
                type="number"
                placeholder="Min Space"
                class="  placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm z-30"
                name="projectminspace"
                defaultValue={data?.projectminspace || ""}
                onChange={handleChange}
              />

              {data?.projectminspace >= 200 && (
                <p class="absolute right-2 text-slate-400 z-30">sq. ft.</p>
              )}
            </div>
            <div class="text-lg mt-4 relative flex justify-between items-center w-full">
              <input
                type="number"
                placeholder="Max Space"
                class="  placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm z-30"
                name="projectmaxspace"
                defaultValue={data?.projectmaxspace || ""}
                onChange={handleChange}
              />

              {data?.projectmaxspace >= 200 && (
                <p class="absolute right-2 text-slate-400 z-30">sq. ft.</p>
              )}
            </div>

            <select
              onChange={handleChange}
              name="projectspacetype"
              class="border-b-2 text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 "
            >
              <option className=" ">Select</option>
              <option value="Carpet Area">Carpet Area</option>
              <option value="Super Built Up Area">Super Built Up Area</option>
              <option value="Built Up Area">Built Up Area</option>
              <option value="Plot Area">Plot Area</option>
            </select>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="">Property Overview</h2>

          <div className="mt-8 flex justify-between gap-x-14">
            {/* <select
              onChange={handleChange}
              name="configuration"
              class="border-b-2 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 "
            >
              <option>Configuration</option>
              <option value="1RK">1RK</option>
              <option value="1BHK">1BHK</option>
              <option value="1.5BHK">1.5BHK</option>
              <option value="2BHK">2BHK</option>
              <option value="2.5BHK">2.5BHK</option>
              <option value="3BHK">3BHK</option>
              <option value="3.5BHK">3.5BHK</option>
              <option value="4BHK">4BHK</option>
              <option value="4.5BHK">4.5BHK</option>
              <option value="5BHK">5BHK</option>
              <option value="6BHK">6BHK</option>
              <option value="Residential Plot">Residential Plot</option>
              <option value="Studio">Studio</option>
            </select> */}

            {/* <select
              onChange={handleSelect}
              isMulti
              name="configuration"
              class="border-b-2 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 "
            >
              {optionList.map((o, index) => (
                <option value={o.value} key={index}>
                  {o.value}
                </option>
              ))}
            </select> */}

            <Select
              className="w-full text-slate-400  border-slate-300  pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 z-40 "
              options={optionList}
              placeholder="Configuration"
              value={selectedOptions}
              onChange={handleSelect}
              name="projectconfiguration"
              isSearchable={true}
              isMulti
            />
            <input
              type="number"
              placeholder="Project Size"
              class="  placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm z-30"
              name="projectsize"
              defaultValue={data?.projectsize || ""}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Project Area"
              class="  placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm z-30"
              name="projectarea"
              defaultValue={data?.projectarea || ""}
              onChange={handleChange}
            />
          </div>

          <div className="mt-8 flex justify-between gap-x-14">
            <select
              name="projectpossessionstatus"
              onChange={handleChange}
              class="border-b-2 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 "
            >
              <option>Possission Status</option>

              <option value="Ready To Move">Ready To Move</option>
              <option value="Ongoing">Ongoing</option>
              <option value="New launch">New launch</option>
            </select>
            <select
              name="projectfacing"
              onChange={handleChange}
              class="border-b-2 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 "
            >
              <option>Facing</option>

              <option value="North Facing">North Facing</option>
              <option value="East Facing">East Facing</option>
              <option value="West Facing">West Facing</option>
              <option value="South Facing">South Facing</option>
              <option value="North - East Facing">North - East Facing</option>
              <option value="North - West Facing">North - West Facing</option>
              <option value="South - East Facing">South - East Facing</option>
              <option value="South - West Facing">South - West Facing</option>
            </select>
            <select
              name="projectfurnishing"
              onChange={handleChange}
              class="border-b-2 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 "
            >
              <option>Furnishing</option>

              <option value="Furnished">Furnished</option>
              <option value="Semi-Furnished">Semi-Furnished</option>
              <option value="Unfurnished">Unfurnished</option>
            </select>
          </div>
          <div className="mt-8 flex justify-between gap-x-14">
            <input
              type="number"
              placeholder="RERA Number"
              class="  placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm z-30"
              name="projectreranumber"
              defaultValue={data?.projectreranumber || ""}
              onChange={handleChange}
            />
            <select
              name="tag"
              onChange={handleChange}
              class="border-b-2 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 "
            >
              <option value="Tag">Tag</option>
              <option value="homer">Homer</option>
            </select>
            {data.projectpossessionstatus !== "Ongoing" ? (
              ""
            ) : (
              <input
                type="text"
                placeholder="Possession Starts"
                class="  placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm z-30"
                name="projectpossessionstarts"
                onChange={handleChange}
              />
            )}
          </div>
        </div>

        <div className="mt-12">
          <h2>About Project</h2>

          <TextField
            initialValue=" "
            getValue={(value) => setAboutProject(value)}
          />
        </div>
        <div className="mt-12">
          <h2>Project Specification</h2>

          <TextField
            initialValue=" "
            getValue={(value) => setProjectSpecs(value)}
          />
        </div>

        {/* <button
          // onClick={handleData}
          type="submit"
          className="btn mt-16 flex justify-center w-full mx-auto btn-primary text-white"
        >
          submit
        </button> */}
      </from>
    </div>
  );
};

export default BasicInformation;
