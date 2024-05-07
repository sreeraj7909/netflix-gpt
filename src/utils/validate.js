 export const checkValidateData=(email,Password)=>{
    const isEmailvalid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordvalid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password)
    // const isNameValid=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)
    if(!isEmailvalid) return "Email is not valid"
    if(!isPasswordvalid) return "Password is not valid"
    // if(!isNameValid) return "Name is not proper"

    return null;

}