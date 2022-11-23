import React from 'react';
import StudentList from '../components/studentList/StudentList';
import NavigationButton from '../components/navigationButton/NavigationButton';

function Home(props) {
    return (
        <div className='home'>
            <NavigationButton />
            <StudentList />
        </div>
    );
}

export default Home;