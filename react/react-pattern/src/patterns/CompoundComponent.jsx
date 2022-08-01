// Compound Component Pattern

import { useState, createContext, useContext, useCallback, useMemo } from 'react';
import Switch from '../Switch';

const ToggleContext = createContext();

const useToggleContext = () => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error(`Toggle compound components cannot be rendered outside the Toggle component`);
  }
  return context;
};

const CompoundComponent = (props) => {
  // state
  const [on, setOn] = useState(false);

  //mutation
  const toggle = useCallback(() => setOn((prevState) => !prevState), []);

  // state & mutation 하위 컴포넌트로 전달
  const value = useMemo(() => ({ on, toggle }), [on, toggle]);

  return <ToggleContext.Provider value={value}>{props.children}</ToggleContext.Provider>;
};

// 하위 컴포넌트들
CompoundComponent.On = function On({ children }) {
  const { on } = useToggleContext();
  return on ? children : null;
};

CompoundComponent.Off = function Off({ children }) {
  const { on } = useToggleContext();
  return on ? null : children;
};

CompoundComponent.Button = function Button(props) {
  const { on, toggle } = useToggleContext();
  return <Switch on={on} onClick={toggle} {...props} />;
};

export default CompoundComponent;
