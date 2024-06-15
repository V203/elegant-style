import { auth, signOut } from 'auth';
import Image from "next/image"

const SignOutButton = async () => {
    let session = await auth()
    
    return (
        <form action={async () => {
            "use server"
           await  signOut();
        }}>

            <button  type="submit">

                <Image className="mr-1" src={session?.user?.image as string} alt="img" width={30} height={30} />
            </button>
        </form>       
    );
}
export default SignOutButton;

