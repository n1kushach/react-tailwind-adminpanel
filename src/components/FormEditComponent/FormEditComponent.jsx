import React from "react";
import "./FormEditComponent.css";

export const FormEditComponent = (props) => {
  // let editFormState = {
  //   id: props.state.id,
  //   language: "",
  //   title: "",
  //   abstract: "",
  //   bibliography: "",
  //   keywords: "",
  //   year: "",
  //   number: "",
  //   pages: "",
  //   doi: "",
  //   author: "",
  //   createDate: "",
  //   changeDate: "",
  // };

  const handleEditFormSubmit = () => {
    let newObj = {
      id: props.state.id,
      language: props.state.editLanguage,
      title: props.state.editTitle,
      abstract: props.state.editAbstract,
      bibliography: props.state.editBibliography,
      keywords: props.state.editKeywords,
      year: props.state.editYear,
      number: props.state.editNumber,
      pages: props.state.editPages,
      doi: props.state.editDoi,
      author: props.state.editAuthor,
      createDate: props.state.editCreateDate,
      changeDate: props.state.editChangeDate,
    };
    props.state.setInfoEdit(newObj)
    
    // EDIT WORKS BUT ONLY CHANGING "TITLE"
    props.state.setInfo([...props.state.info].map(object => {
      if(object.id == props.state.id) {
        return {
          ...object,
          title: props.state.editTitle
        }
      } else return object;
    }))
    props.toggleEditMenuModal();
  };

  return (
    <div>
      {props.state.info
        .filter((item) => item.id === props.state.id)
        .map((item) => {
          return (
            <div className="customPadding flex flex-col gap-4">
              <div className="buttons">
                <button
                  onClick={(e) => props.state.setEditLanguage(e.target.innerHTML)}
                  name="language"
                  className="bg-sky-700 p-4 rounded-lg border-1 border-white"
                >
                  ქართული
                </button>
                <button
                  onClick={(e) => props.state.setEditLanguage(e.target.innerHTML)}
                  name="language"
                  className="bg-gray-200 p-4 rounded-lg"
                >
                  ინგლისური
                </button>
              </div>

              <div className="title">
                <h2 className="font-normal text-sm">სათაური</h2>
                <input
                  onChange={(e) => props.state.setEditTitle(e.target.value)}
                  type="text"
                  className="w-full p-4"
                />
              </div>

              <div className="abstract">
                <h2 className="font-normal text-sm">აბსტრაქტი</h2>
                <input
                  onChange={(e) => props.state.setEditAbstract(e.target.value)}
                  name="abstract"
                  className="w-full p-4 h-80"
                ></input>
              </div>

              <div className="bibliography">
                <h2 className="font-normal text-sm">ბიბლიოგრაფია</h2>
                <input
                  onChange={(e) => props.state.setEditBibliography(e.target.value)}
                  name="bibliography"
                  className="w-full h-60"
                ></input>
              </div>

              <div className="keywords">
                <h2 className="font-normal text-sm">გასაღები სიტყვები</h2>
                <input
                  onChange={(e) => props.state.setEditKeywords(e.target.value)}
                  name="keywords"
                  className="w-full h-28"
                ></input>
              </div>

              <div className="options flex flex-row gap-3">
                <div>
                  <select
                    onChange={(e) => props.state.setEditYear(e.target.value)}
                    name="year"
                    className="p-2 rounded-lg bg-gray-100 customBorder"
                  >
                    <option value="წელი">წელი</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                  </select>
                </div>
                <div>
                  <select
                    onChange={(e) => props.state.setEditNumber(e.target.value)}
                    name="number"
                    className="p-2 rounded-lg bg-gray-100 customBorder"
                  >
                    <option value="ნომერი">ნომერი</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
              </div>

              <div className="addfiles flex flex-row items-center gap-4">
                <div className="pdf">
                  <h2>PDF ის დამატება</h2>
                  <button className="font-normal text-sm p-2 rounded-lg bg-gray-100 customBorder">
                    ატვირთვა
                  </button>
                </div>
                <div className="pages">
                  <h2>გვერდები</h2>
                  <input
                    onChange={(e) => props.state.setEditPages(e.target.value)}
                    name="page"
                    className="font-normal text-sm p-2 w-14 text-center rounded-lg bg-gray-100 customBorder"
                    value={item.pages}
                  ></input>
                </div>
                <div className="doiurl">
                  <h2>DOI URL</h2>
                  <input
                    onChange={(e) => props.state.setEditDoi(e.target.value)}
                    name="doi"
                    className="font-normal text-sm p-2 text-center rounded-lg bg-gray-100 customBorder"
                    value={item.doi}
                  ></input>
                </div>
              </div>

              <div className="authors">
                <select
                  onChange={(e) => props.state.setEditAuthor(e.target.value)}
                  name="author"
                  className="pt-2 pb-2 pl-4 pr-4"
                >
                  <option value="">ავტორი</option>
                  <option value="ავტორი 1">ავტორი 1</option>
                  <option value="ავტორი 2">ავტორი 2</option>
                  <option value="ავტორი 3">ავტორი 3</option>
                </select>
              </div>

              <div className="dates">
                <div>
                  <h2>შექმნის თარიღი:</h2>
                  <input
                    onChange={(e) => props.state.setEditCreateDate(e.target.value)}
                    name="createDate"
                    className="font-normal text-sm p-2 text-center rounded-lg bg-gray-100 customBorder"
                    type="date"
                  ></input>
                </div>
                <div>
                  <h2>გამოქვეყნების თარიღი:</h2>
                  <input
                    onChange={(e) => props.state.setEditPublishDate(e.target.value)}
                    name="changeDate"
                    className="font-normal text-sm p-2 text-center rounded-lg bg-gray-100 customBorder"
                    type="date"
                  ></input>
                </div>
              </div>

              <div>
                <h2>გამოქვეყნება</h2>
                <div>
                  <button></button>
                </div>
              </div>

              <div className="buttons flex flex-row justify-end gap-2">
                <button
                  className="p-2 pl-4 pr-4 bg-gray-100 rounded-lg text-black"
                  onClick={props.toggleEditMenuModal}
                >
                  შენახვა და გაგრძელება
                </button>
                <button
                  className="p-2 bg-gray-100 rounded-lg text-black"
                  onClick={props.toggleEditMenuModal}
                >
                  დახურვა
                </button>
                <button
                  className="p-2 bg-sky-700 rounded-lg text-white"
                  onClick={handleEditFormSubmit}
                >
                  შენახვა
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};
