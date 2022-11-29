import React from "react";
import { useState } from "react";
import "../../Style/Style.css";
const axios = require("axios");

const Bulk = ({ setAllData }) => {
  // const { register, handleSubmit } = useForm();

  // const onSubmit = async (data) => {
  //   console.log(data.file[0]);
  //   const formData = new FormData();
  //   formData.append("myFile", data.file[0]);
  //   console.log(formData);

  //   const res = await fetch("http://52.66.198.155/api/v1/project/bulkupload", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //     body: formData,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  //   alert(JSON.stringify(`${res.message}, status: ${res.status}`));
  // };
  //   axios
  //     .post("http://52.66.198.155/api/v1/project/bulkupload", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     })
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };
  // const [bulkData, setBulkData] = useState(null);
  // const [bulkDataName, setBulkDataName] = useState(null);

  // const handleOnSubmit = () => {
  //   const formdata = new FormData();

  //   formdata.append("myFile", bulkData, bulkDataName);
  //   console.log(formdata);
  //   axios
  //     .post("http://52.66.198.155/api/v1/project/bulkupload", formdata, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     })
  //     .then((res) => console.log(res))
  //     .catch((err) => "");
  // };

  // const [file, setFile] = useState();

  // const fileReader = new FileReader();

  // const handleOnChange = (e) => {
  //   setFile(e.target.files[0]);
  // };

  // const handleOnSubmit = (e) => {
  //   e.preventDefault();

  //   if (file) {
  //     // fileReader.onload = function (event) {
  //     // const csvOutput = event.target.result;
  //     const formdata = new FormData();
  //     console.log(formdata);
  //     formdata.append("myFile", file);
  //     axios
  //       .post("http://52.66.198.155/api/v1/project/bulkupload", formdata, {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       })
  //       .then((res) => console.log(res))
  //       .then((err) => console.log(err));
  //     // console.log(csvOutput);
  //     // };

  //     // fileReader.readAsText(file);
  //   }
  // };
  // console.log(file);

  // const handleOnSubmit = async (e) => {
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   console.log(formData);

  //   const res = await fetch("http://52.66.198.155/api/v1/project/bulkupload", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //     body: formData,
  //   }).then((res) => res.json());
  //   alert(JSON.stringify(`${res.message}, status: ${res.status}`));
  // };

  const [csv, setCsv] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCsv = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("myFile", csv, csv.name);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      setLoading(true);
      const data = await axios.post(
        "http://52.66.198.155/api/v1/project/bulkupload",
        formData,
        config
      );
      if (data.status === 200) {
        setLoading(false);
        console.log({
          open: true,
          message: "instand succseessfull",
          type: "success",
        });
      }
      console.log("csv", formData);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box p-0 rounded-none">
          <div className="flex justify-center items-center border-b my-4">
            <h3 className="font-bold text-lg mb-2">Bulk Upload</h3>
            <label
              htmlFor="my-modal-6"
              className="btn-sm text-2xl cursor-pointer absolute right-4 mb-2"
            >
              ✕
            </label>
          </div>

          {/* <input
              id="amenities"
              onChange={(e) => {
                setBulkDataName(e.target.files[0].name);
                setBulkData(e.target.files[0]);
              }}
              onChange={handleOnChange}
              type="file"
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              multiple
              name="externalimages"
            /> */}

          {loading ? (
            <p className="py-8 text-center text-green-500">Please waite...</p>
          ) : (
            <form className="px-8" onSubmit={(e) => handleCsv(e)}>
              <div className="flex flex-col gap-y-2">
                <input
                  type="file"
                  onChange={(e) => setCsv(e.target.files[0])}
                  name=""
                  id=""
                />
                <span className="text-xs">
                  Note : Please select only .csv file
                </span>
              </div>

              <button
                className="mt-12 flex justify-center mx-auto p-2 px-6 text-white rounded-sm cursor-pointer border-none bg-[#1E90A5] mb-4"
                type="submit"
              >
                Submit
              </button>
            </form>
          )}

          {/* <div className="flex justify-center mt-6 mx-auto ">
              {file !== "Error" ? (
                <button
                  // htmlFor="my-modal-6"
                  // onClick={(e) => {
                  //   handleOnChange(e);
                  // }}
                  onClick={(e) => {
                    handleOnSubmit(e);
                  }}
                  className=" p-2 px-6 text-white rounded-sm cursor-pointer border-none bg-[#1E90A5] mb-4"
                  type="submit"
                >
                  submit
                </button>
              ) : (
                <button
                  disabled
                  className=" p-2 px-6 text-white rounded-sm cursor-pointer border-none bg-[#7e7e7e] mb-4"
                >
                  Submit
                </button>
              )}
            </div> */}
        </div>
      </div>
      {/* <table>
          <thead>
            <tr key={"header"}>
              {headerKeys.map((key) => (
                <th>{key}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {array.map((item) => (
              <tr key={item.id}>
                {Object.values(item).map((val) => (
                  <td>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table> */}
    </div>
  );
};

export default Bulk;
