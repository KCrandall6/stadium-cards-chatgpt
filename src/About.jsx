import React from 'react';

const About = () => {

  return (
    <div className="d-flex flex-column align-items-center justify-content-center m-5">
      <h2><em>About me, the app!</em></h2>
      <p>This app, believe it or not, was mostly built using the new AI <a href='https://chat.openai.com/auth/login'>ChatGPT</a>! To see the process of how I created it, check out this <a href='https://medium.com/@kcrandall67/how-easy-is-it-creating-a-web-app-using-chatgpt-3e186ff42a60'>Medium article</a> I wrote, or check out my <a href='https://github.com/KCrandall6/stadium-cards-chatgpt'>GitHub repository</a>!</p>
      <br/>
      <h4><em>About the Developer</em></h4>
      <p>My name is Kurt Crandall and I am a full stack software engineer working primarily in JavaScript! I am always learning and looking to grow my skillset and network, so feel free to connect via <a href='https://www.linkedin.com/in/kurtcrandall/'>LinkedIn</a>!</p>
    </div>
  )
}

export default About;
