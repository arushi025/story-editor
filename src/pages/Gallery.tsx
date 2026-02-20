import { useState } from "react";
import { Download, Trash2, Music, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router-dom";

const SAMPLE_POSTS = [
  {
    id: 1,
    mood: "Happy",
    song: "Kala Chashma – Baar Baar Dekho",
    caption: "Khushi ho toh show karo! #HappyVibes",
    color: "from-neutral-800/60 to-neutral-950/80",
    date: "Feb 19, 2026",
    liked: true,
  },
  {
    id: 2,
    mood: "Romantic",
    song: "Raataan Lambiyan – Shershaah",
    caption: "Tum mere liye likhi gayi ek nazm ho #Love",
    color: "from-neutral-800/60 to-neutral-950/80",
    date: "Feb 18, 2026",
    liked: false,
  },
  {
    id: 3,
    mood: "Excited",
    song: "Dynamite – BTS",
    caption: "LET'S GOOOO! #Excited #Vibes",
    color: "from-neutral-800/60 to-neutral-950/80",
    date: "Feb 17, 2026",
    liked: true,
  },
  {
    id: 4,
    mood: "Chill",
    song: "Iktara – Wake Up Sid",
    caption: "Slow down, sab theek hai #ChillVibes",
    color: "from-neutral-800/60 to-neutral-950/80",
    date: "Feb 15, 2026",
    liked: false,
  },
];

const Gallery = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState(SAMPLE_POSTS);
  const [likedPosts, setLikedPosts] = useState<number[]>(
    SAMPLE_POSTS.filter((p) => p.liked).map((p) => p.id)
  );

  const toggleLike = (id: number) => {
    setLikedPosts((prev) =>
      prev.includes(id) ? prev.filter((lid) => lid !== id) : [...prev, id]
    );
  };

  const deletePost = (id: number) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen pt-20 pb-24 md:pb-8">
      <Navbar />
      <div className="container max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="font-display text-4xl font-bold">
              My <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-muted-foreground mt-1">Tumhari saved stories aur posts</p>
          </div>
          <button
            onClick={() => navigate("/create")}
            className="gradient-bg text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-all animate-pulse-glow"
          >
            + Create New
          </button>
        </div>

        {posts.length === 0 ? (
          <div className="glass-card rounded-2xl p-16 text-center">
            <h3 className="font-display text-2xl font-bold mb-2">Abhi kuch nahi hai</h3>
            <p className="text-muted-foreground mb-6">Pehli story create karo!</p>
            <button
              onClick={() => navigate("/create")}
              className="gradient-bg text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-all"
            >
              Create Story
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {posts.map((post, i) => (
              <div
                key={post.id}
                className={`glass-card bg-gradient-to-br ${post.color} border rounded-2xl overflow-hidden animate-fade-up hover:scale-[1.02] transition-all duration-200`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Mock story frame */}
                <div className="relative aspect-video bg-gradient-to-br from-card to-muted flex items-center justify-center">
                  <span className="text-lg font-semibold text-foreground">{post.mood} Mood</span>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                    <div className="flex items-center gap-2">
                      <Music className="w-3 h-3 text-white" />
                      <span className="text-white text-xs truncate">{post.song}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-primary">{post.mood} Mood</span>
                    <span className="text-xs text-muted-foreground ml-auto">{post.date}</span>
                  </div>
                  <p className="text-sm text-foreground mb-4 leading-relaxed">{post.caption}</p>

                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-all ${
                        likedPosts.includes(post.id)
                          ? "bg-foreground/10 text-foreground border border-foreground/40"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${likedPosts.includes(post.id) ? "fill-current" : ""}`} />
                      Save
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm bg-muted text-muted-foreground hover:bg-muted/80 transition-all">
                      <Download className="w-3.5 h-3.5" />
                      Download
                    </button>
                    <button
                      onClick={() => deletePost(post.id)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm bg-destructive/10 text-destructive hover:bg-destructive/20 transition-all ml-auto"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
