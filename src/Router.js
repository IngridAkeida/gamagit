import{ Route, Switch, BrowserRouter } from 'react-router-dom';

import Repositories from './Repositories';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/repositories' component={Repositories}/>
            </Switch>
        </BrowserRouter>
    )
}