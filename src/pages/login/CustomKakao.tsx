import { useEffect } from 'react';

import { Button } from 'react-bootstrap';
import { useKakao } from 'store/kakao/hooks';

const CustomKakao = () => {
  const { kAuth, render } = useKakao();
  useEffect(() => {
    // if (loginBtn.current) {
    //   render(loginBtn.current);
    // }
  }, []);
  return (
    <div>
      <Button variant="warning" onClick={() => render()}>
        카카오 로그인
      </Button>
      <div style={{ width: '100%' }}>{JSON.stringify(kAuth, null, 2)}</div>
    </div>
  );
};

export default CustomKakao;
