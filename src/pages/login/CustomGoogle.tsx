/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';

import { useGoogle } from 'store/google/hooks';

const CustomGoogle = () => {
  const { gAuth, render } = useGoogle();
  const loginBtn = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (loginBtn.current) {
      render(loginBtn.current);
    }
  }, []);
  return (
    <div>
      <div ref={loginBtn}> </div>
      {JSON.stringify(gAuth)}
    </div>
  );
};

export default CustomGoogle;
