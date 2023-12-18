import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addstudent } from "../Action/student";




function Home() {



  const [name, setName] = useState('');//name of student
  const [sec, setSec] = useState('');//class of student
  const [marks, setMarks] = useState('');//marks of student

  const dispatch = useDispatch()
  const nav = useNavigate()

  //submit func of addexpense
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && sec && marks) {
      dispatch(addstudent({ name, sec, marks }, nav))
    } else {
      alert("not dispatch anything...!")
    }
    setName("");
    setSec('');
    setMarks('');
  }
  return (
    <>
      <div className='Home'>
        <div className='container-sm mb-5'>
          <div className="card mt-5 rounded">
            <div className="card-body bg-dark">
              <h2 className='fw-bold text-info text-center text-uppercase'>Add Student_Data</h2>
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
    </>
  )
}



export default Home;