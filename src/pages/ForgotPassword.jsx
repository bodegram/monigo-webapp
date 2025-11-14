import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useFormik } from "formik";
import forgotPasswordSchema from "../schemas/forgotPassword";

export default function ForgotPassword() {
    const { resetPassword, authLoading } = useAuth()
    const { values, handleChange, handleSubmit, touched, errors } = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: forgotPasswordSchema,
        onSubmit: (values, action) => {
            resetPassword(values.email)
        }
    })
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-4">
            <div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10">
                <h1 className="text-3xl font-semibold text-center mb-4">
                    Forgot Password
                </h1>
                <p className="text-center text-slate-300 mb-8 text-sm">
                    Enter your email address below and we’ll send you a link to reset your password.
                </p>

                <form className="space-y-5" onSubmit={handleSubmit}>
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

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-500 transition-colors py-2 rounded-lg font-semibold shadow-lg"
                    >
                        Send Reset Link
                    </button>
                </form>

                <p className="text-center text-sm text-slate-400 mt-6">
                    Remember your password?{" "}
                    <Link to={'/auth/register'} className="text-indigo-400 hover:underline">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}
