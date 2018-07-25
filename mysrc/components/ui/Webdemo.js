import '../../stylesheets/Webdemo.scss'

import WebdemoNav from'./WebdemoNav.js'
import WebBanner from'./WebBanner.js'
import WebSolution from'./WebSolution.js'
import Webnews from'./Webnews.js'
import Webintro from'./Webintro.js'
import Webfooter from'./Webfooter.js'

import React from 'react';

export default class Webdemo extends React.Component {

    render() {
        return (
            <div className="Webdemo">
                    <WebdemoNav />
                    <WebBanner />
                    <WebSolution />
                    <Webnews />
                    <Webintro />
                    <Webfooter />
            </div>
        )
    }
}