import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useAppSelector } from "./store/hooks";
import { authSliceSelectors } from "./store/redux/auth/auth.Slice";

// import Layout from "./pages/UsersApp/Layout/Layout"
// import Home from "./pages/UsersApp/Home/Home"
// import Users from "./pages/UsersApp/Users/Users"
// import Home from "./pages/CustomerApp/Home/Home"
// import CustomerProfile from "./pages/CustomerApp/CustomerProfile/CustomerProfile"
// import Layout from "./pages/CustomerApp/Layout/Layout"

//lessons
// import Lesson16 from "./lessons/Lesson16/Lesson16"
// import Lesson17 from "./lessons/Lesson17/Lesson17"
// import Lesson18 from "./lessons/Lesson18/Lesson18"
// import Lesson20 from "./lessons/Lesson20/Lesson20";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";


//homeworks
// import Homework16 from "./homeworks/Homework16/Homework16"
// import Homework16Cw from "./homeworks/Homework16Cw/Homework16Cw"

//consultations
// import Consultation08 from "./consultations/Consultation08/Consultation08"
// import Consultation09 from "./consultation/Consultation09/Consultation09"
// import Consultation10 from "./consultation/Consultation10/Consultation10"

const App = () => {
  const { isAuthenticated } = useAppSelector(authSliceSelectors.stateData);
  return (
    <BrowserRouter>
      {/* <Consultation08 /> */}
      {/* <Lesson16 /> */}
      {/* UserApp - Practice Lesson16 */}
      {/* <Layout>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/users' element={<Users/>}/>
         <Route path='*' element='Page not found'/>
       </Routes>
      </Layout> */}
      {/* <Homework16 /> */}
      {/* <Homework16Cw />  */}
      {/* <Lesson17 /> */}
      {/* <Lesson18 /> */}
      {/* <Lesson20 /> */}
      {/* <Consultation09 /> */}
      {/* <Consultation10/> */}
      {isAuthenticated ? <Dashboard /> : <Login />};
      {/* <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<CustomerProfile />} />
        </Routes>
      </Layout> */}
    </BrowserRouter>
  )
}

export default App;