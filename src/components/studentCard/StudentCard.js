import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from 'react-icons/fa';
import { AiOutlineReload } from 'react-icons/ai';
import './StudentCard.scss'
import SingleTextInput from '../singleTextInput/SinlgeTextInput';
import EmptyView from '../emptyView/EmptyView';

const StudentCard = ({ student }) => {
    const { id, pic, firstname, lastname, company, skill, email } = student;
    const [showGrades, setShowGrades] = useState(false)
    const [tags, setTags] = useState([])
    const [tag, setTag] = useState('')
    const [gradesLoading, setGradesLoading] = useState(false)

    const [grades, setGrades] = useState([]);

    const calculateAverage = (grades) => {
        return grades.reduce((acc, cur) => acc + Number(cur.grade), 0) / grades.length
    }

    const hideGrades = e => {
        e.stopPropagation();
        e.preventDefault();
        setShowGrades(false);
    }

    const fetchAndShowGrades = e => {
        e.stopPropagation();
        e.preventDefault();

        //do we alredy have grades?
        if (grades.length) {
            setShowGrades(true)
        } else {
            setGradesLoading(true)

            const url = `http://localhost:3003/students/${id}/grades`

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
                        {grades.length === 0 && <EmptyView text="No grades yet"/>}
                    </div>



                </div>

                <div className="studentCard__toggleIcons">
                    {gradesLoading && <AiOutlineReload className="studentCard__toggleIcons__toggleIcon-spinning" size='1.7em' />}
                    {(!showGrades && !gradesLoading) && <FaPlus className="studentCard__toggleIcons__toggleIcon" size='1.7em' onClick={(e) => fetchAndShowGrades(e)} />}
                    {(showGrades && !gradesLoading) && <FaMinus size='1.7em' className="studentCard__toggleIcons__toggleIcon" onClick={(e) => hideGrades(e)} />}
                </div>
            </Link>
            
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

        </div>
    );
}

export default StudentCard;