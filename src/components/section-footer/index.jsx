import PropTypes from 'prop-types'
import React, { memo } from 'react'

import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import { FooterWrapper } from './style'

const SectionFooter = memo((props) => {
  const { name } = props

  let showMessage = "显示全部"
  if (name) {
    showMessage = `查看更多${name}房源`
  }

  return (
    <FooterWrapper color={name ? "#00848A" : "#000"}>
      <div className="info">
        <div className="text">{showMessage}</div>
        <IconMoreArrow/>
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter