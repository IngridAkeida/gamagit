import{ 
    Route, 
    Routes, 
    BrowserRouter 
} from 'react-router-dom';


import Home from '.';
import Repositories from './Repositories/Repositories';


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