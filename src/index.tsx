import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { configure } from 'mobx'
import * as store from './model'

import Test from '@components/Test'
import Counter from "@views/Counter";

configure({enforceActions: 'observed'})

const render = () => {
    ReactDOM.render(
        <Provider {...store}>
            <Counter/>
        </Provider>,
        document.getElementById('app') as HTMLElement
    )
}

render()
