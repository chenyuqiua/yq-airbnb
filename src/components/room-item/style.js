import styled from 'styled-components'

export const ItemWrapper = styled.div`
  box-sizing: border-box;
  width: ${props => props.itemWidth};
  padding: 8px;

  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 0 0;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  .desc {
    margin-top: 10px;
    color: ${props => props.verifyColor};
    font-size: 12px;
    cursor: pointer;
  }

  .name {
    height: 51px;
    margin: 6px 0;
    color: ${props => props.theme.text.primaryColor};
    font-size: 16px;
    font-weight: 500;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  .price {
    font-size: 13px;
  }

  .score {
    display: flex;
    align-items: center;

    .MuiRating-icon {
      margin-right: -2px;
    }

    .count {
      margin: 0 3px;
      font-size: 12px;
    }

    .extra {
      font-size: 12px;
    }
  }
`