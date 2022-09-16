import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

const App = memo(() => {
  return (
    <div className='App'>
      <div className="header">头</div>
      <div className="page">
        {useRoutes(routes)}
      </div>
      <div className="footer">脚</div>
    </div>
  )
})

export default App