import {Box,Button } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
function SINGLEPRODUCT(){
    return(
        <Box>
        <h1>SINGLE PRODUCT PAGE</h1>
        <Link to={'/PRODUCTS'}><Button className="mt-5 me-5"
          sx={{ margin: 1, textTransform: "capitalize" }}
          endIcon={<PublicIcon />}
          variant="contained"
      >
         ALL PRODUCTS
      </Button></Link>
</Box>
    )
}
export default SINGLEPRODUCT;