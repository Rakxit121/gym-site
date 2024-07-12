import React, { useEffect } from 'react';
// import axios from 'axios';
import Footer from "../../components/Footer/Footer";
import './InstructorProfile.css';

const InstructorProfile = () => {
    // const [instructor, setInstructor] = useState(null);

    useEffect(() => {
        // Fetch the instructor data from the server
        // axios.get('/api/instructor/jacob-jones')
        //     .then(response => {
        //         setInstructor(response.data);
        //     })
        //     .catch(error => {
        //         console.error('There was an error fetching the instructor data!', error);
        //     });
    }, []);

    // if (!instructor) {
    //     return <div>Loading...</div>;
    // }
    const instructor = {
      name: "Jacob Jones",
      title: "Gym trainer",
      image: "path/to/image.jpg", // Replace with the actual path to the image
      experience: [
          "4 years Gym trainer",
          "Provincial athlete",
          "Gym Enthusiast"
      ]
  };

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
                    <div className="instructor-info">
                        <img src={instructor.image} alt={instructor.name} className="instructor-image" />
                        <h3>{instructor.name}</h3>
                        <p>{instructor.title}</p>
                        <hr />
                        <h4>Experience :</h4>
                        <ul>
                            {instructor.experience.map((exp, index) => (
                                <li key={index}>{exp}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default InstructorProfile;
