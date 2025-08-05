import { BrowserRouter, Routes, Route } from "react-router-dom"
import TaskList from "./pages/TaskList.jsx"
import AddTask from "./pages/AddTask.jsx"
import DefaultLayout from "./layouts/DefaultLayout.jsx"
import { GlobalProvider } from "./context/GlobalContext.jsx"

function App() {

  return (
    <>
      <GlobalProvider>
        <BrowserRouter>

          <Routes>

            <Route Component={DefaultLayout}>
              <Route index Component={TaskList} />
              <Route path="/add-task" Component={AddTask} />
            </Route>

          </Routes>

        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
