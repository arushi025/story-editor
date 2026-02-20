import { useNavigate } from "react-router-dom";
import { Sparkles, Music, Type, Zap, Star, ArrowRight, Instagram } from "lucide-react";
import Navbar from "@/components/Navbar";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: "😊",
      title: "Mood Detection",
      desc: "Choose your vibe — happy, sad, excited, romantic, or chill",
    },
    {
      icon: "🎵",
      title: "Song Suggestions",
      desc: "Get perfect trending songs matched to your exact mood",
    },
    {
      icon: "✍️",
      title: "Caption Magic",
      desc: "AI-powered captions in Hindi, English & Hinglish",
    },
    {
      icon: "📸",
      title: "Story Ready",
      desc: "Download your story or post, ready to upload on Instagram",
    },
  ];

  const moods = [
    { emoji: "😊", label: "Happy", color: "from-yellow-500/20 to-orange-500/20 border-yellow-500/30" },
    { emoji: "😢", label: "Sad", color: "from-blue-500/20 to-indigo-500/20 border-blue-500/30" },
    { emoji: "🎉", label: "Excited", color: "from-pink-500/20 to-red-500/20 border-pink-500/30" },
    { emoji: "💕", label: "Romantic", color: "from-rose-500/20 to-pink-500/20 border-rose-500/30" },
    { emoji: "😎", label: "Chill", color: "from-teal-500/20 to-green-500/20 border-teal-500/30" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />

        {/* Glow orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/15 blur-3xl animate-float" />
        <div className="absolute top-40 right-10 w-72 h-72 rounded-full bg-secondary/15 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm text-muted-foreground mb-6 animate-fade-up">
            <Instagram className="w-4 h-4 text-primary" />
            <span>Instagram Story & Post Creator</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-up leading-tight" style={{ animationDelay: "0.1s" }}>
            Create Stories That
            <span className="gradient-text block">Match Your Vibe</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Apna mood choose karo, photo add karo — aur hum perfect song aur caption suggest kar denge. Instagram pe post ready in seconds! 🚀
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <button
              onClick={() => navigate("/create")}
              className="gradient-bg text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-3 justify-center animate-pulse-glow hover:opacity-90 transition-all hover:scale-105"
            >
              <Sparkles className="w-5 h-5" />
              Generate Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate("/how-it-works")}
              className="glass-card px-8 py-4 rounded-2xl font-semibold text-foreground flex items-center gap-2 justify-center hover:border-primary/40 transition-all"
            >
              How It Works
            </button>
          </div>
        </div>
      </section>

      {/* Mood preview */}
      <section className="py-16 container">
        <p className="text-center text-muted-foreground mb-8 font-medium">Apna mood chunao 👇</p>
        <div className="flex flex-wrap justify-center gap-4">
          {moods.map((mood) => (
            <div
              key={mood.label}
              onClick={() => navigate("/create")}
              className={`glass-card bg-gradient-to-br ${mood.color} border px-6 py-4 rounded-2xl cursor-pointer hover:scale-110 transition-all duration-200 text-center`}
            >
              <span className="text-3xl block mb-1">{mood.emoji}</span>
              <span className="text-sm font-medium text-foreground">{mood.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-3">
          Sab kuch <span className="gradient-text">ek jagah</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">No more searching for songs or captions separately</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="glass-card rounded-2xl p-6 card-shadow hover:border-primary/30 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="text-4xl block mb-4">{f.icon}</span>
              <h3 className="font-display text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 container text-center">
        <div className="glass-card rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{ background: "var(--gradient-primary)" }} />
          <div className="relative z-10">
            <Star className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="font-display text-4xl font-bold mb-4">
              Ready to <span className="gradient-text">Vibe?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Abhi try karo — bilkul free hai! Apni next Instagram story ko amazing banao.
            </p>
            <button
              onClick={() => navigate("/create")}
              className="gradient-bg text-white px-10 py-4 rounded-2xl font-bold text-lg inline-flex items-center gap-3 animate-pulse-glow hover:opacity-90 transition-all hover:scale-105"
            >
              <Sparkles className="w-5 h-5" />
              Start Creating
            </button>
          </div>
        </div>
      </section>

      <div className="pb-20 md:pb-0" />
    </div>
  );
};

export default Home;
