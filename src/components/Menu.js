import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/Emergency-Drain-Plumbers">Emergency Drain Plumbers</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/Drain-Repair">Drain Repair</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/Blocked-Drain">Blocked Drain</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/Drain-Unblocking-Dublin">Drain Unblocking Dublin</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/Professional-Drain-Cleaning">Professional Drain Cleaning</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/Drain-Maintenance">Drain Maintenance</Link></li>                
            </ul>
            <ul className="actions vertical">
                <li><a href="callto:353851756284" className="button special fit">Call Us</a></li>
                <li><a href="https://wa.me/353851756284" className="button fit">Whats App Us</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
