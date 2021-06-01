import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addProductStart,
  fetchProductsStart,
  deleteProductStart,
} from './../../redux/Products/products.actions'
import Modal from './../../components/Modal'
import FormInput from './../../components/forms/FormInput'
import FormSelect from './../../components/forms/FormSelect'
import Button from './../../components/forms/button'
import LoadMore from './../../components/LoadMore'
import CKEditor from 'ckeditor4-react'
import './styles.scss'

import bg from '../../assets/slide-content/1.jpg'

const mapState = ({ productsData }) => ({
  products: productsData.products,
})

const Admin = (props) => {
  const { products } = useSelector(mapState)
  const dispatch = useDispatch()
  const [hideModal, setHideModal] = useState(true)
  const [productCategory, setProductCategory] = useState('')
  const [productName, setProductName] = useState('')
  const [productThumbnail, setProductThumbnail] = useState('')
  const [productPrice, setProductPrice] = useState(0)
  const [productDesc, setProductDesc] = useState('')

  const { data, queryDoc, isLastPage } = products

  useEffect(() => {
    dispatch(fetchProductsStart())
  }, [])

  const toggleModal = () => {
    setHideModal(!hideModal)
    {
      hideModal
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'unset')
    }
  }

  const configModal = {
    hideModal,
    toggleModal,
  }

  const resetForm = () => {
    setHideModal(true)
    setProductCategory('mens')
    setProductName('')
    setProductThumbnail('')
    setProductPrice(0)
    setProductDesc('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    document.body.style.overflow = 'unset'
    dispatch(
      addProductStart({
        productCategory,
        productName,
        productThumbnail,
        productPrice,
        productDesc,
      })
    )
    resetForm()
  }

  const handleLoadMore = () => {
    dispatch(
      fetchProductsStart({
        startAfterDoc: queryDoc,
        persistProducts: data,
      })
    )
  }

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  }

  return (
    <>
      <div className="added-sucess">
        <p>
          Product Sucessfully Added <i class="fas fa-check-circle"></i>
        </p>
      </div>
      <div className="header-black-bg-admin"></div>
      <div className="admin">
        <div className="adminActions">
          <ul>
            <li>
              <Button onClick={() => toggleModal()}>Add new product</Button>
            </li>
          </ul>
        </div>

        <Modal {...configModal}>
          <div className="addNewProductForm">
            <form onSubmit={handleSubmit}>
              <h2>Add new product</h2>
              <span className="close" onClick={() => toggleModal()}>
                <i class="fas fa-times"></i>
              </span>
              <FormSelect
                label="Category"
                options={[
                  {
                    value: 'machines',
                    name: 'Machines',
                  },
                  {
                    value: 'tools',
                    name: 'Tools',
                  },
                ]}
                handleChange={(e) => setProductCategory(e.target.value)}
              />
              <FormInput
                label="Name"
                type="text"
                required
                value={productName}
                handleChange={(e) => setProductName(e.target.value)}
              />
              <FormInput
                label="Image URL"
                type="url"
                required
                value={productThumbnail}
                handleChange={(e) => setProductThumbnail(e.target.value)}
              />
              {/* <FormInput
                label="Price"
                type="number"
                min="0.00"
                required
                max="10000.00"
                step="0.01"
                value={productPrice}
                handleChange={(e) => setProductPrice(e.target.value)}
              /> */}
              <CKEditor
                onChange={(evt) => setProductDesc(evt.editor.getData())}
              />
              <br />
              <Button
                type="submit"
                onClick={() => {
                  document.querySelector('.added-sucess').style.display =
                    'block'
                  setTimeout(() => {
                    document.querySelector('.added-sucess').style.display =
                      'none'
                  }, 3000)
                }}
              >
                Add product
              </Button>
            </form>
          </div>
        </Modal>

        <div className="manageProducts">
          <table border="0" cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <th>
                  <h1>Manage Products</h1>
                </th>
              </tr>
              <tr>
                <td>
                  <table
                    className="results"
                    border="0"
                    cellPadding="10"
                    cellSpacing="0"
                  >
                    <tbody>
                      {Array.isArray(data) &&
                        data.length > 0 &&
                        data.map((product, index) => {
                          const {
                            productName,
                            productThumbnail,
                            productPrice,
                            documentID,
                          } = product

                          return (
                            <tr key={index} className="product-info">
                              <td>
                                <img className="thumb" src={productThumbnail} />
                              </td>
                              <td className="prod-name">{productName}</td>
                              {/* <td>₱{productPrice}</td> */}
                              <td>
                                <Button
                                  // onClick={() =>
                                  //   dispatch(EditProductStart(documentID))
                                  // }
                                  className="edit"
                                >
                                  Edit
                                </Button>
                              </td>
                              <td>
                                <Button
                                  onClick={() =>
                                    dispatch(deleteProductStart(documentID))
                                  }
                                  className="delete"
                                >
                                  Delete
                                </Button>
                              </td>
                            </tr>
                          )
                        })}
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td>
                  <table border="0" cellPadding="10" cellSpacing="0">
                    <tbody>
                      <tr>
                        <td>
                          {!isLastPage && (
                            <div className="seemore">
                              <LoadMore {...configLoadMore} />
                            </div>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Admin
