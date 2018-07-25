import { Route, Switch } from 'react-router-dom'
import Menu from './ui/Menu'
import Whoops404 from './ui/Whoops404'
import { Colors, Color, NewColor } from './containers'
import '../stylesheets/APP.scss'

import NavBar from '../../mysrc/components/ui/NavBar.js'
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () =>
<div className="reduxcolor">
    <Switch>
        <Route exact path="/:id" component={Color} />
        <Route path="/"
            component={() => (
                <div className="app">
                    <NavBar/>
                    <div className="appcolor">
                        <Route component={Menu} />
                        <NewColor />
                        <Switch>
                            <Route exact path="/" component={Colors} />
                            <Route path="/sort/:sort" component={Colors} />
                            <Route component={Whoops404} />
                        </Switch>
                    </div>
                </div>
            )} />
    </Switch>
</div>

export default App
