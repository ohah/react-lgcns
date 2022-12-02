import { Toggle } from 'components';
import { Stack } from 'react-bootstrap';

const ToggleLayout = () => {
  return (
    <div>
      <Stack gap={2}>
        <Toggle active />
        <Toggle active={false} />
      </Stack>
    </div>
  );
};

export default ToggleLayout;
