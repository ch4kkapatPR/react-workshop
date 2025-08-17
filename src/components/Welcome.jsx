// src/components/Welcome.jsx - สร้างไฟล์ใหม่
import React from 'react'

function Welcome({ name, age, university }) {
  return (
    <div className="welcome-card">
      <h2>ยินดีต้อนรับ!</h2>
      <div className="user-info">
        <p><strong>ชื่อ:</strong> {name}</p>
        <p><strong>อายุ:</strong> {age} ปี</p>
        <p><strong>มหาวิทยาลัย:</strong> {university}</p>
        
        {/* JSX Conditional Rendering */}
        {age >= 18 ? (
          <span className="badge adult">🎓 นักศึกษา</span>
        ) : (
          <span className="badge minor">👶 เยาวชน</span>
        )}
      </div>
      
      {/* JSX List Rendering */}
      <div className="skills">
        <h4>ทักษะที่สนใจ:</h4>
        <ul>
          {['JavaScript', 'React', 'CSS', 'Node.js'].map((skill, index) => (
            <li key={index} className="skill-item">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Welcome