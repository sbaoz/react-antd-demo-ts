import * as React from 'react'
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

export default Test
