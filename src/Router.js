import{ Route, Routes, BrowserRouter } from 'react-router-dom';


import Home from './Home';
import Repositories from './Repositories';


export default function Routes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={Home}/>
                <Route path='/repositories' element={Repositories}/>
            </Routes>
        </BrowserRouter>
    )
}