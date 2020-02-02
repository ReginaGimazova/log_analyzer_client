import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import styled from "styled-components";

import Button from "../../atoms/Button";

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  width: max-content;
  
  @media all and (max-width: 600px){
    flex-direction: column;
    padding: 30px;
    width: 100%;
  }
`;
const useStyles = makeStyles(theme => ({
  button: {
    padding: '10px 20px',
    marginRight: '30px',
    [theme.breakpoints.down('sm')]: {
     marginTop: '10px',
     marginRight: 0
    },
  }
}));

const NavigationMenu = ({setIsBySql}) => {
  const styles = useStyles();
  const onSqlChoose = () => {
    setIsBySql(true);
  };
  
  const onSqlUserHostChoose = () => {
    setIsBySql(false)
  };
  
  return (
    <Navigation>
      <Button onClick={onSqlChoose} className={styles.button}> grouped by sql</Button>
      <Button onClick={onSqlUserHostChoose} className={styles.button}> grouped by sql and user host</Button>
    </Navigation>
  )
};

export default NavigationMenu;
