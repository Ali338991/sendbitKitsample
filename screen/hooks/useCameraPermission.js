import {useCallback, useEffect, useState} from 'react';
import {check, request, openSettings} from 'react-native-permissions';
import {cameraPermission, photoLibrary} from '../permission/permissionList';

export function useCameraPermission() {
  const [status, setStatus] = useState('loading');
  const showRequest = status !== 'granted';
  const cantBeAutomaticallyRequested = [
    'blocked',
    'unavailable',
    'error',
    'loading',
  ].includes(status);

  useEffect(() => {
    (async function () {
      try {
        if (cameraPermission) {
          const status = await check(cameraPermission);
          setStatus(status);
        }
      } catch (e) {
        setStatus('error');
      }
    })();
  }, []);

  const requestAccess = useCallback(async () => {
    try {
      if (!showRequest || !cameraPermission) {
        return null;
      }
      // if (cantBeAutomaticallyRequested) {
      //   return await openSettings();
      // }
      setStatus('loading');
      const status = await request(cameraPermission);
      await request(photoLibrary);
      setStatus(status);
    } catch (e) {
      setStatus('error');
    }
  }, [cantBeAutomaticallyRequested, showRequest]);

  return {
    status,
    showRequest,
    cantBeAutomaticallyRequested,
    requestAccess,
  };
}
