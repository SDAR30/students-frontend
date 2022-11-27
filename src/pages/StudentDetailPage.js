import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import StudentCard from '../components/studentCard/StudentCard';
import StudentForm from '../components/studentForm/StudentForm';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function StudentDetailPage(props) {
    let params = useParams();
    const location = useLocation();
    const [student, setStudent] = useState({});
    const [showSnackbar, setShowSnackbar] = useState(false)
    const { studentID } = params;

    useEffect(() => {
        // if(location.state?.student){ //if coming here from students page, no need to make new call
        //     setStudent(location.state?.student)
        // }else{

            if (location?.state?.fromCreateStudent) {
                setShowSnackbar(true)
    
            }
            const sinlgeStudentURL = "https://students-backend.adaptable.app/students/" + studentID

            fetch(sinlgeStudentURL).then(res => res.json())
            .then(data => setStudent(data))
        //}
      
    }, [location.state?.student, studentID, location.state?.fromCreateStudent])
    
    return (
        <div className="studentDetailPage">
            <Snackbar
                open={showSnackbar}
                autoHideDuration={2000}
                onClose={() => setShowSnackbar(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert>{location?.state?.studentName} was succesfully Created</Alert>
            </Snackbar>

            {Object.keys(student).length> 0  && <StudentCard student={student} showDelete/>}
            {Object.keys(student).length> 0  && <StudentForm student={student} setStudent={setStudent}/>}
        </div>
    );
}

export default StudentDetailPage;