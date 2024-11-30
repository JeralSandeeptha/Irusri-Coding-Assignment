import axios from 'axios';
import { RegisterUserFunctionProps } from '../../types/functions';
import { baseURL } from '../baseURL';

const baseurl = baseURL;

const registerUser = (props: RegisterUserFunctionProps) => {
    try {
        props.setIsLoading(true);
        setTimeout(() => {
            axios.post(`${baseurl}/users`, {
                name: `${props.values.firstName} ${props.values.lastName}`,
                email: props.values.email,
                password: props.values.password
            })
                .then((res) => {
                    console.log(res);
                    props.setIsLoading(false);
                    props.setIsSuccess(true);
                    setTimeout(() => {
                        props.setIsSuccess(false);
                    }, 3000);
                })
                .catch((error) => {
                    console.log(error);
                    props.setIsLoading(false);
                    props.setIsError(true);
                    setTimeout(() => {
                        props.setIsError(false);
                    }, 3000);
                });
        }, 5000);
    } catch (error) {
        console.log(error);
        props.setIsLoading(false);
        props.setIsError(true);
        setTimeout(() => {
            props.setIsError(false);
        }, 3000);
    }
}

export default registerUser;