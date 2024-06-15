
import { signIn } from "auth"
import Image from "next/image";


const SignInButton = async () => {

    return (
   
            <form action={async () => {
               "use server"
                await signIn()
            }}>
                <button type="submit" className="text-primary-color flex justify-between p-2 gap-2 flex-row items-center border-solid border-2 border-primary-color rounded-3xl h-8 w-24">
                    
                        Sign In
                    
                    <Image alt="Shopping bag image" src={"/loginIcon.svg"} width={18} height={18} />
                </button>


            </form>
    );
}
export default SignInButton;