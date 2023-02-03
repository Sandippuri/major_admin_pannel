import React from 'react';
import Formfield from '../../components/ui/formfield';

const ForgotPassword = () => {
    return (
        <section className="bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-white">
                    IOE-APP
                </a>
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-gray-900">
                            Forgot Password
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                           <Formfield title={"Email"} name={"email"} id={"email"} type={"text"} placeholder={"Enter your recovery email "}/>
                           
                            
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ForgotPassword;