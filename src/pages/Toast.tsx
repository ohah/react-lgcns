import { useToast } from 'components/Toast';
import { Button } from 'react-bootstrap';

const ToastLayout = () => {
  const { toast } = useToast();
  return (
    <div>
      <Button onClick={() => toast('으윽', { autoClose: 3000, type: 'info' })}> 토스트 </Button>
    </div>
  );
};

export default ToastLayout;
