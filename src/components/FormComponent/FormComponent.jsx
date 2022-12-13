import React from "react";
import "./FormComponent.css"

export const FormComponent = (props) => {

  
  const handleSubmit = (e) => {
    const newInfo = {
      id : props?.info?.length === 0 ? 1 : props.info[props.info.length - 1].id + 1,
      language : props?.state?.language,
      title : props?.state?.title,
      abstract : props?.state?.abstract,
      bibliography : props?.state?.bibliography,
      keywords : props?.state?.keywords,
      year : props?.state?.year,
      number : props?.state?.number,
      pages : props?.state?.pages,
      doi : props?.state?.doi,
      author : props?.state?.author,
      createDate : props?.state?.createDate,
      publishDate : props?.state?.publishDate,
    }
    e.preventDefault();
    props.state.setId(0);
    props.state.setLanguage("");
    props.state.setTitle("");
    props.state.setAbstract("");
    props.state.setBibliography("");
    props.state.setKeywords("");
    props.state.setYear("");
    props.state.setNumber("");
    props.state.setPages("");
    props.state.setDoi("");
    props.state.setAuthor("");
    props.state.setCreateDate("");
    props.state.setPublishDate("");

    props.setInfo([...props.info, newInfo]);
    props.toggleModal();
    console.log(props.state.info)
  }

  

  return (
    <div className="customPadding flex flex-col gap-4">
      <div className="buttons">
        <button name="language" onClick={(e) => props.state.setLanguage(e.target.innerHTML)} className="bg-sky-700 p-3 rounded-lg border-1 border-white">ქართული</button>
        <button name="language" onClick={(e) => props.state.setLanguage(e.target.innerHTML)} className="bg-gray-200 p-3 rounded-lg">ინგლისური</button>
      </div>

      <div className="title">
        <h2 className="font-normal text-sm">სათაური</h2>
        <input name="title" onChange={(e) => props.state.setTitle(e.target.value)} className="w-full p-4" placeholder="ჩაწერე სათაური"></input>
      </div>

      <div className="abstract">
        <h2 className="font-normal text-sm">აბსტრაქტი</h2>
        <input name="abstract" onChange={(e) => props.state.setAbstract(e.target.value)} className="w-full p-4 h-80" placeholder="აბსტრაქტი"></input>
      </div>

      <div className="bibliography">
        <h2 className="font-normal text-sm">ბიბლიოგრაფია</h2>
        <input name="bibliography" onChange={(e) => props.state.setBibliography(e.target.value)} className="w-full h-60"  placeholder="ბიბლიოგრაფია"></input>
      </div>

      <div className="keywords">
        <h2 className="font-normal text-sm">გასაღები სიტყვები</h2>
        <input name="keywords" onChange={(e) => props.state.setKeywords(e.target.value)}  className="w-full h-28"  placeholder="გასაღები სიტყვები"></input>
      </div>

      <div className="options flex flex-row gap-3">
        <div>
          <select name="year" onChange={(e) => props.state.setYear(e.target.value)} className="p-2 rounded-lg bg-gray-100 customBorder">
            <option value="წელი">წელი</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
        <div>
          <select name="number" onChange={(e) => props.state.setNumber(e.target.value)} className="p-2 rounded-lg bg-gray-100 customBorder">
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
          <button className="font-normal text-sm p-2 rounded-lg bg-gray-100 customBorder">ატვირთვა</button>
        </div>
        <div className="pages">
          <h2>გვერდები</h2>
          <input name="page" onChange={(e) => props.state.setPages(e.target.value)} className="font-normal text-sm p-2 w-14 text-center rounded-lg bg-gray-100 customBorder" placeholder="1-2"></input>
        </div>
        <div className="doiurl">
          <h2>DOI URL</h2>
          <input
           name="doi"
          onChange={(e) => props.state.setDoi(e.target.value)}
          className="font-normal text-sm p-2 text-center rounded-lg bg-gray-100 customBorder"
            placeholder="iustitia.gov.ge/2022-N1(14)-21-47-vasadze.pdf"
          ></input>
        </div>
      </div>

      <div className="authors">
        <select name="author" onChange={(e) => props.state.setAuthor(e.target.value)} className="pt-2 pb-2 pl-4 pr-4">
          <option value="">ავტორი</option>
          <option value="ავტორი 1">ავტორი 1</option>
          <option value="ავტორი 2">ავტორი 2</option>
          <option value="ავტორი 3">ავტორი 3</option>
        </select>
      </div>

      <div className="dates">
        <div>
          <h2>შექმნის თარიღი:</h2>
          <input name="createDate" onChange={(e) => props.state.setCreateDate(e.target.value)} className="font-normal text-sm p-2 text-center rounded-lg bg-gray-100 customBorder" placeholder="21/12/22" type="date"></input>
        </div>
        <div>
          <h2>გამოქვეყნების თარიღი:</h2>
          <input name="changeDate" onChange={(e) => props.state.setPublishDate(e.target.value)} className="font-normal text-sm p-2 text-center rounded-lg bg-gray-100 customBorder" placeholder="21/12/22" type="date"></input>
        </div>
      </div>

      <div>
        <h2>გამოქვეყნება</h2>
        <div>
          <button></button>
        </div>
      </div>

      <div className="buttons flex flex-row justify-end gap-2">
      <button className="p-2 pl-4 pr-4 bg-gray-100 rounded-lg text-black" onClick={props.toggleModal}>შენახვა და გაგრძელება</button>
      <button className="p-2 bg-gray-100 rounded-lg text-black" onClick={props.toggleModal}>დახურვა</button>
      <button className="p-2 bg-sky-700 rounded-lg text-white" onClick={(e) => handleSubmit(e)}>შენახვა</button>
      </div>
    </div>
  );
};
