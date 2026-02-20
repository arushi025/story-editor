import { Sparkles, Music, Camera, Wand2, Download, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const HowItWorks = () => {
  const navigate = useNavigate();

  const steps = [
    {
      number: "01",
      icon: "🎭",
      title: "Apna Mood Choose Karo",
      desc: "Happy, Sad, Excited, Romantic, ya Chill — jo bhi feel ho raha hai, woh chunao. Hamara system tumhare mood ke hisaab se sab tayyar karta hai.",
      color: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
    },
    {
      number: "02",
      icon: "📸",
      title: "Photo Upload Karo",
      desc: "Woh photo add karo jo tumhara Instagram story ya post mein lagani hai. JPG, PNG, WEBP — sab formats supported hain.",
      color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
    },
    {
      number: "03",
      icon: "✨",
      title: "Magic Generate Karo",
      desc: "Hamara system tumhare mood aur photo ke hisaab se trending songs aur perfect captions suggest karta hai — Hindi, English, Hinglish mein!",
      color: "from-pink-500/20 to-red-500/20 border-pink-500/30",
    },
    {
      number: "04",
      icon: "🚀",
      title: "Post & Share Karo",
      desc: "Apni pasand ka song aur caption chunao. Story preview dekho, caption copy karo, aur seedha Instagram pe post kar do!",
      color: "from-green-500/20 to-teal-500/20 border-green-500/30",
    },
  ];

  const faqs = [
    {
      q: "Kya yeh free hai?",
      a: "Haan! VibePost bilkul free hai. Jitni chaaho utni stories banao.",
    },
    {
      q: "Kaunsi languages mein captions milti hain?",
      a: "Hindi, English, aur Hinglish — teeno mein captions available hain!",
    },
    {
      q: "Songs kaise select hote hain?",
      a: "Tumhara mood dekh ke hamara system trending Bollywood aur International songs suggest karta hai.",
    },
    {
      q: "Kya main apni photo safe hai?",
      a: "Haan, tumhari photos sirf tumhare browser mein process hoti hain. Hamara server pe kuch upload nahi hota.",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-24 md:pb-8">
      <Navbar />
      <div className="container max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Sirf 4 steps mein apni Instagram story ko amazing banao! 🔥
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6 mb-20">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`glass-card bg-gradient-to-br ${step.color} border rounded-2xl p-6 flex items-start gap-6 animate-fade-up hover:scale-[1.01] transition-all`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center font-display font-bold text-white text-lg glow-sm">
                  {step.number}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{step.icon}</span>
                  <h3 className="font-display text-xl font-bold">{step.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block w-6 h-6 text-muted-foreground/30 self-center" />
              )}
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold text-center mb-8">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-6 animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-primary">Q.</span> {faq.q}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed pl-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => navigate("/create")}
            className="gradient-bg text-white px-10 py-4 rounded-2xl font-bold text-lg inline-flex items-center gap-3 animate-pulse-glow hover:opacity-90 transition-all hover:scale-105"
          >
            <Sparkles className="w-5 h-5" />
            Abhi Try Karo!
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
