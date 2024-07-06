import React from 'react';
import './Home.css'; // Import your Home.css styles

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-and-image">
        <div className="text-content">
          <h1>Home</h1>
          <p>Welcome to our women's support platform. Our main objective is to provide a safe and anonymous forum where women can freely share their complaints and experiences of harassment. Your identity will be protected, allowing you to voice your concerns without fear. We believe in creating a supportive community where women can find solace and strength. Join us to speak out, connect, and move forward with confidence.</p>
        </div>
        <div className="image-container">
          <img src="/images/1.jpg" alt="Image description" className="home-image" />
          
        </div>
        <div className="image-container">
          <p></p>
          <img src="/images/2.jpg" alt="Image description" className="home-image" />
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Home;
