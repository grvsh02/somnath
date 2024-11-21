import React, {useEffect} from 'react';
import {useState} from "react";
import {
    Button,
    Card,
    CardFooter,
    CardHeader,
    CardBody,
    Typography,
    Input,
    Checkbox,
    Radio, Alert
} from "@material-tailwind/react";
import {ApiService} from "@/lib/common/services/api.services";
import { useRouter } from "next/router";
import {isResponseValid} from "@/lib/common/utils/response";
import LoginElementBlueBottom from '../../../public/login-element-blue-bottom.png';
import LoginElementBlueTop from '../../../public/login-element-blue-top.png';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [timeOfDay, setTimeOfDay] = useState("");
    const [message, setMessage] = useState("");
    const [image, setImage] = useState("");
    const [error, setError] = useState(false);
    const Router = useRouter();


    const handleSignIn = async () => {
        const response = await ApiService.postForm("login/", {
            username: username,
            password: password
        })
        console.log(response)
        if (isResponseValid(response)){
            await Router.push("/dashboard")
        } else {
            setError(true)
        }
    }

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour >= 6 && hour < 12) {
            setTimeOfDay("Morning");
            setMessage("Let's get you day started and get some work done!")
            setImage("https://images.unsplash.com/photo-1497321697169-1ca9f1c8a253?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80")
        } else if (hour >= 12 && hour < 18) {
            setTimeOfDay("Afternoon");
            setMessage("Breaks are important, take a break and get back to work!")
            setImage("https://images.unsplash.com/photo-1535477904881-7dfea0fb80c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")
        } else {
            setTimeOfDay("Evening");
            setMessage("Let's call it a day and get some rest!")
            setImage("https://images.unsplash.com/photo-1561915573-b78892da34b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")
        }
    }, []);


    return (
        <div className="flex w-full">
            <div className="w-1/2 h-full bg-indigo-500 flex flex-col relative ">
                <img src={LoginElementBlueBottom.src} alt="G" className='absolute bottom-0 right-0'/>
                    <div className="flex flex-col h-full justify-center items-center">
                        <div className="my-10">
                            <Typography variant="h1" className="text-gray-200">Good {timeOfDay} !</Typography>
                        </div>
                        <Typography variant="paragraph" className="text-gray-200 font-semibold">{message}</Typography>
                    </div>
                <img src={LoginElementBlueTop.src} alt="G" className='absolute top-0 left-0'/>
                {/*<img src={ShowDatasetScreenshot.src} alt="G" className='absolute -bottom-14 -right-10'/>*/}
            </div>

            <div className="flex justify-center items-center w-1/2">
                <Card className="w-3/5">
                    <CardBody className="flex flex-col gap-8">
                        <div className="flex">
                            <div className="border bg-indigo-50 w-40 border-[#5F6EF1] rounded-lg mr-10">
                                <Radio id="employee" name="type" label="Employee" color="indigo" className="text-indigo-500" checked/>
                            </div>
                            <div className="border bg-indigo-50 w-40 border-[#5F6EF1] rounded-lg">
                                <Radio id="admin" name="type" label="Admin" color="indigo" className="text-indigo-500" disabled />
                            </div>
                        </div>
                        {error && (
                            <Alert color="red">Incorrect username or password</Alert>
                        )}
                        <Input label="Username" size="lg" color="indigo" value={username} onChange={e => setUsername(e.currentTarget.value)}/>
                        <Input label="Password" size="lg" color="indigo" type="password" value={password} onChange={e => setPassword(e.currentTarget.value)}/>
                        <div className="-ml-2.5">
                            <Checkbox label="Remember Me" />
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button variant="gradient" fullWidth color="indigo" onClick={() => handleSignIn()}>
                            Sign In
                        </Button>
                        <Typography variant="small" className="mt-6 flex justify-center">
                            Dont have an account?
                            <Typography
                                as="a"
                                href="#signup"
                                variant="small"
                                color="indigo"
                                className="ml-1 font-bold"
                            >
                                Sign up
                            </Typography>
                        </Typography>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default Login;