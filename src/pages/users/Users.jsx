import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

import { DataGrid } from '@mui/x-data-grid'

import "./users.scss"

function Users(props) {

    const rows = [
        { id: 1, name: 'Martin Olando', username: 'marto' },
        { id: 2, name: 'Katrina Nzaka', username: 'kartrin' },
        { id: 3, name: 'Ayub Samba', username: 'ayumba' },
    ];

    const columns = [
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'username', headerName: 'Username', width: 150 },
    ];

    return (
        <div className='home'>

            <div className="pageContainer">

                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="pageBody">
                    <Navbar title={props.name} />

                    <div style={{ height: 300, marginLeft: 10 }}>

                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />
                    </div>
                </div>

            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default Users