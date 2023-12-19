import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useForm, SubmitHandler } from "react-hook-form"

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    
    return (
        <div className="mt-12">
            <Card className="max-w-sm mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label value="Your email" />
                        </div>
                        <TextInput {...register("email", { required: true})} type="email" placeholder="Your Email"/>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label value="Your password" />
                        </div>
                        <TextInput  {...register("password", { required: true})} type="password" placeholder="Password" />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Remember me</Label>
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </Card>
        </div>
    );
};

export default Login;