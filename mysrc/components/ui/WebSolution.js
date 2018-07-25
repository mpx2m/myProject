import '../../stylesheets/WebSolution.scss'

import React from 'react';

export default class WebSolution extends React.Component {

    render() {
        return (
            <div className="WebSolutioncontainer">
            <div className="container">
                <div class="row">

                    <div class="col-sm solucol">
                        <section className="solutiongroup">
                            <div className="solution1"></div>
                            <div className="sectfexItem">
                                <p className="cnsol">卫生健康信息化技术方案</p>
                                <p className="ensol">Solution for Basic Hygiene Informatization</p>
                            </div>
                        </section>
                    </div>

                    <div class="col-sm solucol">
                        <section className="solutiongroup">
                            <div className="solution2"></div>
                            <div className="sectfexItem">
                                <p className="cnsol">妇幼健康信息化技术方案</p>
                                <p className="ensol">Solution for Maternal and Child Health Informatization</p>
                            </div>
                        </section>
                    </div>

                    <div class="col-sm solucol solucollast">
                        <section className="solutiongroup">
                            <div className="solution3"></div>
                            <div className="sectfexItem">
                                <p className="cnsol">医院信息化技术方案</p>
                                <p className="ensol">Solution for Hospital Informatization</p>
                            </div>
                        </section>
                    </div>

           
                </div>
            </div>
            </div>
        )
    }
}