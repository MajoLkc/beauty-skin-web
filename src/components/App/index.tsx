import { Route, Routes } from "react-router-dom"
import * as route from "../../routes"
import { Opening } from "../../pages/Opening"

const App = () => (
  <>
    <Routes>
      <Route path={route.OPENING} element={<Opening />} />
    </Routes>
  </>
)

export default App
