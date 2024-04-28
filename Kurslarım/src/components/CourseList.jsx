import React from 'react'
import { courses } from '../Data'
import Course from './Course'
import '../css/Course.css'

function CourseList({course}) {
  return (
    <>
     <div className="course-main">
     {courses?.map((courses)=>(
      <Course key = {courses.id} course = {courses}/>

     ))}
     </div>

    </>
  )
}

export default CourseList