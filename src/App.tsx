import { BrowserRouter, Route, Routes } from "react-router-dom"
// import { BrowserRouter} from "react-router-dom"
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


//homeworks
// import Homework16 from "./homeworks/Homework16/Homework16"
// import Homework16Cw from "./homeworks/Homework16Cw/Homework16Cw"

//consultations
// import Consultation08 from "./consultations/Consultation08/Consultation08"
// import Consultation09 from "./consultation/Consultation09/Consultation09"
import Consultation10 from "./consultation/Consultation10/Consultation10"

const App = () => {
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
      {/* <Consultation09 /> */}
      <Consultation10/>
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