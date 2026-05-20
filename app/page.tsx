"use client";

import { useState, useEffect } from "react";
import {
  Settings,
  Volume2,
  VolumeX,
  Users,
  Trophy,
  Swords,
  TreePine,
  Zap,
  Crown,
  Star,
  ChevronDown,
  Gamepad2,
  Shield,
  Hammer,
  Eye,
  UserPlus,
  LogIn,
  Target,
  Sparkles,
  Flame,
  Timer,
} from "lucide-react";

const characters = [
  { id: "bear", name: "Ayi Savasci", rarity: "Nadir", emoji: "🐻", color: "#8B4513", unlocked: true },
  { id: "fox", name: "Tilki Okcu", rarity: "Epik", emoji: "🦊", color: "#FF6B35", unlocked: true },
  { id: "wolf", name: "Kurt Avcisi", rarity: "Efsanevi", emoji: "🐺", color: "#4A5568", unlocked: true },
  { id: "owl", name: "Baykus Buyu", rarity: "Nadir", emoji: "🦉", color: "#7C3AED", unlocked: false },
  { id: "rabbit", name: "Tavsan Ninja", rarity: "Siradan", emoji: "🐰", color: "#EC4899", unlocked: true },
  { id: "deer", name: "Geyik Koruyucu", rarity: "Epik", emoji: "🦌", color: "#F59E0B", unlocked: false },
];

const leaderboardData = [
  { rank: 1, name: "bababababa", score: 10, isChampion: true },
  { rank: 2, name: "OrmanaKral", score: 8 },
  { rank: 3, name: "Tilki_44", score: 7 },
  { rank: 4, name: "AyiMaster", score: 6 },
  { rank: 5, name: "KurtAdam99", score: 5 },
];

const liveFeed = [
  { icon: "🏆", text: "OrmanaKral 948 puan aldi", color: "text-gold" },
  { icon: "💀", text: "Tilki_44 → Ayi_77 oldurdu", color: "text-red-400" },
  { icon: "🎯", text: "OkcuTilki uzaktan isabet!", color: "text-blue-400" },
  { icon: "✨", text: "KristalFox efsane silah aldi", color: "text-purple-400" },
  { icon: "🌙", text: "Gece basladi — dusmanlar gucle...", color: "text-muted-foreground" },
];

const tips = [
  "Tab tusu skorbord gosterir",
  "Shift ile hizli kosar",
  "E tusu esya toplar",
  "Q tusu beceri kullanir",
];

export default function GameLobby() {
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);
  const [playerName, setPlayerName] = useState("");
  const [selectedMode, setSelectedMode] = useState("online");
  const [selectedGameType, setSelectedGameType] = useState("classic");
  const [selectedServer, setSelectedServer] = useState("EU Avrupa #1");
  const [activeTab, setActiveTab] = useState("oyun");
  const [leaderboardTab, setLeaderboardTab] = useState("daily");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [onlinePlayers, setOnlinePlayers] = useState(1247);
  const [eventTime, setEventTime] = useState(49 * 60 + 40);
  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlinePlayers((prev) => Math.max(1000, prev + Math.floor(Math.random() * 11) - 5));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setEventTime((prev) => (prev > 0 ? prev - 1 : 49 * 60 + 40));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Efsanevi": return "text-gold";
      case "Epik": return "text-purple-400";
      case "Nadir": return "text-blue-400";
      default: return "text-muted-foreground";
    }
  };

  const getRarityStars = (rarity: string) => {
    switch (rarity) {
      case "Efsanevi": return "★★★";
      case "Epik": return "★★";
      case "Nadir": return "★";
      default: return "";
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-[10%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      {/* Header */}
      <header className="relative z-20 border-b border-border/50 bg-card/80 backdrop-blur-xl">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <TreePine className="w-10 h-10 text-primary drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
            </div>
            <h1 className="text-2xl lg:text-3xl font-black tracking-tight">
              <span className="text-primary drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]">Forest</span>
              <span className="text-accent">Brawl</span>
              <span className="text-gold">.io</span>
            </h1>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2 lg:gap-3">
            {/* Online Counter */}
            <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-secondary/80 backdrop-blur rounded-full border border-border/50">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
              <span className="text-sm font-medium">{onlinePlayers.toLocaleString()} cevrimici</span>
            </div>

            {/* Sound Toggle */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2.5 bg-secondary/80 backdrop-blur rounded-xl border border-border/50 hover:bg-primary/20 hover:border-primary/50 transition-all"
            >
              {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5 text-muted-foreground" />}
            </button>

            {/* Settings */}
            <button className="p-2.5 bg-secondary/80 backdrop-blur rounded-xl border border-border/50 hover:bg-primary/20 hover:border-primary/50 transition-all">
              <Settings className="w-5 h-5" />
            </button>

            {/* Auth */}
            <button className="hidden sm:flex items-center gap-2 px-4 py-2.5 bg-secondary hover:bg-secondary/80 rounded-xl font-semibold transition-all border border-border/50">
              <LogIn className="w-4 h-4" />
              Giris
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-gold to-amber-500 text-black rounded-xl font-bold shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all">
              <Star className="w-4 h-4" />
              <span className="hidden sm:inline">Uye Ol</span>
            </button>
          </div>
        </div>

        {/* Season Banner */}
        <div className="bg-gradient-to-r from-primary/20 via-accent/10 to-gold/20 px-4 py-2.5 flex items-center justify-center gap-4 text-sm border-t border-border/30">
          <span className="px-2.5 py-1 bg-gradient-to-r from-gold to-amber-500 text-black rounded font-bold text-xs shadow-lg">SEZON 1</span>
          <span className="font-medium">Orman Savascisi Sezonu - Ozel kozmetikler & oduller!</span>
          <span className="text-muted-foreground hidden md:flex items-center gap-1">
            <Timer className="w-4 h-4" />
            28 gun kaldi
          </span>
        </div>

        {/* Navigation */}
        <nav className="px-4 lg:px-6 py-2 flex gap-1 overflow-x-auto border-t border-border/30">
          {[
            { id: "oyun", label: "OYUN", icon: Gamepad2 },
            { id: "profil", label: "PROFIL", icon: Users },
            { id: "magaza", label: "MAGAZA", icon: Shield },
            { id: "siralama", label: "SIRALAMA", icon: Trophy },
            { id: "deriler", label: "DERILER", icon: Star },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-[1920px] mx-auto p-4 lg:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-4 lg:gap-6">
          
          {/* Left Sidebar - Character */}
          <aside className="bg-card/80 backdrop-blur-xl rounded-2xl p-5 border border-border/50 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-primary font-bold">
              <Swords className="w-5 h-5" />
              KARAKTER
            </div>

            {/* Character Preview */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary via-card to-secondary flex items-center justify-center overflow-hidden border-2 border-primary/30 shadow-[inset_0_0_30px_rgba(34,197,94,0.1)]">
                <div 
                  key={selectedCharacter.id}
                  className="text-[100px] animate-[float_3s_ease-in-out_infinite]"
                  style={{ filter: `drop-shadow(0 0 30px ${selectedCharacter.color})` }}
                >
                  {selectedCharacter.emoji}
                </div>
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-card/90 backdrop-blur rounded-full border border-border/50 shadow-lg">
                <span className={`text-xs font-bold ${getRarityColor(selectedCharacter.rarity)}`}>
                  {getRarityStars(selectedCharacter.rarity)} {selectedCharacter.rarity.toUpperCase()}
                </span>
              </div>
            </div>

            <div className="text-center font-bold text-lg mt-2">{selectedCharacter.name}</div>

            {/* Character Grid */}
            <div className="grid grid-cols-3 gap-2">
              {characters.map((char) => (
                <button
                  key={char.id}
                  onClick={() => char.unlocked && setSelectedCharacter(char)}
                  className={`aspect-square rounded-xl flex items-center justify-center text-3xl relative transition-all hover:scale-105 ${
                    selectedCharacter.id === char.id
                      ? "ring-2 ring-primary bg-primary/20 shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                      : char.unlocked
                      ? "bg-secondary hover:bg-secondary/80 border border-border/50"
                      : "bg-secondary/50 opacity-50 cursor-not-allowed"
                  }`}
                  disabled={!char.unlocked}
                >
                  {char.emoji}
                  {!char.unlocked && (
                    <div className="absolute inset-0 bg-black/60 rounded-xl flex items-center justify-center">
                      <Shield className="w-5 h-5 text-muted-foreground" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </aside>

          {/* Center - Main Panel */}
          <section className="bg-card/80 backdrop-blur-xl rounded-2xl p-6 border border-border/50 flex flex-col gap-5">
            {/* Title */}
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/20 rounded-xl">
                <TreePine className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-black drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]">Ormana Gir</h2>
                <p className="text-muted-foreground text-sm">Hayatta kal - Topla - Savas</p>
              </div>
            </div>

            {/* Name & Server */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Swords className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Savasci adin..."
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-secondary rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium placeholder:text-muted-foreground/50"
                  maxLength={20}
                />
              </div>
              <div className="relative">
                <select
                  value={selectedServer}
                  onChange={(e) => setSelectedServer(e.target.value)}
                  className="appearance-none w-full sm:w-auto pl-4 pr-10 py-3.5 bg-secondary rounded-xl border border-border focus:border-primary outline-none font-medium cursor-pointer"
                >
                  <option>EU Avrupa #1</option>
                  <option>EU Avrupa #2</option>
                  <option>TR Turkiye #1</option>
                  <option>US Amerika #1</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none text-muted-foreground" />
              </div>
            </div>

            {/* Event Banner */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gold/15 via-gold/5 to-transparent rounded-xl border border-gold/30">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-gold/20 rounded-xl">
                  <Zap className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-medium">AKTIF ETKINLIK</div>
                  <div className="font-bold text-gold text-lg">Hiz Frenzy</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Kalan</div>
                <div className="font-mono font-black text-primary text-xl drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">{formatTime(eventTime)}</div>
              </div>
            </div>

            {/* Play Button */}
            <button className="relative overflow-hidden py-6 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[gradient-shift_3s_ease_infinite] font-black text-3xl text-primary-foreground shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:shadow-[0_0_50px_rgba(34,197,94,0.6)] transition-all group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <div className="flex items-center justify-center gap-4">
                <Swords className="w-8 h-8" />
                OYNA!
              </div>
            </button>

            {/* Invite */}
            <button className="flex items-center justify-center gap-2 py-4 bg-secondary/50 hover:bg-secondary rounded-xl text-muted-foreground hover:text-foreground transition-all border border-border/50 group">
              <UserPlus className="w-5 h-5 group-hover:text-primary transition-colors" />
              Arkadasini Davet Et & Birlikte Oyna!
            </button>

            {/* Mode Selection */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: "online", label: "CEVRIMICI", icon: Users },
                { id: "offline", label: "CEVRIMDISI", icon: Eye },
              ].map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setSelectedMode(mode.id)}
                  className={`flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all ${
                    selectedMode === mode.id
                      ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                      : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 border border-border/50"
                  }`}
                >
                  <mode.icon className="w-5 h-5" />
                  {mode.label}
                </button>
              ))}
            </div>

            {/* Game Type */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: "classic", label: "KLASIK", icon: Gamepad2, activeClass: "bg-primary/20 text-primary ring-2 ring-primary shadow-[0_0_15px_rgba(34,197,94,0.2)]" },
                { id: "survival", label: "HAYATTA KAL", icon: Shield, activeClass: "bg-accent/20 text-accent ring-2 ring-accent" },
                { id: "team", label: "TAKIM", icon: Users, activeClass: "bg-gold/20 text-gold ring-2 ring-gold" },
              ].map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedGameType(type.id)}
                  className={`flex flex-col items-center gap-2 py-5 rounded-xl font-bold transition-all ${
                    selectedGameType === type.id
                      ? type.activeClass
                      : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 border border-border/50"
                  }`}
                >
                  <type.icon className="w-6 h-6" />
                  <span className="text-sm">{type.label}</span>
                </button>
              ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: TreePine, label: "KAYNAK", desc: "Agac & tas kes" },
                { icon: Hammer, label: "YAPI", desc: "Baz insa et" },
                { icon: Swords, label: "SAVAS", desc: "Dusmanlari yen" },
                { icon: Crown, label: "LIDER", desc: "En iyisi sen ol" },
              ].map((feature, i) => (
                <div key={i} className="flex flex-col items-center p-4 bg-secondary/50 rounded-xl text-center border border-border/30 hover:border-primary/30 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary mb-2" />
                  <div className="text-xs font-bold">{feature.label}</div>
                  <div className="text-xs text-muted-foreground">{feature.desc}</div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-3">
              {[
                { label: "OYUN", value: "148K" },
                { label: "OLDURME", value: "3M" },
                { label: "REKOR", value: "892K" },
                { label: "CEVRIMICI", value: onlinePlayers.toLocaleString() },
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 bg-gradient-to-b from-secondary/50 to-secondary/30 rounded-xl border border-border/30">
                  <div className="text-2xl lg:text-3xl font-black text-primary drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]">{stat.value}</div>
                  <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Right Sidebar */}
          <aside className="bg-card/80 backdrop-blur-xl rounded-2xl p-5 border border-border/50 flex flex-col gap-5">
            {/* Leaderboard */}
            <div>
              <div className="flex items-center gap-2 text-gold font-bold mb-4">
                <Trophy className="w-5 h-5" />
                SIRALAMA
              </div>

              {/* Tabs */}
              <div className="flex gap-1 p-1 bg-secondary rounded-xl mb-4">
                {[
                  { id: "daily", label: "GUNLUK" },
                  { id: "weekly", label: "HAFTALIK" },
                  { id: "all", label: "TUMU" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setLeaderboardTab(tab.id)}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                      leaderboardTab === tab.id
                        ? "bg-gold text-black"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Leaderboard List */}
              <div className="space-y-2">
                {leaderboardData.map((player) => (
                  <div
                    key={player.rank}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                      player.rank === 1
                        ? "bg-gradient-to-r from-gold/20 to-transparent border border-gold/30"
                        : "bg-secondary/50 hover:bg-secondary/80"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm ${
                      player.rank === 1 ? "bg-gold text-black" :
                      player.rank === 2 ? "bg-gray-400 text-black" :
                      player.rank === 3 ? "bg-amber-600 text-black" :
                      "bg-secondary text-muted-foreground"
                    }`}>
                      {player.rank}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-lg">
                      {player.rank <= 3 ? ["🥇", "🥈", "🥉"][player.rank - 1] : "👤"}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold truncate">{player.name}</div>
                    </div>
                    <div className="flex items-center gap-1 text-primary font-bold">
                      <Trophy className="w-4 h-4" />
                      {player.score}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="p-4 bg-secondary/50 rounded-xl border border-border/30">
              <div className="flex items-center gap-2 text-primary font-bold text-sm mb-3">
                <Sparkles className="w-4 h-4" />
                IPUCLARI
              </div>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <Target className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>{tips[currentTip]}</span>
              </div>
            </div>

            {/* Live Feed */}
            <div>
              <div className="flex items-center gap-2 text-accent font-bold text-sm mb-3">
                <Flame className="w-4 h-4" />
                CANLI OYUN
              </div>
              <div className="space-y-2">
                {liveFeed.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm p-2 bg-secondary/30 rounded-lg">
                    <span>{item.icon}</span>
                    <span className={item.color}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Today Champion */}
            <div className="p-4 bg-gradient-to-br from-gold/20 via-gold/10 to-transparent rounded-xl border border-gold/30">
              <div className="flex items-center gap-2 text-gold font-bold text-sm mb-3">
                <Crown className="w-4 h-4" />
                GUNUNUN SAMPIYONU
              </div>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center text-3xl border-2 border-gold/50">
                  🏆
                </div>
                <div>
                  <div className="font-bold text-lg">bababababa</div>
                  <div className="flex items-center gap-1 text-gold text-sm">
                    <Trophy className="w-4 h-4" />
                    10 puan
                  </div>
                </div>
                <Crown className="w-6 h-6 text-gold ml-auto" />
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
