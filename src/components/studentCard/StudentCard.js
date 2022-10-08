import React from 'react';
import './StudentCard.scss'

const StudentCard = ({ student }) => {
    const { pic, firstName, lastName, company, skill, email, grades } = student;

    const calculateAverage = (grades) => {
        return grades.reduce((acc, cur) => acc + Number(cur), 0) / grades.length
    }

    return (
        <div className="studentCard">
            <div className="studentCard__profilePic">
                <img src={pic} alt="profile pic"/>
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
            </div>
        </div>
    );
}

export default StudentCard;