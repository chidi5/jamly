import React, { Fragment, useState } from 'react'
import { useParams } from 'react-router'
import Message from '../../Home/components/Message';
import Loader from '../components/Loader';
import SelectMenu from '../partials/SelectMenu';
import ScreenContainer from './ScreenContainer';
import { PencilIcon, XIcon } from '@heroicons/react/solid'

function ProductEdit() {

    const [tags, setTags] = useState([{name: 'color', values:[{value: 'white', variation_count: 0}]}]);
    console.log(tags)
    //const [inputList, setInputList] = useState([{name: '', values: [{}]}]);

    const people = [
        {
          name: 'Wade Cooper',
        },
        {
          name: 'Arlene Mccoy',
        },
        {
          name: 'Devon Webb',
        },
        {
          name: 'Tom Cook',
        },
    ]
    const status = [
        {
          name: 'Published',
        },
        {
          name: 'Draft',
        },
    ]

    const { id } = useParams();

    const addTag = (e) => {
        if (e.key === ",") {
            if (e.target.value.length > 0) {
                const items = e.target.value.replace(/,/g, '').split("-")
                console.log(items)
                setTags([...tags, {value:items[0], variation_count:items[1]}]);
                e.target.value = "";
            }
        }
    };

    const removeTag = (removedTag) => {
        const newTags = tags.filter((tag) => tag.value !== removedTag);
        setTags(newTags);
    };

    return (
        <ScreenContainer>
            <form className='w-full'>
                <div className="grid grid-cols-12 gap-7 xl:gap-10">
                    <div className="flex flex-col col-span-12 xl:col-span-4 mb-7 xl:mr-1 gap-7 xl:gap-10">
                        {/* First Card */}
                        <div className="relative shadow-md bg-white rounded-md border-transparent py-4 px-6">
                            {/* Card Header */}
                            <div className='flex flex-wrap justify-between py-0 bg-transparent gap-2 border-b-0 items-center md:gap-5'>
                                {/* card title */}
                                <div className='flex items-center m-2 ml-0 font-semibold text-xl leading-8 text-gray-800'>
                                    <h2>Thumbnail</h2>
                                </div>
                            </div>
                            { /* card body */}
                            <div className='pt-0 py-8 mt-4 text-center flex-auto'>
                                <div className='relative inline-block bg-cover rounded-lg bg-no-repeat mb-3' style={{backgroundImage: `url("https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/files/blank-image.svg")`}}>
                                    <div className='border-3 border-solid border-white shadow-xl bg-cover rounded-lg bg-no-repeat h-40 w-40'></div>
                                    <label className='w-6 h-6 cursor-pointer rounded-full left-full top-0 border-gray-50 border absolute -translate-x-1/2 -translate-y-1/2 shadow inline-flex items-center justify-center p-0 outline-0'>
                                        <PencilIcon className='h-4 w-4 text-gray-400' aria-hidden="true" />
                                        <input type="file" name="avatar" accept=".png, .jpg, .jpeg" className='w-0 h-0 overflow-hidden opacity-0  appearance-none' />
                                        <input type="hidden" name="avatar_remove" />
                                    </label>
                                    <span className='bg-white w-6 h-6 cursor-pointer rounded-full left-full top-full border-gray-50 border absolute -translate-x-1/2 -translate-y-1/2 shadow inline-flex items-center justify-center p-0 outline-0'>
                                        <XIcon className='h-4 w-4 text-gray-400' aria-hidden='true'/>
                                    </span>
                                </div>
                                <div className="text-gray-400 text-[0.8rem]">Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image files are accepted</div>
                            </div>
                        </div>

                        {/* Second Card */}
                        <div className="relative shadow-md bg-white rounded-md border-transparent py-4 px-6">
                            {/* Card Header */}
                            <div className='flex flex-wrap justify-between py-0 bg-transparent gap-2 border-b-0 items-center md:gap-5'>
                                {/* card title */}
                                <div className='flex items-center m-2 ml-0 font-semibold text-xl leading-8 text-gray-800'>
                                    <h2>Status</h2>
                                </div>
                                {/* card toolbar */}
                                <div className="flex items-center flex-wrap my-2 mx-0">
									<div className="rounded-full w-4 h-4 bg-green-400"></div>
								</div>
                            </div>
                            { /* card body */}
                            <div className='pt-0 py-8 mt-4 flex-auto'>
                                <SelectMenu items={status} />
                                <div className="text-gray-400 text-[0.8rem] pt-3">Set the product status</div>
                            </div>
                        </div>

                        {/* Third Card */}
                        <div className="relative shadow-md bg-white rounded-md border-transparent py-4 px-6">
                            {/* Card Header */}
                            <div className='flex flex-wrap justify-between py-0 bg-transparent gap-2 border-b-0 items-center md:gap-5'>
                                {/* card title */}
                                <div className='flex items-center m-2 ml-0 font-semibold text-xl leading-8 text-gray-800'>
                                    <h2>Product Category</h2>
                                </div>
                            </div>
                            { /* card body */}
                            <div className='pt-0 py-8 mt-4 flex-auto'>
                                <SelectMenu items={people} />
                                <div className="text-gray-400 text-[0.8rem] py-3">Add product to a category</div>
                                <button className="btn bg-indigo-100 hover:bg-indigo-600 hover:text-white text-indigo-500 rounded-lg text-xs">
                                    <svg className="w-3 h-3 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                                        <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                                    </svg>
                                    <span className="ml-2">Create new category</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col col-span-12 xl:col-span-8 gap-7 xl:gap-10'>
                        {/* First Card */}
                        <div className="relative shadow-md bg-white rounded-md border-transparent py-4 px-6">
                            {/* Card Header */}
                            <div className='flex flex-wrap justify-between py-0 bg-transparent gap-2 border-b-0 items-center md:gap-5'>
                                {/* card title */}
                                <div className='flex items-center m-2 ml-0 font-semibold text-xl leading-8 text-gray-800'>
                                    <h2>General</h2>
                                </div>
                            </div>
                            { /* card body */}
                            <div className='pt-0 py-8 mt-4 flex-auto'>
                                <div className='relative mb-10'>
                                    <label className='mb-2 text-sm font-medium text-gray-900'>
                                        Product Name
                                        <span className='relative font-medium text-pink-600 pl-1'>*</span>
                                    </label>
                                    <input type="text" name="product_name" className="block border rounded-md border-gray-300 focus:rounded-md focus:outline-0 focus:border-gray-300 focus:ring-0 text-sm text-gray-500 font-medium px-4 w-full my-2" placeholder="Product name"/>
                                    <div className="text-gray-400 text-[0.8rem]">A product name is required</div>
                                </div>
                                <div>
                                    <label className='mb-2 text-sm font-medium text-gray-900'>
                                        Description
                                        <span className='relative font-medium text-pink-600 pl-1'>*</span>
                                    </label>
                                    <textarea rows={5} cols={60} name="product_description" className="block border rounded-md border-gray-300 focus:rounded-md focus:outline-0 focus:border-gray-300 focus:ring-0 text-sm text-gray-500 font-medium px-4 w-full my-2" placeholder="Enter details here..."/>
                                    <div className="text-gray-400 text-[0.8rem]">Set a description to the product for better visibility.</div>
                                </div>
                            </div>
                        </div>
                        {/* Second Card */}
                        <div className="relative shadow-md bg-white rounded-md border-transparent py-4 px-6">
                            {/* Card Header */}
                            <div className='flex flex-wrap justify-between py-0 bg-transparent gap-2 border-b-0 items-center md:gap-5'>
                                {/* card title */}
                                <div className='flex items-center m-2 ml-0 font-semibold text-xl leading-8 text-gray-800'>
                                    <h2>Pricing</h2>
                                </div>
                            </div>
                            { /* card body */}
                            <div className='pt-0 py-8 mt-4 flex-auto'>
                                <div className="grid grid-cols-12 xl:gap-5">
                                    <div className='flex flex-col col-span-12 xl:col-span-6'>
                                        <div className='relative'>
                                            <label className='mb-2 text-sm font-medium text-gray-900'>
                                                Basic Price
                                                <span className='relative font-medium text-pink-600 pl-1'>*</span>
                                            </label>
                                            <input type="number" name="product_name" className="block border rounded-md border-gray-300 focus:rounded-md focus:outline-0 focus:border-gray-300 focus:ring-0 text-sm text-gray-500 font-medium px-4 w-full my-2" placeholder="Product Price"/>
                                            <div className="text-gray-400 text-[0.8rem]">Set product price</div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col col-span-12 xl:col-span-6'>
                                        <div className='relative'>
                                            <label className='mb-2 text-sm font-medium text-gray-900'>
                                                Compare Price
                                            </label>
                                            <input type="number" name="product_name" className="block border rounded-md border-gray-300 focus:rounded-md focus:outline-0 focus:border-gray-300 focus:ring-0 text-sm text-gray-500 font-medium px-4 w-full my-2" placeholder="Product Price"/>
                                            <div className="text-gray-400 text-[0.8rem]">Set product price</div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col col-span-12 xl:col-span-6'>
                                        <div className='relative mb-10'>
                                            <label className='mb-2 text-sm font-medium text-gray-900'>
                                                Quantity
                                                <span className='relative font-medium text-pink-600 pl-1'>*</span>
                                            </label>
                                            <input type="number" name="product_name" className="block border rounded-md border-gray-300 focus:rounded-md focus:outline-0 focus:border-gray-300 focus:ring-0 text-sm text-gray-500 font-medium px-4 w-full my-2" placeholder="Product Quantity"/>
                                            <div className="text-gray-400 text-[0.8rem]">Set product quantity</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Third Card */}
                        <div className="relative shadow-md bg-white rounded-md border-transparent py-4 px-6">
                            {/* Card Header */}
                            <div className='flex flex-wrap justify-between py-0 bg-transparent gap-2 border-b-0 items-center md:gap-5'>
                                {/* card title */}
                                <div className='flex items-center m-2 ml-0 font-semibold text-xl leading-8 text-gray-800'>
                                    <h2>Variation</h2>
                                </div>
                            </div>
                            { /* card body */}
                            <div className='pt-0 py-8 mt-4 flex-auto'>
                                <div className='relative mb-10'>
                                    <label className='mb-2 text-sm font-medium text-gray-900'>
                                        Product Name
                                        <span className='relative font-medium text-pink-600 pl-1'>*</span>
                                    </label>
                                    <div>
                                        <div>
                                            <div className='flex flex-col gap-3'>
                                                <div className='flex flex-wrap gap-5'>
                                                    {tags.map((tag, index) => (
                                                    <Fragment key={index}><input value={tag.name} type="text" name="product_name" className=" max-w-full w-[200px] border rounded-md border-gray-300 focus:rounded-md focus:outline-0 focus:border-gray-300 focus:ring-0 text-sm text-gray-500 font-medium px-4 my-2" placeholder="Product name" />
                                                        <div className="flex flex-wrap min-w-[200px] max-w-[250px] border rounded-md border-gray-300 px-2 my-2">
                                                            {tag.values.map((t, i) => (
                                                            <div key={i} className='flex border-0 outline-0 rounded-md bg-gray-700 text-sm text-white font-medium px-1 py-[0.15rem] my-[0.45rem] mr-0 ml-1 items-center'>
                                                                {t.value ? t.value + '-' + t.variation_count : '0'}
                                                                <span className='ml-2 cursor-pointer' onClick={() => removeTag(tag.value)}>
                                                                    <XIcon className='w-3 h-3' />
                                                                </span>
                                                            </div>
                                                            ))}
                                                            <input className='px-4 w-[100px] outline-0 border-0 flex-1 text-gray-500 text-sm' onKeyUp={addTag} />
                                                        </div></Fragment>
                                                    ))}
                                                    <button className="btn my-2 bg-red-100 hover:bg-red-600 hover:text-white text-red-500 rounded-lg text-xs">
                                                        <XIcon className='w-4 h-4' />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mt-5'>
                                            <button className="btn bg-indigo-100 hover:bg-indigo-600 hover:text-white text-indigo-500 rounded-lg text-xs">
                                                <svg className="w-3 h-3 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                                                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                                                </svg>
                                                <span className="ml-2">Add another variation</span>
                                            </button>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </ScreenContainer>
    )
}

export default ProductEdit
