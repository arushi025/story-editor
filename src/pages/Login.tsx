import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sparkles, Eye, EyeOff, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-secondary/20 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 w-full max-w-md px-4 animate-fade-up">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl gradient-bg mb-4 animate-pulse-glow">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
          <h1 className="font-display text-4xl font-bold gradient-text">VibePost</h1>
          <p className="text-muted-foreground mt-2">Create stories that vibe</p>
        </div>

        {/* Card */}
        <div className="glass-card rounded-2xl p-8 card-shadow">
          {/* Toggle */}
          <div className="flex rounded-xl bg-muted p-1 mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                isLogin ? "gradient-bg text-white glow-sm" : "text-muted-foreground"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                !isLogin ? "gradient-bg text-white glow-sm" : "text-muted-foreground"
              }`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="animate-fade-up">
                <label className="text-sm font-medium text-muted-foreground mb-1 block">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  required
                />
              </div>
            )}

            <div>
              <label className="text-sm font-medium text-muted-foreground mb-1 block">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-muted-foreground mb-1 block">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full bg-muted border border-border rounded-xl px-4 py-3 pr-12 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full gradient-bg text-white rounded-xl py-3 font-semibold flex items-center justify-center gap-2 animate-pulse-glow hover:opacity-90 transition-opacity mt-2"
            >
              {isLogin ? "Login" : "Create Account"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="text-center text-muted-foreground text-sm mt-4">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="gradient-text font-medium hover:opacity-80 transition-opacity"
            >
              {isLogin ? "Sign up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
