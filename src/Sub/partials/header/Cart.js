import React, { createRef, Fragment, useEffect, useRef, useState } from 'react'
import { EmojiSadIcon, XIcon } from '@heroicons/react/outline'
import { Dialog, Transition } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../../actions/cart'
import { Link } from 'react-router-dom'

function Cart({
    open,
    setOpen,
    addCart,
    qty,
    id
}) {
    
    const myRef = useRef([]);

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    if(cartItems.length !== 0){
        myRef.current = cartItems.map((element, i) => myRef.current[i] ?? createRef());
    }

    useEffect(() => {
        if(addCart) {
            if (id) {
                dispatch(addToCart(id, qty))
            }
        }

    }, [dispatch, addCart, id, qty])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const decrement= (i, product) => {
        //e.preventDefault()
        myRef.current[i].current.value--
        if(myRef.current[i].current.value < 1) {
            myRef.current[i].current.value = 1
        }
        dispatch(addToCart(product, Number(myRef.current[i].current.value)))
    }

    const increment= (i, product) => {
        //e.preventDefault()
        myRef.current[i].current.value++
        let max = myRef.current[i].current.max
        if(myRef.current[i].current.value > Number(max)) {
            myRef.current[i].current.value = Number(max)
        }
        dispatch(addToCart(product, Number(myRef.current[i].current.value)))
    }

    return (
        <div className="relative inline-flex ml-3">
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 overflow-hidden z-40" onClose={setOpen}>
                    <div className="absolute inset-0 overflow-hidden">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-in-out duration-500"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in-out duration-500"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex z-40">
                            <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                            >
                            <div className="w-screen max-w-md">
                                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                                    <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                                        <div className="flex items-start justify-between">
                                            <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                                            <div className="ml-3 h-7 flex items-center">
                                                <button
                                                type="button"
                                                className="-m-2 p-2 text-gray-400 hover:text-gray-500 focus:outline-none border-0 focus:border-0"
                                                onClick={() => setOpen(!open)}
                                                >
                                                    <span className="sr-only">Close panel</span>
                                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <div className="flow-root">
                                                {cartItems.length === 0
                                                    ?
                                                    (
                                                    <div className='flex flex-col pt-40 md:pt-36 items-center justify-center'>
                                                        <EmojiSadIcon className=' w-16 h-16 text-gray-400'/>
                                                        <p className='font-medium text-xl text-gray-400'>Cart is empty</p>
                                                    </div>
                                                    )
                                                    :
                                                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                        {cartItems.map((item, i) => (
                                                            <li key={i} className="py-6 flex">
                                                                <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                                                    <img
                                                                    src={item.image}
                                                                    alt={item.name}
                                                                    className="w-full h-full object-center object-cover"
                                                                    />
                                                                </div>

                                                                <div className="ml-4 flex-1 flex flex-col">
                                                                    <div>
                                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                                        <h3>
                                                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                                                        </h3>
                                                                        <p className="ml-4">{item.price}</p>
                                                                    </div>
                                                                    <p className="mt-1 text-sm text-gray-500">color</p>
                                                                    </div>
                                                                    <div className="flex-1 flex items-end justify-between text-sm">
                                                                        <div className="inline-flex w-40 rounded-lg relative bg-transparent mt-1 items-center">
                                                                            <p className="text-gray-500 mr-3 inline-flex">Qty</p>
                                                                            <div className='inline-flex w-1/2'>
                                                                                <button data-action="decrement" onClick={() => decrement(i, item.product)} className="bg-gray-200 text-gray-500 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                                                                    <span className="m-auto text-2xl font-thin">−</span>
                                                                                </button>
                                                                                <input
                                                                                type="number"
                                                                                className="px-0 py-1 outline-none border-0 focus:outline-none focus:border-0 focus:ring-0 text-center w-full bg-gray-200 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex text-gray-500"
                                                                                name="custom-input-number"
                                                                                min='1'
                                                                                max={item.num_products} 
                                                                                value={item.qty}
                                                                                ref={myRef.current[i]}
                                                                                onChange={(e) => dispatch(addToCart(item.product, Number(myRef.current[i].current.value)))}
                                                                                />
                                                                                <button data-action="increment" onClick={() => increment(i, item.product)} className="bg-gray-200 text-gray-500 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                                                                    <span className="m-auto text-2xl font-thin">+</span>
                                                                                </button>
                                                                            </div>
                                                                        </div>

                                                                        <div>
                                                                            <button 
                                                                            type="button" 
                                                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                            onClick={() => removeFromCartHandler(item.product)}>
                                                                                Remove
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <p>Subtotal</p>
                                            <p>&#8358;{cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</p>
                                        </div>
                                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                        <div className="mt-6">
                                            <a
                                                href="#"
                                                className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                            >
                                                Checkout
                                            </a>
                                        </div>
                                        <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                                            <p>
                                                or{' '}
                                                <button
                                                type="button"
                                                className="text-indigo-600 font-medium hover:text-indigo-500"
                                                onClick={() => setOpen(false)}
                                                >
                                                Continue Shopping<span aria-hidden="true"> &rarr;</span>
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}

export default Cart
