import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import '../../stylesheets/Menu.scss'
import Time from 'react-icons/lib/md/today'
import Name from 'react-icons/lib/md/book'
import Rating from 'react-icons/lib/md/star-half'

const selectedStyle = { 'font-weight': 'bold', background:'#DCDCDC' }

const Menu = ({ match,location }) =>
    <nav className="menu">
        <NavLink to="/" style={match.isExact && selectedStyle}>
            <Time className="timeicon" 
                    style={(location.pathname==='/')?{color:'#3B88DE'}:{}}
            />添加时间
        </NavLink>

        <NavLink to="/sort/title" activeStyle={selectedStyle}>
            <Name className="nameicon" 
                    style={(location.pathname==='/sort/title')?{color:'#3B88DE'}:{}}
            />颜色名称
        </NavLink>

        <NavLink to="/sort/rating" activeStyle={selectedStyle}>
            <Rating className="ratingicon" 
                    style={(location.pathname==='/sort/rating')?{color:'#3B88DE'}:{}}
            />评分等级
        </NavLink>
    </nav>

Menu.propTypes = {
    sort: PropTypes.string
}

export default Menu
