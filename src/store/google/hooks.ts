/* eslint-disable no-console */
import { useEffect } from 'react';

import jwtDecode from 'jwt-decode';
import { IGoogleJWT, update } from 'store/google/slice';
import { useAppDispatch, useAppSelector } from 'store/hooks';

export const useGoogle = () => {
  const gAuth = useAppSelector(state => state.google);
  const dispatch = useAppDispatch();
  const init = () => {
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID || '',
      callback: res => {
        dispatch(update(jwtDecode<IGoogleJWT>(res.credential)));
      },
    });
  };

  const loadScripts = () => {
    return new Promise<typeof google>((resolve, reject) => {
      if (document.querySelector('script[src="https://accounts.google.com/gsi/client"]')) {
        if (window.google) {
          init();
          resolve(google);
        } else {
          while (window?.google) {
            if (google) {
              init();
              resolve(google);
              break;
            }
          }
        }
      } else {
        const scriptTag = document.createElement('script');
        scriptTag.src = 'https://accounts.google.com/gsi/client';
        scriptTag.async = true;
        scriptTag.defer = true;
        scriptTag.onload = () => {
          init();
          resolve(google);
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

  const render = async (element: HTMLElement) => {
    loadScripts().then(async google => {
      google.accounts.id.renderButton(element, {
        type: 'standard',
        theme: 'outline',
        size: 'large',
        text: 'continue_with',
      });
      google.accounts.id.prompt(moment => {
        console.log('moment', moment);
      });
    });
  };
  return {
    gAuth,
    isLogin: gAuth.isLogin,
    user: gAuth.user,
    render,
  };
};
