import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useFormik } from "formik";
import signupSchema from "../schemas/signup";
import { BarsLoader } from "../components/BarsLoader";

export default function Signup() {
    const { register, authLoading } = useAuth()
    const { values, handleChange, handleSubmit, touched, errors } = useFormik({
        initialValues: {
            email: "",
            password: "",
            firstname: "",
            lastname: "",
            country: "",
            phone: "",
            cpassword: ""
        },
        validationSchema: signupSchema,
        onSubmit: (values, action) => {
            const payload = {
                firstname: values.firstname,
                lastname: values.lastname,
                email: values.email,
                password: values.password,
                country: values.country,
                phone: values.phone,
                cpassword: values.cpassword
            }
            register(payload)
        }
    })
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-4 py-20">
            <div className="w-full max-w-lg p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10">
                <h1 className="text-3xl font-semibold text-center mb-6">Create Account</h1>
                <p className="text-center text-slate-300 mb-8">
                    Join us today — it only takes a few minutes
                </p>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-200 mb-1">
                                First Name
                            </label>
                            <input
                                type="text"
                                placeholder="John"
                                className="w-full px-4 py-2 bg-white/10 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-400"
                                value={values.firstname}
                                onChange={handleChange('firstname')}
                            />
                            {
                                touched.firstname && errors.firstname && (
                                    <div className="text-red-500 mt-1">{errors.firstname}</div>
                                )
                            }
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-200 mb-1">
                                Last Name
                            </label>
                            <input
                                type="text"
                                placeholder="Doe"
                                className="w-full px-4 py-2 bg-white/10 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-400"
                                value={values.lastname}
                                onChange={handleChange('lastname')}
                            />
                            {
                                touched.lastname && errors.lastname && (
                                    <div className="text-red-500 mt-1">{errors.lastname}</div>
                                )
                            }
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-200 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 bg-white/10 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-400"
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
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            placeholder="+234 801 234 5678"
                            className="w-full px-4 py-2 bg-white/10 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-400"
                            value={values.phone}
                            onChange={handleChange('phone')}
                        />
                        {
                            touched.phone && errors.phone && (
                                <div className="text-red-500 mt-1">{errors.phone}</div>
                            )
                        }
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-200 mb-1">
                            Country
                        </label>
                        <input
                            type="text"
                            placeholder="Nigeria"
                            className="w-full px-4 py-2 bg-white/10 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-400"
                            value={values.country}
                            onChange={handleChange('country')}
                        />
                        {
                            touched.country && errors.country && (
                                <div className="text-red-500 mt-1">{errors.country}</div>
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
                            className="w-full px-4 py-2 bg-white/10 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-400"
                            value={values.password}
                            onChange={handleChange('password')}
                        />
                        {
                            touched.password && errors.password && (
                                <div className="text-red-500 mt-1">{errors.password}</div>
                            )
                        }
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-200 mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-2 bg-white/10 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-400"
                            value={values.cpassword}
                            onChange={handleChange('cpassword')}
                        />
                        {
                            touched.cpassword && errors.cpassword && (
                                <div className="text-red-500 mt-1">{errors.cpassword}</div>
                            )
                        }
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-500 transition-colors py-2 rounded-lg font-semibold shadow-lg"
                    >
                        {authLoading ? <BarsLoader /> : 'Create Account'}
                    </button>
                </form>

                <p className="text-center text-sm text-slate-400 mt-6">
                    Already have an account?{" "}
                    <Link to={'/auth/login'} className="text-indigo-400 hover:underline">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}
