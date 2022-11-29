import React, { useEffect, useState } from "react";
import Select from "react-select";
import Direction from "../MyMapComponent/Direction";
import MyMapComponent from "../MyMapComponent/MyMapComponent";

import { amenties } from "./DataList";

const Amenties = ({ setData, data }) => {
  // const navigate = useNavigate();
  // const [inputs, setInputs] = useState({});
  const [lati, setLangi] = useState();
  const [longi, setLongi] = useState();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const projectamenities = selectedOptions?.map((select) => select.value);

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      projectamenities,
      longi,
      lati,
    }));
  };
  // useEffect(() => {
  //   setLangi(data?.projectlatitude);
  //   setLongi(data?.projectlongitude);
  // }, [lati, longi]);

  const handleLatLng = (lat, lng) => {
    setData({
      ...data,
      projectlatitude: lat,
      projectlongitude: lng,
    });
  };

  function handleSelect(data) {
    setSelectedOptions(data);
  }

  // const handleBasicInfo = (e) => {
  //   e.preventDefault();
  //   amentiesData(inputs);
  //   navigate("/userInfo/legal");
  // };
  const handleAmenties = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleAmenties} className="px-12 mt-16 pb-12">
      {/* <select
        name="amenties"
        onChange={handleChange}
        class="border-b-2 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 "
      >
        <option>Amenties</option>
        <option value="Club house">Club house</option>
        <option value="Swimming Pool">Swimming Pool</option>
        <option value="Children Play Area">Children Play Area</option>
        <option value="Equipped gymnasium">Equipped gymnasium</option>
        <option value="Reading room/library">Reading room/library</option>
        <option value="Indoor kids play area">Indoor kids play area</option>
        <option value="Indoor playing courts">Indoor playing courts</option>
        <option value="Large banquet hall">Large banquet hall</option>
        <option value="conference room">conference room</option>
        <option value="Tennis courts">Tennis courts</option>
        <option value="Outdoor badminton court">Outdoor badminton court</option>
        <option value="Cricket net">Cricket net</option>
        <option value="Skating rink">Skating rink</option>
        <option value="Rock garden">Rock garden</option>
        <option value="Butterfly park">Butterfly park</option>
        <option value="Foot Soak">Foot Soak</option>
        <option value="Basketball Court">Basketball Court</option>
        <option value="Play Lawn">Play Lawn</option>
        <option value="Mini Golf">Mini Golf</option>
        <option value="Mini Bridge">Mini Bridge</option>
        <option value="Mini Hocky Court">Mini Hocky Court</option>
        <option value="The Culture Club">The Culture Club</option>
        <option value="Kabaddi Court">Kabaddi Court</option>
      </select> */}

      <Select
        className="w-full text-slate-400  border-slate-300  pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 z-40 "
        name="projectamenities"
        options={amenties}
        placeholder="Amenties"
        value={selectedOptions}
        onChange={handleSelect}
        isSearchable={true}
        isMulti
      />

      <h2 className="mt-16 text-[#4B4B4B] text-lg">Location Advantages</h2>
      {/* <Direction />
       */}
      <MyMapComponent
        setLongi={setLongi}
        setLangi={setLangi}
        lati={lati}
        longi={longi}
      />
      {/* <MyMapComponent
        // onMapClick={(e)=>{console.log(e)}}
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCPJ10SOVXGlrVsdru1ajSJ5_wqIbD6G2s&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        handleLatLng={handleLatLng}
        // searchRef={searchRef}
      /> */}

      <div className="flex justify-between items-center gap-x-12 mt-6">
        <input
          type="text"
          placeholder="City/District "
          class="  placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-md z-30"
          name="projectcity"
          defaultValue={data?.projectcity || "Bangalure"}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Project Longitude"
          class="  placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-md z-30"
          name="projectlongitude"
          defaultValue={data?.projectlongitude || ""}
          onChange={handleChange}
        />
        <input
          type="text"
          defaultValue={data?.projectlatitude || ""}
          placeholder="Project Latitude "
          class="  placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-md z-30"
          name="projectlatitude"
          onChange={handleChange}
        />
        <button className="bg-[#2EACAA] py-2 px-8 text-white rounded-lg">
          Edit
        </button>
      </div>
      {/* <select
        name="Convenience"
        onChange={handleChange}
        class="border-b-2 mt-8 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 "
      >
        <option selected value="Convenience">
          Convenience Amenties
        </option>
        <option value="Marge">Marge</option>
      </select>
      <select
        name="Security"
        onChange={handleChange}
        class="border-b-2 mt-8 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 "
      >
        <option value="Security Amenties" selected>
          Security Amenties
        </option>
        <option value="Bart">Bart</option>
      </select>
      <select
        name="Environment"
        onChange={handleChange}
        class="border-b-2 mt-8 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 "
      >
        <option value="Environment Amenties" selected>
          Environment Amenties
        </option>
        <option value="Lisa">Lisa</option>
      </select>
      <select
        name="Sports"
        onChange={handleChange}
        class="border-b-2 mt-8 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 "
      >
        <option value="Sports Amenties" selected>
          Sports Amenties
        </option>
        <option value="Maggie">Maggie</option>
      </select> */}

      {/* <div className="grid grid-cols-4 gap-24 mt-16">
        <input
          className="btn btn-outline btn-primary w-full"
          type="submit"
          value="Back"
        />
        <button type="submit" className="col-span-3 btn btn-primary w-full">
          continue
        </button>
      </div> */}
    </form>
  );
};

export default Amenties;
