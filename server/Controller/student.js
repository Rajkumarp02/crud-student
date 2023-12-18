import Student from "../Models/student.js"
import mongoose from "mongoose";


//addData
export const addStudent = async (req, res) => {
  const StudentData = req.body;
  console.log(StudentData)
  const post = new Student({ ...StudentData })
  try {
    await post.save();
    return res.status(200).json({ status: "Succesfully Submitted" })

  } catch (err) {
    console.log(err);
    return res.status(404).json({ status: "coudn't posted student data" })
  }
}


//getData
export const getStudent = async (req, res) => {
  const { page } = req?.query;
  try {
    const DataList = await Student.paginate({}, { limit: 5, page: Number(page) });
    res.status(200).json(DataList)
  } catch (err) {
    console.log(err)
    res.status(404).json("coudn't posted data")

  }

}


//updateData
export const updateStudent = async (req, res) => {
  const { id: _id } = req.params;
  const { name, sec, marks } = req.body;
  console.log({ name, sec, marks })

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send(" unavailable...");
  }

  try {
    const update = await Student.findByIdAndUpdate(
      _id, {
      $set: {
        name: name, sec: sec, marks: marks,
      }
    }, { new: true }
    );
    res.json(update);
  } catch (error) {
    res.json(error);
  }
}



//deleteData
export const deleteStudent = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("invalid id...");
  }
  try {
    const DataList = await Student.findByIdAndDelete(_id);
    return res.json(DataList)
  } catch (err) {
    console.log(err)
    return res.json(err)
  }
}




