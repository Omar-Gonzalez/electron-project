import React from 'react';
import './App.css';
import './app/globals';
import {initializeIcons, Stack, IStackTokens, StackItem} from "@fluentui/react";
import {PrimaryButton} from '@fluentui/react';

initializeIcons();

const tokenStyles: IStackTokens = {
  childrenGap: 'l2',
  padding: '45',
};

function App() {
  return (
    <Stack tokens={tokenStyles}>
      <StackItem align='center'>
        <h1>Electron Project Template</h1>
      </StackItem>
      <StackItem align='center'>
        <PrimaryButton
          text={'Test IPC event'}
          onClick={async () => {
            const result = await window.ipc.invoke('testIpc', {'hey': 'there'});
            console.log(result);
          }}/>
      </StackItem>
    </Stack>
  );
}

export default App;
