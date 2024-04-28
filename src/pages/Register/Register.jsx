import {
    Input,
    Checkbox,
    Button,
    Typography,
    CardHeader,
    CardFooter,
    CardBody,
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import auth from "../../Firebase/firebase.config";

const Register = () => {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    const { createAccount, updateUserInformation, user, setUser } = useContext(AuthContext)
    const [passwordError, setPAsswordError] = useState(null)

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const photoURL = e.target.photoURL.value

        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setPAsswordError('password must contain at least 6 character and contain an Uppercase and a Lowercase letter')
            return
        }

        createAccount(email, password)
            .then(result => {
                toast.success('Account created successfully')
                updateUserInformation(name, photoURL)
                    .then(() => {
                        setUser(result.user)
                        console.log(user)
                        signOut(auth)
                        navigate('/login')
                    })
                    .catch(error => {
                        console.error(error)
                    })


            })
            .catch(error => {
                console.error(error.message)
                if (error.message == 'Firebase: Error (auth/email-already-in-use).') {
                    toast.error('email already in use')
                }
            })
    }


    return (
        <div className="p-10 m-0 bg-base-200 flex items-center justify-center">
            <div className="h-[700px] bg-base-200 w-screen flex items-center justify-center">
                <form onSubmit={handleRegister} className="w-96 mx-auto">
                    <CardHeader
                        variant="gradient"
                        color="gray"
                        className="mb-4 grid h-28 place-items-center"
                    >
                        <Typography variant="h3" color="white">
                            Register Now!
                        </Typography>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4">
                        <Input name="name" required label="Your Name" type="text" size="lg" />
                        <Input name="photoURL" required label="Photo URL" type="text" size="lg" />
                        <Input name="email" required label="Your Email" type="email" size="lg" />
                        <div className="relative">
                            <Input name="password" required label="Password" type={show ? "text" : "password"} size="lg" />
                            {
                                show ?
                                    <FaRegEyeSlash onClick={() => setShow(false)} className="absolute right-4 text-xl top-[14px]"></FaRegEyeSlash>
                                    :
                                    <FaRegEye onClick={() => setShow(true)} className="absolute right-4 text-xl top-[14px]"></FaRegEye>
                            }
                        </div>
                        {
                            passwordError && <div>
                                <p className="text-red-700 text-[14px] font-bold">{passwordError}</p>
                            </div>
                        }
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Checkbox
                            label={
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="flex items-center font-normal"
                                >
                                    I agree the
                                    <p
                                        className="font-medium transition-colors hover:text-gray-900"
                                    >
                                        &nbsp;Terms and Conditions
                                    </p>
                                </Typography>
                            }
                            containerProps={{ className: "-ml-2.5" }}
                        />
                        <Button type="submit" className="mt-6" fullWidth>
                            Register
                        </Button>
                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Already have an account?{" "}
                            <Link to={'/login'} className="font-medium text-gray-900">
                                Log In
                            </Link>
                        </Typography>
                    </CardFooter>
                </form>
            </div>
        </div>
    );
};

export default Register;