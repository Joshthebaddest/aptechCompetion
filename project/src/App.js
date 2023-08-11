import './App.css';
import { useState, useEffect } from 'react'
import Product from './product';

function App() {

  const [products, setProducts] = useState(null);

  useEffect(()=>{
      fetch('http://localhost:8000/plants')
        .then((res)=> {
          if(res.ok){
            return res.clone().json()
          }
        })
        .then(data=>{
          setProducts(data);
        })
        .catch(err => {
          console.log(err)
        });
  }, [])

  return (
    <div className="App">
      <h1>my app</h1>
      {products && <Product Products={products} />}
    </div>
  );
}

export default App;
