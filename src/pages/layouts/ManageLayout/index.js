import React from 'react'

const ManageLayuot = ({ children }) => (

    <div className="layout">
        <nav className="navbar navbar-expand-lg bg-primary text-ligth">
            <div className="container d-flex w-100 justify-content-between">
                <div><span>BACK</span></div>
                <div className="text-center"><strong>Links</strong></div>
                <div><span>EXIT</span></div>
            </div>
        </nav>
        <div className="container">{children}</div>
    </div>

)

export default ManageLayuot