import { useState } from "react";
import { Form, Link, useSearchParams } from "react-router-dom";

function AuthForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "signup";

  const submitHandler = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);

    // Check if onSubmit is a valid function before calling it
    if (onSubmit && typeof onSubmit === "function") {
      try {
        await onSubmit({ email, password }); 
      } catch (err) {
        setError(err.message || "Authentication failed. Please try again.");
      } finally {
        setIsSubmitting(false); 
      }
    } else {
      setIsSubmitting(false);
      setError("Form submission error. onSubmit is not defined.");
    }
  };

  return (
    <Form
      onSubmit={submitHandler}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg"
    >
      <h1 className="text-2xl font-semibold mb-4 text-center">
        {!isLogin ? "Log in" : "Create a new user"}
      </h1>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex justify-between items-center">
        <Link
          to={`?mode=${isLogin ?  "login" : "signup" }`}
          className="text-blue-500 hover:underline text-sm"
        >
          {isLogin ? "Login" : "Create new user" }
        </Link>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-300"
        >
          {isSubmitting ? "Submitting..." : "Save"}
        </button>
      </div>
    </Form>
  );
}

export default AuthForm;
