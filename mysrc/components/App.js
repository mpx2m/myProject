import 'bootstrap/dist/css/bootstrap.min.css'

import PageTemplate from './ui/PageTemplate.js'
import Main from './ui/Main.js'
import Whoops404 from './ui/Whoops404.js'
import Maze from './ui/Maze.js'
import Paint from './ui/Paint.js'
import Animation from './ui/Animation.js'
import PersonalityTest from './ui/PersonalityTest.js'
import TestScore from './ui/TestScore.js'
import CssPatterns from './ui/CssPatterns.js'
import PatternsDetail from './ui/PatternsDetail.js'
import Webdemo from './ui/Webdemo.js'

import { Route, Switch } from 'react-router-dom'

const App = ({ projects }) =>
    <Switch>
        <Route exact path="/" component={() =>
            <PageTemplate>
                <Main projects={projects} />
            </PageTemplate>
        } />
        <Route path="/maze" component={() =>
            <PageTemplate>
                <Maze />
            </PageTemplate>
        } />
        <Route path="/paint" component={() =>
            <PageTemplate>
                <Paint />
            </PageTemplate>
        } />
        <Route path="/animation" component={() =>
            <PageTemplate>
                <Animation />
            </PageTemplate>
        } />
        <Route exact path="/personalitytest" component={() =>
            <PageTemplate>
                <PersonalityTest />
            </PageTemplate>
        } />
            <Route path="/personalitytest/testscore" component={() =>
                <PageTemplate>
                    <TestScore />
                </PageTemplate>
            } />
        <Route exact path="/csspatterns" component={() =>
            <PageTemplate>
                <CssPatterns />
            </PageTemplate>
        } /> 
            <Route path="/csspatterns/:pattern" component={() =>
                <PageTemplate>
                    <PatternsDetail/>
                </PageTemplate>
            } />

        <Route path="/webdemo" component={Webdemo} /> 

        <Route component={Whoops404} />
    </Switch>

export default App