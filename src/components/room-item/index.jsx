import PropTypes from 'prop-types'
import React, { memo } from 'react'
import Rating from '@mui/material/Rating';

import { ItemWrapper } from './style'

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%" } = props

  return (
    <ItemWrapper 
      verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
    >
      <div className='inner'>
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="desc">
          {itemData.verify_info.messages.join("·")}
        </div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>
        <div className="score">
          <Rating 
            precision={0.1} 
            value={itemData.star_rating ?? 4.7} 
            readOnly 
            sx={{fontSize: "12px", color: "#00848A"}} 
          />
          <span className='count'>{itemData.reviews_count}</span>
          <span className='extra'>{itemData?.bottom_info?.content}</span>
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string
}

export default RoomItem