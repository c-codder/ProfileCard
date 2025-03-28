import React, { useState } from 'react';
import Greeting from './components/Greeting';
import NameInput from './components/NameInput';
import Weekdays from './components/Weekdays';
import ProfileCardMUI from './components/ProfileCardUIVersion';
import ProfileCardTailwind from './components/ProfileCardTailwindCSSVersion';
import ProfileCardStyled from './components/ProfileCardStyled-ComponentsVersion';
import ProfileCardVanilla from './components/ProfileCardVanillaVersion';

function App() {
  const [name, setName] = useState('');

  return (
    <div className="App">
      <Greeting name={name} />
      <NameInput name={name} setName={setName} />
      <Weekdays />
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px', flexWrap: 'wrap' }}>
        <div>
          <h3>Material UI</h3>
          <ProfileCardMUI />
        </div>
        <div>
          <h3>Tailwind CSS</h3>
          <ProfileCardTailwind />
        </div>
        <div>
          <h3>Styled Components</h3>
          <ProfileCardStyled />
        </div>
        <div>
          <h3>Vanilla CSS</h3>
          <ProfileCardVanilla />
        </div>
      </div>
    </div>
  );
}

export default App;