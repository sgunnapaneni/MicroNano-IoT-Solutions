import React, { useState } from 'react';
import './teampage.css'; 
import './Style.css'; // Ensure this is the correct path to your CSS file
import venkatImage from './images/venkat.jpeg'; // Adjust the path as necessary
import alexImage from './images/Alex.png'; // Adjust the path as necessary
import rakeshImage from './images/rakesh.jpg'; // Adjust the path as necessary
import paramImage from './images/param.png'; // Adjust the path as necessary
import ramyaImage from './images/ramya.jpg'; // Adjust the path as necessary

const teamMembers = [
    {
        name: "Sai Venkat Kumar Gunnapaneni",
        role: "Website Developer",
        image: venkatImage,
        profile: "As a Master's student in Computer Science at Saint Louis University, I am passionate about creating efficient, visually appealing web solutions. With a solid foundation in web development and experience in full-stack technologies, I have honed my skills in designing and developing user-friendly websites.",
        contributions: "Worked on multiple web projects, focusing on enhancing user experience and performance."
    },
    {
        name: "Alex Chilaka",
        role: "Website Developer",
        image: alexImage,
        profile: "I'm currently pursuing a Master's degree in Computer Science at Saint Louis University. My goal is to become a full-stack developer, and courses like Web Technologies are helping me build a solid foundation in core topics essential for this path.",
        contributions: "Led the architectural design of several key web applications."
    },
    {
        name: "Rakesh Reddy Dodda",
        role: "Lead Architect",
        image: rakeshImage,
        profile: "I am a graduate student doing computer science in Saint Louis University. I am interested in cloud computing and I want to build my career towards that. This course Web Technologies helps me to gain the basic knowledge of building websites, which will be helpful for my career growth.",
        contributions: "Contributed to backend development and database management."
    },
    {
        name: "Param Sangani",
        role: "Reporting and Delivery Lead",
        image: paramImage,
        profile: "I am a PhD student in Computer Science at Saint Louis University. I love hardware and software engineering for drones and robots. My interest in web development and research started when I built my first website and continues to grow every day.",
        contributions: "Managed project deliveries and ensured quality standards."
    },
    {
        name: "Sai Ramya Valleru",
        role: "Edge Computing Specialist",
        image: ramyaImage,
        profile: "I am a master’s student who enjoys taking on different kinds of work and challenges. I have strong skills in Computer Science and love learning new things.",
        contributions: "Focused on optimizing edge computing solutions for applications."
    }
];

function TeamPage() {
    const [flippedIndex, setFlippedIndex] = useState(null);

    const handleFlip = (index) => {
        // Flip the clicked member or unflip if already flipped
        setFlippedIndex(flippedIndex === index ? null : index);
    };

    return (
        <section>
            <h3>Team Page</h3>
            <div className="team-container">
                {teamMembers.map((member, index) => (
                    <div 
                        className="team-member" 
                        key={index} 
                        onClick={() => handleFlip(index)}
                    >
                        <div className="team-member-inner" style={{ transform: flippedIndex === index ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
                            <div className="team-member-front">
                                <img src={member.image} alt={member.name} className="team-photo" />
                                <h4>{member.name}</h4>
                                <p>{member.role}</p>
                            </div>
                            <div className="team-member-back">
                                <h4>{member.name}</h4>
                                <p><strong>Profile:</strong> {member.profile}</p>
                                <p><strong>Contributions:</strong> {member.contributions}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TeamPage; 
