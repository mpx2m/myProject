import '../../stylesheets/Webfooter.scss'

import React from 'react';

export default class Webfooter extends React.Component {

    render() {
        return (
            <div className="Webfootercontrainer">
                <div className="container">
                    <section className="fatfooter">
                    <div className="row">

                        <div className="col col-md-6 col-lg-6">
                            <div className="logo-footer">
                                <img src={'/assets/img/Asset3.svg'} className="logo-footer-img"/>
                                <span className="web-footer-rainy">RainyDev</span>
                            </div>
                            
                            <p className="info-footer">地址：杭州市泣时区沪金投资区金工路56号二桥科技园5号楼1-2楼</p>
                            <p className="info-footer">电话：0590-8000001、8000002、8000003</p>
                            <p className="info-footer">E-mail：hr@rainydev.com  传真：0590-8000004</p>
                        </div>

                        <div className="d-none d-md-block col-md-3 col-lg-2">
                            <p className="title-footer">关于RainyDev</p>
                            <p className="link-footer">公司简介</p>
                            <p className="link-footer">公司文化</p>
                            <p className="link-footer">研发团队</p>
                            <p className="link-footer">业务介绍</p>
                        </div>

                        <div className="d-none d-md-block col-md-3 col-lg-2">
                            <p className="title-footer">产品和服务方案</p>
                            <p className="link-footer">云数据中心互联</p>
                            <p className="link-footer">数据社区</p>
                            <p className="link-footer">统一通信与协作</p>
                            <p className="link-footer">OSS与网络管理</p>
                        </div>

                        <div className="d-none d-lg-block col-lg-2">
                            <p className="title-footer">关注我们</p>
                            <div className="wechat-footer"></div>
                            <p className="link-footer">微信公众号</p>
                        </div>
                    </div>
                    </section>
                </div>

                <p className="copyrihgt">
                    <div className="container">
                        <footer className="webfooter">©2018 杭州RainyDev股份有限公司</footer>
                    </div>
                </p>
            </div>
        )
    }
}