import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

import "./users.scss"

function Users() {
    return (
        <div className='home'>

            <div className="pageContainer">

                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="pageBody">
                    <Navbar />
                </div>

            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default Users