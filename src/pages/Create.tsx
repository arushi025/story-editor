import { useState, useRef } from "react";
import { Sparkles, Upload, Music, Copy, Download, Check, ChevronRight, RefreshCw } from "lucide-react";
import Navbar from "@/components/Navbar";

const MOODS = [
  { label: "Happy", color: "from-neutral-800/60 to-neutral-950/80 border-neutral-700/80", glow: "shadow-neutral-900/40" },
  { label: "Sad", color: "from-neutral-800/60 to-neutral-950/80 border-neutral-700/80", glow: "shadow-neutral-900/40" },
  { label: "Excited", color: "from-neutral-800/60 to-neutral-950/80 border-neutral-700/80", glow: "shadow-neutral-900/40" },
  { label: "Romantic", color: "from-neutral-800/60 to-neutral-950/80 border-neutral-700/80", glow: "shadow-neutral-900/40" },
  { label: "Chill", color: "from-neutral-800/60 to-neutral-950/80 border-neutral-700/80", glow: "shadow-neutral-900/40" },
];

const SUGGESTIONS: Record<string, { songs: string[]; captions: string[] }> = {
  Happy: {
    songs: [
      "Kala Chashma – Baar Baar Dekho",
      "Dil Dhadakne Do – Zindagi Na Milegi Dobara",
      "Good 4 U – Olivia Rodrigo",
      "Levitating – Dua Lipa",
      "Kesariya – Brahmastra",
    ],
    captions: [
      "Khushi ho toh show karo! #HappyVibes",
      "Life is better when you're laughing #GoodTimes",
      "Main apni favourite hoon #SelfLove #Happy",
      "Smile toh banta hai! #Happiness #Vibes",
      "Chhoti chhoti khushiyaan, badi badi yaadein #Blessed",
    ],
  },
  Sad: {
    songs: [
      "Tere Bina – Guru",
      "Agar Tum Saath Ho – Tamasha",
      "Drivers License – Olivia Rodrigo",
      "Channa Mereya – Ae Dil Hai Mushkil",
      "Fix You – Coldplay",
    ],
    captions: [
      "Kuch baatein dil mein hi rehti hain #Feelings",
      "Aankhon mein teri, ajab si ajab si adaayein hain",
      "Sometimes silence speaks the loudest #Sad",
      "Waqt sab theek kar deta hai... eventually",
      "Dard bhi ek ehsaas hai #EmotionalVibes",
    ],
  },
  Excited: {
    songs: [
      "Badtameez Dil – Yeh Jawaani Hai Deewani",
      "Can't Stop the Feeling – Justin Timberlake",
      "Dynamite – BTS",
      "Gallan Goodiyaan – Dil Dhadakne Do",
      "Amplifier – Imran Khan",
    ],
    captions: [
      "LET'S GOOOO! #Excited #Vibes",
      "Main ready hoon! Aur tum? #HypeMode",
      "Energy level: 100% #ExcitedAF",
      "Celebrations loading… #Party #Fun",
      "Yeh moment toh yaad rahega! #Unforgettable",
    ],
  },
  Romantic: {
    songs: [
      "Tum Hi Ho – Aashiqui 2",
      "Raataan Lambiyan – Shershaah",
      "Perfect – Ed Sheeran",
      "Ik Vaari Aa – Raabta",
      "Pehla Nasha – Jo Jeeta Wohi Sikandar",
    ],
    captions: [
      "Tum mere liye likhi gayi ek nazm ho #Love",
      "Saath ho tum toh kya chahiye aur #Romance",
      "You are my favorite notification #Cute",
      "Dil ne dil ko dhoonda hai #TrueLove",
      "With you, every moment is a beautiful story",
    ],
  },
  Chill: {
    songs: [
      "Iktara – Wake Up Sid",
      "Lazy Sunday – Ritviz",
      "Blinding Lights – The Weeknd",
      "Summertime Sadness – Lana Del Rey",
      "Lag Ja Gale – Rekha",
    ],
    captions: [
      "Slow down, sab theek hai #ChillVibes",
      "Good vibes only #Chill #Relax",
      "Not all those who wander are lost #Peace",
      "Weekend mood activated #NoStress",
      "Life mein thoda pause bhi zaroori hai #Chill",
    ],
  },
};

const Create = () => {
  const [step, setStep] = useState(1);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [selectedSong, setSelectedSong] = useState<string | null>(null);
  const [selectedCaption, setSelectedCaption] = useState<string | null>(null);
  const [copiedCaption, setCopiedCaption] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPhoto(url);
    }
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setStep(3);
    }, 1800);
  };

  const handleCopyCaption = () => {
    if (selectedCaption) {
      navigator.clipboard.writeText(selectedCaption);
      setCopiedCaption(true);
      setTimeout(() => setCopiedCaption(false), 2000);
    }
  };

  const suggestions = selectedMood ? SUGGESTIONS[selectedMood] : null;

  const steps = ["Mood", "Photo", "Generate", "Preview"];

  return (
    <div className="min-h-screen pt-20 pb-24 md:pb-8">
      <Navbar />
      <div className="container max-w-3xl mx-auto px-4 py-8">
        {/* Steps indicator */}
        <div className="flex items-center justify-between mb-10">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center flex-1">
              <div className={`flex flex-col items-center ${i < steps.length - 1 ? "flex-1" : ""}`}>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    step > i + 1
                      ? "bg-primary text-white"
                      : step === i + 1
                      ? "bg-primary text-white"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step > i + 1 ? <Check className="w-4 h-4" /> : i + 1}
                </div>
                <span className={`text-xs mt-1 font-medium ${step === i + 1 ? "text-primary" : "text-muted-foreground"}`}>
                  {s}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className={`flex-1 h-px mx-2 mb-4 transition-all duration-300 ${step > i + 1 ? "bg-primary" : "bg-border"}`} />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Mood */}
        {step === 1 && (
          <div className="animate-fade-up">
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl font-bold mb-2">Select Your Mood</h2>
              <p className="text-muted-foreground">Choose your mood and we'll handle the rest</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {MOODS.map((mood) => (
                <button
                  key={mood.label}
                  onClick={() => setSelectedMood(mood.label)}
                  className={`glass-card bg-gradient-to-br ${mood.color} border p-6 rounded-xl flex flex-col items-center gap-3 transition-all duration-200 hover:scale-105 ${
                    selectedMood === mood.label ? `ring-2 ring-primary scale-105 shadow-lg ${mood.glow}` : ""
                  }`}
                >
                  <span className="font-semibold text-foreground text-lg">{mood.label}</span>
                </button>
              ))}
            </div>
            {selectedMood && (
              <div className="mt-8 text-center animate-fade-up">
                <p className="text-muted-foreground mb-4">
                  Great choice! <strong className="gradient-text">{selectedMood}</strong> mood selected
                </p>
                <button
                  onClick={() => setStep(2)}
                  className="bg-primary text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto hover:bg-primary/90 transition-all"
                >
                  Next: Add Photo <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Step 2: Photo */}
        {step === 2 && (
          <div className="animate-fade-up">
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl font-bold mb-2">Apni photo add karo</h2>
              <p className="text-muted-foreground">Woh photo jo tum Instagram pe lagana chahte ho</p>
            </div>

            <div
              onClick={() => fileRef.current?.click()}
              className={`glass-card rounded-2xl border-2 border-dashed border-border hover:border-primary/50 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center p-12 min-h-64 ${
                photo ? "border-primary/50" : ""
              }`}
            >
              {photo ? (
                <div className="text-center">
                  <img src={photo} alt="Uploaded" className="max-h-64 rounded-xl mx-auto object-cover mb-4" />
                  <p className="text-sm text-muted-foreground">Click to change photo</p>
                </div>
              ) : (
                <>
                  <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-4 animate-float">
                    <Upload className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-foreground font-semibold mb-1">Photo yahan drop karo</p>
                  <p className="text-muted-foreground text-sm">Ya click karo choose karne ke liye</p>
                  <p className="text-muted-foreground text-xs mt-2">JPG, PNG, WEBP supported</p>
                </>
              )}
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => setStep(1)}
                className="flex-1 glass-card py-3 rounded-xl font-semibold hover:border-border/80 transition-all"
              >
                Back
              </button>
              <button
                onClick={handleGenerate}
                disabled={!photo || isGenerating}
                className="flex-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 justify-center hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-1"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Generating magic...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Generate!
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Suggestions */}
        {step === 3 && suggestions && (
          <div className="animate-fade-up">
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl font-bold mb-2">
                Your <span className="gradient-text">{selectedMood}</span> Vibes
              </h2>
              <p className="text-muted-foreground">Song aur caption chunao</p>
            </div>

            <div className="space-y-6">
              {/* Songs */}
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Music className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-lg font-bold">Perfect Songs</h3>
                </div>
                <div className="space-y-2">
                  {suggestions.songs.map((song) => (
                    <button
                      key={song}
                      onClick={() => setSelectedSong(song)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 text-sm font-medium ${
                        selectedSong === song
                          ? "bg-primary text-white"
                          : "bg-muted hover:bg-muted/80 text-foreground"
                      }`}
                    >
                      {song}
                    </button>
                  ))}
                </div>
              </div>

              {/* Captions */}
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="font-display text-lg font-bold">Caption Options</h3>
                </div>
                <div className="space-y-2">
                  {suggestions.captions.map((caption) => (
                    <button
                      key={caption}
                      onClick={() => setSelectedCaption(caption)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 text-sm ${
                        selectedCaption === caption
                          ? "bg-primary text-white font-medium"
                          : "bg-muted hover:bg-muted/80 text-foreground"
                      }`}
                    >
                      {caption}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button onClick={() => setStep(2)} className="flex-1 glass-card py-3 rounded-xl font-semibold transition-all">
                Back
              </button>
              <button
                onClick={() => setStep(4)}
                disabled={!selectedSong || !selectedCaption}
                className="flex-1 bg-primary text-white py-3 rounded-lg font-semibold flex items-center gap-2 justify-center hover:bg-primary/90 transition-all disabled:opacity-50"
              >
                <Sparkles className="w-4 h-4" />
                Preview Story
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Preview */}
        {step === 4 && (
          <div className="animate-fade-up">
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl font-bold mb-2">
                Story <span className="gradient-text">Ready!</span>
              </h2>
              <p className="text-muted-foreground">Yeh rahi teri Instagram-ready story</p>
            </div>

            <div className="max-w-sm mx-auto">
              {/* Instagram story frame */}
              <div className="relative rounded-3xl overflow-hidden aspect-[9/16] bg-card border border-border/50">
                {photo && (
                  <img src={photo} alt="Story" className="absolute inset-0 w-full h-full object-cover" />
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* Top bar mock */}
                <div className="absolute top-4 left-4 right-4">
                  <div className="w-full h-1 bg-white/30 rounded-full mb-3">
                    <div className="h-full w-2/3 gradient-bg rounded-full" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white text-xs font-semibold">Story Editor</span>
                  </div>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  {selectedSong && (
                    <div className="glass-card rounded-xl px-3 py-2 mb-3 flex items-center gap-2">
                      <Music className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-white text-xs font-medium truncate">{selectedSong}</span>
                    </div>
                  )}
                  {selectedCaption && (
                    <p className="text-white text-sm font-medium leading-relaxed">{selectedCaption}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <button
                onClick={handleCopyCaption}
                className="glass-card py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:border-primary/40 transition-all"
              >
                {copiedCaption ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                {copiedCaption ? "Copied!" : "Copy Caption"}
              </button>
              <button className="bg-primary text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all">
                <Download className="w-4 h-4" />
                Save Story
              </button>
            </div>

            <button
              onClick={() => {
                setStep(1);
                setSelectedMood(null);
                setPhoto(null);
                setSelectedSong(null);
                setSelectedCaption(null);
              }}
              className="w-full mt-4 glass-card py-3 rounded-xl font-semibold flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-all"
            >
              <RefreshCw className="w-4 h-4" />
              Start Over
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Create;
