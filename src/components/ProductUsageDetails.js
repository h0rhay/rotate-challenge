import React from 'react'

const ProductUsageDetails = ({ products }) => {
  return (
    <section className='product-detail'>
      {products && products.map(product => {
        return (
          <React.Fragment key={`${product.id}-pud`}>
            <div className="text-group text-group-primary">
              <h2>{product.usage}</h2>
              <p></p>
            </div>
            <div className="text-group">
              <p className='bold'>Dosage</p>
              <p>{product.dosage}</p>
            </div>
            <div className="text-group">
              <p className='bold'>Texture</p>
              <p>{product.texture}</p>
            </div>
            <div className="text-group">
              <p className='bold'>Aroma</p>
              <p>{product.aroma}</p>
            </div>
          </React.Fragment>
        )
      })}
    </section>
  )
}

export default ProductUsageDetails
