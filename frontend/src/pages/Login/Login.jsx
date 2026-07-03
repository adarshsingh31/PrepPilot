import React, { useState } from "react";
import { loginUser } from "../../services/authService";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout";
import AuthCard from "../../components/AuthCard";
import AuthInput from "../../components/AuthInput";
import PasswordInput from "../../components/PasswordInput";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrors({});

    if (!validate()) return;

    setLoading(true);

    try {
      const response = await loginUser({
        email,
        password,
      });

      // Save JWT Token
      localStorage.setItem("token", response.token);

      // Save User Details
      localStorage.setItem("user", JSON.stringify(response.user));
      // Show success message
      setSuccessMessage(response.message);

      setLoading(false);

      // Redirect to Dashboard
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (err) {
      setLoading(false);

      setErrors({
        form:
          err.response?.data?.message ||
          "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <AuthLayout>
      <AuthCard>
        {successMessage ? (
          <div className="space-y-4 py-8 text-center animate-pulse">
            <div className="inline-flex items-center justify-center p-3 bg-tertiary/10 rounded-full text-tertiary mb-2">
              <span
                className="material-symbols-outlined text-[36px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
            </div>
            <h3 className="text-2xl font-bold text-on-surface">Success</h3>
            <p className="text-base text-on-surface-variant">
              {successMessage}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4 transition-all"
            id="loginForm"
          >
            {errors.form && (
              <div className="p-4 bg-error-container/30 border border-error/30 rounded-lg text-error text-sm flex items-start gap-2">
                <span className="material-symbols-outlined text-[20px] shrink-0">
                  warning
                </span>
                <span>{errors.form}</span>
              </div>
            )}

            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-[0.18em]">
                Secure access
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-on-surface">
                  Welcome back.
                </h2>
                <p className="text-base text-on-surface-variant">
                  Sign in to continue your interview preparation.
                </p>
              </div>
            </div>

            <AuthInput
              label="Email Address"
              type="email"
              name="email"
              id="loginEmail"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
              autoComplete="email"
            />

            <PasswordInput
              label="Password"
              name="password"
              id="loginPass"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
              autoComplete="current-password"
            />

            <div className="flex items-center justify-between text-base select-none">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-outline-variant bg-surface-container-low text-primary focus:ring-0 focus:ring-offset-0 cursor-pointer w-4 h-4"
                />
                <span className="text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                  Remember me
                </span>
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-primary hover:underline transition-all"
              >
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 mt-2 bg-primary text-on-primary font-bold text-lg rounded-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-on-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                "Sign in"
              )}
            </button>

            <div className="flex items-center gap-3 text-on-surface-variant text-xs font-semibold uppercase tracking-[0.2em] my-4">
              <span className="h-px flex-1 bg-outline-variant/40"></span>
              <span>or continue with</span>
              <span className="h-px flex-1 bg-outline-variant/40"></span>
            </div>

            <button
              type="button"
              className="w-full py-3.5 rounded-lg border border-outline-variant/40 bg-surface-container-low text-on-surface font-semibold transition-all hover:border-primary/40 hover:bg-surface-container"
            >
              <span className="inline-flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[20px]">
                  mail
                </span>
                Continue with Google
              </span>
            </button>

            <p className="text-center text-base text-on-surface-variant mt-4">
              New to PrepPilot?{" "}
              <Link
                to="/signup"
                className="text-primary font-semibold hover:underline"
              >
                Create an account
              </Link>
            </p>
          </form>
        )}
      </AuthCard>
    </AuthLayout>
  );
};

export default Login;
