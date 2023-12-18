import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { deletestudent, getstudent } from "../Action/student";
import Pagination from "./Pagination";

function Studentlist() {
  const data = useSelector((state) => state.Student);
  const [page, setPage] = useState(1) //we can set page(initial) at 1
  let counter = 1;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch((getstudent(+page)))
  }, [dispatch, page])

  const handleDelete = (id) => {

    dispatch(deletestudent(id))
  }


  const getNextId = () => {
    return counter++;
  };

  return (
    <>
      <div className='container tableContainer table-responsive-sm fw-bold text-uppercase fs-6'>
        <table className="table caption-top table-warning table-striped mt-5">
          <caption className="text-primary">Student-Database</caption>
          <thead className="">
            <tr>
              <th scope="col">s.no</th>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">class</th>
              <th scope="col">marks</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>

            {data?.data?.docs?.map((data, i) => (


              <tr key={i} className="table-danger">
                <td>{getNextId()}</td>
                <td>{data._id}</td>
                <td>{data.name}</td>
                <td>{data.sec}</td>
                <td>{data.marks}</td>

                <td>

                  <Link to={`/edit/${data._id}`} >
                    <button type='button' className='btn btn-info'>Edit</button>
                  </Link>
                </td>

                <td>

                  <button className='btn btn-danger' onClick={() => handleDelete(data._id)}>Delete</button>

                </td>
              </tr>

            ))}
          </tbody>

        </table>

        {/* pagination */}
        <div className="justify-center">
          <Pagination
            setPage={setPage}
            items={data?.data?.totalPages} />
        </div>
      </div>

    </>
  )
}

export default Studentlist;