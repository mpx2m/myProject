import '../../stylesheets/Webintro.scss'

import React from 'react';

export default class Webintro extends React.Component {

    render() {
        return (
            <div className="Webintrocontrainer">
                <div className="container">
                    <div className="row">
                        <div className="d-none d-md-block col-md-6 col-lg-4 col-xl-4">
                            <img src={'/assets/img/companyimage.jpg'} className="companyimage" />
                        </div>

                        <div className="col-12 col-md-6  col-lg-8 col-xl-8">
                            <p className="cninroduce">企业简介<span className="eninroduce">Industry news</span></p>
                            <p className="inrocontent">
                            RainyDev股份有限公司是一具有十多年以上软件经验的云服务和数据分析专业企业，企业总部位于山清水秀的历史文化名城杭州，注册于2008年9月。公司于2009年推出第二代RDC《云同步数据分析系统》，是全国最好的致力于从事数据信息化和人工智能研究的公司之一。我们将通过我们先进的IT研发生产技术，向客户提供具有行业领先的技术方案。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}