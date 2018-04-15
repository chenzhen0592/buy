import React,{PureComponent} from 'react';
import { AppRegistry } from 'react-native';
import RootScene from './src/scene/RootScene';


export default class Buy extends PureComponent<{}> {
    render() {
        return (
            <RootScene />
        );
    }
}
AppRegistry.registerComponent('buy', () => Buy);
