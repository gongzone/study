import { useState } from 'react';
import Switch from '../Switch';

const Base = () => {
  const [on, setOn] = useState(false);

  const onToggle = () => {
    setOn((prevState) => !prevState);
  };

  return <Switch on={on} onClick={onToggle} />;
};

export default Base;
