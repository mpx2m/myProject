import { withRouter } from 'react-router'
import { Component } from 'react'
import '../../stylesheets/CssPatterns.scss'

class CssPatterns extends Component {
    render() {
        const { history } = this.props
        return (
            <div className="CssPatterns">
                <div className="containerflex">
                    <div className="pattern1" onClick={() => history.push(`/csspatterns/pattern1`)}></div>
                    <div className="pattern2" onClick={() => history.push(`/csspatterns/pattern2`)}></div>
                    <div className="pattern3" onClick={() => history.push(`/csspatterns/pattern3`)}></div>
                    <div className="pattern4" onClick={() => history.push(`/csspatterns/pattern4`)}></div>
                </div>

                <div className="containerflex">
                    <div className="pattern5" onClick={() => history.push(`/csspatterns/pattern5`)}></div>
                    <div className="pattern6" onClick={() => history.push(`/csspatterns/pattern6`)}></div>
                    <div className="pattern7" onClick={() => history.push(`/csspatterns/pattern7`)}></div>
                    <div className="pattern8" onClick={() => history.push(`/csspatterns/pattern8`)}></div>
                </div>

                <div className="containerflex">
                    <div className="pattern9" onClick={() => history.push(`/csspatterns/pattern9`)}></div>
                    <div className="pattern10" onClick={() => history.push(`/csspatterns/pattern10`)}></div>
                    <div className="pattern11" onClick={() => history.push(`/csspatterns/pattern11`)}></div>
                    <div className="pattern12" onClick={() => history.push(`/csspatterns/pattern12`)}></div>
                </div>
            </div>
        )
    }
}

export default withRouter(CssPatterns)