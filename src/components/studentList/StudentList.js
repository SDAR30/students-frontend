import React, { useEffect, useState } from 'react';
import SingleTextInput from '../singleTextInput/SinlgeTextInput';
import StudentCard from '../studentCard/StudentCard';
import './StudentList.scss'

function StudentList(props) {

    const [students, setStudents] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const url = 'https://students-backend.adaptable.app/students'

        fetch(url).then(res => res.json())
            .then(data => {
                setStudents(data.students);
            })

    }, [])

    let filteredStudents = students;
    // if (searchTerm) {
    //     filteredStudents = students.filter(student => (`${student.firstName} ${student.lastName}`
    //         .toLowerCase()).includes(searchTerm.toLowerCase()))
    // }
    if (searchTerm) {
        filteredStudents = students.filter(student => {
            let search = searchTerm.toLowerCase()
            let first = student.firstName.toLowerCase().startsWith(search)
            let last = student.lastName.toLowerCase().startsWith(search)
            return (first || last)
        })
    }


    return (
        <div className="studentList">
            <SingleTextInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            {filteredStudents.map((student, index) => {
                return (
                    <StudentCard student={student} key={student.id} />
                )
            })}
            {filteredStudents.length === 0 && <div className="studentList__noResults">No Results</div>}
        </div>
    );
}

export default StudentList;