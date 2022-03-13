
import { useRouter } from "next/router";
export const useLink = () => {
    const router = useRouter();
    let name;
    const getLink = (e)=>{
        e.preventDefault();
        name = e.target.name === null ? null : e.target.name;  
        router.push(`${name}`);
    }
    return {getLink}
}