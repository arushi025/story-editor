import { useNavigate } from "react-router-dom";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Mood Selection",
      desc: "Choose from 5 different moods to match your content",
    },
    {
      title: "Song Recommendations",
      desc: "Get curated song suggestions for your selected mood",
    },
    {
      title: "Smart Captions",
      desc: "AI-powered captions in multiple languages",
    },
    {
      title: "Story Ready",
      desc: "Export your story ready for Instagram upload",
    },
  ];

  const moods = [
    { label: "Happy", color: "from-neutral-800/60 to-neutral-950/80 border-neutral-700/70" },
    { label: "Sad", color: "from-neutral-800/60 to-neutral-950/80 border-neutral-700/70" },
    { label: "Excited", color: "from-neutral-800/60 to-neutral-950/80 border-neutral-700/70" },
    { label: "Romantic", color: "from-neutral-800/60 to-neutral-950/80 border-neutral-700/70" },
    { label: "Chill", color: "from-neutral-800/60 to-neutral-950/80 border-neutral-700/70" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />

        {/* Subtle glow effects */}
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm text-muted-foreground mb-6">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span>Professional Story Creator</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Create Professional
            <span className="text-primary block">Instagram Stories</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Select your mood, upload your photo, and get perfect song and caption suggestions in seconds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/create")}
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 justify-center hover:bg-primary/90 transition-all"
            >
              <Sparkles className="w-5 h-5" />
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate("/how-it-works")}
              className="glass-card px-8 py-4 rounded-lg font-semibold text-foreground flex items-center gap-2 justify-center hover:border-primary/40 transition-all"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Mood preview */}
      <section className="py-16 container">
        <p className="text-center text-muted-foreground mb-8 font-medium">Select Your Mood</p>
        <div className="flex flex-wrap justify-center gap-4">
          {moods.map((mood) => (
            <div
              key={mood.label}
              onClick={() => navigate("/create")}
              className={`glass-card bg-gradient-to-br ${mood.color} border px-6 py-4 rounded-xl cursor-pointer hover:scale-105 transition-all duration-200 text-center`}
            >
              <span className="text-sm font-semibold text-foreground tracking-wide uppercase">{mood.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-3">
          Everything You Need
        </h2>
        <p className="text-muted-foreground text-center mb-12">All-in-one solution for Instagram story creation</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="glass-card rounded-xl p-6 card-shadow hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="font-display text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 container text-center">
        <div className="glass-card rounded-2xl p-12 relative overflow-hidden max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-primary/5" />
          <div className="relative z-10">
            <h2 className="font-display text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Create your first professional Instagram story in minutes.
            </p>
            <button
              onClick={() => navigate("/create")}
              className="bg-primary text-white px-10 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-3 hover:bg-primary/90 transition-all"
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
