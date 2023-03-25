import './App.css'
import data from "./data";

function App() {
  

  return (
    <div>
      <div className="container">
        <div className='row'></div>
          <div className="col-md-8">
            {/* seccion de productos */}
            <h2 className='text-center mt-4 mb-5'>Mis Productos</h2>
              <div className='row row-cols-1 row-cols-md-5 g-4'>
                {
                  data.products.map(product=>(
                    <div key={product.id}>
                      <img src={product.image} height={150} width="100%" />
                      <h4>{product.name}</h4>
                      <h5>${product.precio}</h5>
                      <button className='btn btn-primary'>AGREGAR</button>
                    </div>
                  ))
                }
              </div>
          </div>
          <div className="col-md-4">
            {/* seccion de orden de compra */}
          </div>
      </div>
      <footer className='bg-dark p-3 mt-5'>
        <p className='text-center text-white'>TENGO todos los derechos reservados, CRACK</p>
      </footer>
    </div>
  )
}

export default App
