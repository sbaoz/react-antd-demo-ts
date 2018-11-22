import * as React from 'react'
import {ComponentExt} from '@utils/reactExt'
import {Button} from "antd";
import {observer, inject} from "mobx-react";

interface IProps {
    globalStore?: IGlobalStore.GlobalStore
}

@inject('globalStore')
@observer
class Counter extends ComponentExt<IProps> {
    increase = () => {
        this.props.globalStore.increase(1)
    }
    decrease = () => {
        this.props.globalStore.decrease(1)
    }
    render() {
        const {num} = this.props.globalStore
        return (
            <div>
                <div>{num}</div>
                <Button type="primary" onClick={this.increase}>+</Button>
                <Button type="primary" onClick={this.decrease}>-</Button>
            </div>
        )
    }
}

export default Counter
