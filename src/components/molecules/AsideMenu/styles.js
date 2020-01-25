import styled from "styled-components";

export const AsideMenuWrapper = styled.div`
  padding: 50px 20px;
  width: 20%;
  
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 25px;
    top: 25px;
    
    .bm-burger-bars {
      background-color: ${({theme}) => theme.colors.darkGrey};
    }
  };
  
  .bm-overlay {
    background: transparent !important;
  }
  
  .bm-menu{
    padding-left: 4px;
     .bm-item {
        padding: 10px;
        
        &:hover, &:visited {
          background-color: rgba(66,112,145,0.17);
          border-left: 4px solid #304960;
        }
      };
  
    .active {
       background-color: rgba(66,112,145,0.17);
       border-left: 4px solid #304960;
       outline: none;
    };
  }
`;
