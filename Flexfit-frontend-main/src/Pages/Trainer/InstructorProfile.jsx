import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './InstructorProfile.css';
import InstructorInfo from '../../components/Trainers/instructor_info';

const InstructorProfile = () => {
    const location = useLocation();
    const { bgImg, title, trainer, date } = location.state || {
        bgImg: '',
        title: '',
        trainer: '',
        date: ''
    };

    useEffect(() => {
        // Fetch the instructor data from the server if needed
        // axios.get('/api/instructor/jacob-jones')
        //     .then(response => {
        //         setInstructor(response.data);
        //     })
        //     .catch(error => {
        //         console.error('There was an error fetching the instructor data!', error);
        //     });
    }, []);



    return (
        <div className="instructor-profile">
            <header>
                <div className="container">
                </div>
            </header>
            <section className="banner">
                <div className="container">
                    <h1>Instructor Profile</h1>
                </div>
            </section>
            <section className="profile-details">
                <div className="container">
                    <InstructorInfo/>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default InstructorProfile;
