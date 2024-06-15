import CartComponent from "@/components/CartComponent"
import { getUserCart,getUser } from "@/lib/actions/actions"


let Dev = async () => {

    let l = await getUser();
    console.log(l)

    return (<>
    <CartComponent  />
    </>)
}


export default Dev