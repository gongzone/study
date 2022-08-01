import styled from 'styled-components';

// components
import Base from './base/Base';
import CompoundComponent from './patterns/CompoundComponent';

const App = () => {
  return (
    <StyledApp>
      <div className="container">
        <h2>Base</h2>
        <Base />
      </div>

      <div className="container">
        <h2>Compound Component</h2>
        <CompoundComponent>
          <CompoundComponent.On>The button is on</CompoundComponent.On>
          <CompoundComponent.Off>The button is off</CompoundComponent.Off>
          <CompoundComponent.Button />
        </CompoundComponent>
      </div>

      <div className="container"></div>
    </StyledApp>
  );
};

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  h2 {
    margin: 0;
    padding: 5px;
    color: #111111;
    padding-top: 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    background-color: #ccc;
    border-radius: 4px;
    min-width: 200px;
  }
`;

export default App;
