import React, {useState} from "react";
import MainTemplate from "../../templates/MainTemplate";
import SqlAnalyzeSection from "./SqlAnalyzeSection";
import NavigationMenu from "../../molecules/NavigationMenu";
import Pagination from "../../molecules/Pagination";

const OriginalDumpAnalyzePage = () => {
  const [isBySql, setIsBySql] = useState(true);
  
  return (
    <MainTemplate pageTitle='Original dump analyze'>
      <NavigationMenu setIsBySql={setIsBySql}/>
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
