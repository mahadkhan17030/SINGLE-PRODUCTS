import { BrowserRouter,Routes, Route } from "react-router-dom";
import PRODUCTS from '../pages/PRODUCTS'
import SINGLEPRODUCT from '../pages/singleProduct'
function ROUTES(){
return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<PRODUCTS />} />
        <Route path="PRODUCTS" element={<PRODUCTS />} />
        <Route path="SINGLEPRODUCT" element={<SINGLEPRODUCT />} />
    </Routes>
    </BrowserRouter>
)
}
export default ROUTES;