import React, { useState, useEffect } from "react";
import home from "../../../Assest/icons8-home-128 1.png";
import eyeBig from "../../../Assest/download__13_-removebg-preview 3.png";
import eyeSmall from "../../../Assest/download__13_-removebg-preview 6.png";
import pencil from "../../../Assest/icons8-pencil-96 1.png";
import deleted from "../../../Assest/icons8-remove-96 1.png";
import select from "../../../Assest/vvb.png";
import "../../Style/Style.css";
import { Pagination } from "@mui/material";
import Bulk from "./Bulk";
import PropertyModal from "./PropertyModal";
import { tableData } from "../../Upload/DataList";
import axios from "axios";

const Property = () => {
  const [allData, setAllData] = useState([]);

  const [tableDatas, setTableDatas] = useState([]);
  const [pendingData, setPendingData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataPerPage, setDataPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [checkData, setCheckData] = useState([]);

  // const [select, setSelect] = useState();
  // http://localhost:4000/api/v1/allproject?page=4&limit=20
  // http://52.66.198.155/api/v1/projects?page=3&limit=10
  // http://52.66.198.155/api/v1/projects?page=3&limit=10
  // http://52.66.198.155/api/v1/projects?page=${currentPage}&limit=${dataPerPage}

  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get(
  //       `http://52.66.198.155/api/v1/allproject?page=${currentPage}&limit=${dataPerPage}`
  //     )
  //     .then((res) => {
  //       setTableDatas(res.data.Projects);

  //       setLoading(false);
  //     });
  // }, [dataPerPage, currentPage]);

  // http://52.66.198.155/api/v1/admin/projects

  useEffect(() => {
    getData();
  }, [currentPage, dataPerPage]);
  const getData = () => {
    axios
      .get(
        `http://localhost:4000/api/v1/admin/projects?page=${currentPage}&limit=${dataPerPage}`
      )
      .then((res) => {
        setTableDatas(res.data.Projects);
      })
      .catch((err) => alert(err));
  };

  const [length, setLength] = useState();
  const [count, setCount] = useState();
  const [allDatas, setAllDatas] = useState();
  console.log(length);
  useEffect(() => {
    setLength(count?.totalResult);
    setAllDatas(count?.All);
  }, [count]);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:4000/api/v1/admin/projects`).then((res) => {
      setCount(res.data);

      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (allData.length) {
      setTableDatas(allData);
    }
  }, [allData]);

  const handleApproved = () => {
    checkData.map((id) => {
      const confirm = window.confirm("Are you sure?");
      if (confirm) {
        axios
          .get(`http://52.66.198.155/api/v1/admin/project/bulkaction`, {
            method: "GET",
            body: JSON.stringify({
              ids: id,
              actionType: "Approved",
            }),

            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          })
          .then((res) => {
            getData();
            setCheckData([]);
            console.log(res);
          });
      }
    });

    // const statusData = pendingData.map((item) => (item.status = "Approved"));
    // setPendingData(statusData);
  };

  const handleCancel = () => {
    console.log("hi");
  };

  // useEffect(() => {
  //   fetch("http://localhost:4000/api/v1/project/bulkupload")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  // const handleAllChecked = (event) => {
  //   tableDatas.forEach((item) => (item.status = event.target.checked));
  // };

  const handleCheckChieldElement = (id) => {
    console.log(id);
    let dataValue = tableDatas?.find((item) => item.id !== id);
    console.log(dataValue);
    setPendingData(dataValue);
  };
  console.log(pendingData);

  // const indexOfLastData = currentPage * dataPerPage;
  // const indexOfFirstData = indexOfLastData - dataPerPage;
  // let currentData = tableDatas?.slice(indexOfFirstData, indexOfLastData);
  // console.log(currentData);

  const handleChange = (e, p) => {
    setCurrentPage(p);
  };

  const handleChangeRowsPerPage = (event) => {
    setDataPerPage(parseInt(event.target.value));
  };
  const [status, setStatus] = useState();
  const [setErrorMessage] = useState();

  const handleDeleteData = (id) => {
    axios
      .delete(`http://52.66.198.155/api/v1/admin/project/${id}`)
      .then((response) => {
        if (response) {
          window.confirm("are you sure?");
        }
        setStatus("Delete successful");
        getData();
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.error("There was an error!", error);
      });
  };

  const [toggle, setToggle] = useState(false);

  const [saveData, setSaveData] = useState({});
  const handleEdit = (data) => {
    setSaveData(data);
  };
  console.log(checkData);
  const handleCheck = (id) => {
    setCheckData([...checkData, id]);
  };
  const handleAllCheck = () => {
    tableDatas.map();
  };
  // const [checkedState, setCheckedState] = useState(
  //   new Array(tableDatas.length).fill(false)
  // );
  // console.log("c", checkedState);

  // const handleOnChange = (position) => {
  //   console.log(position);
  //   const updatedCheckedState = tableDatas.map((item, index) =>
  //     index === position ? item : !item
  //   );

  //   setCheckedState(updatedCheckedState);
  // };
  const pending = tableDatas?.filter((item) => !item.adminapproved);
  console.log(pending);

  const handleStatus = (id) => {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      axios
        .put(`http://52.66.198.155/api/v1/admin/approve/project/${id}`)
        .then((res) => {
          getData();
          console.log(res);
        });
    }
  };
  const newArray = [];

  for (let i = 1; i <= length; i++) {
    newArray.push(i);
  }

  // const keys = [0, 4, 2, 3, 1];
  // const values = ["first", "second", "third", "fourth", "fifth"];

  return (
    <div className="py-16 px-14">
      <Bulk setAllData={setAllData} />
      <PropertyModal saveData={saveData} allData={allData} />
      <div className="flex justify-between items-center rounded-2xl border-2 border-gray-200 px-4 py-2">
        <div className="flex gap-x-2">
          <h2>All({count?.All})</h2>
          <h2>Approved({count?.Approved})</h2>
          <h2>Pending({count?.Pending})</h2>
        </div>
        <div className="flex justify-start gap-x-6">
          <label htmlFor="my-modal-6" className="btn h-9 button border-none">
            <span className="text-white">Bulk Upload </span>
          </label>

          <label
            htmlFor="my-modal-3"
            className="btn h-9 button border-none flex flex-row justify-between items-center "
          >
            <span className="text-white">Post Property </span>
            <img src={home} alt="" />
          </label>
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
              Position
            </option>
            <option>Ready To Move</option>
            <option>Ongoing</option>
            <option>New launch</option>
          </select>
          <select className="border p-2 select-bordered w-xs">
            <option disabled selected>
              Type
            </option>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Mixed development</option>
            <option>Other</option>
          </select>
          <select className="border p-2 select-bordered w-xs">
            <option disabled selected>
              Location
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          <select className="border p-2 select-bordered w-xs">
            <option disabled selected>
              Owner
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
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
                Approved
              </button>
              {toggle ? (
                <div className="border w-full flex flex-col gap-0 mt-8 absolute">
                  {" "}
                  <button
                    className="border-b px-2 hover:bg-primary hover:text-white"
                    onClick={() => handleApproved()}
                  >
                    Approved
                  </button>
                  <button
                    className="border-b px-2 hover:bg-[#FAE52C] hover:text-white"
                    onClick={() => handleApproved()}
                  >
                    Pending
                  </button>
                  <button
                    className="border-b hover:bg-[#FDA97D] hover:text-white-700 mt-1"
                    onClick={() => handleCancel()}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <table class="rounded-none mt-16 w-full">
          <thead className="w-full">
            <tr className="text-center text-sm font-semibold w-full border-b-2 ">
              <th>
                {/* {tableDatas.map((table) => (
                    <p>acfs</p>
                  ))} */}
                {/* <div key={table._id} className="product">
                      <div
                        onClick={() => handleCheck(table._id)}
                        className={`productInput ${table._id && "active"}`}
                      >
                        <input className="" type="checkbox" id={table._id} />
                        {checkData.map(
                          (c) =>
                            c === table._id && (
                              <>
                                <div className="productInputBefore"></div>
                                <div className="productInputAfter">
                                  <img src={select} alt="" />
                                </div>
                              </>
                            )
                        )}
                     
                      </div>
                     
                    </div> */}
              </th>
              <th>Id </th>
              <th>Property Name</th>
              <th>Property Type</th>
              <th>Possession Status</th>
              <th>Posted By</th>
              <th>Last Modified Date</th>
              <th>Status</th>
              <th>
                <img src={eyeBig} alt="" />
              </th>
              <th>Action</th>
            </tr>
          </thead>
          {/* {tableDatas?.map((table, index) => ()} */}
          {tableDatas?.map((table, index) => (
            <tbody className="w-full" key={index}>
              <tr className="text-sm h-16 w-full text-center hover border-b-2">
                <td className="px-2">
                  <div key={table._id} className="product">
                    <div
                      onClick={() => handleCheck(table._id)}
                      className={`productInput ${table._id && "active"}`}
                    >
                      <input className="" type="checkbox" id={table._id} />
                      {checkData.map(
                        (c) =>
                          c === table._id && (
                            <>
                              <div className="productInputBefore"></div>
                              <div className="productInputAfter">
                                <img src={select} alt="" />
                              </div>
                            </>
                          )
                      )}
                      {/* {checkData.map((c) => c) && (
            <>
              <div className="productInputBefore"></div>
              <div className="productInputAfter">
                <img src={select} alt="" />
              </div>
            </>
          )} */}
                    </div>
                    {/* <label htmlFor={table._id}>{table._id}</label> */}
                  </div>
                </td>
                {/* {newArray.map((arr) => (
    <td className="">{"#" + "000" + arr}</td>
  ))} */}
                <td className="">{"#" + "000" + (index = index + 1)}</td>
                <td>{table?.projectname}</td>
                <td>{table?.projectsubtype}</td>
                <td>{table?.projectpossessionstatus}</td>
                <td>{table?.buildername}</td>
                <td>{table?.updatedAt.slice(0, 10)}</td>

                <td>
                  {" "}
                  <button
                    onClick={() => handleStatus(table._id)}
                    className={`bg-[#4EC615] ${
                      table?.adminapproved === false ? "bg-[#FFD700]" : ""
                    } p-1 px-2 rounded-lg text-[#000000]`}
                  >
                    {table.adminapproved === true ? "Approved" : "Pending"}
                  </button>{" "}
                </td>
                <td>{table?.noofviews}</td>

                <td className="">
                  <div className="flex justify-center items-center">
                    <button className="cursor-pointer w-full">
                      <label
                        onClick={() => handleEdit(table)}
                        htmlFor="my-modal-3"
                        className="cursor-pointer"
                      >
                        <img src={pencil} alt="" />
                      </label>
                    </button>

                    <button className=" w-full">
                      <img className="w-full" src={eyeSmall} alt="" />
                    </button>
                    <button
                      className="w-full"
                      onClick={() => handleDeleteData(table?._id)}
                    >
                      <img src={deleted} alt="" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>

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

export default Property;
