import axios from 'axios';
import { LoginUserFunctionProps } from '../../types/functions';
import { baseURL } from '../baseURL';

const loginUser = async (props: LoginUserFunctionProps) => {
    const { email, password } = props.values; // Assuming credentials are passed via props
    try {
        props.setIsLoading(true);

        // Fetch all users from the API
        const res = await axios.get(`${baseURL}/users`);
        if (res.status === 200) {
            const users = res.data;

            // Find the user with the matching email
            const findUser = users.find((user: any) => user.email === email);

            if (!findUser) {
                alert('User not found. Please try again later.');
            } else {
                // Check if the password matches
                if (findUser.password === password) {
                    props.setIsSuccess(true);
                    setTimeout(() => {
                        props.setIsSuccess(false);
                    }, 3000);
                    alert('Login successful!');
                    props.handleLogIn();
                    props.handleCreateCart();
                    props.navigate('/');
                } else {
                    alert('Password is incorrect. Please try again.');
                }
            }
        }
    } catch (error) {
        console.log(error);
        alert('Database is not configured or an error occurred.');
        props.setIsError(true);
        setTimeout(() => {
            props.setIsError(false);
        }, 3000);
    } finally {
        props.setIsLoading(false);
        props.setIsError(true);
        setTimeout(() => {
            props.setIsError(false);
        }, 3000);
    }
};

export default loginUser;
