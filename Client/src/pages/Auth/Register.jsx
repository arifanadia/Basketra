import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import basketra from "../../assets/Basketra.png";
import { useState } from "react";
import useAuth from "@/Hooks/useAuth";
import { toast } from "sonner";
import useAxios from "@/Hooks/useAxios";
import { SIGNUP_ROUTE } from "@/utils/constant";

const Register = () => {
    const { createUser } = useAuth();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const axiosPublic = useAxios();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const { firstName, lastName, email, password } = formData;
            
     
            await createUser(email, password);

            const { data } = await axiosPublic.post(SIGNUP_ROUTE, { firstName, lastName, email, password });
            console.log(data);

            // Storing token in local storage or handling it as needed
            localStorage.setItem('jwt', data.token);

            toast.success("Account created successfully");
            navigate('/');
        } catch (err) {
            console.error("Sign-up error:", err);
            toast.error("Sign-up failed. Please try again.");
        }
    };

    return (
        <section className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
            <div className="flex items-center justify-center gap-4 mb-6">
                <img
                    src={basketra}
                    alt="Basketra logo"
                    className="size-16 mx-auto mb-4"
                />
                <h1 className="text-3xl text-[#074161] font-serif font-bold">Basketra</h1>
            </div>

            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-xl">Sign Up</CardTitle>
                    <CardDescription>
                        Enter your information to create an account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSignUp}>
                        <div className="grid gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="firstName">First name</Label>
                                    <Input
                                        id="firstName"
                                        placeholder="Arifa"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="lastName">Last name</Label>
                                    <Input
                                        id="lastName"
                                        placeholder="Nadia"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                Create an account
                            </Button>
                            <Button variant="outline" className="w-full">
                                Sign up with Google
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Already have an account?{" "}
                            <Link to={"/login"} className="underline">
                                Sign in
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </section>
    );
};

export default Register;
