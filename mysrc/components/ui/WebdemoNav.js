import '../../stylesheets/WebdemoNav.scss'

import React from 'react';
import { NavLink as ReactLink } from 'react-router-dom'

import { withRouter } from 'react-router'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';



class WebdemoNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {

    const selectedStyle = { 
        background: '#E45242',
        color: 'white'
    }
    const {location} = this.props

    return (
      <div className="webNavbar">
        <Navbar light expand="lg" className="webNav">
        <div className="container">
          <NavbarBrand href="/" className="webbrand">
            <img className ="logodemo" src={'/assets/img/logo2.svg'} width="28" height="28"/>RainyDev
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar ml-auto>

                <NavItem className="webnavItem">
                    <NavLink className="webnavlink">
                        <ReactLink className="reactLink" to="/webdemo" activeStyle={(location.pathname === '/webdemo') ? selectedStyle : {}}>首页</ReactLink>
                    </NavLink>
                    
                </NavItem>

                <NavItem className="webnavItem fordropdown">
                    <NavLink className="webnavlink">
                        <ReactLink className="reactLink" to="#">关于公司</ReactLink>
                        <ul class="fordrop-nav">
                            <li><a href="#">公司简介</a></li>
                            <li><a href="#">公司文化</a></li>
                            <li><a href="#">研发团队</a></li>
                            <li><a href="#">业务介绍</a></li>
                            <li><a href="#">媒体报道</a></li>        
                        </ul>
                    </NavLink>
                </NavItem>

                <NavItem className="webnavItem fordropdown">
                    <NavLink className="webnavlink">
                        <ReactLink  className="reactLink" to="#">产品和服务方案</ReactLink>
                        <ul class="fordrop-nav">
                            <li><a href="#">云数据中心互联</a></li>
                            <li><a href="#">数据社区</a></li>
                            <li><a href="#">统一通信与协作</a></li>
                            <li><a href="#">OSS与网络管理</a></li>
                            <li><a href="#">NFT基础构架</a></li>        
                        </ul>
                    </NavLink>
                </NavItem>

                <NavItem className="webnavItem">
                    <NavLink className="webnavlink">
                        <ReactLink className="reactLink" to="#">技术与支持</ReactLink>
                    </NavLink>
                </NavItem>

                <NavItem className="webnavItem fordropdown">
                    <NavLink className="webnavlink">
                        <ReactLink  className="reactLink" to="#">人力资源</ReactLink>
                        <ul class="fordrop-nav">
                            <li><a href="#">教育培训</a></li>
                            <li><a href="#">关爱员工</a></li>
                            <li><a href="#">招聘流程</a></li>
                            <li><a href="#">最新动态</a></li>       
                        </ul>
                    </NavLink>
                </NavItem>

                <NavItem className="webnavItem">
                    <NavLink className="webnavlink">
                        <ReactLink  className="reactLink" to="#">联系我们</ReactLink>
                    </NavLink>
                </NavItem>

            </Nav>
            
          </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(WebdemoNav)