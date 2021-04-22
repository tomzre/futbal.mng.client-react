import { useEffect, useState } from 'react';
import Pagination from '../components/pagination';
import Table from '../components/table';

let Page = () => {
    const [users, setUsers] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);

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
            let response = await fetch(`https://localhost:5001/api/users?pageIndex=${page}&pageSize=${pageSize}`);
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

export default Page