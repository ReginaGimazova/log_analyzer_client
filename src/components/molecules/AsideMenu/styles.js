import styled from "styled-components";

export const AsideMenuWrapper = styled.div`
  .bm-burger-button {
    position: fixed;
    width: 34px;
    height: 30px;
    left: 20px;
    top: 20px;

    .bm-burger-bars {
      background-color: ${({theme}) => theme.colors.darkGrey};
    }
  };
  
  .bm-overlay {
    background: transparent !important;
  }
  
  .bm-menu{
    padding: 2.5em 1.5em 0;
    margin-top: 10px;
    background-color: ${({theme}) => theme.colors.white};
    
    .bm-item {
      padding: 10px;
      font-size: 1.25rem;
        
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
