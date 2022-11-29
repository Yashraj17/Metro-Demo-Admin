import React, { useEffect, useState } from "react";
import plus from "../../Assest/download__21_-removebg-preview 1.png";
import "../Style/Style.css";
import { v4 as uuid } from "uuid";
import { convertBase64Image } from "./ConvertImage64";
import axios from "axios";

const Plan = ({ setAllDatas, allDatas, handleDelete, data }) => {
  const [inputs, setInputs] = useState([]);
  const [input, setInput] = useState([]);
  const unique_id = uuid();

  // const numFormatter = (num) => {
  //   if (num > 999 && num < 100000) {
  //     return (num / 1000).toFixed(1) + "K";
  //   } else if (num >= 100000 && num < 10000000) {
  //     return (num / 100000).toFixed(1) + "L";
  //   } else if (num >= 10000000) {
  //     return (num / 10000000).toFixed(1) + "Cr";
  //   }
  //   // else if (num < 900) {
  //   //   return num; // if value < 1000, nothing to do
  //   // }
  // };

  // plan get id : http://52.66.198.155/api/v1/project/floorplan/63836b65cddbba73989b4fee

  // const planData = data.floorplan[0];
  // useEffect(() => {
  //   axios
  //     .get(`http://52.66.198.155/api/v1/project/floorplan/${planData}`)
  //     .then((res) => console.log("plandata", res.data));
  // }, []);

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
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(inputs);

  // const handleSingleImg = (e) => {
  //   setFloorimage({ ...floorimage, [e.target.name]: e.target.files[0] });
  // };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64Image(file);

    setInputs((prevState) => ({
      ...prevState,
      floorimage: e.target.files[0],
    }));

    setInput((prevState) => ({
      ...prevState,
      floorimage: base64,
    }));
  };

  const handleBasicInfo = (e) => {
    e.preventDefault();

    setAllDatas([...allDatas, inputs]);
  };

  return (
    <div className="px-12 pt-16 pb-12">
      <form onSubmit={handleBasicInfo}>
        <div className="flex justify-between gap-x-14">
          <select
            name="floortype"
            onChange={handleChange}
            class="border-b-2 w-full text-slate-400 border-slate-300 py-0 pr-3
            focus:outline-none focus:border-gray-500 focus:ring-0 "
          >
            <option>Type Of property</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="Residential Plot">Residential Plot</option>
          </select>
          <select
            name="typeofbhk"
            onChange={handleChange}
            class="border-b-2 w-full text-slate-400  border-slate-300 py-0 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 "
          >
            <option value="Type Of Bhk">Type Of Bhk</option>
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
          </select>

          <div class="text-lg mt-4 relative flex justify-between items-center w-full">
            <input
              type="text"
              placeholder="Space"
              class="  placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-md z-30"
              name="space"
              onChange={handleChange}
            />

            <div className="w-full flex flex-row justify-center items-center">
              <select
                name="spacetype"
                onChange={handleChange}
                class="w-full text-xs border-b-2 mt-6 text-slate-400  border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-0 "
              >
                <option>Space</option>
                <option value="Carpet Area">Carpet Area</option>
                <option value="Super Built Up Area">Super Built Up Area</option>
                <option value="Built Up Area">Built Up Area</option>
                <option value="Plot Area">Plot Area</option>
              </select>
              <p className="text-xs border-slate-300 w-full border-b-2 mt-7 flex justify-end">
                sq. ft.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div className="flex justify-between gap-x-14">
            {/* <input
              className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
              type="number"
              placeholder="Per sq.ft price"
              name="pricepersqft"
              onChange={handleChange}
            /> */}
            <div className="text-lg relative flex justify-between items-center w-full">
              <input
                className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
                type="number"
                placeholder="Per sq.ft price"
                name="pricepersqft"
                defaultValue={inputs?.pricepersqft || ""}
                onChange={handleChange}
              />
              <p class="absolute right-2 text-slate-400 z-30">
                {inputs?.pricepersqft ? numFormatter(inputs?.pricepersqft) : ""}
              </p>
            </div>

            <div className="text-lg relative flex justify-between items-center w-full">
              <input
                className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
                type="number"
                placeholder="Price"
                name="totalprice"
                defaultValue={inputs?.totalprice || ""}
                onChange={handleChange}
              />
              <p class="absolute right-2 text-slate-400 z-30">
                {inputs?.totalprice ? numFormatter(inputs?.totalprice) : ""}
              </p>
            </div>

            <input
              hidden
              className=""
              type="file"
              placeholder="Floor Image 2D/3D"
              name="floorimage"
              id="floorimage"
              onChange={uploadImage}
            />
            <label
              htmlFor="floorimage"
              className="custom-file-input  block w-full border-b-2 border-slate-300 text-slate-400"
            >
              {input?.floorimage
                ? input?.floorimage?.slice(0, 20)
                : "Floor Image 2D/3D"}
            </label>

            <button
              onClick={handleBasicInfo}
              class=" w-32 h-10 rounded-full border-2 hover:bg-white
          z-30"
            >
              <img className="w-full" src={plus} alt="" />
            </button>
          </div>
        </div>
      </form>

      <div class="overflow-x-auto border rounded-2xl mt-16">
        <table class="table text-sm  w-full ">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Type Of Bhk</th>
              <th>Space</th>
              <th>Per sq.ft price</th>
              <th>Price</th>
              <th>Floor Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allDatas?.map((item, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{item?.typeofbhk}</td>
                <td>{item?.spacetype}</td>
                <td>{item?.pricepersqft}</td>
                <td>{item?.totalprice}</td>
                <td>{input?.floorimage?.slice(0, 20)}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item?.unique_id)}
                    className="btn btn-xs btn-secondary"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <div className="grid grid-cols-4 gap-24 mt-16">
          <input
            className="btn btn-outline btn-primary w-full"
            type="submit"
            value="Back"
          />
          <button type="submit" className="col-span-3 btn btn-primary w-full ">
            continue
          </button>
        </div> */}
    </div>
  );
};

export default Plan;
