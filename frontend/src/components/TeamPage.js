import React from 'react';
import '../App.css';

function TeamPage() {
  return (
    <section>
      <h3>Team Page</h3>
      <div className="team-container">
        <div className="team-member">
          <img src={`${process.env.PUBLIC_URL}/images/venkat.jpeg`} alt="Sai Venkat Kumar Gunnapaneni" className="team-photo" />
          <h4>Sai Venkat Kumar Gunnapaneni</h4>
          <p>Website Developer</p>
          <p>As a Master's student in Computer Science at Saint Louis University, I am passionate about creating efficient, visually appealing web solutions. With a solid foundation in web development and experience in full-stack technologies, I have honed my skills in designing and developing user-friendly websites.</p>
        </div>

        <div className="team-member">
          <img src={`${process.env.PUBLIC_URL}/images/Alex.png`} alt="Alex Chilaka" className="team-photo" />
          <h4>Alex Chilaka</h4>
          <p>Lead Architect</p>
          <p>I'm currently pursuing a Master's degree in Computer Science at Saint Louis University. My goal is to become a full-stack developer, and courses like Web Technologies are helping me build a solid foundation in core topics essential for this path.</p>
        </div>

        <div className="team-member">
          <img src={`${process.env.PUBLIC_URL}/images/rakesh.jpg`} alt="Rakesh Reddy Dodda" className="team-photo" />
          <h4>Rakesh Reddy Dodda</h4>
          <p>Website Developer</p>
          <p>I am a graduate student doing computer science in Saint Louis University. I am interested in cloud computing and I want to build my career towards that. This course Web Technologies helps me to gain the basic knowledge of building websites, which will be helpful for my career growth.</p>
        </div>

        <div className="team-member">
          <img src={`${process.env.PUBLIC_URL}/images/param.png`} alt="Param Sangani" className="team-photo" />
          <h4>Param Sangani</h4>
          <p>Reporting and Delivery Lead</p>
          <p>I am a PhD student in Computer Science at Saint Louis University. I love hardware and software engineering for drones and robots. My interest in web development and research started when I built my first website and continues to grow every day.</p>
        </div>

        <div className="team-member">
          <img src={`${process.env.PUBLIC_URL}/images/ramya.jpg`} alt="Sai Ramya Valleru" className="team-photo" />
          <h4>Sai Ramya Valleru</h4>
          <p>Edge Computing Specialist</p>
          <p>I am a master’s student who enjoys taking on different kinds of work and challenges. I have strong skills in Computer Science and love learning new things.</p>
        </div>
      </div>
    </section>
  );
}

export default TeamPage;
