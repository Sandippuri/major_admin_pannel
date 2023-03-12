import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import cn from "classnames";

const Modal = ({
  isOpen,
  closeModal,
  title = "title",
  children,
  className = "max-w-1800px",
}) => {
  return (
    <>
      <Transition appear show={isOpen}>
        <Dialog className="relative z-10" onClose={() => {}}>
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={cn(
                    className,
                    "w-full transform overflow-hidden rounded-[15px] text-left align-middle shadow-xl transition-all bg-white"
                  )}
                >
                  <div className="px-[26px] py-[15px] flex items-center justify-between gap-x-2 bg-primary">
                    <h3 className="typography-3 text-white">{title}</h3>
                    <button onClick={closeModal} className=" text-white px-2">
                      X
                    </button>
                  </div>

                  <div className="py-[27px] px-[31px]">{children}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
