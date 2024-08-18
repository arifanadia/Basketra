import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import basketra from "../../assets/logo/Basketra.png";
import { useState } from "react";
import useAuth from "@/Hooks/useAuth";
import { toast } from "sonner";
import useAxios from "@/Hooks/useAxios";
import { LOGIN_ROUTE } from "@/utils/constant";

const Login = () => {
    const { login,signInWithGoogle } = useAuth();
    const [formData, setFormData] = useState({
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

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { email, password } = formData;
            
           await login(email, password);

           const { data } = await axiosPublic.post(LOGIN_ROUTE, {email, password});
           console.log(data);
            toast.success("Logged in successfully");
            navigate('/');
        } catch (err) {
            console.error("Login error:", err);
            toast.error("Login failed. Please try again.");
        }
    };

    const handleGoogleLogin = () => {
       signInWithGoogle()
       .then((result) =>{
        console.log(result);
        navigate('/')
        toast.success('google login successfully')
     })
    }

    return (
        <section className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
            <Link to={"/"} className="flex items-center justify-center gap-4 mb-6">
                <img
                    src={basketra}
                    alt="Basketra logo"
                    className="size-16 mx-auto mb-4"
                />
                <h1 className="text-3xl text-[#074161] font-serif font-bold">Basketra</h1>
            </Link>

            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-xl">Login</CardTitle>
                    <CardDescription>
                        Enter your credentials to access your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin}>
                        <div className="grid gap-4">
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
                                Login
                            </Button>
                            <Button onClick={handleGoogleLogin} variant="outline" className="w-full">
                                Login with Google
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Don't have an account?{" "}
                            <Link to={"/register"} className="underline">
                                Sign up
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </section>
    );
};

export default Login;
