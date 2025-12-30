// src/mockData.js

export const mockStudent = {
    _id: "68e54a4a73c54c40f3359b5b",
    name: "Rajkamal S P",
    rollNumber: "CS101",
    className: "S7R2",
    collegeName: "Marian Engineering College",
    profileImageUrl: "https://via.placeholder.com/150",
    attendanceHistory: [
      {
        semester: "S7",
        subjectAttendances: [
          { subjectName: "Sub1: Physics", totalClasses: 20, attendedClasses: 19 },
          { subjectName: "Sub2: Chemistry", totalClasses: 20, attendedClasses: 18 },
          { subjectName: "Sub3: Maths", totalClasses: 22, attendedClasses: 21 },
          { subjectName: "Sub4: English", totalClasses: 18, attendedClasses: 18 },
          { subjectName: "Sub5: Computer Science", totalClasses: 25, attendedClasses: 15 } // Added one with low attendance to test red color
        ]
      }
    ]
  };