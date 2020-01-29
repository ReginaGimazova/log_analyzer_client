import React from "react";
import QueriesList from "../../molecules/QueriesList";
import Subtitle from "../../atoms/Subtitle/Subtitle";
import SearchInput from "../../atoms/SearchInput/SearchInput";

const queries = [
  'SELECT app_.app_id as app_id1_7_ from app app_ where app_.aid=XXXX),(XXXX ,\'tp_prod[tp_prod] @  [10.0.1.13]\',12926016,808069606,\'Query\',\'select app0_.app_id as app_id1_7_0_, app0_.aid as aid2_7_0_, app0_.type_id as type_id24_7_0_, app0_.cookie_encryption_key as cookie_e3_7_0_, app0_.created as created4_7_0_, app0_.default_lang as default_5_7_0_,  app0_.details as details6_7_0_, app0_.email as email7_7_0_, app0_.enabled_for_ai as enabled_8_7_0_, app0_.fee_calc as fee_calc9_7_0_, app0_.how as how10_7_0_, app0_.int_mode as int_mod11_7_0_,....',
  'SELECT app_.app_id as app_id1_7_ from app app_ where app_.aid=XXXX),(XXXX ,\'tp_prod[tp_prod] @  [10.0.1.13]\',12926016,808069606,\'Query\',\'select app0_.app_id as app_id1_7_0_, app0_.aid as aid2_7_0_, app0_.type_id as type_id24_7_0_, app0_.cookie_encryption_key as cookie_e3_7_0_, app0_.created as created4_7_0_, app0_.default_lang as default_5_7_0_,  app0_.details as details6_7_0_, app0_.email as email7_7_0_, app0_.enabled_for_ai as enabled_8_7_0_, app0_.fee_calc as fee_calc9_7_0_, app0_.how as how10_7_0_, app0_.int_mode as int_mod11_7_0_,....',
  "select"
];

const SqlAnalyzeSection = () => {
  return (
    <section>
      <Subtitle>Parametrized statements grouped by SQL </Subtitle>
      <SearchInput/>
      <QueriesList>{queries}</QueriesList>
    </section>
  )
};

export default SqlAnalyzeSection;
