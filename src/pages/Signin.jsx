import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import siginSchema from "../schemas/signin";
import { useAuth } from "../contexts/AuthContext";
import { BarsLoader } from "../components/BarsLoader";

export default function Signin() {
    const { login, authLoading } = useAuth()
    const { values, handleChange, handleSubmit, touched, errors } = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: siginSchema,
        onSubmit: (values, action) => {
            login(values.email, values.password)
        }
    })
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            <div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10">
                <h1 className="text-3xl font-semibold text-center mb-6">Welcome Back</h1>
                <p className="text-center text-slate-300 mb-8">
                    Sign in to your account
                </p>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-slate-200 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-4 bg-white/10 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-400"
                            value={values.email}
                            onChange={handleChange('email')}
                        />
                        {
                            touched.email && errors.email && (
                                <div className="text-red-500 mt-1">{errors.email}</div>
                            )
                        }
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-200 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-4 bg-white/10 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-400"
                            value={values.password}
                            onChange={handleChange('password')}
                        />
                        {
                            touched.password && errors.password && (
                                <div className="text-red-500 mt-1">{errors.password}</div>
                            )
                        }
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center text-sm text-slate-300">
                            <input
                                type="checkbox"
                                className="mr-2 accent-indigo-500"
                            />
                            Remember me
                        </label>
                        <Link to={'/auth/forgot-password'} className="text-sm text-indigo-400 hover:underline">
                            Forgot password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-500 transition-colors py-4 rounded-lg font-semibold shadow-lg"
                    >
                        {authLoading ? <BarsLoader/> : 'Sign In'}
                    </button>
                </form>

                <p className="text-center text-sm text-slate-400 mt-6">
                    Don’t have an account?{" "}
                    <Link to={'/auth/register'} className="text-indigo-400 hover:underline">
                        Create one
                    </Link>
                </p>
            </div>
        </div>
    );
}
