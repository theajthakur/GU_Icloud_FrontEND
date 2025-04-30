import React, { useEffect, useState } from "react";
import studentsData from "../data/students_info.json";
import "../style/UserFinder.css";
export default function UserFinder() {
  const [students, setStudents] = useState(null);
  const [search, setSearch] = useState("");
  const [admission, setAdmission] = useState(null);
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!search || search.trim().length < 5) return setStudents(null);
    let filtered;
    filtered = studentsData.filter((aa) =>
      aa.name.trim().toLowerCase().includes(search.trim())
    );
    if (!filtered || filtered.length == 0) {
      filtered = studentsData.filter((aa) => aa.adm_no.toLowerCase() == search);
    }
    setStudents(filtered);
  }, [search]);

  const handleUserSearch = () => {
    if (!admission?.adm_no || !password)
      return alert("Please enter all the details");
    setData(admission);
  };
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
                {admission ? (
                  <div className="password-container">
                    <a
                      href="#"
                      onClick={() => {
                        setAdmission(null);
                        setData(null);
                        setPassword("");
                      }}
                    >
                      Back
                    </a>
                    <div className="py-2">
                      <p className="m-0">
                        <b>Name: </b>
                        <span className="ms-2">{admission.name}</span>
                      </p>
                      <p>
                        <b>Admission Number: </b>
                        <span className="ms-2">{admission.adm_no}</span>
                      </p>
                    </div>
                    <div className="d-inline-flex w-100">
                      <div className="w-100">
                        <input
                          className="form-control rounded-0"
                          placeholder={`Enter Mobile Number of ${admission.name}`}
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                          autoCorrect="off"
                          autoComplete="off"
                          autoCapitalize="off"
                          spellCheck="false"
                        />
                      </div>
                      {password ? (
                        <div>
                          <button
                            className="btn btn-primary rounded-0"
                            onClick={handleUserSearch}
                          >
                            Search
                          </button>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                ) : (
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
                                  <p
                                    className="m-0"
                                    onClick={() => {
                                      setAdmission(student);
                                    }}
                                  >
                                    {student.name}
                                  </p>
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
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 sidebar-show-beautify animate__animated animate__fadeInRight animate__delay-1s">
              <div className="d-inline-flex w-100 h-100 justify-content-center align-items-center">
                {data ? (
                  <div className="student-info">
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <td>
                            <strong>Student's Name</strong>
                          </td>
                          <td>{data.name}</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Father's Name</strong>
                          </td>
                          <td>{data.father}</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Admission Number</strong>
                          </td>
                          <td>{data.adm_no}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="mt-2">
                      <p className="m-0 lead">
                        <b className="text-primary">Maintenance: </b>
                        <span>
                          Detailed data will be shown to you after some changes
                          !
                        </span>
                      </p>
                    </div>
                  </div>
                ) : (
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
