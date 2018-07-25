import '../../stylesheets/Maze.scss'
import React from 'react'

export default class Maze extends React.Component {
    render() {
        return (
            <div className="mazeContainer">
                <div>
                    <div>
                        <button id="easy" className="btn btn-secondary btn-sm">简单</button>
                        <button id="normal" className="btn btn-success btn-sm">普通（默认）</button>
                        <button id="hard" className="btn btn-danger btn-sm">困难</button>
                    </div>
                    <img id="face" src={'/assets/img/face.png'} />
                    <canvas id="canvas" />
                    <script src="/assets/lib/MazeWork.js" />
                </div>
            </div>
        )
    }
}