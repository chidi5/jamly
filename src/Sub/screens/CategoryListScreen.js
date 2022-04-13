import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import CategoryModal from '../partials/CategoryModal';
import ScreenContainer from './ScreenContainer';
import { listCategory } from '../../actions/product'
import ActionDropdown from '../partials/ActionDropdown';

function CategoryListScreen() {

  const dispatch = useDispatch()
  const navigate = useNavigate ()

  const [open, setOpen] = useState(false)

  const categoryList = useSelector(state => state.categoryList)
  const { loading, error, category} = categoryList

  const categoryCreate = useSelector(state => state.categoryCreate)
  const { loading: loadingCreate, error: errorCreate, success: successCreate, category: createdCategory } = categoryCreate

  const categoryUpdate = useSelector(state => state.categoryUpdate)
  const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = categoryUpdate

  const categoryDelete = useSelector(state => state.categoryDelete)
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = categoryDelete

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (!userInfo.user_details.is_merchant) {
        //history.push('/login')
        //console.log('push to login')
        window.location.assign(`${window.location.protocol}//joshuaigbokwe.shop/store_login`)
    }else{
      const id = userInfo.store_details._id
      dispatch(listCategory(id))
    }
    if (successCreate) {
      alert("Category created succesfully!")
    }

  }, [userInfo, successCreate, successDelete])


  const createCategory = () => {
    console.log("create")
  }

  return (
    <ScreenContainer>
        <div className='border-0 shadow-md flex flex-col relative rounded-md break-words min-w-0 pt-5 bg-white'>
          <div className='flex flex-wrap justify-between py-0 px-9 bg-transparent gap-2 border-b-0 items-center md:gap-5'>
            {/* card title */}
            <div className='flex items-center m-2 ml-0 font-bold text-sm text-gray-600'>
              <div className='flex relative my-1 items-center'>
                <span className='absolute ml-4 leading-4'>
                  <svg className="w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-current text-gray-500" d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                    <path className="fill-current text-gray-400" d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                  </svg>
                </span>
                <input type="text" className='bg-gray-100 border-gray-100 w-64 px-4 font-medium text-base border-solid rounded-lg appearance-none pl-14 focus:ring-transparent focus:border-transparent' placeholder="Search Category" />
              </div>
            </div>
            {/* card toolbar */}
            <div className='grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end mr-0 text-gray-600'>
              {/* Add view button */}
              <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg" onClick={() => setOpen(!open)}>
                <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span className="xs:block ml-2">Add Category</span>
              </button>
              <CategoryModal store_id={userInfo ? userInfo.store_details._id : null} open={open} setOpen={setOpen} />
            </div>
          </div>
          <div className='py-8 px-9 pt-0 mt-16 pb-20 flex-auto overflow-x-auto'>
            <div>
              <div className='relative'>
                <table className='w-full m-0'>
                  <thead>
                    <tr className='text-left text-gray-400 uppercase text-xs font-semibold border-dashed border-b border-gray-100 last:pr-0 first:pl-0'>
                      <th className='min-w-[90px] w-[90.5px]'>ID</th>
                      <th className='min-w-[250px] w-[637px]'>Category</th>
                      <th className='text-right min-w-[100px] w-[108.5px] pr-3 md:pr-0'>Status</th>
                      <th className='text-right min-w-[100px] w-[108.5px] pr-3 md:pr-0'>Action</th>
                    </tr>
                  </thead>
                  <tbody className='font-medium text-gray-600'>
                    {category.map(cat => (
                    <tr key={cat._id} className='border-dashed border-b border-gray-100 last:pr-0 first:pl-0'>
                      <td className='py-5'>
                        <Link to={`/admin/category/${cat._id}/edit`} onClick={() => setOpen(!open)} className='text-gray-800 hover:text-blue-500 font-semibold text-sm'>{cat._id}</Link>
                      </td>
                      <td>
                        <div>
                          <Link to={`/admin/category/${cat._id}/edit`} onClick={() => setOpen(!open)} className='text-gray-800 hover:text-blue-500 font-semibold text-base'>{cat.name}</Link>
                          <div className="text-gray-500 font-semibold text-sm">{cat.description}</div>
                        </div>
                      </td>
                      <td className='text-right pr-3 md:pr-0'>
                        <div className="py-1 px-2 inline-block align-baseline rounded-lg bg-green-100 text-green-600 cursor-pointer whitespace-nowrap text-xs text-center"> Published </div>
                      </td>
                      <td className='text-right pr-3 md:pr-0'>
                        <ActionDropdown item={cat} open={open} setOpen={setOpen} />
                      </td>
                    </tr>
                    ))}
                  </tbody>                  
                </table>
              </div>
            </div>
          </div>
        </div>
    </ScreenContainer>
  )
}

export default CategoryListScreen;
