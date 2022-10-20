import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from 'react-icons/fa';
import './StudentCard.scss'

const StudentCard = ({ student }) => {
    const { pic, firstName, lastName, company, skill, email, grades } = student;
    const [showGrades, setShowGrades] = useState(false)

    const calculateAverage = (grades) => {
        return grades.reduce((acc, cur) => acc + Number(cur), 0) / grades.length
    }
    const toggleGrades = e =>{
        e.stopPropagation(); //don't propagate down. 
        e.preventDefault();
        setShowGrades(!showGrades)
    }

    return (
        <div className="studentCard">
            <Link to={`/students/${student.id}`} state={{student: student}}>

            <div className="studentCard__profilePic">
                <img src={pic} alt="profile pic" />
            </div>

            <div className="studentCard__info">
                <div className="studentCard__name">
                    {`${firstName} - ${lastName}`}
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
                <div className="studentCard__infoLine">
                    Average: {calculateAverage(grades)}%
                </div>

                <div className="studentCard__gradesList" style={{ "display": showGrades ? "block" : "none" }}>
                    {grades.map((grade, index) => {
                        return <div key={index}><span>Test {index + 1}:</span> <span>{grade}%</span></div>
                    })}
                </div>

            </div>

            <div className="studentCard__toggleIcons">
                {!showGrades ? <FaPlus className="studentCard__toggleIcons__toggleIcon" size='1.7em' onClick={(e) => toggleGrades(e)} />
                    : <FaMinus size='1.7em' className="studentCard__toggleIcons__toggleIcon" onClick={(e) => toggleGrades(e)} />}
            </div>
            </Link>
        </div>
    );
}

export default StudentCard;