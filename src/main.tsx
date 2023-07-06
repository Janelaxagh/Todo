import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './views/App'

import './views/styles/reset.scss'
import './views/styles/common.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <App />
)
