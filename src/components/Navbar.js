import React from 'react'


export default function Navbar(props) {
    return (
        <>
            <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
                <a className="navbar-brand" href="/">Multi Utils</a>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <button value="tab1" onClick={props.selectTab} className="nav-link" >HOME</button>
                    </li>
                    <li className="nav-item">
                        <button value="tab2" onClick={props.selectTab} className="nav-link">TEXT UTILITIES</button>
                    </li>
                    <li className="nav-item">
                        <button value="tab3" onClick={props.selectTab} className="nav-link" >CALCULATOR</button>
                    </li>
                    <li className="nav-item">
                        <button value="tab4" onClick={props.selectTab} className="nav-link" >SHOPPING</button>
                    </li>
                    <li>
                        <button type="button" className={`btn btn-${props.mode}`} onClick={props.toggleMode}>{props.mode}</button>
                    </li>
                </ul>
            </nav>
        </>
    )
}