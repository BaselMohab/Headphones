import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Signup = () => {
return (
    <div className="mt-32 p-10 flex justify-center">
        <Card className="sign-up p-8">
        <Typography variant="h4" className="typo">
            Sign Up
        </Typography>
        <Typography className="typo mt-1 font-normal">
            Nice to meet you! Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" className="typo -mb-3">
                Your Name
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
            <Typography variant="h6" color="blue-gray" className="typo -mb-3">
                Confirm Password
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
            <Checkbox
            label={
                <Typography
                variant="small"
                className="flex items-center font-normal text-white"
                >
                I agree the
                <a
                    href="#"
                    className="font-medium"
                >
                    &nbsp;Terms and Conditions
                </a>
                </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
            />
            <Button className="sign-btn mt-6" fullWidth>
            sign up
            </Button>
            <Typography className="mt-4 text-center font-normal text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-white">
                Sign In
            </Link>
            </Typography>
        </form>
        </Card>
        </div>
)
}

export default Signup
