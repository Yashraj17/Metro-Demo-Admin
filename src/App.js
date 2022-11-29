import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route, useNavigate } from "react-router-dom";
import Property from "./Components/Home/Property/Property";
import Chat from "./Components/Chat/Chat";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Dashboard from "./Components/Dashboard/Dashboard";
import Lead from "./Components/Lead/Lead";
import Profile from "./Components/Profile/Profile";
import LeadDetails from "./Components/Lead/LeadDetails";
import User from "./Components/User/User";
import Permission from "./Components/Permission/Permission";

// import BasicInfo from "./Components/Upload/BasicInfo";
// import BasicInformation from "./Components/Upload/BasicInformation";
// import Plan from "./Components/Upload/Plan";
// import Amenties from "./Components/Upload/Amenties";
// import Legal from "./Components/Upload/Legal";
// import Project from "./Components/Upload/Project";
// import BuldierProfile from "./Components/Upload/BuldierProfile";

function App() {
  // /admin/approve/project/:projectId { pending to approved}

  // const [userData, setUserData] = useState({});

  // const [planDatas, setPalnData] = useState({});
  // const [amenties, setAmenties] = useState({});
  // const [legal, setLegal] = useState({});
  // const [project, setProject] = useState({});

  // const allData = { userData, basicInfo, planDatas, amenties, legal, project };
  // const profileData = (data) => {
  //   setUserData(data);
  // };
  // const builderProfileData = (data) => {
  //   setBasicInfo(data);
  // };
  // const planData = (data) => {
  //   setPalnData(data);
  // };
  // const amentiesData = (data) => {
  //   setAmenties(data);
  // };

  // const legalData = (data) => {
  //   setLegal(data);
  // };
  // const projectData = (data) => {
  //   setProject(data);
  // };
  // console.log(basicInfo);
  return (
    <div className="App">
      {/* <TopBar /> */}

      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Navbar />}>
          <Route index element={<Dashboard />} />
          <Route path="property" element={<Property />} />
          <Route path="chat" element={<Permission />} />

          <Route path="lead" element={<Lead />} />

          <Route path="lead/addlead" element={<LeadDetails />} />
          <Route path="profile" element={<Profile />} />
          <Route path="user" element={<User />} />
        </Route>

        {/* <Route path="/userInfo" element={<BasicInfo />}>
          <Route
            index
            element={
              <BasicInformation builderProfileData={builderProfileData} />
            }
          />
          <Route path="plan" element={<Plan planData={planData} />} />
          <Route
            path="amenties"
            element={<Amenties amentiesData={amentiesData} />}
          />
          <Route path="legal" element={<Legal legalData={legalData} />} />
          <Route
            path="project"
            element={<Project projectData={projectData} />}
          />
          <Route
            path="builder"
            element={<BuldierProfile allData={allData} />}
          />
        </Route> */}
        {/* <Route path="/congratulation" element={<Congratulation />} /> */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
