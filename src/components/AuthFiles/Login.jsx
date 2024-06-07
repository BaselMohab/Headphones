import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    } from "@material-tailwind/react";
import { Link } from "react-router-dom";

    const Login = () => {
    return (
            <div className="mt-32 p-10 flex justify-center">
        <Card className="sign-up p-8">
        <Typography variant="h4" className="typo">
            Log In
        </Typography>
        <Typography className="typo mt-1 font-normal">
            Welcome Back!
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" className="typo -mb-3">
                Your Email
            </Typography>
            <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 text-white focus:!border-t-gray-900"
                labelProps={{
                className: "before:content-none after:content-none",
                }}
            />
            <Typography variant="h6" className="typo -mb-3">
                Password
            </Typography>
            <Input
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 text-white focus:!border-t-gray-900"
                labelProps={{
                className: "before:content-none after:content-none",
                }}
            />
            </div>
            <Button className="sign-btn mt-6" fullWidth>
            log in
            </Button>
            <Typography color="gray" className="mt-4 text-center text-gray-400 font-normal">
            You Don't have an account?{" "}
            <Link to="/signup" className="font-medium text-white">
                Sign Up
            </Link>
            </Typography>
        </form>
        </Card>
        </div>
    )
    }

    export default Login
