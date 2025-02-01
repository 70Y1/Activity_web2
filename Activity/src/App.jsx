import React from "react";

function App() {
  return (
    <div>
            <div>
                <img className="img"
                    src="/hi.jpg"
                    alt="Profile"
                    style={{ width: '150px', height: '150px', borderRadius: '50%' }}
                />
            </div>
<div class="name">
    <h2>Name</h2>
    <p>Kiannah Joy Ambuyoc</p>
</div>

      <h3>Contact Information</h3>
      <p>Email: passkiannahjoy@gmail.com</p>
      <p>Phone: 123-456-7890</p>
      <p>Address: Macalaya, Castilla Sorsogon</p>

      <h3>Skills</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>Node.js</li>
      </ul>

      <h3>Work Experience</h3>
      <div>
        <p>Frontend Developer at Tech Corp</p>
        <p>Jan 2020 - Present</p>
        <p>Hacker at CATC</p>
      </div>
    </div>

  );
}

export default App;