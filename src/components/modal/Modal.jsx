import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PropTypes from "prop-types";

const Modal = ({
  name,
  address,
  pincode,
  phoneNumber,
  setName,
  setAddress,
  setPincode,
  setPhoneNumber,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const buyNow = () => {
    // This is just a placeholder. You should replace it with your actual logic.

    // Example: Log a message to the console
    console.log(
      `Buying now! Details - Name: ${name}, Address: ${address}, Pincode: ${pincode}, Phone: ${phoneNumber}`
    );

    // Example: Display an alert
    alert(`Purchase successful! Thank you, ${name}!`);

    // Example: Reset the form fields
    setName("");
    setAddress("");
    setPincode("");
    setPhoneNumber("");
  };

  return (
    <>
      <div className="text-center rounded-lg text-white font-bold">
        <button
          type="button"
          onClick={openModal}
          className="w-full bg-violet-600 py-2 text-center rounded-lg text-white font-bold"
        >
          Buy Now
        </button>
      </div>

      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={React.Fragment}
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
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl p-2 text-left align-middle shadow-xl transition-all bg-blue-300">
                  <section className="">
                    <div className="flex flex-col items-center justify-center py-8 mx-auto lg:py-0">
                      <div className="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                          <form className="space-y-4 md:space-y-6" action="#">
                            <div className="grid grid-cols-1 gap-6">
                              <label className="block text-sm font-medium text-gray-700">
                                Name
                              </label>
                              <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="border p-2 rounded-md focus:outline-none focus:ring focus:border-violet-300"
                                placeholder="Enter your name"
                              />
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                              <label className="block text-sm font-medium text-gray-700">
                                Address
                              </label>
                              <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="border p-2 rounded-md focus:outline-none focus:ring focus:border-violet-300"
                                placeholder="Enter your address"
                              />
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                              <label className="block text-sm font-medium text-gray-700">
                                Pincode
                              </label>
                              <input
                                type="number"
                                value={pincode}
                                onChange={(e) => setPincode(e.target.value)}
                                className="border p-2 rounded-md focus:outline-none focus:ring focus:border-violet-300"
                                placeholder="enter your pincode"
                              />
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                              <label className="block text-sm font-medium text-gray-700">
                                Phone Number
                              </label>
                              <input
                                type="tel"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="border p-2 rounded-md focus:outline-none focus:ring focus:border-violet-300"
                                placeholder="enter your phone number"
                              />
                            </div>
                          </form>
                          <button
                            onClick={() => {
                              buyNow();
                              closeModal();
                            }}
                            type="button"
                            className="focus:outline-none w-full text-white bg-blue-600 hover:bg-blue-800 outline-0 font-medium rounded-lg text-sm px-5 py-2.5"
                          >
                            Order Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

Modal.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  pincode: PropTypes.number.isRequired,
  phoneNumber: PropTypes.number.isRequired,
  setName: PropTypes.func.isRequired,
  setAddress: PropTypes.func.isRequired,
  setPincode: PropTypes.func.isRequired,
  setPhoneNumber: PropTypes.func.isRequired,
};

export default Modal;
