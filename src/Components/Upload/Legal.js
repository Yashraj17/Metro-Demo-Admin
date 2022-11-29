import React, { useState } from "react";
import { convertBase64Image } from "./ConvertImage64";

const Legal = ({ setData }) => {
  const [legalImg, setLegalImg] = useState();
  // const navigate = useNavigate();
  // const [inputs, setInputs] = useState({});

  const uploadImage = async (e) => {
    let imgs = [];
    let files = Array.from(e.target.files);
    files.map(async (val) => {
      // const base64 = await convertBase64Image(val);
      imgs.push(val);
    });
    setLegalImg({ ...legalImg, [e.target.name]: imgs });

    setData((prevState) => ({
      ...prevState,
      legalImg,
    }));
    console.log(imgs);
    // const file = e.target.files[0];
    // const base64 = await convertBase64Image(file);
    // setLegalImg(base64);
  };

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(legalImg);

  // const handleSingleImg = (e) => {
  //   setLegalImg({ ...legalImg, [e.target.name]: e.target.files[0] });
  // };

  // const handleBasicInfo = (e) => {
  //   e.preventDefault();
  // };
  const handleLegal = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mt-12 px-12 pb-12">
      <from onSubmit={handleLegal}>
        <div className="flex justify-between gap-12">
          <select
            name="projectoc"
            onChange={handleChange}
            class="border-b-2 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 "
          >
            <option selected>Occupancy Certificate (OC)</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

          <div class=" border p-2 w-full">
            <label class="block">
              <span class="sr-only">Choose file </span>
              <input
                onChange={uploadImage}
                name="ocimage"
                type="file"
                class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-none file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50
      hover:file:bg-violet-100
    "
              />
            </label>
          </div>
        </div>
        <div className="flex justify-between gap-12 mt-14">
          <select
            name="projectcc"
            onChange={handleChange}
            class="border-b-2 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 "
          >
            <option disabled selected>
              Occupancy Certificate (CC)
            </option>
            <option value="yes">Yes</option>

            <option value="no">No</option>
          </select>

          <div class=" border p-2 w-full">
            <label class="block">
              <span class="sr-only">Choose file </span>
              <input
                onChange={uploadImage}
                name="ccimage"
                type="file"
                class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-none file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50
      hover:file:bg-violet-100
    "
              />
            </label>
          </div>
        </div>
        <div className="flex justify-between gap-12 mt-14">
          <div className="flex gap-6 w-full">
            <select
              name="khatatype"
              onChange={handleChange}
              class="border-b-2 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 "
            >
              <option disabled selected>
                Khata Type
              </option>

              <option value="A Khata">A Khata</option>
              <option value="E Khata">E Khata</option>
            </select>
            <input
              name="khatano"
              onChange={handleChange}
              className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
              type="text"
              placeholder="Khata Number "
            />
          </div>

          <div class=" border p-2 w-full">
            <label class="block">
              <span class="sr-only">Choose file </span>
              <input
                onChange={uploadImage}
                name="khataimage"
                type="file"
                class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-none file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50
      hover:file:bg-violet-100
    "
              />
            </label>
          </div>
        </div>

        <div className="flex justify-between gap-12 mt-14">
          <div className="flex gap-6 w-full">
            <select
              name="reraapproved"
              onChange={handleChange}
              class="border-b-2 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 "
            >
              <option disabled selected>
                RERA Approved
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <input
              name="reraauthority"
              onChange={handleChange}
              className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
              type="text"
              placeholder="Approval Authority Name "
            />
          </div>

          <div class=" border p-2 w-full">
            <label class="block">
              <span class="sr-only">Choose file </span>
              <input
                onChange={uploadImage}
                name="reraimage"
                type="file"
                class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-none file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50
      hover:file:bg-violet-100
    "
              />
            </label>
          </div>
        </div>
        {/* <div className="grid grid-cols-4 gap-24 mt-16">
          <input
            className="btn btn-outline btn-primary w-full"
            type="submit"
            value="Back"
          />
          <button
            onClick={handleBasicInfo}
            className="col-span-3 btn btn-primary w-full"
          >
            continue
          </button>
        </div> */}
      </from>
    </div>
  );
};

export default Legal;
