import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'

import { TabsWrapper } from './style'

const SectionTabs = memo((props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { tabNames = [], tabClick } = props

  function itemClickHandel(item, index) {
    setCurrentIndex(index)
    tabClick(item)
  }

  return (
    <TabsWrapper>
      {
        tabNames.map((item, index) => {
          return (
            <div 
              key={item} 
              className={classNames("item", {active: currentIndex === index})} 
              onClick={e => itemClickHandel(item, index)} 
            >
              {item}
            </div>
          )
        })
      }
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array
}

export default SectionTabs