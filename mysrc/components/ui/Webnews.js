import '../../stylesheets/Webnews.scss'
import WebBanner2 from'./WebBanner2.js'
import React from 'react';

export default class Webnews extends React.Component {

    render() {
        return (
            <div className="Webnewscontrainer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg">
                            <section>
                                <p className="cnIndustry">行业信息<span className="enIndustry">Industry news</span></p>

                                <p className="newstitle"><span className="newsdate">2017.09.15</span>关于印发医疗机构临床路径管理指导原则</p>
                                <p className="newstitle"><span className="newsdate">2017.08.22</span>中关村高新技术企业</p>
                                <p className="newstitle"><span className="newsdate">2017.07.21</span>2017上海国际软件产品与技术装备展览会</p>
                                <p className="newstitle"><span className="newsdate">2017.06.11</span>卫生计生委关于加强母婴安全保障工作的通知</p>
                                <p className="newstitle"><span className="newsdate">2017.05.02</span>控股半年报 | 保持透明 自律前行</p>
                                <p className="newstitle"><span className="newsdate">2017.03.09</span>2017年度业绩发布会圆满成功</p>
                            </section>
                        </div>

                        <div className="col-lg">
                            <section className="secIndustry">
                                <p className="cnIndustry">公司新闻<span className="enIndustry">Company news</span></p>
                                    <WebBanner2 />
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}