import React, { useEffect, useState } from 'react';
import EmptyView from '../emptyView/EmptyView';
import StudentCard from '../studentCard/StudentCard';
import './StudentList.scss'
import { useLocation } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import SearchBar from '../SearchBar/SearchBar';

function StudentList(props) {

    let location = useLocation();

    const [students, setStudents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [showSnackbar, setShowSnackbar] = useState(false)


    useEffect(() => {
        setLoading(true);

        if (location?.state?.status) {
            setShowSnackbar(true)

        }

        const url = 'https://students-backend.adaptable.app/students'

        fetch(url).then(res => res.json())
            .then(data => {
                setStudents(data);
                setLoading(false);
            })

    }, [location?.state])

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

            <Snackbar
                open={showSnackbar}
                autoHideDuration={2000}
                onClose={() => setShowSnackbar(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert>{location?.state?.studentName} was succesfully Deleted</Alert>
            </Snackbar>

            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            
            {filteredStudents.map((student, index) => {
                return (
                    <StudentCard student={student} key={student.id} />
                )
            })}
            {loading && <EmptyView text="Loading... " center />}
            {!loading && filteredStudents.length === 0 && <EmptyView center />}
        </div>
    );
}

export default StudentList;