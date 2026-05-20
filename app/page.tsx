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
  Sparkles,
  Target,
  Flame,
  Crosshair,
  Heart,
  Gift,
  Clock,
  TrendingUp,
  Medal,
  Gem,
  CircleDot,
  ShoppingBag,
  User,
  Palette,
  X,
  Check,
  Lock,
  Coins,
  Play,
} from "lucide-react";

// Character data with detailed info
const characters = [
  { 
    id: "bear", 
    name: "Ayi Savasci", 
    rarity: "Nadir", 
    power: 85, 
    speed: 60, 
    defense: 90,
    color: "#8B5A2B",
    unlocked: true,
    description: "Guclu ve dayanikli",
    price: 0,
  },
  { 
    id: "fox", 
    name: "Tilki Okcu", 
    rarity: "Epik", 
    power: 70, 
    speed: 95, 
    defense: 50,
    color: "#FF6B35",
    unlocked: true,
    description: "Hizli ve kurnaz",
    price: 0,
  },
  { 
    id: "wolf", 
    name: "Kurt Avcisi", 
    rarity: "Efsanevi", 
    power: 90, 
    speed: 85, 
    defense: 70,
    color: "#6B7280",
    unlocked: true,
    description: "Olumcul yirtici",
    price: 0,
  },
  { 
    id: "owl", 
    name: "Baykus Buyucu", 
    rarity: "Nadir", 
    power: 75, 
    speed: 70, 
    defense: 65,
    color: "#7C3AED",
    unlocked: false,
    description: "Gizemli sihirbaz",
    price: 2500,
  },
  { 
    id: "rabbit", 
    name: "Tavsan Ninja", 
    rarity: "Siradan", 
    power: 55, 
    speed: 100, 
    defense: 40,
    color: "#EC4899",
    unlocked: true,
    description: "En hizli savasci",
    price: 0,
  },
  { 
    id: "deer", 
    name: "Geyik Koruyucu", 
    rarity: "Epik", 
    power: 65, 
    speed: 80, 
    defense: 85,
    color: "#D97706",
    unlocked: false,
    description: "Asil savunucu",
    price: 3500,
  },
];

const skins = [
  { id: "golden", name: "Altin Zirh", rarity: "Efsanevi", price: 5000, owned: false },
  { id: "shadow", name: "Golge Pelerin", rarity: "Epik", price: 2500, owned: true },
  { id: "forest", name: "Orman Kamuflaj", rarity: "Nadir", price: 1000, owned: true },
  { id: "fire", name: "Ates Efekti", rarity: "Epik", price: 3000, owned: false },
  { id: "ice", name: "Buz Kristali", rarity: "Nadir", price: 1500, owned: false },
  { id: "neon", name: "Neon Isik", rarity: "Siradan", price: 500, owned: true },
];

const shopItems = [
  { id: 1, name: "Altin Paketi", type: "currency", amount: "5000", price: "$4.99", icon: Coins, popular: true },
  { id: 2, name: "Elmas Paketi", type: "currency", amount: "500", price: "$2.99", icon: Gem, popular: false },
  { id: 3, name: "Sezon Pasi", type: "pass", price: "$9.99", icon: Crown, popular: true },
  { id: 4, name: "Karakter Paketi", type: "bundle", price: "$14.99", icon: Users, popular: false },
];

const leaderboardData = [
  { rank: 1, name: "OrmanKrali", score: 12847, kills: 156, character: "wolf" },
  { rank: 2, name: "TilkiAvcisi", score: 11523, kills: 142, character: "fox" },
  { rank: 3, name: "AyiBaba", score: 10891, kills: 128, character: "bear" },
  { rank: 4, name: "GolgeNinja", score: 9876, kills: 115, character: "rabbit" },
  { rank: 5, name: "KurtAdam99", score: 8654, kills: 98, character: "wolf" },
  { rank: 6, name: "Yildiz_TR", score: 7432, kills: 87, character: "fox" },
  { rank: 7, name: "SavasCi01", score: 6521, kills: 76, character: "bear" },
  { rank: 8, name: "ProGamer", score: 5890, kills: 65, character: "wolf" },
];

const liveFeed = [
  { type: "kill", killer: "OrmanKrali", victim: "Oyuncu_44", time: "2s" },
  { type: "score", player: "TilkiAvcisi", amount: 948, time: "5s" },
  { type: "legendary", player: "KristalFox", item: "Altin Kilic", time: "12s" },
  { type: "event", message: "Gece basladi!", time: "18s" },
  { type: "kill", killer: "AyiBaba", victim: "Tilki_77", time: "25s" },
];

// Character SVG Components
function BearCharacter({ size = 120, isSelected = false }: { size?: number; isSelected?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={`transition-transform duration-300 ${isSelected ? 'scale-110' : ''}`}>
      <defs>
        <radialGradient id="bearFur" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#A67C52" />
          <stop offset="100%" stopColor="#5D4037" />
        </radialGradient>
        <filter id="bearShadow">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.3" />
        </filter>
      </defs>
      <ellipse cx="60" cy="85" rx="35" ry="30" fill="url(#bearFur)" filter="url(#bearShadow)" />
      <circle cx="60" cy="45" r="32" fill="url(#bearFur)" />
      <circle cx="35" cy="22" r="12" fill="#8B5A2B" />
      <circle cx="85" cy="22" r="12" fill="#8B5A2B" />
      <circle cx="35" cy="22" r="7" fill="#D4A574" />
      <circle cx="85" cy="22" r="7" fill="#D4A574" />
      <ellipse cx="60" cy="55" rx="18" ry="14" fill="#D4A574" />
      <ellipse cx="48" cy="42" rx="6" ry="7" fill="white" />
      <ellipse cx="72" cy="42" rx="6" ry="7" fill="white" />
      <circle cx="49" cy="43" r="4" fill="#1a1a2e" />
      <circle cx="73" cy="43" r="4" fill="#1a1a2e" />
      <circle cx="50" cy="42" r="1.5" fill="white" />
      <circle cx="74" cy="42" r="1.5" fill="white" />
      <ellipse cx="60" cy="52" rx="7" ry="5" fill="#1a1a2e" />
      <ellipse cx="58" cy="51" rx="2" ry="1.5" fill="#444" />
      <path d="M 52 60 Q 60 66 68 60" stroke="#5D4037" strokeWidth="2" fill="none" />
      <path d="M 55 32 L 60 28 L 65 32" stroke="#22c55e" strokeWidth="2" fill="none" />
    </svg>
  );
}

function FoxCharacter({ size = 120, isSelected = false }: { size?: number; isSelected?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={`transition-transform duration-300 ${isSelected ? 'scale-110' : ''}`}>
      <defs>
        <linearGradient id="foxFur" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF8C42" />
          <stop offset="100%" stopColor="#D64933" />
        </linearGradient>
      </defs>
      <ellipse cx="60" cy="88" rx="30" ry="25" fill="url(#foxFur)" />
      <path d="M 85 85 Q 110 70 105 55 Q 100 45 90 55 Q 85 65 88 80" fill="url(#foxFur)" />
      <path d="M 100 55 Q 95 50 92 58" fill="white" />
      <ellipse cx="60" cy="45" rx="28" ry="25" fill="url(#foxFur)" />
      <polygon points="35,35 25,5 45,25" fill="url(#foxFur)" />
      <polygon points="85,35 95,5 75,25" fill="url(#foxFur)" />
      <polygon points="35,32 30,15 42,27" fill="#1a1a2e" />
      <polygon points="85,32 90,15 78,27" fill="#1a1a2e" />
      <ellipse cx="60" cy="55" rx="16" ry="18" fill="white" />
      <ellipse cx="48" cy="42" rx="7" ry="8" fill="white" />
      <ellipse cx="72" cy="42" rx="7" ry="8" fill="white" />
      <ellipse cx="49" cy="43" rx="4" ry="5" fill="#22c55e" />
      <ellipse cx="73" cy="43" r="5" fill="#22c55e" />
      <circle cx="49" cy="43" r="2.5" fill="#1a1a2e" />
      <circle cx="73" cy="43" r="2.5" fill="#1a1a2e" />
      <circle cx="50" cy="42" r="1" fill="white" />
      <circle cx="74" cy="42" r="1" fill="white" />
      <ellipse cx="60" cy="56" rx="5" ry="4" fill="#1a1a2e" />
      <path d="M 60 60 L 60 65" stroke="#1a1a2e" strokeWidth="1.5" />
      <path d="M 53 65 Q 60 70 67 65" stroke="#1a1a2e" strokeWidth="1.5" fill="none" />
      <line x1="35" y1="55" x2="48" y2="58" stroke="#1a1a2e" strokeWidth="1" />
      <line x1="35" y1="60" x2="48" y2="60" stroke="#1a1a2e" strokeWidth="1" />
      <line x1="72" y1="58" x2="85" y2="55" stroke="#1a1a2e" strokeWidth="1" />
      <line x1="72" y1="60" x2="85" y2="60" stroke="#1a1a2e" strokeWidth="1" />
    </svg>
  );
}

function WolfCharacter({ size = 120, isSelected = false }: { size?: number; isSelected?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={`transition-transform duration-300 ${isSelected ? 'scale-110' : ''}`}>
      <defs>
        <linearGradient id="wolfFur" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6B7280" />
          <stop offset="100%" stopColor="#374151" />
        </linearGradient>
      </defs>
      <ellipse cx="60" cy="88" rx="32" ry="26" fill="url(#wolfFur)" />
      <ellipse cx="60" cy="45" rx="30" ry="28" fill="url(#wolfFur)" />
      <ellipse cx="60" cy="58" rx="18" ry="15" fill="#9CA3AF" />
      <polygon points="32,32 22,2 48,22" fill="url(#wolfFur)" />
      <polygon points="88,32 98,2 72,22" fill="url(#wolfFur)" />
      <polygon points="34,28 28,12 44,24" fill="#D1D5DB" />
      <polygon points="86,28 92,12 76,24" fill="#D1D5DB" />
      <ellipse cx="45" cy="40" rx="8" ry="6" fill="white" />
      <ellipse cx="75" cy="40" rx="8" ry="6" fill="white" />
      <ellipse cx="46" cy="40" rx="4" ry="5" fill="#FCD34D" />
      <ellipse cx="76" cy="40" rx="4" ry="5" fill="#FCD34D" />
      <circle cx="46" cy="40" r="2.5" fill="#1a1a2e" />
      <circle cx="76" cy="40" r="2.5" fill="#1a1a2e" />
      <line x1="38" y1="32" x2="52" y2="35" stroke="#374151" strokeWidth="3" strokeLinecap="round" />
      <line x1="82" y1="32" x2="68" y2="35" stroke="#374151" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="60" cy="55" rx="6" ry="5" fill="#1a1a2e" />
      <path d="M 45 65 Q 60 72 75 65" stroke="#1a1a2e" strokeWidth="2" fill="none" />
      <polygon points="50,65 52,70 54,65" fill="white" />
      <polygon points="58,66 60,72 62,66" fill="white" />
      <polygon points="66,65 68,70 70,65" fill="white" />
      <path d="M 75 30 L 82 45 L 78 48" stroke="#DC2626" strokeWidth="2" fill="none" />
    </svg>
  );
}

function OwlCharacter({ size = 120, isSelected = false }: { size?: number; isSelected?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={`transition-transform duration-300 ${isSelected ? 'scale-110' : ''}`}>
      <defs>
        <linearGradient id="owlFeathers" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#4C1D95" />
        </linearGradient>
      </defs>
      <ellipse cx="60" cy="82" rx="30" ry="32" fill="url(#owlFeathers)" />
      <ellipse cx="60" cy="85" rx="22" ry="24" fill="#DDD6FE" />
      <ellipse cx="25" cy="75" rx="15" ry="25" fill="url(#owlFeathers)" />
      <ellipse cx="95" cy="75" rx="15" ry="25" fill="url(#owlFeathers)" />
      <circle cx="60" cy="40" r="30" fill="url(#owlFeathers)" />
      <polygon points="35,20 28,0 45,15" fill="url(#owlFeathers)" />
      <polygon points="85,20 92,0 75,15" fill="url(#owlFeathers)" />
      <ellipse cx="60" cy="42" rx="24" ry="22" fill="#EDE9FE" />
      <circle cx="48" cy="38" r="12" fill="white" stroke="#7C3AED" strokeWidth="2" />
      <circle cx="72" cy="38" r="12" fill="white" stroke="#7C3AED" strokeWidth="2" />
      <circle cx="48" cy="38" r="8" fill="#7C3AED" />
      <circle cx="72" cy="38" r="8" fill="#7C3AED" />
      <circle cx="48" cy="38" r="4" fill="#1a1a2e" />
      <circle cx="72" cy="38" r="4" fill="#1a1a2e" />
      <circle cx="50" cy="36" r="2" fill="white" />
      <circle cx="74" cy="36" r="2" fill="white" />
      <polygon points="60,48 55,55 60,62 65,55" fill="#F59E0B" />
      <circle cx="35" cy="25" r="2" fill="#FCD34D" />
      <circle cx="88" cy="28" r="1.5" fill="#FCD34D" />
      <circle cx="40" cy="60" r="1.5" fill="#A78BFA" />
    </svg>
  );
}

function RabbitCharacter({ size = 120, isSelected = false }: { size?: number; isSelected?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={`transition-transform duration-300 ${isSelected ? 'scale-110' : ''}`}>
      <defs>
        <linearGradient id="rabbitFur" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F9A8D4" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <ellipse cx="60" cy="88" rx="28" ry="26" fill="url(#rabbitFur)" />
      <ellipse cx="60" cy="90" rx="18" ry="16" fill="#FDF2F8" />
      <ellipse cx="60" cy="50" rx="26" ry="24" fill="url(#rabbitFur)" />
      <ellipse cx="42" cy="18" rx="8" ry="25" fill="url(#rabbitFur)" />
      <ellipse cx="78" cy="18" rx="8" ry="25" fill="url(#rabbitFur)" />
      <ellipse cx="42" cy="18" rx="4" ry="20" fill="#FBCFE8" />
      <ellipse cx="78" cy="18" rx="4" ry="20" fill="#FBCFE8" />
      <ellipse cx="60" cy="55" rx="14" ry="12" fill="#FDF2F8" />
      <ellipse cx="48" cy="48" rx="7" ry="8" fill="white" />
      <ellipse cx="72" cy="48" rx="7" ry="8" fill="white" />
      <ellipse cx="49" cy="49" rx="4" ry="5" fill="#1a1a2e" />
      <ellipse cx="73" cy="49" rx="4" ry="5" fill="#1a1a2e" />
      <circle cx="50" cy="47" r="2" fill="white" />
      <circle cx="74" cy="47" r="2" fill="white" />
      <ellipse cx="60" cy="56" rx="4" ry="3" fill="#EC4899" />
      <path d="M 56 60 Q 60 64 64 60" stroke="#EC4899" strokeWidth="1.5" fill="none" />
      <line x1="60" y1="59" x2="60" y2="62" stroke="#EC4899" strokeWidth="1.5" />
      <line x1="30" y1="55" x2="46" y2="58" stroke="#1a1a2e" strokeWidth="1" />
      <line x1="30" y1="60" x2="46" y2="60" stroke="#1a1a2e" strokeWidth="1" />
      <line x1="74" y1="58" x2="90" y2="55" stroke="#1a1a2e" strokeWidth="1" />
      <line x1="74" y1="60" x2="90" y2="60" stroke="#1a1a2e" strokeWidth="1" />
      <rect x="34" y="38" width="52" height="6" fill="#1a1a2e" rx="2" />
      <rect x="80" y="36" width="15" height="4" fill="#1a1a2e" transform="rotate(25 80 36)" />
      <rect x="80" y="42" width="12" height="3" fill="#1a1a2e" transform="rotate(15 80 42)" />
    </svg>
  );
}

function DeerCharacter({ size = 120, isSelected = false }: { size?: number; isSelected?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={`transition-transform duration-300 ${isSelected ? 'scale-110' : ''}`}>
      <defs>
        <linearGradient id="deerFur" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#92400E" />
        </linearGradient>
      </defs>
      <ellipse cx="60" cy="90" rx="30" ry="25" fill="url(#deerFur)" />
      <rect x="50" y="60" width="20" height="25" fill="url(#deerFur)" rx="5" />
      <ellipse cx="60" cy="45" rx="22" ry="20" fill="url(#deerFur)" />
      <path d="M 40 30 Q 35 20 30 25 Q 25 15 20 20" stroke="#92400E" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M 35 25 Q 30 18 32 12" stroke="#92400E" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M 80 30 Q 85 20 90 25 Q 95 15 100 20" stroke="#92400E" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M 85 25 Q 90 18 88 12" stroke="#92400E" strokeWidth="3" fill="none" strokeLinecap="round" />
      <ellipse cx="35" cy="38" rx="8" ry="12" fill="url(#deerFur)" />
      <ellipse cx="85" cy="38" rx="8" ry="12" fill="url(#deerFur)" />
      <ellipse cx="35" cy="38" rx="4" ry="8" fill="#FDE68A" />
      <ellipse cx="85" cy="38" rx="4" ry="8" fill="#FDE68A" />
      <ellipse cx="60" cy="52" rx="10" ry="12" fill="#FDE68A" />
      <ellipse cx="48" cy="42" rx="6" ry="7" fill="white" />
      <ellipse cx="72" cy="42" rx="6" ry="7" fill="white" />
      <ellipse cx="49" cy="43" rx="3.5" ry="4.5" fill="#422006" />
      <ellipse cx="73" cy="43" rx="3.5" ry="4.5" fill="#422006" />
      <circle cx="50" cy="41" r="1.5" fill="white" />
      <circle cx="74" cy="41" r="1.5" fill="white" />
      <ellipse cx="60" cy="54" rx="5" ry="4" fill="#1a1a2e" />
      <path d="M 55 30 L 60 25 L 65 30" stroke="#22c55e" strokeWidth="2" fill="none" />
    </svg>
  );
}

const CharacterComponents: Record<string, React.FC<{ size?: number; isSelected?: boolean }>> = {
  bear: BearCharacter,
  fox: FoxCharacter,
  wolf: WolfCharacter,
  owl: OwlCharacter,
  rabbit: RabbitCharacter,
  deer: DeerCharacter,
};

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
  const [isHoveringPlay, setIsHoveringPlay] = useState(false);
  const [serverDropdownOpen, setServerDropdownOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [coins, setCoins] = useState(3750);

  const tips = [
    "Tab tusu skorbord gosterir",
    "Shift ile hizli kosarsin",
    "E tusu esya toplar",
    "Q tusu beceri kullanir",
  ];

  const servers = [
    { id: "eu1", name: "EU Avrupa #1", ping: 24, players: 487 },
    { id: "eu2", name: "EU Avrupa #2", ping: 31, players: 324 },
    { id: "tr1", name: "TR Turkiye #1", ping: 12, players: 256 },
    { id: "us1", name: "US Amerika #1", ping: 98, players: 180 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlinePlayers((prev) => Math.max(1000, prev + Math.floor(Math.random() * 21) - 10));
    }, 2000);
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
    }, 4000);
    return () => clearInterval(interval);
  }, [tips.length]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Efsanevi": return "text-yellow-400";
      case "Epik": return "text-purple-400";
      case "Nadir": return "text-blue-400";
      default: return "text-gray-400";
    }
  };

  const getRarityBg = (rarity: string) => {
    switch (rarity) {
      case "Efsanevi": return "from-yellow-500/20 to-amber-600/20 border-yellow-500/50";
      case "Epik": return "from-purple-500/20 to-violet-600/20 border-purple-500/50";
      case "Nadir": return "from-blue-500/20 to-cyan-600/20 border-blue-500/50";
      default: return "from-gray-500/20 to-slate-600/20 border-gray-500/50";
    }
  };

  const handlePlay = () => {
    if (!playerName.trim()) {
      const input = document.querySelector('input[placeholder="Savasci adin..."]') as HTMLInputElement;
      input?.focus();
      return;
    }
    setIsPlaying(true);
    setTimeout(() => {
      alert(`${playerName} olarak ${selectedCharacter.name} karakteriyle ${selectedServer} sunucusunda oyuna basliyorsunuz!`);
      setIsPlaying(false);
    }, 1500);
  };

  const CharacterComponent = CharacterComponents[selectedCharacter.id];
  const selectedServerData = servers.find(s => s.name === selectedServer);

  // Render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "profil":
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-green-900/30 to-emerald-900/20 rounded-2xl border border-green-700/30">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center">
                <CharacterComponent size={70} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-white">Misafir Oyuncu</h3>
                <p className="text-gray-400">Hesap olusturmak icin giris yapin</p>
                <div className="flex gap-4 mt-3">
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-400">0</div>
                    <div className="text-xs text-gray-500">Oyun</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-red-400">0</div>
                    <div className="text-xs text-gray-500">Oldurme</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-yellow-400">0</div>
                    <div className="text-xs text-gray-500">Rekor</div>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setShowLoginModal(true)}
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl font-bold hover:scale-105 transition-all"
              >
                Giris Yap
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {["Bronz", "Gumus", "Altin"].map((rank, i) => (
                <div key={rank} className={`p-4 rounded-xl text-center ${i === 0 ? 'bg-amber-900/30 border border-amber-700/30' : 'bg-[#1a2420] border border-green-900/20 opacity-50'}`}>
                  <Trophy className={`w-10 h-10 mx-auto mb-2 ${i === 0 ? 'text-amber-500' : 'text-gray-600'}`} />
                  <div className="font-bold text-white">{rank}</div>
                  <div className="text-xs text-gray-500">{i === 0 ? 'Mevcut' : 'Kilitli'}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case "magaza":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Ozel Teklifler</h3>
              <div className="flex items-center gap-2 px-4 py-2 bg-yellow-900/30 rounded-xl border border-yellow-700/30">
                <Coins className="w-5 h-5 text-yellow-400" />
                <span className="font-bold text-yellow-400">{coins.toLocaleString()}</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {shopItems.map((item) => (
                <div key={item.id} className={`relative p-5 rounded-2xl border transition-all hover:scale-[1.02] cursor-pointer ${item.popular ? 'bg-gradient-to-br from-yellow-900/40 to-amber-900/30 border-yellow-700/50' : 'bg-[#1a2420] border-green-900/30 hover:border-green-700/50'}`}>
                  {item.popular && (
                    <div className="absolute -top-2 -right-2 px-2 py-1 bg-yellow-500 text-black text-xs font-bold rounded-lg">POPULER</div>
                  )}
                  <item.icon className={`w-12 h-12 mb-3 ${item.popular ? 'text-yellow-400' : 'text-green-400'}`} />
                  <div className="font-bold text-white">{item.name}</div>
                  {item.amount && <div className="text-sm text-gray-400">{item.amount} adet</div>}
                  <div className="mt-3 text-xl font-black text-green-400">{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case "siralama":
        return (
          <div className="space-y-4">
            <div className="flex gap-2 p-1 bg-[#0a0f0a] rounded-xl">
              {["daily", "weekly", "all"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setLeaderboardTab(tab)}
                  className={`flex-1 px-4 py-3 rounded-lg font-bold transition-all ${leaderboardTab === tab ? 'bg-green-600 text-white' : 'text-gray-500 hover:text-white'}`}
                >
                  {tab === "daily" ? "GUNLUK" : tab === "weekly" ? "HAFTALIK" : "TUM ZAMANLAR"}
                </button>
              ))}
            </div>
            <div className="space-y-2">
              {leaderboardData.map((player) => {
                const CharComp = CharacterComponents[player.character];
                return (
                  <div
                    key={player.rank}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all hover:bg-green-900/10 ${
                      player.rank <= 3 ? 'bg-gradient-to-r from-yellow-900/20 to-transparent border border-yellow-700/20' : 'bg-[#1a2420]/50'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black ${
                      player.rank === 1 ? 'bg-gradient-to-br from-yellow-500 to-amber-600 text-black' :
                      player.rank === 2 ? 'bg-gradient-to-br from-gray-400 to-gray-500 text-black' :
                      player.rank === 3 ? 'bg-gradient-to-br from-amber-600 to-amber-700 text-black' :
                      'bg-[#0d1410] text-gray-500'
                    }`}>
                      {player.rank}
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-[#0d1410] flex items-center justify-center">
                      <CharComp size={38} />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-white text-lg">{player.name}</div>
                      <div className="text-sm text-gray-500">{player.kills} oldurme</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-black text-green-400">{player.score.toLocaleString()}</div>
                      <div className="text-xs text-gray-500">puan</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case "deriler":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Deri Koleksiyonu</h3>
              <div className="flex items-center gap-2 px-4 py-2 bg-yellow-900/30 rounded-xl border border-yellow-700/30">
                <Coins className="w-5 h-5 text-yellow-400" />
                <span className="font-bold text-yellow-400">{coins.toLocaleString()}</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {skins.map((skin) => (
                <div 
                  key={skin.id} 
                  className={`relative p-4 rounded-2xl border transition-all hover:scale-[1.02] cursor-pointer ${
                    skin.owned 
                      ? 'bg-gradient-to-br from-green-900/30 to-emerald-900/20 border-green-700/50' 
                      : 'bg-[#1a2420] border-green-900/30 hover:border-green-700/50'
                  }`}
                >
                  {skin.owned && (
                    <div className="absolute top-2 right-2">
                      <Check className="w-5 h-5 text-green-400" />
                    </div>
                  )}
                  <div className={`w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br ${getRarityBg(skin.rarity)} flex items-center justify-center`}>
                    <Palette className={`w-8 h-8 ${getRarityColor(skin.rarity)}`} />
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-white text-sm">{skin.name}</div>
                    <div className={`text-xs ${getRarityColor(skin.rarity)}`}>{skin.rarity}</div>
                    {!skin.owned && (
                      <div className="mt-2 flex items-center justify-center gap-1 text-yellow-400 font-bold">
                        <Coins className="w-4 h-4" />
                        {skin.price.toLocaleString()}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default: // oyun tab
        return (
          <>
            {/* Title */}
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl shadow-lg shadow-green-500/20">
                <TreePine className="w-10 h-10 text-white" />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Ormana Gir</h2>
                <p className="text-gray-500">Hayatta kal - Topla - Savas</p>
              </div>
            </div>

            {/* Name & Server */}
            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              <div className="flex-1 relative group">
                <Swords className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-green-500 transition-colors" />
                <input
                  type="text"
                  placeholder="Savasci adin..."
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-[#1a2420] rounded-xl border-2 border-green-900/30 focus:border-green-500 focus:ring-4 focus:ring-green-500/20 outline-none transition-all font-medium placeholder:text-gray-600 text-white"
                  maxLength={20}
                />
              </div>
              <div className="relative">
                <button
                  onClick={() => setServerDropdownOpen(!serverDropdownOpen)}
                  className="w-full sm:w-auto flex items-center justify-between gap-4 pl-4 pr-3 py-4 bg-[#1a2420] rounded-xl border-2 border-green-900/30 hover:border-green-700/50 transition-all font-medium"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-xs text-green-400">{selectedServerData?.ping}ms</span>
                    </div>
                    <span className="text-white">{selectedServer}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${serverDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {serverDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-[#0d1410] border border-green-900/30 rounded-xl overflow-hidden shadow-xl z-50 animate-fade-in">
                    {servers.map((server) => (
                      <button
                        key={server.id}
                        onClick={() => {
                          setSelectedServer(server.name);
                          setServerDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-4 py-3 hover:bg-green-900/20 transition-colors ${
                          selectedServer === server.name ? 'bg-green-900/30' : ''
                        }`}
                      >
                        <span className="text-white">{server.name}</span>
                        <div className="flex items-center gap-4">
                          <span className="text-xs text-gray-500">{server.players} oyuncu</span>
                          <span className={`text-xs font-medium ${server.ping < 30 ? 'text-green-400' : server.ping < 60 ? 'text-yellow-400' : 'text-red-400'}`}>
                            {server.ping}ms
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Event Banner */}
            <div className="relative overflow-hidden flex items-center justify-between p-4 bg-gradient-to-r from-yellow-900/30 via-yellow-800/20 to-transparent rounded-xl border border-yellow-700/30 mb-5">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(250,204,21,0.05),transparent)] animate-shimmer" />
              <div className="relative flex items-center gap-4">
                <div className="p-3 bg-yellow-500/20 rounded-xl border border-yellow-600/30">
                  <Zap className="w-7 h-7 text-yellow-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-semibold tracking-wider">AKTIF ETKINLIK</div>
                  <div className="font-black text-yellow-400 text-xl">Hiz Frenzy</div>
                </div>
              </div>
              <div className="relative text-right">
                <div className="text-xs text-gray-500">Kalan</div>
                <div className="font-mono font-black text-green-400 text-2xl tracking-wider">{formatTime(eventTime)}</div>
              </div>
            </div>

            {/* Play Button */}
            <button 
              onClick={handlePlay}
              onMouseEnter={() => setIsHoveringPlay(true)}
              onMouseLeave={() => setIsHoveringPlay(false)}
              disabled={isPlaying}
              className={`relative w-full overflow-hidden py-7 rounded-2xl font-black text-4xl text-white shadow-2xl transition-all mb-5 group ${
                isPlaying 
                  ? 'bg-gray-700 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 bg-[length:200%_100%] shadow-green-500/30 hover:shadow-green-500/50 hover:scale-[1.02] active:scale-[0.98]'
              }`}
              style={{
                animation: isHoveringPlay || isPlaying ? 'none' : 'gradient-shift 3s ease infinite',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <div className="relative flex items-center justify-center gap-4">
                {isPlaying ? (
                  <>
                    <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                    BAGLANIYOR...
                  </>
                ) : (
                  <>
                    <Play className="w-10 h-10 fill-current" />
                    OYNA!
                  </>
                )}
              </div>
            </button>

            {/* Invite */}
            <button className="w-full flex items-center justify-center gap-3 py-4 bg-[#1a2420] hover:bg-green-900/20 rounded-xl text-gray-400 hover:text-white transition-all border border-green-900/30 hover:border-green-700/30 group mb-5">
              <UserPlus className="w-5 h-5 group-hover:text-green-400 transition-colors" />
              <span>Arkadasini Davet Et & Birlikte Oyna!</span>
            </button>

            {/* Mode Selection */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              {[
                { id: "online", label: "CEVRIMICI", icon: Users, desc: "Gercek oyuncular" },
                { id: "offline", label: "CEVRIMDISI", icon: Eye, desc: "Botlara karsi" },
              ].map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setSelectedMode(mode.id)}
                  className={`flex flex-col items-center gap-1 py-5 rounded-xl font-bold transition-all ${
                    selectedMode === mode.id
                      ? "bg-gradient-to-br from-green-600 to-emerald-700 text-white shadow-lg shadow-green-500/20"
                      : "bg-[#1a2420] text-gray-400 hover:text-white hover:bg-green-900/20 border border-green-900/30"
                  }`}
                >
                  <mode.icon className="w-6 h-6" />
                  <span>{mode.label}</span>
                  <span className="text-xs opacity-60 font-normal">{mode.desc}</span>
                </button>
              ))}
            </div>

            {/* Game Type */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              {[
                { id: "classic", label: "KLASIK", icon: Gamepad2, color: "green", desc: "Standart mod" },
                { id: "survival", label: "HAYATTA KAL", icon: Heart, color: "red", desc: "Tek can" },
                { id: "team", label: "TAKIM", icon: Users, color: "blue", desc: "3v3 savas" },
              ].map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedGameType(type.id)}
                  className={`flex flex-col items-center gap-2 py-5 rounded-xl font-bold transition-all ${
                    selectedGameType === type.id
                      ? type.color === "green" 
                        ? "bg-gradient-to-br from-green-600/30 to-emerald-700/30 text-green-400 ring-2 ring-green-500 shadow-lg shadow-green-500/10"
                        : type.color === "red"
                        ? "bg-gradient-to-br from-red-600/30 to-rose-700/30 text-red-400 ring-2 ring-red-500"
                        : "bg-gradient-to-br from-blue-600/30 to-cyan-700/30 text-blue-400 ring-2 ring-blue-500"
                      : "bg-[#1a2420] text-gray-400 hover:text-white hover:bg-green-900/20 border border-green-900/30"
                  }`}
                >
                  <type.icon className="w-7 h-7" />
                  <span className="text-sm">{type.label}</span>
                  <span className="text-xs opacity-60 font-normal">{type.desc}</span>
                </button>
              ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              {[
                { icon: TreePine, label: "KAYNAK", desc: "Agac & tas kes", color: "text-green-400" },
                { icon: Hammer, label: "YAPI", desc: "Baz insa et", color: "text-amber-400" },
                { icon: Swords, label: "SAVAS", desc: "Dusmanlari yen", color: "text-red-400" },
                { icon: Crown, label: "LIDER", desc: "En iyisi sen ol", color: "text-yellow-400" },
              ].map((feature, i) => (
                <div key={i} className="flex flex-col items-center p-4 bg-[#1a2420]/50 rounded-xl text-center border border-green-900/20 hover:border-green-700/30 transition-all hover:bg-green-900/10 group">
                  <feature.icon className={`w-8 h-8 ${feature.color} mb-2 group-hover:scale-110 transition-transform`} />
                  <div className="text-xs font-bold text-white">{feature.label}</div>
                  <div className="text-xs text-gray-500">{feature.desc}</div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-3">
              {[
                { label: "OYUN", value: "148K", icon: Gamepad2 },
                { label: "OLDURME", value: "3M", icon: Target },
                { label: "REKOR", value: "892K", icon: TrendingUp },
                { label: "CEVRIMICI", value: onlinePlayers.toLocaleString(), icon: Users },
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 bg-gradient-to-b from-[#1a2420] to-[#0d1410] rounded-xl border border-green-900/20 group hover:border-green-700/30 transition-all">
                  <stat.icon className="w-5 h-5 text-gray-600 mx-auto mb-2 group-hover:text-green-500 transition-colors" />
                  <div className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">{stat.value}</div>
                  <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f0a] text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-900/15 via-transparent to-transparent" />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-500/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0d1410] rounded-2xl border border-green-900/50 p-6 w-full max-w-md animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Giris Yap</h3>
              <button onClick={() => setShowLoginModal(false)} className="p-2 hover:bg-green-900/30 rounded-lg transition-colors">
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            <div className="space-y-4">
              <input type="email" placeholder="E-posta" className="w-full px-4 py-3 bg-[#1a2420] rounded-xl border border-green-900/30 focus:border-green-500 outline-none text-white placeholder:text-gray-600" />
              <input type="password" placeholder="Sifre" className="w-full px-4 py-3 bg-[#1a2420] rounded-xl border border-green-900/30 focus:border-green-500 outline-none text-white placeholder:text-gray-600" />
              <button className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl font-bold hover:scale-[1.02] transition-all">
                Giris Yap
              </button>
              <div className="text-center text-gray-500 text-sm">
                Hesabin yok mu? <button className="text-green-400 hover:underline">Kayit Ol</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="relative z-20 border-b border-green-900/30 bg-[#0d1410]/90 backdrop-blur-xl">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-6">
          {/* Top Bar */}
          <div className="py-3 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg shadow-green-500/25">
                <TreePine className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl lg:text-3xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Forest</span>
                <span className="text-white">Brawl</span>
                <span className="text-yellow-400">.io</span>
              </h1>
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-2 lg:gap-3">
              {/* Online Counter */}
              <div className="hidden md:flex items-center gap-2 px-4 py-2.5 bg-green-950/50 backdrop-blur rounded-xl border border-green-800/30">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-sm font-semibold text-green-300">{onlinePlayers.toLocaleString()}</span>
                <span className="text-sm text-gray-400">cevrimici</span>
              </div>

              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="p-2.5 bg-[#1a2420] rounded-xl border border-green-900/30 hover:bg-green-900/30 hover:border-green-700/50 transition-all"
              >
                {soundEnabled ? <Volume2 className="w-5 h-5 text-green-400" /> : <VolumeX className="w-5 h-5 text-gray-500" />}
              </button>

              <button className="p-2.5 bg-[#1a2420] rounded-xl border border-green-900/30 hover:bg-green-900/30 hover:border-green-700/50 transition-all">
                <Settings className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </button>

              <button 
                onClick={() => setShowLoginModal(true)}
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-[#1a2420] hover:bg-green-900/30 rounded-xl font-semibold transition-all border border-green-900/30 hover:border-green-700/50"
              >
                <LogIn className="w-4 h-4" />
                Giris
              </button>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-yellow-500 to-amber-500 text-black rounded-xl font-bold shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 hover:scale-105 transition-all">
                <Star className="w-4 h-4" />
                <span className="hidden sm:inline">Uye Ol</span>
              </button>
            </div>
          </div>

          {/* Season Banner */}
          <div className="relative overflow-hidden bg-gradient-to-r from-yellow-600/20 via-green-600/10 to-yellow-600/20 px-4 py-3 flex items-center justify-center gap-4 text-sm border-y border-yellow-700/30">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(250,204,21,0.1),transparent)] animate-shimmer" />
            <span className="relative px-3 py-1 bg-gradient-to-r from-yellow-500 to-amber-500 text-black rounded-lg font-black text-xs shadow-lg">SEZON 1</span>
            <span className="relative font-semibold text-yellow-200">Orman Savascisi Sezonu - Ozel kozmetikler & oduller!</span>
            <span className="relative text-gray-400 hidden md:flex items-center gap-2">
              <Clock className="w-4 h-4 text-yellow-500" />
              28 gun kaldi
            </span>
          </div>

          {/* Navigation */}
          <nav className="py-2 flex gap-1 overflow-x-auto scrollbar-hide">
            {[
              { id: "oyun", label: "OYUN", icon: Gamepad2 },
              { id: "profil", label: "PROFIL", icon: User },
              { id: "magaza", label: "MAGAZA", icon: ShoppingBag },
              { id: "siralama", label: "SIRALAMA", icon: Trophy },
              { id: "deriler", label: "DERILER", icon: Palette },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/25"
                    : "text-gray-400 hover:text-white hover:bg-green-900/20"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-[1920px] mx-auto p-4 lg:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr_340px] gap-4 lg:gap-6">
          
          {/* Left Sidebar - Character */}
          <aside className="bg-gradient-to-b from-[#0d1410] to-[#0a0f0a] backdrop-blur-xl rounded-2xl p-5 border border-green-900/30">
            <div className="flex items-center gap-2 text-green-400 font-bold mb-4">
              <Swords className="w-5 h-5" />
              KARAKTER
            </div>

            {/* Character Preview */}
            <div className="relative mb-4">
              <div className={`aspect-square rounded-2xl bg-gradient-to-br ${getRarityBg(selectedCharacter.rarity)} flex items-center justify-center overflow-hidden border-2 relative`}>
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{ 
                    background: `radial-gradient(circle at center, ${selectedCharacter.color}40 0%, transparent 70%)` 
                  }}
                />
                <div className="relative z-10 animate-float">
                  <CharacterComponent size={140} isSelected={true} />
                </div>
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#0d1410] rounded-full border border-green-900/50 shadow-lg">
                <span className={`text-xs font-bold ${getRarityColor(selectedCharacter.rarity)}`}>
                  {"★".repeat(selectedCharacter.rarity === "Efsanevi" ? 3 : selectedCharacter.rarity === "Epik" ? 2 : 1)} {selectedCharacter.rarity.toUpperCase()}
                </span>
              </div>
            </div>

            <div className="text-center mb-4">
              <div className="font-bold text-lg text-white">{selectedCharacter.name}</div>
              <div className="text-sm text-gray-500">{selectedCharacter.description}</div>
            </div>

            {/* Stats */}
            <div className="space-y-2 mb-5 p-3 bg-[#0a0f0a] rounded-xl border border-green-900/20">
              {[
                { label: "Guc", value: selectedCharacter.power, color: "from-red-500 to-orange-500", icon: Swords },
                { label: "Hiz", value: selectedCharacter.speed, color: "from-blue-500 to-cyan-500", icon: Zap },
                { label: "Savunma", value: selectedCharacter.defense, color: "from-green-500 to-emerald-500", icon: Shield },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <stat.icon className="w-4 h-4 text-gray-500" />
                  <span className="text-xs text-gray-400 w-16">{stat.label}</span>
                  <div className="flex-1 h-2 bg-[#1a2420] rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-500`}
                      style={{ width: `${stat.value}%` }}
                    />
                  </div>
                  <span className="text-xs font-bold text-white w-8 text-right">{stat.value}</span>
                </div>
              ))}
            </div>

            {/* Character Grid */}
            <div className="grid grid-cols-3 gap-2">
              {characters.map((char) => {
                const CharComp = CharacterComponents[char.id];
                return (
                  <button
                    key={char.id}
                    onClick={() => char.unlocked && setSelectedCharacter(char)}
                    className={`aspect-square rounded-xl flex items-center justify-center relative transition-all hover:scale-105 ${
                      selectedCharacter.id === char.id
                        ? `ring-2 ring-green-500 bg-green-900/30 shadow-lg shadow-green-500/20`
                        : char.unlocked
                        ? "bg-[#1a2420] hover:bg-green-900/20 border border-green-900/30"
                        : "bg-[#0d1410] opacity-60 cursor-not-allowed border border-green-900/20"
                    }`}
                    disabled={!char.unlocked}
                  >
                    <CharComp size={50} isSelected={selectedCharacter.id === char.id} />
                    {!char.unlocked && (
                      <div className="absolute inset-0 bg-black/70 rounded-xl flex flex-col items-center justify-center backdrop-blur-sm">
                        <Lock className="w-4 h-4 text-gray-500" />
                        <span className="text-xs text-yellow-500 mt-1">{char.price}</span>
                      </div>
                    )}
                    {selectedCharacter.id === char.id && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Center - Main Panel */}
          <section className="bg-gradient-to-b from-[#0d1410] to-[#0a0f0a] backdrop-blur-xl rounded-2xl p-6 border border-green-900/30">
            {renderTabContent()}
          </section>

          {/* Right Sidebar */}
          <aside className="bg-gradient-to-b from-[#0d1410] to-[#0a0f0a] backdrop-blur-xl rounded-2xl p-5 border border-green-900/30 flex flex-col gap-5">
            {/* Leaderboard */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-yellow-400 font-bold">
                  <Trophy className="w-5 h-5" />
                  SIRALAMA
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-1 p-1 bg-[#0a0f0a] rounded-xl mb-4">
                {[
                  { id: "daily", label: "GUNLUK" },
                  { id: "weekly", label: "HAFTALIK" },
                  { id: "all", label: "TUMU" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setLeaderboardTab(tab.id)}
                    className={`flex-1 px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                      leaderboardTab === tab.id
                        ? "bg-green-600 text-white shadow"
                        : "text-gray-500 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Rankings */}
              <div className="space-y-2">
                {leaderboardData.slice(0, 5).map((player) => {
                  const CharComp = CharacterComponents[player.character];
                  return (
                    <div
                      key={player.rank}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all hover:bg-green-900/10 ${
                        player.rank === 1 ? "bg-yellow-900/20 border border-yellow-700/30" : "bg-[#1a2420]/50"
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm ${
                        player.rank === 1 ? "bg-gradient-to-br from-yellow-500 to-amber-600 text-black" :
                        player.rank === 2 ? "bg-gradient-to-br from-gray-400 to-gray-500 text-black" :
                        player.rank === 3 ? "bg-gradient-to-br from-amber-600 to-amber-700 text-black" :
                        "bg-[#0d1410] text-gray-500"
                      }`}>
                        {player.rank}
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-[#0d1410] flex items-center justify-center overflow-hidden">
                        <CharComp size={32} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-white truncate">{player.name}</div>
                        <div className="text-xs text-gray-500">{player.kills} oldurme</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-400">{player.score.toLocaleString()}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tips */}
            <div className="p-4 bg-[#1a2420]/50 rounded-xl border border-green-900/20">
              <div className="flex items-center gap-2 text-green-400 font-bold text-sm mb-3">
                <Sparkles className="w-4 h-4" />
                IPUCLARI
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <CircleDot className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span key={currentTip} className="animate-fade-in">{tips[currentTip]}</span>
              </div>
            </div>

            {/* Live Feed */}
            <div>
              <div className="flex items-center gap-2 text-red-400 font-bold mb-3">
                <Flame className="w-5 h-5" />
                CANLI OYUN
              </div>
              <div className="space-y-2 max-h-48 overflow-y-auto scrollbar-hide">
                {liveFeed.map((event, i) => (
                  <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-[#1a2420]/30 text-sm">
                    {event.type === "kill" ? (
                      <>
                        <Crosshair className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-400">
                          <span className="text-white font-medium">{event.killer}</span>
                          <span className="text-red-400 mx-1">&#8594;</span>
                          <span className="text-gray-500">{event.victim}</span>
                        </span>
                      </>
                    ) : event.type === "score" ? (
                      <>
                        <Medal className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-400">
                          <span className="text-white font-medium">{event.player}</span>
                          <span className="text-yellow-400 ml-1">{event.amount} puan</span>
                        </span>
                      </>
                    ) : event.type === "legendary" ? (
                      <>
                        <Gem className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-400">
                          <span className="text-white font-medium">{event.player}</span>
                          <span className="text-purple-400 ml-1">{event.item}</span>
                        </span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-blue-400">{event.message}</span>
                      </>
                    )}
                    <span className="text-gray-600 text-xs ml-auto">{event.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Champion */}
            <div className="mt-auto p-4 bg-gradient-to-br from-yellow-900/30 to-amber-900/20 rounded-xl border border-yellow-700/30">
              <div className="flex items-center gap-2 text-yellow-400 font-bold text-sm mb-3">
                <Crown className="w-5 h-5" />
                BUGUNUN SAMPIYONU
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500/20 to-amber-600/20 flex items-center justify-center border border-yellow-600/30">
                    <WolfCharacter size={45} />
                  </div>
                  <div className="absolute -bottom-1 -right-1 p-1 bg-yellow-500 rounded-full">
                    <Crown className="w-3 h-3 text-black" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="font-bold text-white">OrmanKrali</div>
                  <div className="flex items-center gap-1 text-yellow-400 text-sm font-semibold">
                    <Trophy className="w-4 h-4" />
                    12,847 puan
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
