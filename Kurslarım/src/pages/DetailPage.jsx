import React from "react";
import { useParams } from "react-router-dom";
import { courses } from "../Data";
import "../css/Detail.css";

function DetailPage() {
  const { id } = useParams();
  const course = courses.find((course) => course.id === parseInt(id));
  // console.log(course);

  return (
    <div className="detailPage">
      {course ? (
        <>
          <div className="card-item d-flex gap-2">
            <div className="card-left">
              <img src={course.image} width={300} height={250} />
            </div>
            <div className="card-right">
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <p>Fiyat: {course.price}</p>
            </div>
          </div>
        </>
      ) : (
        <div>Kurs bulunamadı.</div>
      )}
    </div>
  );
}

export default DetailPage;
