import React, { useEffect, useState } from "react";
import lead from "../../Assest/tracking/Rectangle 6123.png";
import eyeSmall from "../../Assest/download__13_-removebg-preview 6.png";
import pencil from "../../Assest/icons8-pencil-96 1.png";
import deleted from "../../Assest/icons8-remove-96 1.png";
import "../Style/Style.css";
import axios from "axios";
import { Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Lead = () => {
  const [allData, setAllData] = useState([]);

  const [tableDatas, setTableDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataPerPage, setDataPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://52.66.198.155/api/v1/allproject?page=${currentPage}&limit=${dataPerPage}`
      )
      .then((res) => {
        setTableDatas(res.data.Projects);

        setLoading(false);
      });
  }, [dataPerPage, currentPage]);

  const [length, setLength] = useState();
  console.log(length);
  useEffect(() => {
    setLoading(true);
    axios.get(`http://52.66.198.155/api/v1/projects`).then((res) => {
      setLength(res.data.totalcountProject);

      setLoading(false);
    });
  }, []);
  console.log(tableDatas);
  useEffect(() => {
    if (allData.length) {
      setTableDatas(allData);
    }
  }, [allData]);

  const handleChange = (e, p) => {
    setCurrentPage(p);
  };

  const handleChangeRowsPerPage = (event) => {
    setDataPerPage(parseInt(event.target.value));
  };

  const tableData = [
    {
      _id: "#1001",
      buildername: "Lodha Codename Premier",
      builderemail: "Residential",
      buildercontact: "Under Construction",
      updatedAt: "Approved",
      adminapproved: false,
    },
    {
      _id: "#1002",
      buildername: "Srishti Launch Code Blockbuster Living",
      builderemail: "Villa ",
      buildercontact: "Ready To  Move",
      updatedAt: "Approved",
      adminapproved: true,
    },
    {
      _id: "#1004",
      buildername: "Lodha Codename Premier",
      builderemail: "Residential",
      buildercontact: "Under Construction",
      updatedAt: "Approved",
      adminapproved: false,
    },
    {
      _id: "#1005",
      buildername: "Lodha Codename Premier",
      builderemail: "Residential",
      buildercontact: "Under Construction",
      updatedAt: "Approved",
      adminapproved: false,
    },
    {
      _id: "#100",
      buildername: "Lodha Codename Premier",
      builderemail: "Residential",
      buildercontact: "Under Construction",
      updatedAt: "Approved",
      adminapproved: false,
    },
  ];
  const [toggle, setToggle] = useState(false);

  return (
    <div className="py-16 px-14">
      <div className="flex justify-between items-center rounded-2xl border-2 border-gray-200 py-1 px-2">
        <div className="flex gap-x-2 pl-4">
          <h2>All(5)</h2>
          <h2>Processing (1)</h2>
          <h2>Telly Calling (1)</h2>
          <h2>Site Visit(1)</h2>
          <h2>Closed (1)</h2>
          <h2>Cancel(1)</h2>
        </div>
        <div className="cursor-pointer flex justify-center items-center">
          {/* <img className=" img-fluid" src={lead} alt="" /> */}
          <div
            onClick={() => navigate("addlead")}
            className="py-2 px-6 rounded-lg text-white font-medium text-center flex justify-center items-center bg-[#2EACAA]"
          >
            Add Lead
          </div>
        </div>
      </div>
      <div class="overflow-x-auto mt-12 border py-4 rounded-none">
        <div className="flex justify-center items-center gap-x-4 mb-8">
          <input
            type="text"
            placeholder="Type here"
            className="border p-2 input-bordered w-xs"
          />
          <select className="border p-2 select-bordered w-xs">
            <option disabled selected>
              Status
            </option>
            <option>Processing</option>
            <option>Telly Calling </option>
            <option>Sales Team </option>
            <option>Site Visit </option>
            <option>Booking </option>
            <option>Closed </option>
          </select>
        </div>
        <div className="mb-8 flex justify-between items-center px-4">
          <div className="flex justify-start gap-x-2 items-center">
            <p>Show </p>
            <select
              onChange={handleChangeRowsPerPage}
              className="border p-2 py-0 select-bordered w-xs"
            >
              <option selected>{currentPage}</option>
              <option>25</option>
              <option>50</option>
              <option>75</option>
              <option>100</option>
            </select>
            <p>entries</p>
          </div>
          <div className="flex justify-start gap-x-2 items-center">
            <p>Bulk Action</p>

            <div className="flex relative  items-center flex-col gap-2">
              <button
                onClick={() => setToggle(!toggle)}
                className="border py-1 px-4"
              >
                Processing
              </button>
              {toggle ? (
                <div className=" flex flex-col gap-0 mt-9 bg-gray-200 p-1 absolute">
                  {" "}
                  <button
                    className="bg-white px-2 hover:text-primary"
                    // onClick={() => handleApproved()}
                  >
                    Telly Calling
                  </button>
                  <button
                    className="bg-white hover:text-yellow-700 mt-1"
                    // onClick={() => handleCancel()}
                  >
                    Sales Team
                  </button>
                  <button
                    className="bg-white hover:text-yellow-700 mt-1"
                    // onClick={() => handleCancel()}
                  >
                    Site Visit
                  </button>
                  <button
                    className="bg-white hover:text-yellow-700 mt-1"
                    // onClick={() => handleCancel()}
                  >
                    Booking
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        {loading ? (
          <p>Loading....</p>
        ) : (
          <table class="rounded-none mt-16 w-full">
            <thead className="w-full">
              <tr className="text-center text-sm font-semibold w-full border-b-2 ">
                <th>
                  <div
                    // onClick={() => handleCheckChieldElement(tableData)}
                    className={`productInput ml-2 ${"Pending" && "active"}`}
                  >
                    {" "}
                  </div>
                </th>
                <th>Id </th>
                <th>Name</th>
                <th>Email Id</th>
                <th>Contact No.</th>
                <th>Date</th>
                <th>Status </th>

                <th>Action</th>
              </tr>
            </thead>
            {tableDatas?.map((table, index) => (
              <tbody className="w-full" key={index}>
                <tr className="text-sm h-16 w-full text-center hover border-b-2">
                  <td className="px-2">
                    <div key={index} className="product">
                      {/* <div
                      checked={checked}

                      className={`productInput ${table.id && "active"}`}
                    >
                      <input
                        onChange={(e) => handleChangeCheckBox(table.id)}
                        className=""
                        type="checkbox"
                        id={table.id}
                        value={table.id}
                      />

                      <input
                        type="checkbox"
                        id={index}
                        name={table?.name}
                        value={table?.name}
                        onChange={() => handleOnChange(index)}
                      />
                      {checkedState[index] && (
                        <>
                          <div className="productInputBefore"></div>
                          <div className="productInputAfter">
                            <img src={select} alt="" />
                          </div>
                        </>
                      )}
                    </div> */}
                      {/* <input
                      type="checkbox"
                      id={index}
                      name={table?.id}
                      value={table?.id}
                      checked={checkedState[index]}
                      onChange={() => handleOnChange(index)}
                    /> */}

                      {/* <label htmlFor={table.id}>{table.search}</label> */}
                    </div>
                  </td>
                  <td className="">{"#" + "000" + index}</td>
                  <td>{table?.buildername}</td>
                  <td>{table?.builderemail}</td>
                  <td>{table?.buildercontact}</td>
                  <td>{table?.updatedAt.slice(0, 10)}</td>

                  <td>
                    {" "}
                    <button
                      className={`bg-[#4EC615] ${
                        table?.adminapproved === false ? "bg-[#FFD700]" : ""
                      } p-1 px-2 rounded-lg text-[#000000]`}
                    >
                      {table.adminapproved === true ? "Approved" : "Pending"}
                    </button>{" "}
                  </td>

                  <td className="">
                    <div className="flex justify-center items-center">
                      <button className="cursor-pointer w-full">
                        <label
                          // onClick={() => handleEdit(table)}
                          htmlFor="my-modal-3"
                          className="cursor-pointer"
                        >
                          <img src={pencil} alt="" />
                        </label>
                      </button>

                      <button
                        onClick={() => navigate(`${table._id}`)}
                        className=" w-full"
                      >
                        <img className="w-full" src={eyeSmall} alt="" />
                      </button>
                      <button
                        className="w-full"
                        // onClick={() => handleDeleteData(table?._id)}
                      >
                        <img src={deleted} alt="" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        )}

        <div className="mx-auto flex justify-center mt-4">
          <Pagination
            count={Math.ceil(length / dataPerPage)}
            // count={20}
            page={currentPage}
            onChange={handleChange}
            // rowsPerPage={rowsPerPage}
            color="secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default Lead;
