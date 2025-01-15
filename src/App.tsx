import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./store"
// import { BrowserRouter} from "react-router-dom"
// import Layout from "./pages/UsersApp/Layout/Layout"
// import Home from "./pages/UsersApp/Home/Home"
// import Users from "./pages/UsersApp/Users/Users"

//lessons
// import Lesson16 from "./lessons/Lesson16/Lesson16"

//homeworks
import Homework16 from "./homeworks/Homework16/Homework16"

//consultations
// import Consultation08 from "./consultations/Consultation08/Consultation08"

const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
      {/* <Consultation08 /> */}
      {/* <Lesson16 /> */}
      <Homework16 />
      {/* UserApp - Practice Lesson16 */}
      {/* <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='*' element='Page not found'/>
      </Routes>
    </Layout> */}
    </BrowserRouter>
    </Provider>
  )
}

export default App