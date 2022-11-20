import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { AiOutlineReload } from 'react-icons/ai';
import './StudentCard.scss'
import SingleTextInput from '../singleTextInput/SinlgeTextInput';
import EmptyView from '../emptyView/EmptyView';
import DialogBox from '../dialogueBox/DialogBox';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';



const StudentCard = ({ student, showDelete = false }) => {
    let navigate = useNavigate();
    const { id, pic, firstname, lastname, company, skill, email } = student;
    const [showGrades, setShowGrades] = useState(false)
    const [tags, setTags] = useState([])
    const [tag, setTag] = useState('')
    const [gradesLoading, setGradesLoading] = useState(false)
    const [showDeleteDialog, setShowDeleteDialog] = useState(false)
    const [deleteUserLoading, setDeleteUserLoading] = useState(false);
    const [showSnackbar, setShowSnackbar] = useState(false)

    const [grades, setGrades] = useState([]);

    const calculateAverage = (grades) => {
        return grades.reduce((acc, cur) => acc + Number(cur.grade), 0) / grades.length
    }

    const hideGrades = e => {
        e.stopPropagation();
        e.preventDefault();
        setShowGrades(false);
    }

    const showDeleteDialogue = e => {
        setShowDeleteDialog(true)
    }

    const deleteUser = e => {
        setDeleteUserLoading(true)
        console.log(id)
        const URL = `https://students-backend.adaptable.app/students/${id}`;

        fetch(URL, { method: 'DELETE' }).then(res => res.json())
            .then(data => {
                //redirect to home and show toast that student is deleted
                navigate('/', {
                    state: {
                        studentName: `${data.firstname} ${data.lastname}`,
                        status: true
                    }
                })
                console.log('deleted')
                setDeleteUserLoading(false)
            }).catch(err => {
                //unsuccesful
                setShowSnackbar(true)
                setDeleteUserLoading(false)
            })
    }

    const fetchAndShowGrades = e => {
        e.stopPropagation();
        e.preventDefault();

        //do we alredy have grades?
        if (grades.length) {
            setShowGrades(true)
        } else {
            setGradesLoading(true)

            const url = `https://students-backend.adaptable.app/students/${id}/grades`

            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setGrades(data)
                    setShowGrades(true)
                    setGradesLoading(false)
                })

        }
    }

    return (
        <div className="studentCard">
            <Snackbar open={showSnackbar} autoHideDuration={2000} onClose={() => setShowSnackbar(false)} message="message of Snackbar" anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert severity="error">FAiled to Delete</Alert>
            </Snackbar>
            <Link to={`/students/${id}`} state={{ student: student }}>

                <div className="studentCard__profilePic">
                    <img src={pic} alt="profile pic" />
                </div>

                <div className="studentCard__info">
                    <div className="studentCard__name">
                        {`${firstname} - ${lastname}`}
                    </div>

                    <div className="studentCard__infoLine">
                        Email : {email}
                    </div>
                    <div className="studentCard__infoLine">
                        Company : {company}
                    </div>
                    <div className="studentCard__infoLine">
                        Skill : {skill}
                    </div>


                    <div className="studentCard__gradesList" style={{ "display": showGrades ? "block" : "none" }}>
                        {grades.length > 0 &&
                            <>
                                <div className="studentCard__gradeAverage">
                                    Average: {calculateAverage(grades)}%
                                </div>
                                {grades.map((grade, index) => {
                                    return <div key={index}><span>Test {index + 1}:</span> <span>{grade.grade}%</span></div>
                                })}
                            </>
                        }
                        {grades.length === 0 && <EmptyView text="No grades yet" />}
                    </div>



                </div>
                <div className="studentCard__actionIcons">
                    {gradesLoading && <AiOutlineReload className="studentCard__toggleIcon-spinning" size='1.7em' />}
                    {(!showGrades && !gradesLoading) && <FaPlus className="studentCard__toggleIcon" size='1.7em' onClick={(e) => fetchAndShowGrades(e)} />}
                    {(showGrades && !gradesLoading) && <FaMinus size='1.7em' className="studentCard__toggleIcon" onClick={(e) => hideGrades(e)} />}
                </div>
            </Link>
            <div className='studentCard__tagCollectionRow'>

                <div className="studentCard__tagCollection">
                    <div className="studentCard__tags">
                        {tags.map((tag, index) => {
                            return <span className="studentCard__tag" key={tag + index}>{tag}</span>
                        })}
                    </div>
                    <div className="studentCard__tagInput">
                        <SingleTextInput onSubmit={setTags} collection={tags} searchTerm={tag} setSearchTerm={setTag} placeholder="Add a tag" width="28%" />
                    </div>

                </div>

                {showDelete && <div>
                    {deleteUserLoading && <AiOutlineReload className="studentCard__toggleIcon-spinning" size='1.7em' />}
                    {!deleteUserLoading && <FaTrash className="studentCard__trashIcon" size='1.7em' onClick={(e) => showDeleteDialogue(e)} />}
                </div>}
            </div>
            <DialogBox open={showDeleteDialog} setOpen={setShowDeleteDialog} deleteUser={deleteUser} />

        </div>
    );
}

export default StudentCard;