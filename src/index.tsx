import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Test from '@components/Test'

const render = () => {
    ReactDOM.render(
        <Test />,
        document.querySelector('#app')
    )
}

render()
