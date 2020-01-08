/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './app/App';

const TodoApp = () => <App />
// AppRegistry : 진입점
AppRegistry.registerComponent(appName, () => TodoApp);
