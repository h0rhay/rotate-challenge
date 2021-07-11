import React from 'react'

const ProductDetails = () => {
  return (
    <section>
      <div className="text-group text-group-primary">
        <h2>Product Title</h2>
        <p>Some info about the product</p>
      </div>
      <div className="text-group">
        <p className='bold'>Product Title</p>
        <p>Some info about the product</p>
      </div>
      <div className="text-group">
        <p className='bold'>Product Title</p>
        <p>Some info about the product</p>
      </div>
      <div className="text-group">
        <p className='bold'>Product Title</p>
        <p>Some info about the product</p>
      </div>
      
      <p>Some more info about it</p>
      <form>
        <label>
          <input type="radio" name="radio" checked/>
          <span>100 ml</span>
        </label>
        <label>
          <input type="radio" name="radio" checked/>
          <span>200 ml</span>
        </label>
      </form>
      <button>BUY!</button>
    </section>
  )
}

export default ProductDetails
