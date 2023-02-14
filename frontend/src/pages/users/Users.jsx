import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'


//The user context
import userContext from '../../contexts/UserContext'
import { useContext } from 'react'

import { DataGrid } from '@mui/x-data-grid'

//import hooks
import useFetch from '../../hooks/useFetch'

import "./users.scss"

import Loadingmodal from '../../components/modal/Loadingmodal'

export const LoadingmodalContext = React.createContext();

function Users(props) {

    const { users, setUsers } = useContext(userContext)

    const {data, loading, error, reFetch} = useFetch(`/users/`)

    console.log(users)
    const rows = [
        { id: 1, name: 'Martin Olando', username: 'marto', email: "marto@gmail.com", phone: '298488384', city: 'Mombasa' },
        { id: 2, name: 'Katrina Nzaka', username: 'kartrin', email: 'kart@gmail.com', phone: '232122', city: 'Nairobi' },
        { id: 3, name: 'Ayub Samba', username: 'ayumba', email: 'ayub@gmail.com', phone: '38843', city: 'Bungoma' },
    ];

    const columns = [
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'username', headerName: 'Username', width: 150 },
        { field: 'email', headerName: 'Email', width: 150 },
        { field: 'phone', headerName: 'Phone', width: 150 },
        { field: 'city', headerName: 'City', width: 150 },
        { field: 'skills', headerName: 'Roles', width: 250 },
    ];

    return (
        <div className='home'>

            <div className="pageContainer">

                <div className="sidebar">
                    <Sidebar />
                </div>

                <div className="pageBody">
                    <Navbar title={props.name} />
                    <div className="action_btns">
                        <span>Add new User</span>
                    </div>
                    {loading? 
                    
                        <LoadingmodalContext.Provider>
                             <Loadingmodal message = "Please wait..." type="load" />
                        </LoadingmodalContext.Provider>
                    :
                    <div style={{ height: 300, marginLeft: 10 }}>

                        <DataGrid
                            rows={[...data]}
                            columns={columns}
                            pageSize={5}
                            getRowId={(row) => row.email}
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

export default Users