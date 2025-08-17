
import { useState } from 'react'
import Welcome from './components/Welcome'
import './App.css'
import StudentCard from './components/StudentCard'
import Counter from './components/Counter'
import StudentForm from './components/StudentForm'

function App() {
  return (
    <div className="App">
        <header className="App-header">
        <h1>🎉 สวัสดี React.js!</h1>
        <p>นี่คือแอปพลิเคชัน React แรกของฉัน</p>
        <p>ปัจจุบันเวลา: {new Date().toLocaleString('th-TH')}</p>
        {/* ใช้ Component พร้อม Props */}
        <Welcome 
          name="สมชาย ใจดี" 
          age={20} 
          university="มหาวิทยาลัยเทคโนโลยี"
        />
        
        <Welcome 
          name="สมหญิง รักเรียน" 
          age={19} 
          university="มหาวิทยาลัยเทคโนโลยี"
        />

        <Welcome
          name="อะไรดี"
          age={10}
          university="ไม่มี"
          />

        <StudentCard
          student={{
          id: "01234",
          name: "Mai ru",
          major: "SE",
          year: 2,
          gpa: 3.75,
          photo: "https://via.placeholder.com/100",
          hobbies: ["นอน", "เล่นกีฬา", "ท่องเที่ยว"],
          }}
        />
        <Counter />

        <StudentForm />
      </header>
    </div>
  )
}

export default App