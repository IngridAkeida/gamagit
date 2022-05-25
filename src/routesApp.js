import{ 
    Route, 
    Routes, 
    BrowserRouter 
} from 'react-router-dom';


import Home from './Pages/Home';
import Repositories from './Pages/Repositories';


export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home/>} />
                <Route path='/repositories' element={<Repositories/>}/>
            </Routes>
        </BrowserRouter>
    )
}