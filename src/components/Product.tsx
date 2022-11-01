import { useState } from 'react'
import IProduct from '../models'

interface ProductProps {
  product: IProduct
}

function Product(props: ProductProps) {
  const [details, setDetails] = useState(false)

  const btnBgClassName = details ? 'bg-blue-400' : 'bg-yellow-400'

  const btnClasses = ['py-2 px-4 border', btnBgClassName]

  const { product } = props
  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} className="w-1/6" alt={product.title} />
      <p>{product.title}</p>
      <span className="font-bold">{product.price}</span>
      <button
        className={btnClasses.join(' ')}
        onClick={() => setDetails((prev) => !prev)}
      >
        {details ? 'Hide details' : 'Show details'}
      </button>
      {details && (
        <div>
          <p>{product.description}</p>
          <p>
            Rate:{' '}
            <span style={{ fontWeight: 'bold' }}>{product.rating?.rate}</span>
          </p>
        </div>
      )}
      {/* <p>{product.description}</p> */}
    </div>
  )
}

export default Product
