import { Link } from "react-router-dom";
import PublicIcon from "@mui/icons-material/Public";
import { useState } from 'react'
import '../App.css'
import { Box, Button } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
function PRODUCTS() {
    const [products, setProducts] = useState<any>([]); 
    const getData = () => {
      axios
          .get("https://fakestoreapi.com/products")
          .then((res) => {
              console.log(res.data, "data received");
              setProducts(res.data);
          })
          .catch((err) => {
              console.log(err, "Error");
          });
  };
    return (
      <Box className='text-center'>
      <div className="all-products">
          <h1>All Products</h1>
          <Button className="mt-5 me-5"
          onClick={getData}
          sx={{ margin: 1, textTransform: "capitalize" }}
          endIcon={<PublicIcon />}
          variant="contained"
      >
          Get products
      </Button>
          <div className="products-div">
            {products.map((item:any,i:any) => {
              console.log(item)
              return (
                <div key={i} className="products">
                    <Link to={'/SINGLEPRODUCT'}><img className='first-img' src={item.image} /></Link>
                  <div className="show-bottom">
                    <div className="trolley">
                      <div className="colors">
                        <div className="color1"></div>
                        <div className="color2"></div>
                        <div className="color3"></div>
                        <div className="color4"></div>
                      </div>
                    </div>
                    <h6>{item.category}</h6>
                    <p>{item.title}</p>
          <p>Rating:{item.rating.rate}</p>
          <p>Sold:{item.rating.count}</p>
                      <span>price: ${item.price}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        </Box>
    )
  }
  
  export default PRODUCTS;
  