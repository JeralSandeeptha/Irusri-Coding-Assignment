import axios from "axios";
import { baseURL } from "../baseURL";
import { GetAllProductsFunctionProps } from "../../types/functions";

const baseurl = baseURL;

const getAllProducts = async (props: GetAllProductsFunctionProps) => {
    try {
        await axios.get(`${baseurl}/products`)
            .then((res) => {
                console.log(res.data);
                props.setProducts(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    } catch (error) {
        console.log(error);
    }
}

export default getAllProducts;