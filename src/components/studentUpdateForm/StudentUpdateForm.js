import React, { useState } from 'react';
import './StudentUpdateForm.scss'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AiOutlineReload } from 'react-icons/ai';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function StudentUpdateForm({ student }) {
    const [firstname, setFirstname] = useState(student.firstname);
    const [lastname, setLastname] = useState(student.lastname);
    const [company, setCompany] = useState(student.company);
    const [city, setCity] = useState(student.city);
    const [skill, setSkill] = useState(student.skill);
    const [pic, setPic] = useState(student.pic);
    const [anyChanges, setAnyChanges] = useState(false)
    const [loading, setLoading] = useState(false)
    const [showSnackbar, setShowSnackbar] = useState(false)

    const handleChange = e => {
        setAnyChanges(true)
        switch (e.target.name) {
            case 'firstname':
                setFirstname(e.target.value);
                break;
            case 'lastname':
                setLastname(e.target.value);
                break;
            case 'company':
                setCompany(e.target.value);
                break;
            case 'city':
                setCity(e.target.value);
                break;
            case 'skill':
                setSkill(e.target.value);
                break;
            case 'pic':
                setPic(e.target.value);
                break;
            default:
                break;
        }

    }

    const handleSubmit = () => {
        if (!anyChanges) return; //not needed since ui button is inactive

        setLoading(true)

        const url = `https://students-backend.adaptable.app/students/${student.id}`

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstname, lastname, company, city, skill, pic }) //shorthand for pic: pic
        };

        fetch(url, requestOptions).then(res => res.json())
            .then(data => {

                setAnyChanges(false)
                setLoading(false)
            }).catch(err => {
                setLoading(false)
                setShowSnackbar(true)
            })

    }


    return (
        <div className='studentUpdateForm'>
             <Snackbar open={showSnackbar} autoHideDuration={2000} onClose={() => setShowSnackbar(false)} message="message of Snackbar" anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert severity="error">FAiled to update</Alert>
            </Snackbar>
            <h3 className='studentUpdateForm__title'> Update Student</h3>
            <div className='studentUpdateForm__inputs'>
                <TextField id="outlined-basic" label="First Name" name='firstname' variant="outlined" value={firstname} onChange={e => handleChange(e)} />
                <TextField id="outlined-basic" label="Last Name" name='lastname' variant="outlined" value={lastname} onChange={e => handleChange(e)} />
                <TextField id="outlined-basic" label="Company" name='company' variant="outlined" value={company} onChange={e => handleChange(e)} />
                <TextField id="outlined-basic" label="City" name='city' variant="outlined" value={city} onChange={e => handleChange(e)} />
                <TextField id="outlined-basic" label="Skill" name='skill' variant="outlined" value={skill} onChange={e => handleChange(e)} />
                <TextField id="outlined-basic" label="Pic URL" name='pic' variant="outlined" value={pic} onChange={e => handleChange(e)} />

            </div>

            <div className='studentUpdateForm__submit'>
                <Button
                    variant="contained"
                    size='large'
                    disabled={!anyChanges}
                    onClick={handleSubmit}
                    endIcon={loading && <AiOutlineReload className='studentUpdateForm__submitLoader-spinning' />}
                > Update</Button>


            </div>
        </div>
    );
}
// styling for material UI element: sx={{mr: '20px', mb: '20px'}}
export default StudentUpdateForm;