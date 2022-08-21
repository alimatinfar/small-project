import React from 'react';
import Modal from "../../../UI/Modal/Modal";
import Input from "../../../UI/Input/Input";
import CheckBox from "../../../UI/CheckBox/CheckBox";
import Button from "../../../UI/Button/Button";
import Typography from "../../../UI/Typography/Typography";

type ModalInfoType = {
  open: boolean,
  info: any
}

type Props = {
  modalInfo: ModalInfoType,
  onClose: () => void,
  data?: any,
}

function EditItemModal({modalInfo, onClose}:Props) {
  const info = modalInfo?.info
  return (
    <Modal open={modalInfo.open} onClose={onClose}>
      <div className='flex flex-col items-center h-full'>
        <Typography size='xl'>
          ویرایش اطلاعات
        </Typography>

        <div className='flex-1 flex-center flex-col w-full'>
          <Input defaultValue={info?.title || ''} label='title'/>
          <CheckBox initialValue={info?.completed || false} text='completed' />
        </div>

        <div className='grid grid-cols-2 gap-4 w-full'>
          <Button onClick={onClose} size='lg' type='primary'>ثبت</Button>
          <Button onClick={onClose} size='lg' type='primaryOutline'>انصراف</Button>
        </div>
      </div>
    </Modal>
  );
}

export default EditItemModal;