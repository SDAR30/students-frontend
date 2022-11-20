import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import StudentCard from '../components/studentCard/StudentCard';
import StudentUpdateForm from '../components/studentUpdateForm/StudentUpdateForm';

function StudentDetailPage(props) {
    let params = useParams();
    const location = useLocation();
    const [student, setStudent] = useState({});
    const { studentID } = params;

    useEffect(() => {
        if(location.state?.student){
            setStudent(location.state?.student)
        }else{
            const sinlgeStudentURL = "https://students-backend.adaptable.app/students/" + studentID

            fetch(sinlgeStudentURL).then(res => res.json())
            .then(data => setStudent(data))
        }
      
    }, [location.state?.student, studentID])
    
    return (
        <div className="studentDetailPage">
            {Object.keys(student).length> 0  && <StudentCard student={student} showDelete/>}
            {Object.keys(student).length> 0  && <StudentUpdateForm student={student} />}
        </div>
    );
}

export default StudentDetailPage;