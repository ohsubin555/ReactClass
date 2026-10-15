import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import myElement02, { myElement01 } from './days02/App08_02'

// import myElement02, { myElement01 } from './days02/App08_02' {}가 안붙으면 default
// import { myElement02 } from './days02/App08_02'              {}
// import { myElement01, myElement02 } from './days02/App08_02.jsx'

createRoot(document.getElementById('root')).render(   
    myElement01
)
 