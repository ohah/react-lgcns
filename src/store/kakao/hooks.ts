import { useCallback, useEffect, useState } from 'react';

import jwtDecode from 'jwt-decode';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { update } from 'store/kakao/slice';

declare const Kakao: any;

declare global {
  interface Window {
    Kakao: any;
  }
}

export const useKakao = () => {
  const kAuth = useAppSelector(state => state.kakao);
  const dispatch = useAppDispatch();
  const init = () => {
    window.Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
  };

  const loadScripts = () => {
    return new Promise<typeof window.Kakao>((resolve, reject) => {
      if (document.querySelector('script[src="https://developers.kakao.com/sdk/js/kakao.min.js"]')) {
        if (window.Kakao) {
          init();
          resolve(Kakao);
        } else {
          while (window?.Kakao) {
            if (Kakao) {
              init();
              resolve(Kakao);
              break;
            }
          }
        }
      } else {
        const scriptTag = document.createElement('script');
        scriptTag.src = 'https://developers.kakao.com/sdk/js/kakao.min.js';
        scriptTag.async = true;
        scriptTag.defer = true;
        scriptTag.onload = () => {
          init();
          resolve(Kakao);
        };
        scriptTag.onerror = () => {
          reject();
          throw new Error('google 로그인 스크립트 로드에 실패하였습니다!');
        };
        document.body.appendChild(scriptTag);
      }
    });
  };
  useEffect(() => {}, []);

  const render = async () => {
    loadScripts().then(async Kakao => {
      Kakao.Auth.login({
        throughTalk: true,
        persistAccessToken: true,
        success: (response: any) => {
          Kakao.API.request({
            url: '/v2/user/me',
            success: (profile: any) => {
              dispatch(update(profile));
              // console.log('profile', profile);
            },
            fail: (error: any) => {
              // console.log('실패', error);
            },
          });
        },
      });
    });
  };
  return {
    kAuth,
    isLogin: kAuth.isLogin,
    user: kAuth.user,
    render,
  };
};
