import { useRouter } from 'next/router'
import { motion, AnimateSharedLayout } from "framer-motion";
import Link from 'next/link'
export default function Nav(){
    return(
        <>
            <AnimateSharedLayout>
                <div className="nav pagePading">
                    <div className='logo'>
                        <span >Platform</span><br/>
                        Designer<br/>
                        Portfolio
                    </div>
                    <div className='navItems'>
                        <NavItem text="about" pathname="/"/>
                        <NavItem  text="project" pathname="/project"/>
                    </div>
                </div>
            </AnimateSharedLayout>
        </>
    )
}
function NavItem ({text, pathname}) {
    const router = useRouter()
    return(
        <>
        <div className='navItem'>
            <Link href={{pathname: pathname}}>
                {text}
            </Link>            
            {router.pathname === pathname && <motion.span className="indicator" layoutId="indicator" ></motion.span>}
        </div>
        </>
    )
}