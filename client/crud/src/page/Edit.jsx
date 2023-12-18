import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { updatestudent } from '../Action/student.js';

export default function Edit() {
  const { id } = useParams()
  console.log(id)
  const data = useSelector((state) => state.Student);
  const [name, setName] = useState('');//edit name
  const [sec, setSec] = useState('');//edit class
  const [marks, setMarks] = useState('');//edit marks
  const nav = useNavigate()
  const dispatch = useDispatch();

  useEffect(() => {
    // Find the data with the matching id
    const list = data?.data?.docs?.find((item) => item._id === id);
    if (list && id) {
      setName(list.name);
      setSec(list.sec);
      setMarks(list.marks);
    }
  }, [data, id]);


  //submit func
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name, sec, marks) {
      dispatch(updatestudent(id, { name, sec, marks }, nav))
    }
    setName('');
    setSec('');
    setMarks('');
  }


  return (
    <div className='Home'>
      <div className='container mb-5'>
        <div className="card mt-5 rounded">
          <div className="card-body bg-success">
            <h2 className='fw-bold text-dark text-center text-uppercase'>Update Student_Data</h2>
            <form className="was-validated" onSubmit={(e) => handleSubmit(e)}>

              <label for="validationCustom01" class="form-label text-white">Name</label>
              <input type='text' name='name' class="form-control" id="validationCustom01" value={name} placeholder='Enter Name' onChange={(e) => setName(e.target.value)} required />
              <div class="invalid-feedback">
                <p>Please Enter Name</p>
              </div>

              <label for="validationCustom01" class="form-label text-white">Class</label>
              <input type='text' name='class' class="form-control" id="validationCustom01" value={sec} placeholder='Enter Class' onChange={(e) => setSec(e.target.value)} required />
              <div class="invalid-feedback">
                <p>Please Enter class</p>
              </div>

              <label for="validationCustom01" class="form-label text-white">Marks</label>
              <input type='number' name='category' class="form-control" id="validationCustom01" value={marks} placeholder='Enter Marks' onChange={(e) => setMarks(e.target.value)} required />
              <div class="invalid-feedback">
                <p>Please Enter Marks</p>
              </div>
              <br />
              <button className='btn btn-info' type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}