import { LOGO_URL } from "../utils/constants";

const Header=()=>{
    return (
        <div className="absolute px-20 py-2 bg-gradient-to-b from-black z-40">
            <img className="w-48" alt="logo" src={LOGO_URL}/>
        </div>
    )
}

export default Header;
