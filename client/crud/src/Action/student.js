import * as api from '../Api/index'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//addStudent-action
export const addstudent = (Data, nav) => async (dispatch) => {
  try {
    const { data } = await api.addStudent(Data);
    console.log(data)
    dispatch({ type: 'POST', payload: data })
    dispatch(getstudent())
    toast.success("Successfully addData..", {
      position: toast.POSITION.TOP_CENTER,
    })
    nav("/list");
  } catch (err) {
    toast.error(err.response.data.status, {
      position: toast.POSITION.TOP_CENTER,
    })
  }
}


//getStudent Data
export const getstudent = (page) => async (dispatch) => {
  try {
    const { data } = await api.getStudent(page)
    dispatch({ type: 'FETCH-DATA', payload: data })
  } catch (err) {
    console.log(err)
  }
}

//deleteStudent-action

export const deletestudent= (id) => async (dispatch) => {
  console.log(id);
  try {
    const { data } = api.deleteStudent(id);
    dispatch({ type: "DELETE", payload: data })
    dispatch(getstudent())
    toast.warning('Successfull deleted', {
      position: toast.POSITION.TOP_CENTER,
    })
  } catch (err) {
    console.log(err)
  }
}


//updateStudent-action
export const updatestudent = (id, updateData, nav) => async (dispatch) => {
  try {
    if (!id) {
      console.error("ID is undefined");
      return;
    }

    const { data } = await api.updateStudent(id, updateData)
    console.log(data)
    dispatch({ type: "UPDATE", payload: data })
    dispatch(getstudent())
    toast.success("successfully Edit the data", {
      position: toast.POSITION.TOP_CENTER,
    })
    nav('/list')
  } catch (error) {
    console.log(error)
  }
}

