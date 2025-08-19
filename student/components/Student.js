import React from 'react'
import './Student.css';

const Student = () => {
    const students=[
        {id:1,name:"sa",mark1:90,mark2:95},
        {id:2,name:"ro",mark1:80,mark2:85},
        {id:3,name:"ku",mark1:70,mark2:75},
        {id:4,name:"pa",mark1:60,mark2:65}
    ];

    const grade=(total) =>{
        if(total >= 180) return 'A';
        else if(total >= 150) return 'B';
        else if(total >= 120) return 'C';
        else if(total >= 90) return 'D';
        else return 'F';
    };

    
  return (
    <div>
        <table className='student-table'>
            <thead>
                <tr>
                    <th>Student ID</th>
                    <th>Student Name</th>
                    <th>Mark1</th>
                    <th>Mark2</th>
                    <th>Total Marks</th>
                    <th>Grades</th>
                </tr>
            </thead>
            <tbody>
                {students.map(student =>{
                    const total=student.mark1 + student.mark2;
                    const studentGrade=grade(total);
                    return (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.mark1}</td>
                        <td>{student.mark2}</td>
                        <td>{total}</td>
                        <td>{studentGrade}</td>
                    </tr>
                )
})}
            </tbody>
        </table>
    </div>
  )
}

export default Student