/* eslint-disable no-console */
import KakaoLogin from 'react-kakao-login';

const Kakao = () => {
  return (
    <div>
      <KakaoLogin
        token={process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY || ''}
        onSuccess={console.log}
        onFail={console.error}
        onLogout={console.info}
      />
    </div>
  );
};

export default Kakao;
