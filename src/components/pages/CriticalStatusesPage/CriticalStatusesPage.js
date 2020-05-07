import React, { useState } from "react";
import MainTemplate from "../../templates/MainTemplate";
import StatusesPageSection from "../../organisms/StatusesPageSection";

const queries = [
  {
    id: 0,
    query_text:
      "SELECT app_.app_id as app_id1_7_ from app app_ where app_.aid=XXXX),(XXXX ,'tp_prod[tp_prod] @  [10.0.1.13]',12926016,808069606,'Query','select app0_.app_id as app_id1_7_0_, app0_.aid as aid2_7_0_, app0_.type_id as type_id24_7_0_, app0_.cookie_encryption_key as cookie_e3_7_0_, app0_.created as created4_7_0_, app0_.default_lang as default_5_7_0_,  app0_.details as details6_7_0_, app0_.email as email7_7_0_, app0_.enabled_for_ai as enabled_8_7_0_, app0_.fee_calc as fee_calc9_7_0_, app0_.how as how10_7_0_, app0_.int_mode as int_mod11_7_0_,....",
    critical_statuses: [
      {
        id: 0,
        name: "removing tmp tables",
        value: 1.12
      }
    ]
  },
  {
    id: 1,
    query_text:
      "SELECT app_.app_id as app_id1_7_ from app app_ where app_.aid=XXXX),(XXXX ,'tp_prod[tp_prod] @  [10.0.1.13]',12926016,808069606,'Query','select app0_.app_id as app_id1_7_0_, app0_.aid as aid2_7_0_, app0_.type_id as type_id24_7_0_, app0_.cookie_encryption_key as cookie_e3_7_0_, app0_.created as created4_7_0_, app0_.default_lang as default_5_7_0_,  app0_.details as details6_7_0_, app0_.email as email7_7_0_, app0_.enabled_for_ai as enabled_8_7_0_, app0_.fee_calc as fee_calc9_7_0_, app0_.how as how10_7_0_, app0_.int_mode as int_mod11_7_0_,....",
    critical_statuses: [
      {
        id: 1,
        name: "rename result table",
        value: 1.21
      }
    ]
  }
];

const types = {
  EXPLAIN: "EXPLAIN",
  PROFILE: "PROFILE"
};

const CriticalStatusesPage = () => {
  const [currentType, setCurrentType] = useState(types.EXPLAIN);

  const menuItems = [
    {
      title: "Show Explain statuses",
      active: currentType === types.EXPLAIN,
      onClick: () => setCurrentType(types.EXPLAIN)
    },
    {
      title: "Show Profile statuses",
      active: currentType === types.PROFILE,
      onClick: () => setCurrentType(types.PROFILE)
    }
  ];

  return (
    <MainTemplate pageTitle="Critical statuses" menuItems={menuItems}>
      <StatusesPageSection queries={queries} type={currentType} />
    </MainTemplate>
  );
};

export default CriticalStatusesPage;
