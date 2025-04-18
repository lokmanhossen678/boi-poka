import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../components/utility/addToDB";
import Book from "../Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort]=useState("");
  const data = useLoaderData();
//   console.log(data);
  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBook = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertedStoredBook.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  const handleSort = (type)=>{
    setSort(type)
    if(type==="pages"){
        const sortedByPage=[...readList].sort((a,b)=>a.totalPages-b.totalPages)
        setReadList(sortedByPage)
        console.log(sortedByPage);
    }
    if(type==="ratings"){
        const sortedByrating=[...readList].sort((a,b)=>a.rating-b.rating)
        setReadList(sortedByrating)
        console.log(sortedByrating);
    }
  }


  return (
    <div>
      <Tabs>
        <details className="dropdown">
          <summary className="btn m-1">sort by : {sort?sort:""}</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={()=>handleSort("pages")}>Pages</a>
            </li>
            <li>
              <a onClick={()=>handleSort("ratings")}>Rating</a>
            </li>
          </ul>
        </details>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My wish List</Tab>
          {readList.map((b) => (
            <Book key={b.bookId} singleBook={b}></Book>
          ))}
        </TabList>

        <TabPanel>
          <h2>Books List Reading Complited {readList.length}</h2>
        </TabPanel>
        <TabPanel>
          <h2>My wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
