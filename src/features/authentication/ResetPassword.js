import React, { useState } from "react";
import Formfield from '../components/ui/formfield';
import DashboadLayout from "../components/Layour/DashboadLayout";


const ResetPassword = () => {
    return (
        <DashboadLayout
        childrens={
<section className="bg-white">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                <h1 className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                    IOE-APP
                </h1>
                <div className="w-full bg-white-900 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-gray-900">
                            Reset Password
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                           <Formfield title={" Current Password"} name={"password"} id={"password"} type={"password"} placeholder={"**********"} className={"text-white"}/>
                           <Formfield title={" New Password"} name={"password"} id={"password"} type={"password"} placeholder={"**********"}/>
                           <Formfield title={" Confirm Password"} name={"password"} id={"password"} type={"password"} placeholder={"**********"}/>
                            <button type="submit" className="w-full text-white bg-gray-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Reset Password</button>
                           
                        </form>
                    </div>
                </div>
            </div>
        </section>
        }/>
    )
}

export default ResetPassword;