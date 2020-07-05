import React from "react";
import Tippy from "@tippyjs/react";

import styled from "styled-components";

const StyledTippy = styled.div`
  .tippy-content {
    padding: 0;
  }
`;

const RefWrapper = styled.span`
  display: block;
  outline: none;
`;

const Popover = ({
  // required
  content,
  reference,
  arrow = false,
  interactive = true,
  maxWidth = "none",
  moveTransition = "transform 0.2s ease-out",
  onClickOutside = () => {},
  placement = "auto-start",
  colorTheme = "light-border",
  visible, // if not provided, will be visible on hover
  referenceCustomStyles,
  customStyles,
  ...props
}) => {
  return (
    <StyledTippy customStyles={customStyles}>
      <Tippy
        arrow={arrow}
        content={content}
        interactive={interactive}
        maxWidth={maxWidth}
        moveTransition={moveTransition}
        onClickOutside={onClickOutside}
        placement={placement}
        theme={colorTheme}
        visible={visible}
        {...props}
      >
        <RefWrapper tabIndex="0" referenceCustomStyles={referenceCustomStyles}>
          {reference}
        </RefWrapper>
      </Tippy>
    </StyledTippy>
  );
};

export default Popover;
