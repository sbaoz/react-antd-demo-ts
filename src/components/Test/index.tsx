import * as React from 'react'
import {Button} from 'antd'
import * as styles from  './index.styl'
import {ComponentExt} from '@utils/reactExt'

@log
class Test extends ComponentExt {
    showMsg = () => {
        this.$message.success('通知')
    }

    render() {
        return (
            <div><Button type="primary" className={styles.test} onClick={this.showMsg}>test</Button></div>
        )
    }
}

function log(target: any) {
    console.log(target)
}

export default Test
