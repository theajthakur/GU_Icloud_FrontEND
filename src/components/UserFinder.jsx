import React, { useEffect, useState } from "react";
import studentsData from "../data/students_info.json";
import "../style/UserFinder.css";
export default function UserFinder() {
  const [students, setStudents] = useState(null);
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (!search || search.length < 5) return setStudents(null);
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
    <div className="container mt-4">
      <div className="bg-light p-3">
        <div className="row">
          <div className="col-md-6">
            <div className="search-form">
              <div className="bg-white p-3 shadow-sm">
                <h3 className="text-center">
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
                          <>
                            {index == 0 ? (
                              ""
                            ) : (
                              <div className="border-top"></div>
                            )}
                            <div className="suggestion-unit p-2" key={index}>
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
                          </>
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
        </div>
      </div>
    </div>
  );
}
