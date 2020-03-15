import React, {useState} from "react";
import MainTemplate from "../../templates/MainTemplate";
import SqlAnalyzeSection from "./SqlAnalyzeSection";
import NavigationMenu from "../../molecules/NavigationMenu";
import Pagination from "../../molecules/Pagination";

const OriginalDumpAnalyzePage = () => {
  const [isBySql, setIsBySql] = useState(true);
  const menuItems = [
    {
      title: 'grouped by sql',
      active: isBySql,
      onClick: () => setIsBySql(true)
    },
    {
      title: 'grouped by sql and user host',
      active: !isBySql,
      onClick: () => setIsBySql(false)
    }
  ];

  return (
    <MainTemplate pageTitle='Original dump analyze'>
      <NavigationMenu menuItems={menuItems}/>
      <div>
        {isBySql ? (
          <SqlAnalyzeSection/>
        ) : (
          <p>another</p>
        )}
        <Pagination/>
      </div>
    </MainTemplate>
  )
};

export default OriginalDumpAnalyzePage;
