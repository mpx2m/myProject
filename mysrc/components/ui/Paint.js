import React from 'react';
import '../../stylesheets/Paint.scss'

export default class Paint extends React.Component {
    render() {
        return (
            <div className="painter">
                <div>
                    <section className="Toolbar">
                        - 画笔颜色 -<br />
                        <img id="redPen" className ="a" src={'/assets/img/pen_red.gif'} alt="Red Pen"  />
                        <img id="greenPen" src={'/assets/img/pen_green.gif'} alt="Green Pen"  />
                        <img id="bluePen" src={'/assets/img/pen_blue.gif'} alt="Blue Pen"  />
                    </section>

                    <section className="Toolbar">
                        - 画笔粗细 -<br />
                        <img id="thin" src={'/assets/img/pen_thin.gif'} alt="Thin Pen"  />
                        <img id="medium" src={'/assets/img/pen_medium.gif'} alt="Medium Pen"  />
                        <img id="thick" src={'/assets/img/pen_thick.gif'} alt="Thick Pen"  />
                    </section>

                    <section className="CanvasContainer">
                        <canvas id="drawingCanvas" width="600" height="350"></canvas>
                    </section>

                    <section className="Toolbar">
                        - 操作 -<br />
                        <button id="savePaint">保存画板</button>
                        <button id="clearPaint">清空画板</button>
                        <div id="savedCopyContainer">
                            <img id="savedImageCopy" />
                            <br /> 右键另存为 ...
                    </div>
                    </section>
                    <script src="/assets/lib/paint.js" />
                </div>
            </div>
        )
    }
}