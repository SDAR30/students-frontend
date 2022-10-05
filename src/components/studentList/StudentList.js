import React, { useEffect, useState } from 'react';
import StudentCard from '../studentCard/StudentCard';
import './StudentList.scss'

function StudentList(props) {

    const [students, setStudents] = useState([])

    useEffect(() => {
        const url = 'https://students-backend.adaptable.app/students'

        fetch(url).then(res => res.json())
            .then(data => {
                console.log(data)
                setStudents(data.students);
            })

    }, [])

    return (
        <div className="studentList">
            {students.map(student => {
                return (
                    <StudentCard student={student}/>
            )})}
        </div>
    );
}

export default StudentList;