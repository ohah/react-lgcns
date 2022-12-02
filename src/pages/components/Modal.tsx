import { useState } from 'react';

import { Modal } from 'components';
import { Button } from 'react-bootstrap';

const ModalLayout = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <div className="py-3">
      <Button onClick={() => setOpen(true)}> 열기 </Button>
      <Modal isShow={isOpen} onClose={() => setOpen(false)}>
        <div>안녕하십니까</div>
      </Modal>
    </div>
  );
};

export default ModalLayout;
