import '../../stylesheets/Animation.scss'
import React from 'react'

export default class Maze extends React.Component {
    render() {
        return (
            <div className="animationContainer">
                <div>

                    <canvas id="canvasAnimation" width="600" height="400" />
                    <div className="animationdiv">
                        <button id="addBall" className="btn btn-primary btn-sm">添加球</button>
                        <button id="clearBalls" className="btn btn-secondary btn-sm">清空画板</button>
                    </div>
                    <div className="animationdiv">
                        <form className="form-inline">
                        <label for="ballSize">球大小: </label>
                        <input id="ballSize" type="number" min="0" max="50" step="1" defaultValue="15" className="form-control" />
                        <input id="connectedBalls" className="form-check-input" type="checkbox" />连线模式<br />
                        </form>
                    </div>
                    <script src="/assets/lib/animation.js" />

                </div>
            </div>
        )
    }
}
