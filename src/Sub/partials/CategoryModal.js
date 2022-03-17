/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from 'react'
import { useParams } from 'react-router'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { createCategory, updateCategory } from '../../actions/product'

export default function CategoryModal({
    store_id,
    open,
    setOpen
}) {


    const { id } = useParams();
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate ()

    const cancelButtonRef = useRef(null)
    
    const isAddMode = !id

    const submitHandler = (e) => {
        e.preventDefault()
        if(isAddMode) {
            dispatch(createCategory(name, description, store_id))
        }else{
            dispatch(updateCategory({id, name, description}));
            navigate('/admin/category')
            window.location.reload(false);
        }
    }

    return (
        <div className="relative inline-flex xl:ml-3">
            <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed z-60 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
                <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                {/* This element is to trick the browser into centering the modal contents. */}
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                    &#8203;
                </span>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <form onSubmit={submitHandler}>
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className='relative mb-5'>
                                    <label className='mb-2 text-sm font-medium text-gray-900'>
                                        Category Name
                                        <span className='relative font-medium text-pink-600 pl-1'>*</span>
                                    </label>
                                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required className="block border rounded-md border-gray-300 focus:rounded-md focus:outline-0 focus:border-gray-300 focus:ring-0 text-sm text-gray-500 font-medium px-4 w-full my-2" placeholder="category"/>
                                    <div className="text-gray-400 text-[0.8rem]">A category name is required</div>
                                </div>
                                <div>
                                    <label className='mb-2 text-sm font-medium text-gray-900'>
                                        Description
                                        <span className='relative font-medium text-pink-600 pl-1'>*</span>
                                    </label>
                                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={5} cols={60} name="category_description" className="block border rounded-md border-gray-300 focus:rounded-md focus:outline-0 focus:border-gray-300 focus:ring-0 text-sm text-gray-500 font-medium px-4 w-full my-2" placeholder="Enter details here..."/>
                                    <div className="text-gray-400 text-[0.8rem]">Set a description to the category for better visibility.</div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                type="submit"
                                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-0 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={() => setOpen(!open)}
                                >
                                Submit
                                </button>
                                <button
                                type="button"
                                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-0 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={() => setOpen(!open)}
                                ref={cancelButtonRef}
                                >
                                Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </Transition.Child>
                </div>
            </Dialog>
            </Transition.Root>
        </div>
    )
}
