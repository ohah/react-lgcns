import { useToast } from 'components/Toast';
import { Button } from 'react-bootstrap';

const ToastLayout = () => {
  const { toast } = useToast();
  return (
    <div>
      <h2>Q. 토스트(ContextAPI)에 실행 후에도 쌓여있는 Queue 데이터를 삭제하세요(Toast 함수 내 SetQueue 활용)</h2>
      <Button onClick={() => toast('테스트', { autoClose: 3000, type: 'info' })}> 토스트 </Button>
    </div>
  );
};

export default ToastLayout;
