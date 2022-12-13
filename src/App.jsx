import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/pages/Login";
import { Meniu } from "./components/pages/Meniu";
import { Saredakcio } from "./components/pages/Saredakcio";
import { Jurnali } from "./components/pages/Jurnali";
import { Siaxleebi } from "./components/pages/Siaxleebi";
import { Momxmareblebi } from "./components/pages/Momxmareblebi";
import { Parametrebi } from "./components/pages/Parametrebi";
import { Home } from "./components/pages/Home";
import { useState } from "react";


function App() {

  const [sidebarClosed, setSidebarClosed] = useState(false);
  const [addMenuModal, setAddMenuModal] = useState(false);
  const [editMenuModal, setEditMenuModal] = useState(false);
  const [id, setId] = useState(0);

  //handleFormInputs

  const [language, setLanguage] = useState("");
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [bibliography, setBibliography] = useState("");
  const [keywords, setKeywords] = useState("");
  const [year, setYear] = useState("");
  const [number, setNumber] = useState("");
  const [pages, setPages] = useState("");
  const [doi, setDoi] = useState("");
  const [author, setAuthor] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [publishDate, setPublishDate] = useState("");


  //handleEditInputs

  const [editLanguage, setEditLanguage] = useState("")
  const [editTitle, setEditTitle] = useState("")
  const [editAbstract, setEditAbstract] = useState("")
  const [editBibliography, setEditBibliography] = useState("")
  const [editKeywords, setEditKeywords] = useState("")
  const [editYear, setEditYear] = useState("")
  const [editNumber, setEditNumber] = useState("")
  const [editPages, setEditPages] = useState("")
  const [editDoi, setEditDoi] = useState("")
  const [editAuthor, setEditAuthor] = useState("")
  const [editCreateDate, setEditCreateDate] = useState("")
  const [editPublishDate, setEditPublishDate] = useState("")






  //DB STATE

  //MAIN
  const [info, setInfo] = useState([]);

  //EDIT
  const [infoEdit, setInfoEdit] = useState([]);


  const state = {
    infoEdit,
    setInfoEdit,
    id,
    setId,
    info,
    setInfo,
    language,
    setLanguage,
    title,
    setTitle,
    abstract,
    setAbstract,
    bibliography,
    setBibliography,
    keywords,
    setKeywords,
    year,
    setYear,
    number,
    setNumber,
    pages,
    setPages,
    doi,
    setDoi,
    author,
    setAuthor,
    createDate,
    setCreateDate,
    publishDate,
    setPublishDate,
    editMenuModal,
    setEditMenuModal,
    sidebarClosed,
    setSidebarClosed,
    editLanguage,
    setEditLanguage,
    editTitle,
    setEditTitle,
    editAbstract,
    setEditAbstract,
    editBibliography,
    setEditBibliography,
    editKeywords,
    setEditKeywords,
    editYear,
    setEditYear,
    editNumber,
    setEditNumber,
    editPages,
    setEditPages,
    editDoi,
    setEditDoi,
    editAuthor,
    setEditAuthor,
    editCreateDate,
    setEditCreateDate,
    editPublishDate,
    setEditPublishDate
  }

  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/menu"
            element={
              <Meniu
                state={state}
                info={info}
                setInfo={setInfo}
                addMenuModal={addMenuModal}
                setAddMenuModal={setAddMenuModal}
                sidebarClosed={sidebarClosed}
                setSidebarClosed={setSidebarClosed}
              />
            }
          />
          <Route path="/saredakcio" element={<Saredakcio />} />
          <Route path="/jurnali" element={<Jurnali />} />
          <Route path="/siaxleebi" element={<Siaxleebi />} />
          <Route path="/momxmareblebi" element={<Momxmareblebi />} />
          <Route path="/parametrebi" element={<Parametrebi />} />
          <Route
            path="/home"
            element={
              <Home
                sidebarClosed={sidebarClosed}
                setSidebarClosed={setSidebarClosed}
              />
            }
          />
          <Route
            path="*"
            element={
              <h1 className="h-screen flex justify-center items-center text-6xl">
                PAGE NOT FOUND!
              </h1>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
