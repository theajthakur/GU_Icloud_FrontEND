import React, { useEffect, useState } from "react";
import studentsData from "../data/students_info.json";
import "../style/UserFinder.css";
export default function UserFinder() {
  const [students, setStudents] = useState(null);
  const [search, setSearch] = useState("");
  const [admission, setAdmission] = useState(null);
  useEffect(() => {
    if (!search || search.length.trim() < 5) return setStudents(null);
    let filtered;
    filtered = studentsData.filter((aa) =>
      aa.name.trim().toLowerCase().includes(search.trim())
    );
    if (!filtered || filtered.length == 0) {
      filtered = studentsData.filter((aa) => aa.adm_no.toLowerCase() == search);
    }
    setStudents(filtered);
  }, [search]);

  return (
    <div className="container mt-4 overflow-hidden">
      <div className="bg-light p-3">
        <div className="row">
          <div className="col-md-6">
            <div className="search-form animate__animated animate__fadeInLeft">
              <div className="bg-white p-3 shadow-sm my-4">
                <h3 className="text-center search-heading">
                  <strong>Search Student</strong>
                </h3>
                <div className="main-search">
                  <div className="input-container">
                    <input
                      autoCorrect="off"
                      autoComplete="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      className="form-control"
                      placeholder="Search Student"
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value.toLowerCase());
                      }}
                    />
                  </div>
                  {students ? (
                    <div className="suggestion-container">
                      <div className="suggestion-box">
                        {students.map((student, index) => (
                          <div key={index}>
                            {index == 0 ? (
                              ""
                            ) : (
                              <div className="border-top"></div>
                            )}
                            <div className="suggestion-unit p-2">
                              <div id="student-name">
                                <p className="m-0">{student.name}</p>
                              </div>
                              <div id="father-name">
                                <p className="m-0 small text-secondary">
                                  {student.father}
                                </p>
                              </div>
                              <div id="admission-number">
                                <p className="m-0 small text-secondary">
                                  {student.adm_no}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 sidebar-show-beautify animate__animated animate__fadeInRight animate__delay-1s">
              <div className="d-inline-flex w-100 h-100 justify-content-center align-items-center">
                <div className="text-center heading-big my-4">
                  <h1 className="text-secondary">
                    <strong>Student Finder</strong>
                  </h1>
                  <p className="text-secondary animate__animated animate__fadeInUp animate__delay-2s">
                    <strong>
                      Search for a student by name or admission number
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
