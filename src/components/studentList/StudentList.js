import React, { useEffect, useState } from 'react';
import EmptyView from '../emptyView/EmptyView';
import SingleTextInput from '../singleTextInput/SinlgeTextInput';
import StudentCard from '../studentCard/StudentCard';
import './StudentList.scss'

function StudentList(props) {

    const [students, setStudents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const url = 'https://students-backend.adaptable.app/students'

        fetch(url).then(res => res.json())
            .then(data => {
                setStudents(data);
                setLoading(false);
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
            let first = student.firstname.toLowerCase().startsWith(search)
            let last = student.lastname.toLowerCase().startsWith(search)
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
            {loading && <EmptyView text="Loading... " center/>}
            {!loading && filteredStudents.length === 0 &&  <EmptyView center/>}
        </div>
    );
}

export default StudentList;