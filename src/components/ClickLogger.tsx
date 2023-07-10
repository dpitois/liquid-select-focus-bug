import * as React from 'react';
import { LdTypo } from '@emdgroup-liquid/liquid/dist/react';

const ClickLogger = () => {
  const [startAt, setStartAt] = React.useState<number>(0);
  const [delta, setDelta] = React.useState<number>(0);
  const startTimer = React.useCallback(() => {
    setStartAt(performance.now());
  }, []);
  const endTimer = React.useCallback(() => {
    setDelta(performance.now() - startAt);
  }, [startAt, delta]);

  React.useEffect(() => {
    document.addEventListener('mousedown', startTimer);
    document.addEventListener('mouseup', endTimer);
    return () => {
      document.removeEventListener('mousedown', startTimer);
      document.removeEventListener('mouseup', endTimer);
    }
  }, [startTimer, endTimer]);

  return <LdTypo variant="body-m">Click event duration {delta}</LdTypo>
}

export default ClickLogger
