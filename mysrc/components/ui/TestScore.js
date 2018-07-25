import '../../stylesheets/TestScore.scss'
import React from 'react'

const TestScore = () =>
  <div className="testScoreContainer">
    <div>

      <header>
        <h3>五大性格特质测试</h3>
        <p>分数结果</p>
      </header>
      <div className="score">
        <h2 id="headingE">外向性（Extraversion）: </h2>
        <canvas id="canvasE" height="75" width="550"></canvas>
      </div>

      <div className="score">
        <h2 id="headingA">亲和性（Accommodation）: </h2>
        <canvas id="canvasA" height="75" width="550"></canvas>
      </div>

      <div className="score">
        <h2 id="headingC">尽责性（Conscientiousness）: </h2>
        <canvas id="canvasC" height="75" width="550"></canvas>
      </div>

      <div className="score">
        <h2 id="headingN">情绪不稳定性（Neuroticism）: </h2>
        <canvas id="canvasN" height="75" width="550"></canvas>
      </div>

      <div className="score">
        <h2 id="headingO">经验开放性（Openness）: </h2>
        <canvas id="canvasO" height="75" width="550"></canvas>
      </div>

      <img id="arrow_left" src={'/assets/img/arrow_left.png'} />
      <img id="arrow_right" src={'/assets/img/arrow_right.png'} />
      <img id="star" src={'/assets/img/star.png'} />

      <script src="/assets/lib/personalitytestscore.js"/>
    </div>
  </div>

export default TestScore