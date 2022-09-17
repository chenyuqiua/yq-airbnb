import styled from 'styled-components'

export const CenterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 48px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 40px;
  padding-left: 10px;
  cursor: pointer;

  ${props => props.theme.mixin.boxShadow}

  .text {
    font-weight: 500;
    padding: 0 14px;
    color: ${props => props.theme.text.primaryColor};
  }

  .icon {
    margin: 7px 7px 7px 0;
    padding: 10px;
    border-radius: 50%;
    color: #fff;
    background-color: ${props => props.theme.color.primaryColor};
  }
`