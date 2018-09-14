import * as React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Login  from './pages/Login';
import Singup  from './pages/Singup';

export default class Rotas extends React.Component{
  render(){
    return(
      <Router>
        <Stack key="root">
          <Scene key="login" component={Login} title="Login" initial={true}/>
          <Scene key="singup" component={Singup} title="Register"/>
        </Stack>
      </Router>
    )
  }
}