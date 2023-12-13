import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './home/Home'
import CarDetail from './car-detail/CarDetail'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path="/"/>
            <Route element={<CarDetail/>} path="/car/:id"/>
            <Route element={<div>This page is not exist</div>} path="*"/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
