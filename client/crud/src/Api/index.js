import axios from 'axios'

//create Api
const API = axios.create({baseURL:"http://localhost:8000"})


//Addexpense
export const addStudent = (Data) => API.post('/student/addstudent',Data)
//getExpense
export const getStudent = (page) =>API.get(`/student/getstudent?page=${page}`)
//updateexpense
export const updateStudent = (id,updateData) => API.put(`/student/updatestudent/${id}`,updateData);
//deleteexpense
export const deleteStudent = (id) => API.delete(`/student/deletestudent/${id}`)

