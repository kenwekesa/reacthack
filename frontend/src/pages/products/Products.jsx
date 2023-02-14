import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

//importing hoooks
import useFetch from '../../hooks/useFetch'

import { DataGrid } from '@mui/x-data-grid'

import "./products.scss"


const rows = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
];
function Products(props) {



    const {data, loading, error, reFetch} = useFetch(`/users/`)



    return (
        
        <div className='home'>

            <div className="pageContainer">

                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="pageBody">
                    <Navbar title={props.name} />


                    {loading? <div>Loading...</div>:
                    <div style={{ height: 300, marginLeft: 10 }}>

                    
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />
                    </div>
}
                </div>

            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default Products