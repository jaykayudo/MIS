import "./authcover.css";

const AuthCover = ({children}) => {
    return (
        <div className="authcover">
            <div className="form-box">
                {children}
            </div>
        </div>
     );
}
 
export default AuthCover;