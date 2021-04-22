import React from 'react';
import userManager from '../../Utils/UserManager'
import { connect } from 'react-redux';

import { useEffect, useState } from 'react';
import Pagination from './pagination';
import Table from './table';

let Dashboard = ({...props}) => {
    const [users, setUsers] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);
    const token = props.user.access_token;

    useEffect( () => {
        fetchData(1, pageSize);
    }, [pageSize]);

    let handleClick = async (page) => {
        fetchData(page, pageSize);
        setPage(page);
    }

    let handleDelete = async (id) => {
        var removed = users.filter(x => {
            return x.id != id
        });
        setUsers(removed);
        await deleteUser(id);
        await fetchData(page, pageSize);
    }

    let fetchData = async (page, pageSize) =>
    {
        try {
            let response = await fetch(`https://localhost:5001/api/users?pageIndex=${page}&pageSize=${pageSize}`,
            {
              headers: {
                'Authorization' : 'Bearer ' + token
              }});

            let json = await response.json();
            setUsers(json.data);
            setCount(json.count);
        } catch (error) {
            console.error(error);
        }
    }

    let deleteUser =  async (id) => {
        try{
            await fetch(`https://localhost:5001/api/users/${id}`, {method: 'DELETE'});
        }catch(error)
        {
            console.error(error);
        }
    }


    let changePageSize = async (event) => {
        let ps = event.target.value;
        setPageSize(event.target.value);
        await fetchData(page, ps);
      }

    return (
        <div>
            <Table
                users={users}
                deleteHandler={handleDelete} />
            <Pagination 
                onClickHandler={handleClick}
                pageSize={pageSize}
                dataCount={count}
                pSizeHandler={changePageSize}
                />
        </div>
    )
}

function mapStateToProps(state) {
  return {
    user: state.oidc.user
  };
}

export default connect(mapStateToProps, null)(Dashboard);