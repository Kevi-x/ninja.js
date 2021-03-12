import React, {useEffect, useState} from 'react';
import DataTable from './components/DataTable/DataTable';
import './App.css';
import {userListMock} from './mocks/userListMock';


const App = () => {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        setUserData(userListMock)
    }, [])

    return (
        <div className="container mt-3">
            <DataTable rows={userData} rowsPerPage={5}/>
        </div>
    );
}

export default App;
