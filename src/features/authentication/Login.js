import React from "react";
import Formfield from "../../components/ui/inputfield";
import { useLoginMutation } from "../../redux-toolkit/apiSlices/auth";
import { loginUser } from "../../redux-toolkit/slices/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [login, { isError, error }] = useLoginMutation();
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(user);
      if (response.data.value) {
        dispatch(loginUser({ token: response.data.value }));
        toast.success("Login Successful");
      }
    } catch (e) {
      toast.error("Login Failed");
    }
    navigate("/");
  };

  return (
    <section className="bg-primary">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-white"
        >
          IOE-APP
        </a>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-primary">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <Formfield
                title={"Username"}
                name={"username"}
                id={"username"}
                type={"text"}
                placeholder={"username"}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
              <Formfield
                title={"Password"}
                name={"password"}
                id={"password"}
                type={"password"}
                placeholder={"**********"}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              {Boolean(isError) && (
                <p className="text-red-500 font-medium text-sm text-center">
                  {error?.data?.error}
                </p>
              )}

              <button
                type="submit"
                className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
