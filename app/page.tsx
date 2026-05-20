"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Target,
  Hammer,
  Eye,
  UserPlus,
  LogIn,
} from "lucide-react";

// Character data
const characters = [
  { id: "bear", name: "Ayi Savasci", rarity: "Nadir", emoji: "bear", color: "#8B4513", unlocked: true },
  { id: "fox", name: "Tilki Okcu", rarity: "Epik", emoji: "fox", color: "#FF6B35", unlocked: true },
  { id: "wolf", name: "Kurt Avcisi", rarity: "Efsanevi", emoji: "wolf", color: "#4A5568", unlocked: true },
  { id: "owl", name: "Baykus Buyu", rarity: "Nadir", emoji: "owl", color: "#7C3AED", unlocked: false },
  { id: "rabbit", name: "Tavsan Ninja", rarity: "Siradan", emoji: "rabbit", color: "#EC4899", unlocked: true },
  { id: "deer", name: "Geyik Koruyucu", rarity: "Epik", emoji: "deer", color: "#F59E0B", unlocked: false },
];

// Leaderboard data
const leaderboardData = [
  { rank: 1, name: "OrmanaKral", score: 15420, avatar: "crown" },
  { rank: 2, name: "Tilki_44", score: 12890, avatar: "star" },
  { rank: 3, name: "AyiMaster", score: 11234, avatar: "trophy" },
  { rank: 4, name: "KurtAdam99", score: 9876, avatar: "user" },
  { rank: 5, name: "GeceSavasci", score: 8765, avatar: "user" },
];

// Live feed data
const liveFeed = [
  { type: "kill", text: "OrmanaKral 948 puan aldi" },
  { type: "kill", text: "Tilki_44 -> Ayi_77 oldurdu" },
  { type: "event", text: "OkcuTilki uzaktan isabet!" },
  { type: "loot", text: "KristalFox efsane silah aldi" },
  { type: "night", text: "Gece basladi - dusmanlar gucle..." },
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

  // Simulate online players fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setOnlinePlayers((prev) => prev + Math.floor(Math.random() * 11) - 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Event countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setEventTime((prev) => (prev > 0 ? prev - 1 : 49 * 60 + 40));
    }, 1000);
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

  const getCharacterEmoji = (emoji: string) => {
    switch (emoji) {
      case "bear": return "🐻";
      case "fox": return "🦊";
      case "wolf": return "🐺";
      case "owl": return "🦉";
      case "rabbit": return "🐰";
      case "deer": return "🦌";
      default: return "🐻";
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-border/50 glass">
        <div className="max-w-[1920px] mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="relative">
              <TreePine className="w-10 h-10 text-primary" />
              <div className="absolute inset-0 blur-md bg-primary/50 -z-10" />
            </div>
            <h1 className="text-2xl md:text-3xl font-black">
              <span className="text-primary text-glow">Forest</span>
              <span className="text-accent">Brawl</span>
              <span className="text-gold">.io</span>
            </h1>
          </motion.div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Online Counter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="hidden sm:flex items-center gap-2 px-4 py-2 glass rounded-full"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium">{onlinePlayers.toLocaleString()} cevrimici</span>
            </motion.div>

            {/* Sound Toggle */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 glass rounded-lg hover:bg-primary/20 transition-colors"
            >
              {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5 text-muted-foreground" />}
            </button>

            {/* Settings */}
            <button className="p-2 glass rounded-lg hover:bg-primary/20 transition-colors">
              <Settings className="w-5 h-5" />
            </button>

            {/* Auth Buttons */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg font-semibold transition-colors"
            >
              <LogIn className="w-4 h-4" />
              Giris
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gold text-gold-foreground rounded-lg font-bold glow-gold transition-colors"
            >
              <Star className="w-4 h-4" />
              <span className="hidden sm:inline">Uye Ol</span>
            </motion.button>
          </div>
        </div>

        {/* Season Banner */}
        <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-gold/20 px-4 py-2 flex items-center justify-center gap-3 text-sm">
          <span className="px-2 py-0.5 bg-gold text-gold-foreground rounded text-xs font-bold">SEZON 1</span>
          <span className="font-medium">Orman Savascisi Sezonu - Ozel kozmetikler & oduller!</span>
          <span className="text-muted-foreground hidden sm:inline">28 gun kaldi</span>
        </div>

        {/* Navigation Tabs */}
        <nav className="px-4 py-1 flex gap-1 overflow-x-auto">
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
              className={`flex items-center gap-2 px-4 py-2 rounded-t-lg font-semibold text-sm transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
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
      <main className="relative z-10 max-w-[1920px] mx-auto p-4 grid grid-cols-1 lg:grid-cols-[280px_1fr_300px] gap-4 h-[calc(100vh-180px)]">
        {/* Left Sidebar - Character Selection */}
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-xl p-4 flex flex-col gap-4 overflow-hidden"
        >
          <div className="flex items-center gap-2 text-primary font-bold">
            <Swords className="w-5 h-5" />
            KARAKTER
          </div>

          {/* Selected Character Preview */}
          <div className="relative flex-shrink-0">
            <div className="aspect-square rounded-xl bg-gradient-to-br from-secondary to-card flex items-center justify-center overflow-hidden border-2 border-primary/30">
              <motion.div
                key={selectedCharacter.id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-8xl animate-float"
                style={{ filter: `drop-shadow(0 0 20px ${selectedCharacter.color})` }}
              >
                {getCharacterEmoji(selectedCharacter.emoji)}
              </motion.div>
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 glass rounded-full">
              <span className={`text-xs font-bold ${getRarityColor(selectedCharacter.rarity)}`}>
                {"★".repeat(selectedCharacter.rarity === "Efsanevi" ? 3 : selectedCharacter.rarity === "Epik" ? 2 : 1)} {selectedCharacter.rarity.toUpperCase()}
              </span>
            </div>
          </div>

          <div className="text-center font-bold text-lg">{selectedCharacter.name}</div>

          {/* Character Grid */}
          <div className="grid grid-cols-3 gap-2 flex-1 overflow-y-auto">
            {characters.map((char) => (
              <motion.button
                key={char.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => char.unlocked && setSelectedCharacter(char)}
                className={`aspect-square rounded-lg flex items-center justify-center text-3xl relative transition-all ${
                  selectedCharacter.id === char.id
                    ? "ring-2 ring-primary bg-primary/20"
                    : char.unlocked
                    ? "bg-secondary hover:bg-secondary/80"
                    : "bg-secondary/50 opacity-50"
                }`}
              >
                {getCharacterEmoji(char.emoji)}
                {!char.unlocked && (
                  <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 text-muted-foreground" />
                  </div>
                )}
              </motion.button>
            ))}
          </div>
        </motion.aside>

        {/* Center - Main Game Panel */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-xl p-6 flex flex-col gap-5 overflow-y-auto"
        >
          {/* Title */}
          <div className="flex items-center gap-3">
            <TreePine className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-black text-glow">Ormana Gir</h2>
              <p className="text-muted-foreground text-sm">Hayatta kal - Topla - Savas</p>
            </div>
          </div>

          {/* Name Input & Server */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Swords className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Savasci adin..."
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-secondary rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium"
                maxLength={20}
              />
            </div>
            <div className="relative">
              <select
                value={selectedServer}
                onChange={(e) => setSelectedServer(e.target.value)}
                className="appearance-none pl-4 pr-10 py-3 bg-secondary rounded-xl border border-border focus:border-primary outline-none font-medium cursor-pointer"
              >
                <option>EU Avrupa #1</option>
                <option>EU Avrupa #2</option>
                <option>TR Turkiye #1</option>
                <option>US Amerika #1</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
            </div>
          </div>

          {/* Active Event */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gold/10 to-transparent rounded-xl border border-gold/30">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gold/20 rounded-lg">
                <Zap className="w-5 h-5 text-gold" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">AKTIF ETKINLIK</div>
                <div className="font-bold text-gold">Hiz Frenzy</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-muted-foreground">Kalan</div>
              <div className="font-mono font-bold text-primary text-lg">{formatTime(eventTime)}</div>
            </div>
          </div>

          {/* Play Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden py-5 rounded-xl bg-gradient-to-r from-primary to-accent font-black text-2xl text-primary-foreground glow-primary transition-all group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <div className="flex items-center justify-center gap-3">
              <Swords className="w-7 h-7" />
              OYNA!
            </div>
          </motion.button>

          {/* Invite Friends */}
          <button className="flex items-center justify-center gap-2 py-3 bg-secondary/50 hover:bg-secondary rounded-xl text-muted-foreground hover:text-foreground transition-colors">
            <UserPlus className="w-5 h-5" />
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
                className={`flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all ${
                  selectedMode === mode.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                <mode.icon className="w-5 h-5" />
                {mode.label}
              </button>
            ))}
          </div>

          {/* Game Type Selection */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { id: "classic", label: "KLASIK", icon: Gamepad2, color: "primary" },
              { id: "survival", label: "HAYATTA KAL", icon: Shield, color: "accent" },
              { id: "team", label: "TAKIM", icon: Users, color: "gold" },
            ].map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedGameType(type.id)}
                className={`flex flex-col items-center gap-2 py-4 rounded-xl font-semibold transition-all ${
                  selectedGameType === type.id
                    ? type.color === "primary"
                      ? "bg-primary/20 text-primary ring-2 ring-primary"
                      : type.color === "accent"
                      ? "bg-accent/20 text-accent ring-2 ring-accent"
                      : "bg-gold/20 text-gold ring-2 ring-gold"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                <type.icon className="w-6 h-6" />
                <span className="text-sm">{type.label}</span>
              </button>
            ))}
          </div>

          {/* Game Features */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: TreePine, label: "KAYNAK", desc: "Agac & tas kes" },
              { icon: Hammer, label: "YAPI", desc: "Baz insa et" },
              { icon: Swords, label: "SAVAS", desc: "Dusmanlari yen" },
              { icon: Crown, label: "LIDER", desc: "En iyisi sen ol" },
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center p-3 bg-secondary/50 rounded-xl text-center">
                <feature.icon className="w-6 h-6 text-primary mb-2" />
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
              <div key={i} className="text-center p-3 bg-secondary/30 rounded-xl">
                <div className="text-2xl font-black text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Right Sidebar - Leaderboard & Live Feed */}
        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-xl p-4 flex flex-col gap-4 overflow-hidden"
        >
          {/* Leaderboard */}
          <div className="flex items-center gap-2 text-gold font-bold">
            <Trophy className="w-5 h-5" />
            SIRALAMA
          </div>

          {/* Leaderboard Tabs */}
          <div className="flex gap-1 p-1 bg-secondary rounded-lg">
            {[
              { id: "daily", label: "GUNLUK" },
              { id: "weekly", label: "HAFTALIK" },
              { id: "all", label: "TUMU" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setLeaderboardTab(tab.id)}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  leaderboardTab === tab.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Leaderboard List */}
          <div className="flex flex-col gap-2">
            {leaderboardData.map((player, i) => (
              <motion.div
                key={player.rank}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                className={`flex items-center gap-3 p-2 rounded-lg ${
                  player.rank === 1 ? "bg-gold/10 border border-gold/30" : "bg-secondary/50"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    player.rank === 1
                      ? "bg-gold text-gold-foreground"
                      : player.rank === 2
                      ? "bg-gray-400 text-gray-900"
                      : player.rank === 3
                      ? "bg-amber-700 text-amber-100"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {player.rank}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm truncate">{player.name}</div>
                  <div className="text-xs text-primary">{player.score.toLocaleString()}</div>
                </div>
                {player.rank === 1 && <Crown className="w-5 h-5 text-gold" />}
              </motion.div>
            ))}
          </div>

          {/* Tips */}
          <div className="p-3 bg-secondary/50 rounded-lg">
            <div className="flex items-center gap-2 text-accent font-semibold text-sm mb-2">
              <Target className="w-4 h-4" />
              IPUCLARI
            </div>
            <p className="text-xs text-muted-foreground">Tab tusu skorbord gosterir</p>
          </div>

          {/* Live Feed */}
          <div className="flex-1 overflow-hidden">
            <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-2">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              CANLI OYUN
            </div>
            <div className="flex flex-col gap-1.5 overflow-y-auto max-h-32">
              <AnimatePresence>
                {liveFeed.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-muted-foreground flex items-center gap-2"
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        item.type === "kill" ? "bg-red-500" : item.type === "loot" ? "bg-gold" : "bg-purple-500"
                      }`}
                    />
                    {item.text}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Today's Champion */}
          <div className="p-3 glass-light rounded-lg">
            <div className="flex items-center gap-2 text-gold font-semibold text-sm mb-2">
              <Crown className="w-4 h-4" />
              BUGUNUN SAMPIYONU
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-amber-600 flex items-center justify-center text-2xl">
                🐻
              </div>
              <div>
                <div className="font-bold">OrmanaKral</div>
                <div className="text-xs text-gold">15,420 puan</div>
              </div>
              <Crown className="w-6 h-6 text-gold ml-auto" />
            </div>
          </div>
        </motion.aside>
      </main>
    </div>
  );
}
