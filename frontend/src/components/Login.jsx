import { MdEmail } from "react-icons/md";
import { PiPasswordFill } from "react-icons/pi";
const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-[100vh]">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center mb-4">Login</h2>
          <div>
            <label className="input mb-3">
              <MdEmail />
              <input type="email" placeholder="Email" required />
            </label>
            <label className="input mb-3">
              <PiPasswordFill />
              <input type="password" placeholder="Password" required />
            </label>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Login</button>
          </div>
          <div className="error"></div>
        </div>
      </div>
    </div>
  );
};
export default Login;
