import React from "react";
import styled from "styled-components";
import QueriesList from "../../../molecules/QueriesList";
import Subtitle from "../../../atoms/Subtitle/Subtitle";
import SearchInput from "../../../atoms/SearchInput/SearchInput";

const queries = [
  {
    id: 0,
    query_text: 'SELECT app_.app_id as app_id1_7_ from app app_ where app_.aid=XXXX),(XXXX ,\'tp_prod[tp_prod] @  [10.0.1.13]\',12926016,808069606,\'Query\',\'select app0_.app_id as app_id1_7_0_, app0_.aid as aid2_7_0_, app0_.type_id as type_id24_7_0_, app0_.cookie_encryption_key as cookie_e3_7_0_, app0_.created as created4_7_0_, app0_.default_lang as default_5_7_0_,  app0_.details as details6_7_0_, app0_.email as email7_7_0_, app0_.enabled_for_ai as enabled_8_7_0_, app0_.fee_calc as fee_calc9_7_0_, app0_.how as how10_7_0_, app0_.int_mode as int_mod11_7_0_,....',
    critical_statuses: [
      {
        id: 0,
        name: 'removing tmp tables',
        value: 1.12
      }
    ]
  },
  {
    id: 1,
    query_text: 'SELECT app_.app_id as app_id1_7_ from app app_ where app_.aid=XXXX),(XXXX ,\'tp_prod[tp_prod] @  [10.0.1.13]\',12926016,808069606,\'Query\',\'select app0_.app_id as app_id1_7_0_, app0_.aid as aid2_7_0_, app0_.type_id as type_id24_7_0_, app0_.cookie_encryption_key as cookie_e3_7_0_, app0_.created as created4_7_0_, app0_.default_lang as default_5_7_0_,  app0_.details as details6_7_0_, app0_.email as email7_7_0_, app0_.enabled_for_ai as enabled_8_7_0_, app0_.fee_calc as fee_calc9_7_0_, app0_.how as how10_7_0_, app0_.int_mode as int_mod11_7_0_,....',
    critical_statuses: [
      {
        id: 1,
        name: 'rename result table',
        value: 1.21
      }
    ]
  }
];

const Section = styled.section`
  margin: 50px 0;
`;

const SqlAnalyzeSection = () => {
  return (
    <Section>
      <Subtitle>Parametrized statements grouped by SQL </Subtitle>
      <SearchInput/>
      <QueriesList isAnalyzerPage={true} queries={queries}/>
    </Section>
  )
};

export default SqlAnalyzeSection;
