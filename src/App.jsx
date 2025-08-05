import { BrowserRouter, Routes, Route } from "react-router-dom"
import TaskList from "./pages/TaskList.jsx"
import AddTask from "./pages/AddTask.jsx"
import DefaultLayout from "./layouts/DefaultLayout.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={TaskList} />
            <Route path="/add-task" Component={AddTask} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
