import express from 'express'
import { addStudent, deleteStudent, getStudent, updateStudent } from '../Controller/student.js';
const router = express.Router();

router.post('/addstudent',addStudent)//post-expense
router.get('/getstudent',getStudent)//get-expense

router.put('/updatestudent/:id',updateStudent)//update-expense
router.delete('/deletestudent/:id',deleteStudent)//delete-expense


export default router;