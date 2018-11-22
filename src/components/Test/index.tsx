import * as React from 'react'
import { connect } from 'react-redux'
import {ComponentExt} from '@utils/reactExt'
import {Button} from 'antd'
import * as styles from './index.styl'

class Test extends ComponentExt {

    showMsg = () => {
        this.$message.success('通知')
    }



    render() {

        return (
            <div>
                <Button type="primary" className={styles.test} onClick={this.showMsg}>showMsg</Button>

            </div>
        )
    }
}

const mapState = (state: any) => ({
    name: state.hello.name,
    num: state.hello.num
})

const mapDispatch = ({ hello: { name, num } }: any) => ({
    name,
    num
})

const OrderPage = connect(mapState, mapDispatch)(Test)

export default Test
