/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Link, useLocation } from 'react-router-dom'
import { deleteCategory, deleteProduct } from '../../actions/product'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ActionDropdown({item, open, setOpen}) {

  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;

  const deleteHandler = (store, id) => {

    if (window.confirm('Are you sure you want to delete this product?')) {
        dispatch(deleteProduct(store, id))
    }
  }

  const deleteCat = (store, id) => {

    if (window.confirm('Are you sure you want to delete this product?')) {
        dispatch(deleteCategory(store, id))
    }
  }

  return (
    <Menu as="div" className="relative inline-block">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-lg border-0 bg-gray-100 px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-transparent">
          Actions
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-4 text-gray-600" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute -right-5 mt-2 w-[125px] rounded-md shadow-lg bg-white ring-opacity-5 focus:outline-none z-60 text-left">
          <div className="py-1">
          { pathname.includes('product') &&
            ( <Fragment>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to={`/admin/product/${item._id}/edit`}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Edit
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm border-0 focus:border-0 focus:outline-none'
                      )}
                      onClick={() => deleteHandler(item.store_id, item._id)}
                    >
                      Delete
                    </Link>
                  )}
                </Menu.Item>
              </Fragment>
            )
          }
          { pathname.includes('category') &&
            ( <Fragment>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to={`/admin/category/${item._id}/edit`}
                      onClick={() => setOpen(!open)}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Edit
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                      onClick={() => deleteCat(item.store, item._id)}
                    >
                      Delete
                    </Link>
                  )}
                </Menu.Item>
              </Fragment>
            )
          }
          { pathname.includes('order') &&
            ( <Fragment>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to={`/admin/order/${item._id}`}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      View
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Edit
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Delete
                    </a>
                  )}
                </Menu.Item>
              </Fragment>
            )
          }
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
