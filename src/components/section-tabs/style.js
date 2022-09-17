import styled from 'styled-components'

export const TabsWrapper = styled.div`
  display: flex;
  margin: 0 -8px;
  margin-bottom: 8px;
  /* overflow: hidden; */

  .item {
    flex-basis: 120px;
    padding: 10px 16px;
    flex-shrink: 0;
    margin: 0 8px;
    border-radius: 5px;
    border: 1px solid #d8d8d8;
    font-size: 17px;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .18);
    ${props => props.theme.mixin.boxShadow}

    &.active {
      color: #fff;
      background-color: ${props => props.theme.color.secondaryColor};
    }
  }
`