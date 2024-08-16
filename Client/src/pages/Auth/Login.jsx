import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";
import basketra from "../../assets/Basketra.png"

const Login = () => {


    return (
        <section className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
            <Link to={"/"} className="flex items-center justify-center gap-4 mb-6">
                <img
                    src={basketra}
                    alt="basketra logo"
                    className="size-16 mx-auto mb-4"
                />
                <h1 className="text-3xl text-[#074161] font-serif font-bold">Basketra</h1>
            </Link >
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="m@example.com" required />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" required />
                    </div>
                    <Button className="w-full">Sign in</Button>
                    <Button variant="outline" className="w-full">
                        Login with Google
                    </Button>

                    <span className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link to={"/register"} className="underline">
                            Sign up
                        </Link>
                    </span>
                </CardContent>



            </Card>
        </section>
    )


};

export default Login;