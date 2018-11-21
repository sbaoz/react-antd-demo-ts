import * as React from 'react'
import {message, notification} from 'antd'

// 利用泛型灵活化state和props的interface
export class ComponentExt<P = {}, S = {}> extends React.Component<P,S> {
    $message = message
    $notification = notification
}
