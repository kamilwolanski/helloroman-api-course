import React, { useEffect, useState } from "react";
import StudentProfile from "components/StudentProfile/StudentProfile";
import { Wrapper } from "components/SchoolNews/SchoolNews.styles";
import { api, endpoints } from 'api'

const StudentsList = () => {
  const [students, setStudents] = useState([]);

  async function fetchData() {
    try {
      const response = await api
        .get(endpoints.users)
        .then((response) => response.data);
      setStudents(response);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
      fetchData();
  }, []);

  return (
    <Wrapper>
      {students.length ? (
        students.map(student => <StudentProfile key={student._id} studentData={student}/>)
      ) : (
        <h2>'Not students avaible'</h2>
      )}
    </Wrapper>
  );
};

StudentsList.propTypes = {};

export default StudentsList;
