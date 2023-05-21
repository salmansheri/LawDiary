'use client'; 
import React, { useCallback, useEffect, useState } from 'react'; 

import { IoMdClose } from 'react-icons/io';
import Button from '../Button';

interface ModalProps {
  isOpen?: boolean; 
  onClose: () => void; 
  onSubmit: () => void; 
  title?: string; 
  body?: React.ReactElement; 
  footer?: React.ReactElement; 
  actionLabel?: string; 
  disabled?: boolean; 

}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
}) => {
  const [showModal, setShowModal]  = useState(isOpen); 

  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen]); 

  const handleClose = useCallback(() => {
    if(disabled) {
      return; 
    }

    setShowModal(false); 
    setTimeout(() => {
      onClose(); 
    })

  }, [disabled, onClose]); 

  const handleSubmit = useCallback(() => {
    if(disabled) {
      return; 
    }

    onSubmit(); 

  }, [disabled, onSubmit]); 

  if(!isOpen) {
    return null; 
  }

  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none bg-neutral-800/70 z-50">
      <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
        <div className="bg-white rounded-md p-5">
          <div className="flex flex-row items-center justify-between">

        <div className="text-2xl font-semibold">
          {title}
        </div>
        <div onClick={onClose}>
          <IoMdClose size={20} />

        </div>
          </div>
          {/* body  */}
          <div className="w-full">
            {body}
          </div>
          <div>
            {footer}
            <div>
              <Button 
                label={actionLabel as string}
                onClick={handleSubmit}
                
                />
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Modal