import React from 'react'

const ProductDetails = ({ products }) => {
  return (
    <section className='product-detail'>
      {products && products.map(product => {
        return (
          <>
            <div className="text-group text-group-primary">
              <h2>{product.title}</h2>
              <p></p>
              <p>{product.description}</p>
            </div>
            <div className="text-group">
              <p className='bold'>Suited to</p>
              <p>{product.suits}</p>
            </div>
            <div className="text-group">
              <p className='bold'>Skin feel</p>
              <p>{product.feel}</p>
            </div>
            <div className="text-group">
              <p className='bold'>Key Ingredients</p>
              <p>{product.ingredients && product.ingredients.map(ingredient => ingredient.key)}</p>
            </div>
            <section className='checkout-section'>
              <p className='bold'>Sizes:</p>
              <form>
                <div className='radio-item'>
                  <input type="radio" name="radio" id='radItemSm' />
                  <label htmlFor='radItemSm'>100 ml</label>
                </div>
                <div className='radio-item'>
                  <input type="radio" name="radio" id='radioItemLg' />
                  <label htmlFor='radioItemLg'>200 ml</label>
                </div>
              </form>
              <button>Add to your cart &mdash;</button>
            </section>
          </>
        )
      })}
    </section>
  )
}

export default ProductDetails
