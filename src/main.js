const PROFILES = [
  { id: '1', name: 'Sudiksha', gradient: 'gradient-1', avatar: 'S' },
  { id: '2', name: 'Guest', gradient: 'gradient-2', avatar: 'G' },
  { id: '3', name: 'Kids', gradient: 'gradient-3', avatar: '🧸', isKids: true },
  { id: 'add', name: 'Add Profile', gradient: 'gradient-add', avatar: '+', isAdd: true },
];
const API = 'https://cinematch-production.up.railway.app';
const GENRES = ['Sci-Fi','Thriller','Mystery','Crime','Drama','Comedy','Fantasy','Anime','Action','Romance','Documentary','Horror'];

const ACTOR_SUGGESTIONS = ['Shah Rukh Khan','Pedro Pascal','Tom Holland','Ryan Gosling','Leonardo DiCaprio','Deepika Padukone','Alia Bhatt','Zendaya','Cillian Murphy','Florence Pugh'];

const MOODS = [
  { label:'Happy', icon:'😊' }, { label:'Sad', icon:'😢' },
  { label:'Relaxed', icon:'😌' }, { label:'Mind-Bending', icon:'🌀' },
  { label:'Motivated', icon:'💪' }, { label:'Romantic', icon:'💕' },
  { label:'Need Comfort', icon:'🤗' }, { label:'Focused', icon:'🎯' },
  { label:'Excited', icon:'⚡' }, { label:'Casual', icon:'😎' },
];

const WATCH_TIMES = ['15-30 Minutes','1 Hour','2 Hours','Weekend Binge','Entire Season'];
const CONTENT_TYPES = ['Movies','Web Series','Anime','Documentaries','Mixed'];
const LANGUAGES = ['English','Hindi','Korean','Japanese','Spanish','Mixed'];

const PLATFORM_COLORS = {
  'Netflix':'#E50914','HBO Max':'#6441a5','Prime Video':'#00A8E0',
  'Disney+':'#113CCF','Apple TV+':'#555','Crunchyroll':'#F47521','Mubi':'#262626',
};

const CONTENT_ITEMS = [
  { id:'1', title:'The Last of Us', genre:['Drama','Sci-Fi','Thriller'], matchScore:96, platform:'HBO Max', poster:'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg', year:2023, duration:'1h 5m', description:'A post-apocalyptic journey of survival and connection between a smuggler and a teenager.' },
  { id:'2', title:'Dark', genre:['Mystery','Sci-Fi','Thriller'], matchScore:94, platform:'Netflix', poster:'https://image.tmdb.org/t/p/w500/apnpAnU2CDpTpCUWAZpyiHGqLFN.jpg', year:2017, duration:'50m', description:'A time-travel conspiracy thriller spanning four interconnected family trees across centuries.' },
  { id:'3', title:'Oppenheimer', genre:['Drama','History','Thriller'], matchScore:91, platform:'Prime Video', poster:'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg', year:2023, duration:'3h', description:'The story of J. Robert Oppenheimer and the creation of the atomic bomb.' },
  { id:'4', title:'Squid Game', genre:['Thriller','Drama','Crime'], matchScore:89, platform:'Netflix', poster:'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg', year:2021, duration:'55m', description:"Indebted players risk their lives in children's games for a prize worth billions." },
  { id:'5', title:'Dune: Part Two', genre:['Sci-Fi','Action','Fantasy'], matchScore:93, platform:'HBO Max', poster:'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg', year:2024, duration:'2h 46m', description:'Paul Atreides unites with the Fremen to seek revenge against those who destroyed his family.' },
  { id:'6', title:'True Detective', genre:['Mystery','Crime','Drama'], matchScore:88, platform:'HBO Max', poster:'https://image.tmdb.org/t/p/w500/nVRyd8hlg0ZLxBn9RaI7mUMQLnz.jpg', year:2014, duration:'55m', description:'Two detectives investigate a series of brutal murders in Louisiana over 17 years.' },
  { id:'7', title:'Attack on Titan', genre:['Anime','Action','Fantasy'], matchScore:90, platform:'Crunchyroll', poster:'https://image.tmdb.org/t/p/w500/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg', year:2013, duration:'24m', description:'Humanity fights for survival against monstrous giants behind towering walls.' },
  { id:'8', title:'Interstellar', genre:['Sci-Fi','Drama','Mystery'], matchScore:95, platform:'Prime Video', poster:'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg', year:2014, duration:'2h 49m', description:"A team of explorers travel through a wormhole in space to ensure humanity's survival." },
  { id:'9', title:'Money Heist', genre:['Crime','Thriller','Drama'], matchScore:87, platform:'Netflix', poster:'https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg', year:2017, duration:'45m', description:'A criminal mastermind plans two heists while holding multiple hostages.' },
  { id:'10', title:'The Bear', genre:['Drama','Comedy','Thriller'], matchScore:92, platform:'Disney+', poster:'https://image.tmdb.org/t/p/w500/sHFlbKS3WLqMnp9t2ghADIJFnuQ.jpg', year:2022, duration:'35m', description:"A young chef returns home to run his family's sandwich shop after his brother's death." },
  { id:'11', title:'Succession', genre:['Drama','Comedy','Thriller'], matchScore:91, platform:'HBO Max', poster:'https://image.tmdb.org/t/p/w500/7HW47XbkNQ5fiwQFYGWdw9gs144.jpg', year:2018, duration:'58m', description:'The Roy family battles over who will inherit control of their media empire.' },
  { id:'12', title:'Severance', genre:['Sci-Fi','Mystery','Thriller'], matchScore:94, platform:'Apple TV+', poster:'https://image.tmdb.org/t/p/w500/gKS5jl0DPdGbJTFgSPSEGDRmZK9.jpg', year:2022, duration:'50m', description:"A company separates employees' work and personal memories through a surgical procedure." },
  { id:'13', title:'Wednesday', genre:['Comedy','Fantasy','Mystery'], matchScore:82, platform:'Netflix', poster:'https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg', year:2022, duration:'45m', description:'Wednesday Addams navigates life at Nevermore Academy while investigating supernatural mysteries.' },
  { id:'14', title:'Midnight Mass', genre:['Horror','Drama','Mystery'], matchScore:85, platform:'Netflix', poster:'https://image.tmdb.org/t/p/w500/j6FYO1AQGK5eJCxQpRnfEh2FGXX.jpg', year:2021, duration:'60m', description:"A small island community experiences miraculous events following a young priest's arrival." },
  { id:'15', title:'Shogun', genre:['Drama','Action','History'], matchScore:93, platform:'Disney+', poster:'https://image.tmdb.org/t/p/w500/7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg', year:2024, duration:'58m', description:'An English navigator and a powerful Japanese lord forge an unlikely alliance in feudal Japan.' },
  { id:'16', title:'Parasite', genre:['Drama','Thriller','Crime'], matchScore:96, platform:'Mubi', poster:'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg', year:2019, duration:'2h 12m', description:'A poor family schemes to become employed by a wealthy family with shocking consequences.' },
];

const CONTENT_ROWS = [
  { title:'Because You Like Mystery', items:[1,5,7,11,13,3] },
  { title:'Late Night Picks', items:[5,1,13,3,8,2] },
  { title:'Comfort Shows', items:[9,12,10,6,0,15] },
  { title:'Trending This Week', items:[14,4,2,0,3,11] },
  { title:'Top AI Matches', items:[0,7,11,15,4,1] },
  { title:'Based On Your Mood', items:[8,2,6,9,13,5] },
  { title:'Hidden Gems', items:[13,9,12,5,6,15] },
];

const AI_EXPLANATIONS = {
  'The Last of Us': 'You enjoy emotionally driven mystery stories and currently prefer relaxed viewing. This title aligns with your preferred genres, favorite actors, and available watch time.',
  'Dark': "Your taste profile strongly matches time-loop narratives and psychological thrillers. Dark's German precision storytelling fits your mood and watch time perfectly.",
  'Interstellar': 'Given your Sci-Fi preference and 2+ hour watch window, Interstellar offers exactly the mind-expanding cinematic experience your profile calls for.',
  'Severance': 'Your love of mystery and corporate psychological tension makes Severance an ideal match. The runtime perfectly suits your watch preference.',
  'Dune: Part Two': 'Combining Sci-Fi grandeur with action-epic storytelling, Dune 2 matches your genre picks and the watch time you have set for yourself today.',
};

const SEARCH_EXAMPLES = [
  'I want something like Dark but less depressing',
  'Need a comfort show after exams',
  'Recommend a thriller with a strong female lead',
  'Something mind-bending for a Friday night',
];

const NAV_ITEMS = [
  { page:'home', label:'Home' },
  { page:'discover', label:'Discover' },
  { page:'mood', label:'Mood Search' },
  { page:'watchlist', label:'Watchlist' },
  { page:'trending', label:'Trending' },
  { page:'analytics', label:'Analytics' },
  { page:'settings', label:'Settings' },
];

const icons = {
  tv: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="15" rx="2"/><polyline points="17 2 12 7 7 2"/></svg>`,
  bot: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="15" x2="8" y2="15"/><line x1="16" y1="15" x2="16" y2="15"/></svg>`,
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  compass: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
  smile: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 13s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
  bookmark: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>`,
  trending: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
  barChart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  chevRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>`,
  chevLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="m19 6-.867 12.142A2 2 0 0 1 16.138 20H7.862a2 2 0 0 1-1.995-1.858L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  film: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  link: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  zap: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  flame: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
  bell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  palette: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  database: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
  info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
};

const NAV_ICONS = {
  home: icons.home, discover: icons.compass, mood: icons.smile,
  watchlist: icons.bookmark, trending: icons.trending,
  analytics: icons.barChart, settings: icons.settings,
};


const state = {
  
  token: localStorage.getItem('cm_token') || null,
  currentUser: null,  

  profile: null,   
  page: 'home',
  taste: null,
  watchlist: [],
  addedActors: [],
  selectedGenres: [],
  selectedMood: '',
  selectedWatchTime: '',
  selectedContentType: '',
  selectedLanguage: '',
  searchQuery: '',
  searchFocused: false,
  discoverFilter: null,
  discoverSearch: '',
  moodFilter: null,
  tasteGenerated: false,
};


async function apiFetch(path, options = {}) {
  const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };
  if (state.token) headers['Authorization'] = `Bearer ${state.token}`;
  const res = await fetch(API + path, { ...options, headers });
  const data = await res.json();
  if (!res.ok) throw new Error(data.detail || 'Request failed');
  return data;
}



function $ (sel, ctx = document) { return ctx.querySelector(sel); }
function $$ (sel, ctx = document) { return [...ctx.querySelectorAll(sel)]; }
function esc(str) { return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

const MOOD_GENRE_MAP = {
  'Happy':        ['Comedy','Animation','Family','Romance','Fantasy'],
  'Sad':          ['Drama','Romance','Documentary'],
  'Relaxed':      ['Comedy','Documentary','Drama','Family'],
  'Mind-Bending': ['Sci-Fi','Mystery','Thriller','Horror'],
  'Motivated':    ['Action','Drama','Documentary'],
  'Romantic':     ['Romance','Drama'],
  'Need Comfort': ['Comedy','Animation','Drama','Family'],
  'Focused':      ['Documentary','Mystery','Drama'],
  'Excited':      ['Action','Adventure','Sci-Fi','Fantasy','Thriller'],
  'Casual':       ['Comedy','Action','Anime','Fantasy'],
};

const WATCHTIME_DURATION_MAP = {
  '15-30 Minutes': { max: 35 },
  '1 Hour':        { min: 36, max: 75 },
  '2 Hours':       { min: 60, max: 150 },
  'Weekend Binge': { min: 40 },  
  'Entire Season': { min: 20 },  
};

function parseDuration(dur) {
  if (!dur) return 60;
  const h = dur.match(/(\d+)h/);
  const m = dur.match(/(\d+)m/);
  return (h ? parseInt(h[1]) * 60 : 0) + (m ? parseInt(m[1]) : 0);
}

function computeScore(item) {
  const moodGenres = MOOD_GENRE_MAP[state.selectedMood] || [];
  const moodMatches = item.genre.filter(g => moodGenres.includes(g)).length;

  if (state.selectedMood && moodMatches === 0) return 30;

  let score = 40;

  score += moodMatches * 20;

  const genreMatches = item.genre.filter(g => state.selectedGenres.includes(g)).length;
  score += genreMatches * 8;

  const wtConfig = WATCHTIME_DURATION_MAP[state.selectedWatchTime];
  if (wtConfig) {
    const mins = parseDuration(item.duration);
    const fits = (!wtConfig.min || mins >= wtConfig.min) && (!wtConfig.max || mins <= wtConfig.max);
    if (fits) score += 12;
  }

  if (state.selectedContentType) {
    const ct = state.selectedContentType.toLowerCase();
    if (ct === 'anime' && item.genre.includes('Anime')) score += 8;
    else if (ct === 'documentaries' && item.genre.includes('Documentary')) score += 8;
    else if (ct === 'movies' && parseDuration(item.duration) >= 60) score += 5;
    else if (ct === 'web series' && parseDuration(item.duration) < 90) score += 5;
    else if (ct === 'mixed') score += 4;
  }

  score += item.matchScore * 0.05;

  score += Math.random() * 3;

  return Math.min(99, Math.max(55, Math.round(score)));
}

function getScoredItems() {
  return CONTENT_ITEMS.map(item => ({ ...item, matchScore: computeScore(item) }))
    .sort((a, b) => b.matchScore - a.matchScore);
}

function getTopMatch() {
  return getScoredItems()[0];
}

function triggerBars() {
  setTimeout(() => {
    $$('.match-bar-fill').forEach(el => { el.style.width = el.dataset.width || '0%'; });
    $$('.mini-bar-fill').forEach(el => { el.style.width = el.dataset.width || '0%'; });
    $$('.analytics-fill').forEach(el => { el.style.width = el.dataset.width || '0%'; });
    $$('.trending-score-fill').forEach(el => { el.style.width = el.dataset.width || '0%'; });
  }, 100);
}

function createParticles(container) {
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `left:${Math.random()*100}%;bottom:0;animation-duration:${7+Math.random()*5}s;animation-delay:${Math.random()*6}s;`;
    container.appendChild(p);
  }
}

function matchBarHTML(score, showLabel = true) {
  return `
    <div class="match-bar-wrap">
      ${showLabel ? `<div class="match-bar-top"><span>Match Score</span><strong>${score}%</strong></div>` : ''}
      <div class="match-bar-track"><div class="match-bar-fill" data-width="${score}%" style="width:0"></div></div>
    </div>`;
}

function miniBarHTML(score) {
  return `<div class="mini-bar"><div class="mini-bar-fill" data-width="${score}%" style="width:0"></div></div>`;
}

function platformTagStyle(platform) {
  return PLATFORM_COLORS[platform] || '#444';
}

function contentCardHTML(item, index = 0) {
  return `
    <div class="content-card" style="animation-delay:${index * 0.05}s">
      <div class="content-card-poster">
        <img src="${esc(item.poster)}" alt="${esc(item.title)}" loading="lazy" />
        <div class="card-hover-overlay">
          <button class="play-circle">${icons.play}</button>
          <button class="add-circle" data-add-id="${esc(item.id)}">${icons.plus}</button>
        </div>
        <div class="card-match-badge">${icons.star}<span>${item.matchScore}%</span></div>
        <div class="card-platform-tag" style="background:${platformTagStyle(item.platform)}">${esc(item.platform)}</div>
      </div>
      <div class="content-card-info">
        <p class="content-card-title">${esc(item.title)}</p>
        <p class="content-card-genre">${item.genre.slice(0,2).join(' · ')}</p>
        ${miniBarHTML(item.matchScore)}
      </div>
    </div>`;
}


async function initApp() {
  if (state.token) {
    try {
      const data = await apiFetch('/auth/me');
      state.currentUser = data;
      renderProfileSelection();
      return;
    } catch(e) {
      state.token = null;
      localStorage.removeItem('cm_token');
    }
  }
  renderLogin();
}

function authBgHTML() {
  return `
    <div style="position:fixed;inset:0;z-index:0;overflow:hidden">
      <div style="position:absolute;inset:0;display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(3,1fr);gap:3px;opacity:0.18;filter:blur(1px) saturate(1.4)">
        ${[
          'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
          'https://image.tmdb.org/t/p/w500/apnpAnU2CDpTpCUWAZpyiHGqLFN.jpg',
          'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
          'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg',
          'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
          'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
          'https://image.tmdb.org/t/p/w500/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg',
          'https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg',
          'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
          'https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg',
          'https://image.tmdb.org/t/p/w500/gKS5jl0DPdGbJTFgSPSEGDRmZK9.jpg',
          'https://image.tmdb.org/t/p/w500/7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg',
        ].map(src => `<img src="${src}" style="width:100%;height:100%;object-fit:cover">`).join('')}
      </div>
      <div style="position:absolute;inset:0;background:linear-gradient(135deg,rgba(0,0,0,0.92) 0%,rgba(10,0,5,0.88) 50%,rgba(0,0,0,0.95) 100%)"></div>
      <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 30% 50%,rgba(229,9,20,0.12) 0%,transparent 60%)"></div>
    </div>`;
}

function authCardHTML(title, subtitle, formHTML, footerHTML) {
  return `
    <div style="position:relative;z-index:1;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px">
      <div style="width:100%;max-width:420px;animation:scaleIn .4s ease both">
        <div style="display:flex;align-items:center;gap:10px;justify-content:center;margin-bottom:32px">
          <div style="width:40px;height:40px;background:var(--accent);border-radius:14px;display:flex;align-items:center;justify-content:center;box-shadow:0 0 28px var(--accent-glow)">${icons.tv}</div>
          <div style="font-size:22px;font-weight:900;letter-spacing:-0.5px">CineMatch<span style="color:var(--accent)"> AI</span></div>
        </div>
        <div style="background:rgba(17,17,17,0.9);border:1px solid rgba(255,255,255,0.08);border-radius:24px;padding:32px;backdrop-filter:blur(20px);box-shadow:0 32px 80px rgba(0,0,0,0.6)">
          <h2 style="font-size:24px;font-weight:800;margin-bottom:6px">${title}</h2>
          <p style="color:var(--text2);font-size:14px;margin-bottom:28px">${subtitle}</p>
          ${formHTML}
        </div>
        <div style="text-align:center;margin-top:20px;font-size:13px;color:var(--text3)">${footerHTML}</div>
      </div>
    </div>`;
}

function inputHTML(id, type, placeholder, label) {
  return `
    <div style="margin-bottom:16px">
      <label style="display:block;font-size:12px;font-weight:600;color:var(--text2);margin-bottom:7px;text-transform:uppercase;letter-spacing:.08em">${label}</label>
      <input id="${id}" type="${type}" placeholder="${placeholder}"
        style="width:100%;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:13px 16px;font-size:14px;color:#fff;outline:none;transition:border-color .2s;font-family:var(--font)"
        onfocus="this.style.borderColor='rgba(229,9,20,0.5)'" onblur="this.style.borderColor='rgba(255,255,255,0.1)'" />
    </div>`;
}

function authSubmitBtn(id, label) {
  return `<button id="${id}" style="width:100%;background:var(--accent);color:#fff;padding:14px;border-radius:12px;font-size:15px;font-weight:700;border:none;cursor:pointer;transition:all .2s;margin-top:8px;font-family:var(--font)" onmouseover="this.style.background='var(--accent-hover)';this.style.transform='scale(1.01)'" onmouseout="this.style.background='var(--accent)';this.style.transform='scale(1)'">${label}</button>`;
}

function showAuthError(id, msg) {
  const el = document.getElementById(id);
  if (el) { el.textContent = msg; el.style.display = 'block'; }
}

function renderLogin() {
  const app = $('#app');
  app.innerHTML = authBgHTML() + authCardHTML(
    'Welcome back',
    'Sign in to your CineMatch account',
    `${inputHTML('login-email','email','you@example.com','Email')}
     ${inputHTML('login-pass','password','••••••••','Password')}
     <div id="login-err" style="display:none;color:#f87171;font-size:13px;margin-bottom:12px;padding:10px 14px;background:rgba(248,113,113,0.1);border-radius:8px;border:1px solid rgba(248,113,113,0.2)"></div>
     ${authSubmitBtn('login-btn','Sign In')}`,
    `Don't have an account? <button id="go-register" style="color:var(--accent);background:none;border:none;cursor:pointer;font-size:13px;font-weight:600">Create one</button>`
  );

  $('#login-btn').addEventListener('click', async () => {
    const btn = $('#login-btn');
    const email = $('#login-email').value.trim();
    const pass = $('#login-pass').value;
    if (!email || !pass) return showAuthError('login-err', 'Please fill in all fields');
    btn.textContent = 'Signing in...'; btn.disabled = true;
    try {
      const data = await apiFetch('/auth/login', { method:'POST', body: JSON.stringify({ email, password: pass }) });
      state.token = data.token;
      state.currentUser = data.user;
      localStorage.setItem('cm_token', data.token);
      renderProfileSelection();
    } catch(e) {
      showAuthError('login-err', e.message);
      btn.textContent = 'Sign In'; btn.disabled = false;
    }
  });

  $('#login-pass').addEventListener('keydown', e => { if(e.key==='Enter') $('#login-btn').click(); });
  $('#go-register').addEventListener('click', renderRegister);
}

function renderRegister() {
  const app = $('#app');
  app.innerHTML = authBgHTML() + authCardHTML(
    'Create your account',
    'Join CineMatch AI — your personal film intelligence',
    `${inputHTML('reg-name','text','Your name','Full Name')}
     ${inputHTML('reg-email','email','you@example.com','Email')}
     ${inputHTML('reg-pass','password','Min 6 characters','Password')}
     <div id="reg-err" style="display:none;color:#f87171;font-size:13px;margin-bottom:12px;padding:10px 14px;background:rgba(248,113,113,0.1);border-radius:8px;border:1px solid rgba(248,113,113,0.2)"></div>
     ${authSubmitBtn('reg-btn','Create Account')}`,
    `Already have an account? <button id="go-login" style="color:var(--accent);background:none;border:none;cursor:pointer;font-size:13px;font-weight:600">Sign in</button>`
  );

  $('#reg-btn').addEventListener('click', async () => {
    const btn = $('#reg-btn');
    const name = $('#reg-name').value.trim();
    const email = $('#reg-email').value.trim();
    const pass = $('#reg-pass').value;
    if (!name || !email || !pass) return showAuthError('reg-err', 'Please fill in all fields');
    if (pass.length < 6) return showAuthError('reg-err', 'Password must be at least 6 characters');
    btn.textContent = 'Creating...'; btn.disabled = true;
    try {
      const data = await apiFetch('/auth/register', { method:'POST', body: JSON.stringify({ name, email, password: pass }) });
      state.token = data.token;
      state.currentUser = data.user;
      localStorage.setItem('cm_token', data.token);
      renderProfileSelection();
    } catch(e) {
      showAuthError('reg-err', e.message);
      btn.textContent = 'Create Account'; btn.disabled = false;
    }
  });

  $('#go-login').addEventListener('click', renderLogin);
}

function renderCreateProfile() {
  const gradients = [
    { id:'gradient-1', css:'linear-gradient(135deg,#f43f5e,#db2777,#9333ea)', label:'Rose' },
    { id:'gradient-2', css:'linear-gradient(135deg,#0ea5e9,#2563eb,#6366f1)', label:'Ocean' },
    { id:'gradient-3', css:'linear-gradient(135deg,#fbbf24,#f97316,#ef4444)', label:'Sunset' },
    { id:'gradient-4', css:'linear-gradient(135deg,#10b981,#059669,#0d9488)', label:'Forest' },
    { id:'gradient-5', css:'linear-gradient(135deg,#8b5cf6,#7c3aed,#6d28d9)', label:'Purple' },
  ];
  const GRADIENT_CSS = Object.fromEntries(gradients.map(g => [g.id, g.css]));
  let chosenGradient = 'gradient-1';
  let isKids = false;

  const app = $('#app');
  app.innerHTML = authBgHTML() + `
    <div style="position:relative;z-index:1;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px">
      <div style="width:100%;max-width:460px;animation:scaleIn .4s ease both">
        <div style="display:flex;align-items:center;gap:10px;justify-content:center;margin-bottom:28px">
          <div style="width:40px;height:40px;background:var(--accent);border-radius:14px;display:flex;align-items:center;justify-content:center;box-shadow:0 0 28px var(--accent-glow)">${icons.tv}</div>
          <div style="font-size:22px;font-weight:900;letter-spacing:-0.5px">CineMatch<span style="color:var(--accent)"> AI</span></div>
        </div>
        <div style="background:rgba(17,17,17,0.9);border:1px solid rgba(255,255,255,0.08);border-radius:24px;padding:32px;backdrop-filter:blur(20px)">
          <h2 style="font-size:22px;font-weight:800;margin-bottom:6px">Create a profile</h2>
          <p style="color:var(--text2);font-size:13px;margin-bottom:24px">Add a new profile to your account</p>

          <!-- Avatar Preview -->
          <div style="display:flex;justify-content:center;margin-bottom:24px">
            <div id="avatar-preview" style="width:96px;height:96px;border-radius:22px;background:${gradients[0].css};display:flex;align-items:center;justify-content:center;font-size:38px;font-weight:900;color:#fff;box-shadow:0 8px 32px rgba(0,0,0,0.4);transition:background .3s">A</div>
          </div>

          ${inputHTML('cp-name','text','e.g. Sudiksha, Kids, Dad...','Profile Name')}

          <!-- Gradient picker -->
          <div style="margin-bottom:18px">
            <label style="display:block;font-size:12px;font-weight:600;color:var(--text2);margin-bottom:10px;text-transform:uppercase;letter-spacing:.08em">Choose Color</label>
            <div style="display:flex;gap:10px" id="gradient-picker">
              ${gradients.map(g => `
                <div data-grad="${g.id}" data-css="${g.css}" style="width:40px;height:40px;border-radius:12px;background:${g.css};cursor:pointer;border:3px solid ${g.id==='gradient-1'?'white':'transparent'};transition:border .2s;box-shadow:0 4px 12px rgba(0,0,0,0.3)"></div>
              `).join('')}
            </div>
          </div>

          <!-- Kids toggle -->
          <div style="display:flex;align-items:center;justify-content:space-between;padding:14px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;margin-bottom:20px">
            <div>
              <p style="font-size:13px;font-weight:500;color:#fff">Kids Profile</p>
              <span style="font-size:11px;color:var(--text3)">Safe content only</span>
            </div>
            <div id="kids-toggle" class="toggle"><div class="toggle-thumb"></div></div>
          </div>

          <div id="cp-err" style="display:none;color:#f87171;font-size:13px;margin-bottom:12px;padding:10px 14px;background:rgba(248,113,113,0.1);border-radius:8px"></div>
          ${authSubmitBtn('cp-btn','Create Profile')}
        </div>
        <div style="text-align:center;margin-top:16px">
          <button id="cp-back" style="color:var(--text3);background:none;border:none;cursor:pointer;font-size:13px">← Back to profiles</button>
        </div>
      </div>
    </div>`;

  const nameInput = $('#cp-name');
  const preview = $('#avatar-preview');
  nameInput.addEventListener('input', () => {
    preview.textContent = nameInput.value.trim()[0]?.toUpperCase() || 'A';
  });

  $$('#gradient-picker [data-grad]').forEach(el => {
    el.addEventListener('click', () => {
      chosenGradient = el.dataset.grad;
      preview.style.background = el.dataset.css;
      $$('#gradient-picker [data-grad]').forEach(e => e.style.borderColor = 'transparent');
      el.style.borderColor = 'white';
    });
  });

  $('#kids-toggle').addEventListener('click', () => {
    isKids = !isKids;
    $('#kids-toggle').classList.toggle('on', isKids);
  });

  $('#cp-btn').addEventListener('click', async () => {
    const btn = $('#cp-btn');
    const name = nameInput.value.trim();
    if (!name) return showAuthError('cp-err', 'Please enter a profile name');
    btn.textContent = 'Creating...'; btn.disabled = true;
    try {
      const data = await apiFetch('/profiles', {
        method: 'POST',
        body: JSON.stringify({ name, avatar: name[0].toUpperCase(), gradient: chosenGradient, is_kids: isKids })
      });
      state.currentUser.profiles.push(data.profile);
      renderProfileSelection();
    } catch(e) {
      showAuthError('cp-err', e.message);
      btn.textContent = 'Create Profile'; btn.disabled = false;
    }
  });

  $('#cp-back').addEventListener('click', renderProfileSelection);
}


function renderProfileSelection() {
  const app = $('#app');
  app.innerHTML = `
    <div id="profile-screen">
      <div class="profile-bg"></div>
      <div class="profile-overlay"></div>
      <div class="profile-gradient"></div>
      <div class="profile-glow" id="particles-host"></div>

      <div class="profile-logo">
        <div class="profile-logo-icon">${icons.tv}</div>
        <div>
          <div class="profile-logo-name">CineMatch<span> AI</span></div>
        </div>
      </div>

      <h1 class="profile-title">Who's Watching Tonight?</h1>
      <p class="profile-subtitle">Select your profile to get personalized recommendations</p>

      <div class="profiles-grid">
        ${(state.currentUser?.profiles || []).map((p, i) => `
          <div class="profile-card" data-profile-id="${esc(p.profile_id)}" style="animation-delay:${0.1*i + 0.4}s">
            <div class="profile-avatar ${esc(p.gradient)}">
              <span>${esc(p.avatar)}</span>
            </div>
            <span class="profile-name">${esc(p.name)}</span>
            ${p.is_kids ? `<span class="profile-kids-tag">Kids Mode</span>` : ''}
          </div>`).join('')}
        <div class="profile-card" id="add-profile-card" style="animation-delay:${0.1*(state.currentUser?.profiles?.length||0) + 0.4}s">
          <div class="profile-avatar gradient-add">
            <span style="font-size:32px;color:#a1a1aa">${icons.plus}</span>
          </div>
          <span class="profile-name">Add Profile</span>
        </div>
      </div>

      <p class="profile-hint">Powered by AI · Personalized for you</p>
    </div>`;

  createParticles($('#particles-host'));

  const addCard = $('#add-profile-card');
  if (addCard) addCard.addEventListener('click', renderCreateProfile);

  $$('.profile-card[data-profile-id]').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.profileId;
      const profile = (state.currentUser?.profiles || []).find(p => p.profile_id === id);
      if (!profile) return;
      state.profile = profile;
      if (profile.taste) {
        const t = profile.taste;
        state.taste = t;
        state.selectedGenres = t.genres || [];
        state.addedActors = t.actors || [];
        state.selectedMood = t.mood || '';
        state.selectedWatchTime = t.watchTime || '';
        state.selectedContentType = t.contentType || '';
        state.selectedLanguage = t.language || '';
        state.tasteGenerated = true;
        renderMoodPopup();
        return;
      }
      renderQuestionnaire();
    });

    card.addEventListener('mouseenter', () => {
      const badge = card.querySelector('.profile-badge');
      if (!badge) {
        const id = card.dataset.profileId;
        const profile = PROFILES.find(p => p.id === id);
        if (profile && !profile.isAdd) {
          const el = document.createElement('div');
          el.className = 'profile-badge';
          el.innerHTML = icons.sparkles;
          card.querySelector('.profile-avatar').appendChild(el);
        }
      }
    });

    card.addEventListener('mouseleave', () => {
      const badge = card.querySelector('.profile-badge');
      if (badge) badge.remove();
    });
  });
}

function renderQuestionnaire() {
  const app = $('#app');
  app.innerHTML = `
    <div id="questionnaire-screen" style="min-height:100vh;background:var(--bg);display:flex;flex-direction:column;align-items:center;padding:48px 24px">
      <div style="width:100%;max-width:680px">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
          <div style="width:36px;height:36px;background:var(--accent);border-radius:12px;display:flex;align-items:center;justify-content:center;box-shadow:0 0 20px var(--accent-glow)">${icons.tv}</div>
          <div style="font-size:18px;font-weight:800">CineMatch<span style="color:var(--accent)"> AI</span></div>
        </div>
        <h1 style="font-size:clamp(26px,4vw,38px);font-weight:900;margin-bottom:8px">Hey ${esc(state.profile.name)}, let's build your taste profile</h1>
        <p style="color:var(--text2);font-size:14px;margin-bottom:36px">Answer a few quick questions so we can recommend exactly what you'll love.</p>

        <!-- Genres -->
        <div style="background:var(--bg2);border:1px solid var(--border);border-radius:18px;padding:22px;margin-bottom:16px">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px">
            <div style="width:28px;height:28px;background:var(--accent-dim);border-radius:8px;display:flex;align-items:center;justify-content:center">${icons.film}</div>
            <span style="font-size:15px;font-weight:600">Favorite Genres</span>
          </div>
          <p style="font-size:12px;color:var(--text3);margin-bottom:14px">Select all that apply</p>
          <div class="chips-wrap" id="q-genre-chips">
            ${GENRES.map(g => `<button class="chip${state.selectedGenres.includes(g)?' selected':''}" data-genre="${esc(g)}">${esc(g)}</button>`).join('')}
          </div>
        </div>

        <!-- Mood -->
        <div style="background:var(--bg2);border:1px solid var(--border);border-radius:18px;padding:22px;margin-bottom:16px">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px">
            <div style="width:28px;height:28px;background:var(--accent-dim);border-radius:8px;display:flex;align-items:center;justify-content:center">${icons.smile}</div>
            <span style="font-size:15px;font-weight:600">How are you feeling right now?</span>
          </div>
          <div class="mood-grid" id="q-mood-chips">
            ${MOODS.map(m => `<button class="mood-chip${state.selectedMood===m.label?' selected':''}" data-mood="${esc(m.label)}"><span class="emoji">${m.icon}</span>${esc(m.label)}</button>`).join('')}
          </div>
        </div>

        <!-- Watch Time -->
        <div style="background:var(--bg2);border:1px solid var(--border);border-radius:18px;padding:22px;margin-bottom:16px">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px">
            <div style="width:28px;height:28px;background:var(--accent-dim);border-radius:8px;display:flex;align-items:center;justify-content:center">${icons.clock}</div>
            <span style="font-size:15px;font-weight:600">How much time do you have?</span>
          </div>
          <div class="option-btns" id="q-watchtime-btns">
            ${WATCH_TIMES.map(t => `<button class="option-btn${state.selectedWatchTime===t?' selected':''}" data-watchtime="${esc(t)}">${esc(t)}</button>`).join('')}
          </div>
        </div>

        <!-- Content Type -->
        <div style="background:var(--bg2);border:1px solid var(--border);border-radius:18px;padding:22px;margin-bottom:16px">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px">
            <div style="width:28px;height:28px;background:var(--accent-dim);border-radius:8px;display:flex;align-items:center;justify-content:center">${icons.film}</div>
            <span style="font-size:15px;font-weight:600">Content Type</span>
          </div>
          <div class="option-btns" id="q-content-btns">
            ${CONTENT_TYPES.map(c => `<button class="option-btn${state.selectedContentType===c?' selected':''}" data-contenttype="${esc(c)}">${esc(c)}</button>`).join('')}
          </div>
        </div>

        <!-- Language -->
        <div style="background:var(--bg2);border:1px solid var(--border);border-radius:18px;padding:22px;margin-bottom:28px">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px">
            <div style="width:28px;height:28px;background:var(--accent-dim);border-radius:8px;display:flex;align-items:center;justify-content:center">${icons.globe}</div>
            <span style="font-size:15px;font-weight:600">Language Preference</span>
          </div>
          <div class="option-btns" id="q-language-btns">
            ${LANGUAGES.map(l => `<button class="option-btn${state.selectedLanguage===l?' selected':''}" data-language="${esc(l)}">${esc(l)}</button>`).join('')}
          </div>
        </div>

        <button class="generate-btn" id="q-generate-btn" ${!(state.selectedGenres.length > 0 && state.selectedMood && state.selectedWatchTime && state.selectedContentType && state.selectedLanguage) ? 'disabled' : ''}>
          ${icons.sparkles} Let's Go — Build My Profile
        </button>
        <p class="generate-hint" style="margin-top:12px">Fill all sections to continue</p>
      </div>
    </div>`;

  $$('#q-genre-chips .chip').forEach(btn => {
    btn.addEventListener('click', () => {
      const g = btn.dataset.genre;
      const idx = state.selectedGenres.indexOf(g);
      if (idx >= 0) state.selectedGenres.splice(idx, 1);
      else state.selectedGenres.push(g);
      btn.classList.toggle('selected', state.selectedGenres.includes(g));
      checkQBtn();
    });
  });

  $$('#q-mood-chips .mood-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedMood = btn.dataset.mood === state.selectedMood ? '' : btn.dataset.mood;
      $$('#q-mood-chips .mood-chip').forEach(b => b.classList.toggle('selected', b.dataset.mood === state.selectedMood));
      checkQBtn();
    });
  });

  $$('#q-watchtime-btns .option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedWatchTime = btn.dataset.watchtime;
      $$('#q-watchtime-btns .option-btn').forEach(b => b.classList.toggle('selected', b.dataset.watchtime === state.selectedWatchTime));
      checkQBtn();
    });
  });

  $$('#q-content-btns .option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedContentType = btn.dataset.contenttype;
      $$('#q-content-btns .option-btn').forEach(b => b.classList.toggle('selected', b.dataset.contenttype === state.selectedContentType));
      checkQBtn();
    });
  });

  $$('#q-language-btns .option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedLanguage = btn.dataset.language;
      $$('#q-language-btns .option-btn').forEach(b => b.classList.toggle('selected', b.dataset.language === state.selectedLanguage));
      checkQBtn();
    });
  });

  function checkQBtn() {
    const btn = $('#q-generate-btn');
    if (btn) btn.disabled = !(state.selectedGenres.length > 0 && state.selectedMood && state.selectedWatchTime && state.selectedContentType && state.selectedLanguage);
  }

  const genBtn = $('#q-generate-btn');
  if (genBtn) {
    genBtn.addEventListener('click', () => {
      const taste = { genres: state.selectedGenres, actors: state.addedActors, mood: state.selectedMood, watchTime: state.selectedWatchTime, contentType: state.selectedContentType, language: state.selectedLanguage };
      state.taste = taste;
      state.tasteGenerated = true;
      if (state.profile?.profile_id) {
        apiFetch(`/profiles/${state.profile.profile_id}`, { method:'PUT', body: JSON.stringify({ taste }) }).catch(()=>{});
        state.profile.taste = taste;
      }
      renderDashboard();
    });
  }
}

function renderMoodPopup() {
  const app = $('#app');
  app.innerHTML = `
    <div id="mood-popup-screen" style="min-height:100vh;background:var(--bg);display:flex;align-items:center;justify-content:center;padding:24px">
      <div style="width:100%;max-width:520px;animation:scaleIn .4s ease both">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px">
          <div style="width:36px;height:36px;background:var(--accent);border-radius:12px;display:flex;align-items:center;justify-content:center;box-shadow:0 0 20px var(--accent-glow)">${icons.tv}</div>
          <div>
            <div style="font-size:16px;font-weight:800">Welcome back, ${esc(state.profile.name)}!</div>
            <div style="font-size:12px;color:var(--text3)">Let's find something perfect for tonight</div>
          </div>
        </div>

        <div style="background:var(--bg2);border:1px solid var(--border);border-radius:20px;padding:28px">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
            <span style="font-size:22px">🎬</span>
            <h2 style="font-size:20px;font-weight:800">What's your mood tonight?</h2>
          </div>
          <p style="color:var(--text2);font-size:13px;margin-bottom:22px">Pick how you're feeling and we'll find your perfect watch</p>

          <div class="mood-grid" id="popup-mood-chips">
            ${MOODS.map(m => `<button class="mood-chip" data-mood="${esc(m.label)}"><span class="emoji">${m.icon}</span>${esc(m.label)}</button>`).join('')}
          </div>

          <div style="margin-top:20px;padding-top:16px;border-top:1px solid var(--border);display:flex;align-items:center;justify-content:space-between">
            <button id="skip-mood-btn" style="font-size:13px;color:var(--text3);background:none;border:none;cursor:pointer;padding:8px 0">Skip → Go to Dashboard</button>
            <button id="confirm-mood-btn" class="generate-btn" disabled style="width:auto;padding:12px 24px">
              ${icons.sparkles} Let's Watch
            </button>
          </div>
        </div>
      </div>
    </div>`;

  let chosenMood = '';

  $$('#popup-mood-chips .mood-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      chosenMood = btn.dataset.mood === chosenMood ? '' : btn.dataset.mood;
      $$('#popup-mood-chips .mood-chip').forEach(b => b.classList.toggle('selected', b.dataset.mood === chosenMood));
      const confirmBtn = $('#confirm-mood-btn');
      if (confirmBtn) confirmBtn.disabled = !chosenMood;
    });
  });

  const confirmBtn = $('#confirm-mood-btn');
  if (confirmBtn) {
    confirmBtn.addEventListener('click', () => {
      state.selectedMood = chosenMood;
      const updatedTaste = { ...state.taste, mood: chosenMood };
      state.taste = updatedTaste;
      if (state.profile?.profile_id) {
        apiFetch(`/profiles/${state.profile.profile_id}`, { method:'PUT', body: JSON.stringify({ taste: updatedTaste }) }).catch(()=>{});
        state.profile.taste = updatedTaste;
      }
      renderDashboard();
    });
  }

  const skipBtn = $('#skip-mood-btn');
  if (skipBtn) {
    skipBtn.addEventListener('click', () => renderDashboard());
  }
}

function renderDashboard() {
  const app = $('#app');
  app.innerHTML = `
    <div id="dashboard">
      ${renderSidebarHTML()}
      <div class="main-content">
        ${renderTopbarHTML()}
        <div class="page-content" id="page-content"></div>
      </div>
    </div>`;

  setupSidebarEvents();
  setupTopbarEvents();
  renderPage();
}

function renderSidebarHTML() {
  const p = state.profile;
  return `
    <aside class="sidebar">
      <div class="sidebar-logo">
        <div class="sidebar-logo-icon">${icons.tv}</div>
        <div class="sidebar-logo-text">
          <div class="sidebar-logo-title">CineMatch</div>
          <div class="sidebar-logo-sub">${icons.bot}<span>AI</span></div>
        </div>
      </div>

      <nav class="sidebar-nav" id="sidebar-nav">
        ${NAV_ITEMS.map(item => `
          <button class="nav-btn${state.page === item.page ? ' active' : ''}" data-page="${item.page}">
            ${NAV_ICONS[item.page]}
            ${esc(item.label)}
            ${state.page === item.page ? '<span class="nav-dot"></span>' : ''}
          </button>`).join('')}
      </nav>

      <div class="sidebar-ai-badge">
        <div class="sidebar-ai-badge-header">${icons.bot}<span>AI Engine Active</span></div>
        <p>Taste model updated · 2h ago</p>
      </div>

      <div style="margin:0 12px 10px;display:flex;gap:6px">
        <button class="sidebar-profile-btn" id="switch-profile-btn" style="flex:1;margin:0">
          <div class="sidebar-profile-avatar ${esc(p.gradient)}">${esc(p.avatar)}</div>
          <div class="sidebar-profile-info">
            <strong>${esc(p.name)}</strong>
            <span>Switch Profile</span>
          </div>
        </button>
        <button id="logout-btn" title="Logout" style="width:36px;height:36px;background:rgba(255,255,255,0.05);border:1px solid var(--border);border-radius:10px;display:flex;align-items:center;justify-content:center;color:var(--text3);cursor:pointer;transition:all .2s;flex-shrink:0" onmouseover="this.style.background='rgba(229,9,20,0.15)';this.style.color='#f87171'" onmouseout="this.style.background='rgba(255,255,255,0.05)';this.style.color='var(--text3)'">${icons.x}</button>
      </div>
    </aside>`;
}

function renderTopbarHTML() {
  return `
    <div class="topbar">
      <div class="search-wrap">
        <div class="search-icon">${icons.search}</div>
        <input type="text" class="search-input" id="search-input" placeholder="Describe what you want to watch..." value="${esc(state.searchQuery)}" />
        ${state.searchQuery ? `<button class="search-clear" id="search-clear">${icons.x}</button>` : ''}
        <div class="search-dropdown ${state.searchFocused && !state.searchQuery ? '' : 'hidden'}" id="search-dropdown">
          <div class="search-dropdown-header">${icons.bot} Try asking...</div>
          ${SEARCH_EXAMPLES.map(ex => `<button class="search-suggestion" data-query="${esc(ex)}">"${esc(ex)}"</button>`).join('')}
        </div>
      </div>
    </div>`;
}

function setupSidebarEvents() {
  $$('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.page = btn.dataset.page;
      updateSidebarActive();
      renderPage();
    });
  });

  const switchBtn = $('#switch-profile-btn');
  if (switchBtn) {
    switchBtn.addEventListener('click', () => {
      state.profile = null;
      initApp();
    });
  }
}

function updateSidebarActive() {
  $$('.nav-btn').forEach(btn => {
    const isActive = btn.dataset.page === state.page;
    btn.classList.toggle('active', isActive);
    const existingDot = btn.querySelector('.nav-dot');
    if (isActive && !existingDot) {
      const dot = document.createElement('span');
      dot.className = 'nav-dot';
      btn.appendChild(dot);
    } else if (!isActive && existingDot) {
      existingDot.remove();
    }
  });
}

function setupTopbarEvents() {
  const input = $('#search-input');
  const dropdown = $('#search-dropdown');
  const clearBtn = $('#search-clear');

  if (input) {
    input.addEventListener('input', e => {
      state.searchQuery = e.target.value;
      if (dropdown) dropdown.classList.toggle('hidden', !(!state.searchQuery && state.searchFocused));
      if (clearBtn) clearBtn.classList.toggle('hidden', !state.searchQuery);
    });

    input.addEventListener('focus', () => {
      state.searchFocused = true;
      if (dropdown && !state.searchQuery) dropdown.classList.remove('hidden');
    });

    input.addEventListener('blur', () => {
      setTimeout(() => {
        state.searchFocused = false;
        if (dropdown) dropdown.classList.add('hidden');
      }, 200);
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      state.searchQuery = '';
      if (input) { input.value = ''; input.focus(); }
      if (dropdown) dropdown.classList.remove('hidden');
    });
  }

  $$('.search-suggestion').forEach(btn => {
    btn.addEventListener('click', () => {
      state.searchQuery = btn.dataset.query;
      if (input) input.value = btn.dataset.query;
      if (dropdown) dropdown.classList.add('hidden');
    });
  });
}

function renderPage() {
  const container = $('#page-content');
  if (!container) return;

  const renderers = {
    home: renderHome,
    discover: renderDiscover,
    mood: renderMoodSearch,
    watchlist: renderWatchlist,
    trending: renderTrending,
    analytics: renderAnalytics,
    settings: renderSettings,
  };

  container.style.opacity = '0';
  container.style.transform = 'translateX(20px)';
  container.innerHTML = '';

  setTimeout(() => {
    const renderer = renderers[state.page] || renderHome;
    renderer(container);
    container.style.transition = 'opacity .4s ease, transform .4s ease';
    container.style.opacity = '1';
    container.style.transform = 'translateX(0)';
    triggerBars();
    setupPageEvents(container);
  }, 80);
}

function renderHome(container) {
  const top = getTopMatch();
  const explanation = AI_EXPLANATIONS[top.title] || `Based on your ${state.selectedMood || 'current'} mood and ${state.selectedGenres.slice(0,2).join(', ')||'selected'} preferences, this title is your perfect match right now.`;

  const otherMatches = getScoredItems()
    .filter(c => c.id !== top.id)
    .slice(0, 3);

  container.innerHTML = `
    ${renderHeroHTML(top)}
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-bottom:28px">
      ${renderAIRecommendationsHTML(top, explanation, otherMatches)}
      ${renderTasteProfileHTML()}
    </div>
    ${renderImportTasteHTML()}
    ${renderContentRowsHTML()}`;
}

function renderHeroHTML(top) {
  return `
    <div class="hero" id="hero-section">
      <img class="hero-poster" src="${esc(top.poster)}" alt="${esc(top.title)}" />
      <div class="hero-overlay"></div>
      <div class="hero-overlay-bottom"></div>

      <div class="hero-match-badge">
        <div class="hero-score-pill">${icons.star}<span>${top.matchScore}% Match</span></div>
        <div class="hero-platform-tag" style="background:${platformTagStyle(top.platform)}">${esc(top.platform)}</div>
      </div>

      <div class="hero-content">
        <div class="hero-eyebrow">${icons.sparkles}<span>Tonight's Perfect Match</span></div>
        <h1 class="hero-title">${esc(top.title)}</h1>
        <div class="hero-meta">
          ${top.genre.map(g => `<span class="hero-genre-chip">${esc(g)}</span>`).join('')}
          <span class="hero-dot">·</span><span style="color:var(--text2);font-size:13px">${top.year}</span>
          ${top.duration ? `<span class="hero-dot">·</span><span style="color:var(--text2);font-size:13px">${top.duration}</span>` : ''}
        </div>
        <p class="hero-desc">${esc(top.description || '')}</p>
        <div class="hero-accuracy">
          <span class="hero-accuracy-label">AI Accuracy</span>
          <div class="accuracy-pill">
            <div class="accuracy-dot"></div>
            <span class="score">${top.matchScore}%</span>
            <span class="unit">accuracy</span>
          </div>
          ${state.selectedMood ? `<span class="hero-mood-note">based on <span>${esc(state.selectedMood)}</span> mood</span>` : ''}
        </div>
        <div class="hero-buttons">
          <button class="btn-primary" id="hero-trailer-btn">${icons.play} Watch Trailer</button>
          <button class="btn-secondary" id="hero-why-btn">${icons.sparkles} Why Recommended</button>
        </div>
      </div>

      <!-- Why modal -->
      <div class="hero-modal-overlay hidden" id="why-modal">
        <div class="hero-modal">
          <div class="hero-modal-header">
            <div class="hero-modal-header-left">${icons.sparkles}<h3>Why We Recommend This</h3></div>
            <button class="modal-close" id="close-why-modal">${icons.x}</button>
          </div>
          <p>"You enjoy emotionally driven mystery stories and currently prefer relaxed viewing. This title aligns with your preferred genres, favorite actors, and available watch time."</p>
          <div class="modal-stats">
            ${[['Mood Fit','Relaxed viewing pace'],['Genre Match','Drama + Sci-Fi'],['Actor Match','Pedro Pascal'],['Runtime','Perfect for 2hr window']].map(([k,v])=>`<div class="modal-stat"><div class="modal-stat-label">${k}</div><div class="modal-stat-val">${v}</div></div>`).join('')}
          </div>
          <div class="modal-footer">
            <span>Overall Match</span>
            <strong>${top.matchScore}%</strong>
          </div>
          <button class="modal-close-btn" id="close-why-btn">Close</button>
        </div>
      </div>

      <!-- Trailer modal -->
      <div class="hero-modal-overlay hidden" id="trailer-modal">
        <div class="hero-modal">
          <div class="hero-modal-header">
            <div class="hero-modal-header-left">${icons.play}<h3>Trailer Player</h3></div>
            <button class="modal-close" id="close-trailer-modal">${icons.x}</button>
          </div>
          <p>Real trailer streaming will be available when connected to the TMDB backend.</p>
          <div class="modal-stats">
            <div class="modal-stat"><div class="modal-stat-label">Backend</div><div class="modal-stat-val">FastAPI + TMDB</div></div>
            <div class="modal-stat"><div class="modal-stat-label">Status</div><div class="modal-stat-val">Backend Ready</div></div>
          </div>
          <button class="modal-close-btn" id="close-trailer-btn">Close</button>
        </div>
      </div>
    </div>`;
}

function renderAIRecommendationsHTML(top, explanation, others) {
  const hasProfile = !!(state.taste || state.selectedMood);
  return `
    <div>
      <div class="ai-header" style="margin-bottom:16px">
        <div class="ai-header-left">
          <div class="ai-header-icon">${icons.bot}</div>
          <div><h2>AI Recommendation Engine</h2><p>Powered by your taste profile</p></div>
        </div>
        <div class="ai-active-badge">${icons.zap}<span>Active</span></div>
      </div>

      ${hasProfile ? `
        <div class="context-panel">
          <div class="context-label">Current Context</div>
          <div class="context-grid">
            ${[
              ['Mood', icons.smile, state.selectedMood || '—'],
              ['Genres', icons.film, state.selectedGenres.slice(0,2).join(', ') || '—'],
              ['Time', icons.clock, state.selectedWatchTime || '—'],
              ['Language', icons.globe, state.selectedLanguage || '—'],
            ].map(([label, icon, val]) => `
              <div class="context-card">
                <div class="context-card-header">${icon}<span class="context-card-label">${label}</span></div>
                <p>${esc(val)}</p>
              </div>`).join('')}
          </div>
        </div>` : ''}

      <div class="top-match-card">
        <div class="top-match-header">${icons.star}<span>Top Match Tonight</span></div>
        <div class="top-match-body">
          <img class="top-match-poster" src="${esc(top.poster)}" alt="${esc(top.title)}" />
          <div class="top-match-info">
            <h3>${esc(top.title)}</h3>
            <div class="genre-chips">${top.genre.map(g=>`<span class="genre-chip">${esc(g)}</span>`).join('')}</div>
            ${matchBarHTML(top.matchScore)}
            <div class="top-match-meta">
              <span style="color:var(--text3);font-size:11px">on</span>
              <span class="platform-tag">${esc(top.platform)}</span>
              <span style="color:var(--text3);font-size:11px">·</span>
              <span style="color:var(--text3);font-size:11px">${top.year}</span>
            </div>
          </div>
        </div>
        <div class="ai-explain">
          <div class="ai-explain-header">${icons.sparkles}<span>Why Recommended</span></div>
          <p>"${esc(explanation)}"</p>
        </div>
      </div>

      <div class="other-matches">
        <div class="other-label">More AI Matches</div>
        ${others.map(item => `
          <div class="match-item">
            <img class="match-item-poster" src="${esc(item.poster)}" alt="${esc(item.title)}" />
            <div class="match-item-info">
              <p>${esc(item.title)}</p>
              <span>${item.genre.slice(0,2).join(' · ')}</span>
              ${matchBarHTML(item.matchScore, false)}
            </div>
            <div class="match-item-score">
              <strong>${item.matchScore}%</strong>
              <span>${esc(item.platform)}</span>
              ${icons.chevRight}
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

function renderTasteProfileHTML() {
  const complete = state.selectedGenres.length > 0 && state.selectedMood && state.selectedWatchTime && state.selectedContentType && state.selectedLanguage;
  return `
    <div>
      <div class="section-card">
        <div class="section-header">
          <div class="section-icon">${icons.user}</div>
          <h2 class="section-title">Tell CineMatch About Yourself</h2>
        </div>
        <p class="section-subtitle">The better we know your taste, the smarter the recommendations.</p>

        <!-- Genres -->
        <div class="taste-section">
          <div class="taste-section-header">
            <div class="taste-icon">${icons.film}</div>
            <span class="taste-section-title">Favorite Genres</span>
          </div>
          <p class="taste-section-sub">Select all that apply</p>
          <div class="chips-wrap" id="genre-chips">
            ${GENRES.map(g => `<button class="chip${state.selectedGenres.includes(g)?' selected':''}" data-genre="${esc(g)}">${esc(g)}</button>`).join('')}
          </div>
        </div>

        <!-- Actors -->
        <div class="taste-section">
          <div class="taste-section-header">
            <div class="taste-icon">${icons.user}</div>
            <span class="taste-section-title">Favorite Actors</span>
          </div>
          <p class="taste-section-sub">Search and add your favorites</p>
          <div class="actor-input-row">
            <input type="text" class="actor-input" id="actor-input" placeholder="Type an actor's name and press Enter..." />
            <button class="btn-add-actor" id="add-actor-btn">Add</button>
          </div>
          <div class="actor-suggestions">
            ${ACTOR_SUGGESTIONS.filter(a => !state.addedActors.includes(a)).map(a =>
              `<button class="actor-suggestion" data-actor="${esc(a)}">+ ${esc(a)}</button>`
            ).join('')}
          </div>
          <div class="added-actors" id="added-actors">
            ${state.addedActors.map(a => `
              <span class="actor-tag">${esc(a)}<button class="actor-tag-remove" data-remove-actor="${esc(a)}">×</button></span>
            `).join('')}
          </div>
        </div>

        <!-- Mood -->
        <div class="taste-section">
          <div class="taste-section-header">
            <div class="taste-icon">${icons.smile}</div>
            <span class="taste-section-title">Current Mood</span>
          </div>
          <p class="taste-section-sub">How are you feeling right now?</p>
          <div class="mood-grid" id="mood-chips">
            ${MOODS.map(m => `<button class="mood-chip${state.selectedMood===m.label?' selected':''}" data-mood="${esc(m.label)}"><span class="emoji">${m.icon}</span>${esc(m.label)}</button>`).join('')}
          </div>
        </div>

        <!-- Watch Time -->
        <div class="taste-section">
          <div class="taste-section-header">
            <div class="taste-icon">${icons.clock}</div>
            <span class="taste-section-title">How much time do you have today?</span>
          </div>
          <p class="taste-section-sub">We'll match recommendations to your schedule</p>
          <div class="option-btns" id="watchtime-btns">
            ${WATCH_TIMES.map(t => `<button class="option-btn${state.selectedWatchTime===t?' selected':''}" data-watchtime="${esc(t)}">${esc(t)}</button>`).join('')}
          </div>
        </div>

        <!-- Content Type -->
        <div class="taste-section">
          <div class="taste-section-header">
            <div class="taste-icon">${icons.film}</div>
            <span class="taste-section-title">Content Type</span>
          </div>
          <p class="taste-section-sub">What format are you in the mood for?</p>
          <div class="option-btns" id="content-btns">
            ${CONTENT_TYPES.map(c => `<button class="option-btn${state.selectedContentType===c?' selected':''}" data-contenttype="${esc(c)}">${esc(c)}</button>`).join('')}
          </div>
        </div>

        <!-- Language -->
        <div class="taste-section">
          <div class="taste-section-header">
            <div class="taste-icon">${icons.globe}</div>
            <span class="taste-section-title">Language Preference</span>
          </div>
          <p class="taste-section-sub">Select your preferred viewing language</p>
          <div class="option-btns" id="language-btns">
            ${LANGUAGES.map(l => `<button class="option-btn${state.selectedLanguage===l?' selected':''}" data-language="${esc(l)}">${esc(l)}</button>`).join('')}
          </div>
        </div>

        <button class="generate-btn" id="generate-btn" ${!complete?'disabled':''}>
          ${icons.sparkles} ${state.tasteGenerated ? 'Update My Taste Profile' : 'Build My Taste Profile'}
        </button>
        ${!complete ? `<p class="generate-hint">Please fill in all sections to generate your profile</p>` : ''}
      </div>

      ${state.tasteGenerated ? renderProfileSummaryHTML() : ''}
    </div>`;
}

function renderProfileSummaryHTML() {
  return `
    <div class="profile-summary">
      <div class="profile-summary-header">${icons.sparkles}<h3>Your Taste Profile</h3></div>
      <div class="profile-summary-grid">
        ${[
          ['Genres', state.selectedGenres.slice(0,3).join(', ') + (state.selectedGenres.length>3?` +${state.selectedGenres.length-3}`:'')],
          ['Mood', state.selectedMood],
          ['Watch Time', state.selectedWatchTime],
          ['Content', state.selectedContentType],
          ['Language', state.selectedLanguage],
          ['Actors', state.addedActors.slice(0,2).join(', ') || '—'],
        ].map(([label,val]) => `
          <div class="summary-stat">
            <div class="summary-stat-label">${label}</div>
            <div class="summary-stat-val">${esc(val||'—')}</div>
          </div>`).join('')}
      </div>
    </div>`;
}

function renderImportTasteHTML() {
  const platforms = [
    { name:'Netflix', color:'#E50914', bg:'#1a0000', logo:'N', desc:'Import your watch history and ratings' },
    { name:'Prime Video', color:'#00A8E0', bg:'#001a24', logo:'P', desc:'Sync your Prime watchlist' },
    { name:'Disney+', color:'#113CCF', bg:'#000a1a', logo:'D+', desc:'Connect your Disney+ profile' },
    { name:'YouTube', color:'#FF0000', bg:'#1a0000', logo:'▶', desc:'Import from your YouTube history' },
  ];
  return `
    <div class="section-card" style="margin-bottom:28px">
      <div class="section-header">
        <div class="section-icon">${icons.link}</div>
        <h2 class="section-title">Import Your Taste</h2>
      </div>
      <p class="section-subtitle">Connect your streaming accounts for smarter recommendations.</p>
      <div class="import-grid">
        ${platforms.map(p => `
          <div class="import-card" style="background:${p.bg}">
            <div class="import-card-top">
              <div class="import-logo" style="background:${p.color}">${p.logo}</div>
              <div><div class="import-card-name">${p.name}</div><div class="import-card-desc">${p.desc}</div></div>
            </div>
            <div class="coming-soon-tag">${icons.clock} Manual Import Coming Soon</div>
          </div>`).join('')}
      </div>
      <p class="import-footer">Real API integration available with FastAPI + OAuth backend</p>
    </div>`;
}

function renderContentRowsHTML() {
  return CONTENT_ROWS.map(row => `
    <div class="content-row">
      <div class="row-header">
        <h3 class="row-title">${esc(row.title)}</h3>
        <div class="row-scroll-btns">
          <button class="scroll-btn" data-scroll-row="${esc(row.title)}" data-dir="left">${icons.chevLeft}</button>
          <button class="scroll-btn" data-scroll-row="${esc(row.title)}" data-dir="right">${icons.chevRight}</button>
        </div>
      </div>
      <div class="row-track" id="row-${esc(row.title.replace(/\s+/g,'-'))}">
        ${row.items.map((idx, i) => contentCardHTML(CONTENT_ITEMS[idx], i)).join('')}
      </div>
    </div>`).join('');
}

function setupPageEvents(container) {

  const whyBtn = container.querySelector('#hero-why-btn');
  const trailerBtn = container.querySelector('#hero-trailer-btn');
  const whyModal = container.querySelector('#why-modal');
  const trailerModal = container.querySelector('#trailer-modal');

  if (whyBtn && whyModal) {
    whyBtn.addEventListener('click', () => whyModal.classList.remove('hidden'));
    container.querySelectorAll('#close-why-modal,#close-why-btn').forEach(el => {
      el.addEventListener('click', () => whyModal.classList.add('hidden'));
    });
    whyModal.addEventListener('click', e => { if(e.target === whyModal) whyModal.classList.add('hidden'); });
  }

  if (trailerBtn && trailerModal) {
    trailerBtn.addEventListener('click', () => trailerModal.classList.remove('hidden'));
    container.querySelectorAll('#close-trailer-modal,#close-trailer-btn').forEach(el => {
      el.addEventListener('click', () => trailerModal.classList.add('hidden'));
    });
    trailerModal.addEventListener('click', e => { if(e.target === trailerModal) trailerModal.classList.add('hidden'); });
  }

  container.querySelectorAll('[data-genre]').forEach(btn => {
    btn.addEventListener('click', () => {
      const g = btn.dataset.genre;
      const idx = state.selectedGenres.indexOf(g);
      if (idx >= 0) state.selectedGenres.splice(idx, 1);
      else state.selectedGenres.push(g);
      btn.classList.toggle('selected', state.selectedGenres.includes(g));
      updateGenerateBtn(container);
    });
  });

  const actorInput = container.querySelector('#actor-input');
  const addActorBtn = container.querySelector('#add-actor-btn');

  function addActor(name) {
    const trimmed = name.trim();
    if (!trimmed || state.addedActors.includes(trimmed)) return;
    state.addedActors.push(trimmed);
    refreshActorUI(container);
  }

  if (actorInput) {
    actorInput.addEventListener('keydown', e => { if (e.key === 'Enter') { addActor(actorInput.value); actorInput.value = ''; } });
  }
  if (addActorBtn && actorInput) {
    addActorBtn.addEventListener('click', () => { addActor(actorInput.value); actorInput.value = ''; });
  }

  container.querySelectorAll('.actor-suggestion').forEach(btn => {
    btn.addEventListener('click', () => { addActor(btn.dataset.actor); refreshActorUI(container); });
  });

  const addedContainer = container.querySelector('#added-actors');
  if (addedContainer) {
    addedContainer.addEventListener('click', e => {
      const removeBtn = e.target.closest('[data-remove-actor]');
      if (removeBtn) {
        const actor = removeBtn.dataset.removeActor;
        state.addedActors = state.addedActors.filter(a => a !== actor);
        refreshActorUI(container);
      }
    });
  }

  container.querySelectorAll('[data-mood]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedMood = btn.dataset.mood === state.selectedMood ? '' : btn.dataset.mood;
      container.querySelectorAll('[data-mood]').forEach(b => b.classList.toggle('selected', b.dataset.mood === state.selectedMood));
      updateGenerateBtn(container);
    });
  });

  container.querySelectorAll('[data-watchtime]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedWatchTime = btn.dataset.watchtime;
      container.querySelectorAll('[data-watchtime]').forEach(b => b.classList.toggle('selected', b.dataset.watchtime === state.selectedWatchTime));
      updateGenerateBtn(container);
    });
  });

  container.querySelectorAll('[data-contenttype]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedContentType = btn.dataset.contenttype;
      container.querySelectorAll('[data-contenttype]').forEach(b => b.classList.toggle('selected', b.dataset.contenttype === state.selectedContentType));
      updateGenerateBtn(container);
    });
  });

  container.querySelectorAll('[data-language]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedLanguage = btn.dataset.language;
      container.querySelectorAll('[data-language]').forEach(b => b.classList.toggle('selected', b.dataset.language === state.selectedLanguage));
      updateGenerateBtn(container);
    });
  });

  const genBtn = container.querySelector('#generate-btn');
  if (genBtn) {
    genBtn.addEventListener('click', () => {
      const taste = {
        genres: state.selectedGenres,
        actors: state.addedActors,
        mood: state.selectedMood,
        watchTime: state.selectedWatchTime,
        contentType: state.selectedContentType,
        language: state.selectedLanguage,
      };
      state.taste = taste;
      state.tasteGenerated = true;
      if (state.profile?.profile_id) {
        apiFetch(`/profiles/${state.profile.profile_id}`, { method:'PUT', body: JSON.stringify({ taste }) }).catch(()=>{});
        state.profile.taste = taste;
      }
      renderPage();
    });
  }

  container.querySelectorAll('.scroll-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const rowId = 'row-' + btn.dataset.scrollRow.replace(/\s+/g,'-');
      const track = container.querySelector(`#${rowId}`);
      if (track) track.scrollBy({ left: btn.dataset.dir === 'right' ? 400 : -400, behavior: 'smooth' });
    });
  });

  const discSearch = container.querySelector('.discover-search');
  if (discSearch) {
    discSearch.value = state.discoverSearch || '';
    discSearch.addEventListener('input', e => {
      state.discoverSearch = e.target.value;
      refreshDiscoverGrid(container);
    });
  }

  container.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.discoverFilter = btn.dataset.filter === state.discoverFilter ? null : btn.dataset.filter;
      container.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === state.discoverFilter));
      refreshDiscoverGrid(container);
    });
  });

  container.querySelectorAll('[data-mood-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.moodFilter = btn.dataset.moodFilter === state.moodFilter ? null : btn.dataset.moodFilter;
      container.querySelectorAll('[data-mood-filter]').forEach(b => b.classList.toggle('selected', b.dataset.moodFilter === state.moodFilter));
      refreshMoodResults(container);
    });
  });

  container.querySelectorAll('[data-watch-remove]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.watchlist = state.watchlist.filter(c => c.id !== btn.dataset.watchRemove);
      refreshWatchlist(container);
    });
  });

  container.querySelectorAll('[data-watch-add]').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = CONTENT_ITEMS.find(c => c.id === btn.dataset.watchAdd);
      if (item && !state.watchlist.find(c => c.id === item.id)) {
        state.watchlist.push(item);
        refreshWatchlist(container);
      }
    });
  });

  container.querySelectorAll('.toggle').forEach(toggle => {
    toggle.addEventListener('click', () => toggle.classList.toggle('on'));
  });
}

function updateGenerateBtn(container) {
  const btn = container.querySelector('#generate-btn');
  if (!btn) return;
  const complete = state.selectedGenres.length > 0 && state.selectedMood && state.selectedWatchTime && state.selectedContentType && state.selectedLanguage;
  btn.disabled = !complete;
}

function refreshActorUI(container) {
  const addedEl = container.querySelector('#added-actors');
  if (addedEl) {
    addedEl.innerHTML = state.addedActors.map(a => `
      <span class="actor-tag">${esc(a)}<button class="actor-tag-remove" data-remove-actor="${esc(a)}">×</button></span>
    `).join('');
    addedEl.addEventListener('click', e => {
      const removeBtn = e.target.closest('[data-remove-actor]');
      if (removeBtn) {
        state.addedActors = state.addedActors.filter(a => a !== removeBtn.dataset.removeActor);
        refreshActorUI(container);
      }
    });
  }

  const suggestionsEl = container.querySelector('.actor-suggestions');
  if (suggestionsEl) {
    suggestionsEl.innerHTML = ACTOR_SUGGESTIONS.filter(a => !state.addedActors.includes(a)).map(a =>
      `<button class="actor-suggestion" data-actor="${esc(a)}">+ ${esc(a)}</button>`
    ).join('');
    suggestionsEl.querySelectorAll('.actor-suggestion').forEach(btn => {
      btn.addEventListener('click', () => { addActorDirect(btn.dataset.actor); refreshActorUI(container); });
    });
  }
}

function addActorDirect(name) {
  const trimmed = (name||'').trim();
  if (!trimmed || state.addedActors.includes(trimmed)) return;
  state.addedActors.push(trimmed);
}


function renderDiscover(container) {
  container.innerHTML = `
    <div class="page-header">
      <div class="page-header-icon">${icons.compass}</div>
      <div><h1>Discover</h1><p>Explore everything across all genres</p></div>
    </div>

    <div class="discover-search-wrap">
      <div class="discover-search-icon">${icons.search}</div>
      <input type="text" class="discover-search" placeholder="Search titles..." />
    </div>

    <div class="genre-filter">
      <button class="filter-btn${!state.discoverFilter?' active':''}" data-filter="">All</button>
      ${GENRES.map(g => `<button class="filter-btn${state.discoverFilter===g?' active':''}" data-filter="${esc(g)}">${esc(g)}</button>`).join('')}
    </div>

    <div class="discover-grid" id="discover-grid">
      ${discoverGridHTML()}
    </div>`;
}

function discoverGridHTML() {
  const items = CONTENT_ITEMS.filter(c => {
    const matchGenre = !state.discoverFilter || c.genre.includes(state.discoverFilter);
    const matchSearch = !state.discoverSearch || c.title.toLowerCase().includes(state.discoverSearch.toLowerCase());
    return matchGenre && matchSearch;
  });

  if (!items.length) return `<div class="no-results" style="grid-column:1/-1">No results found</div>`;

  return items.map((item, i) => `
    <div class="discover-card" style="animation-delay:${i*0.04}s;animation:fadeIn .4s ease both">
      <div class="discover-poster">
        <img src="${esc(item.poster)}" alt="${esc(item.title)}" loading="lazy" />
        <div class="discover-score">${item.matchScore}%</div>
      </div>
      <p>${esc(item.title)}</p>
      <span>${esc(item.genre[0])} · ${item.year}</span>
      ${miniBarHTML(item.matchScore)}
    </div>`).join('');
}

function refreshDiscoverGrid(container) {
  const grid = container.querySelector('#discover-grid');
  if (grid) { grid.innerHTML = discoverGridHTML(); triggerBars(); }
}

function renderMoodSearch(container) {
  container.innerHTML = `
    <div class="page-header">
      <div class="page-header-icon">${icons.smile}</div>
      <div><h1>Mood Search</h1><p>How you feel determines what you watch</p></div>
    </div>

    <div class="section-card" style="margin-bottom:20px">
      <p style="font-size:14px;font-weight:500;color:#fff;margin-bottom:16px">How are you feeling right now?</p>
      <div class="mood-grid">
        ${MOODS.map(m => `
          <button class="mood-chip${state.moodFilter===m.label?' selected':''}" data-mood-filter="${esc(m.label)}">
            <span class="emoji">${m.icon}</span>${esc(m.label)}
          </button>`).join('')}
      </div>
    </div>

    <div id="mood-results">${state.moodFilter ? moodResultsHTML() : ''}</div>`;
}

function getMoodItems(mood) {
  const map = {
    Happy:['Comedy','Romance','Fantasy'], Sad:['Drama','Romance'],
    Relaxed:['Drama','Documentary'], 'Mind-Bending':['Sci-Fi','Mystery','Thriller'],
    Motivated:['Action','Drama'], Romantic:['Romance','Drama'],
    'Need Comfort':['Comedy','Drama'], Focused:['Documentary','Mystery'],
    Excited:['Action','Sci-Fi','Fantasy'], Casual:['Comedy','Anime'],
  };
  const genres = map[mood] || [];
  return CONTENT_ITEMS.filter(c => c.genre.some(g => genres.includes(g)));
}

function moodResultsHTML() {
  const items = state.moodFilter ? getMoodItems(state.moodFilter) : [];
  if (!state.moodFilter) return '';
  return `
    <div class="mood-results-header">
      ${icons.sparkles}
      <h3>Best picks for your <span style="color:#f87171">${esc(state.moodFilter)}</span> mood</h3>
      <span class="mood-count-badge">${items.length} titles</span>
    </div>
    ${items.length === 0 ? `<p style="color:var(--text3);font-size:13px">No direct matches found. Try another mood!</p>` : `
      <div class="mood-results-grid">
        ${items.map((item, i) => `
          <div class="discover-card" style="animation-delay:${i*0.06}s;animation:fadeIn .4s ease both">
            <div class="discover-poster">
              <img src="${esc(item.poster)}" alt="${esc(item.title)}" loading="lazy" />
              <div class="discover-score">${item.matchScore}%</div>
            </div>
            <p>${esc(item.title)}</p>
            <span>${esc(item.genre[0])}</span>
            ${miniBarHTML(item.matchScore)}
          </div>`).join('')}
      </div>`}`;
}

function refreshMoodResults(container) {
  const el = container.querySelector('#mood-results');
  if (el) { el.innerHTML = moodResultsHTML(); triggerBars(); }
}

function renderWatchlist(container) {
  container.innerHTML = `
    <div class="page-header">
      <div class="page-header-icon">${icons.bookmark}</div>
      <div><h1>My Watchlist</h1><p>${state.watchlist.length} titles saved</p></div>
    </div>
    <div id="watchlist-main">${watchlistMainHTML()}</div>`;
}

function watchlistMainHTML() {
  const suggestions = CONTENT_ITEMS.filter(c => !state.watchlist.find(w => w.id === c.id)).slice(0, 6);
  return `
    ${state.watchlist.length === 0 ? `
      <div class="watchlist-empty">
        <div style="width:40px;height:40px;margin:0 auto 14px;color:rgba(255,255,255,.1)">${icons.bookmark}</div>
        <p>Your watchlist is empty</p>
        <span>Add titles from the suggestions below</span>
      </div>` : `
      <div class="watchlist-items">
        ${state.watchlist.map(item => `
          <div class="watchlist-item">
            <img src="${esc(item.poster)}" alt="${esc(item.title)}" style="width:48px;height:68px;object-fit:cover;border-radius:8px;flex-shrink:0" />
            <div class="watchlist-item-info">
              <p>${esc(item.title)}</p>
              <span>${item.genre.slice(0,2).join(' · ')} · ${item.year}</span>
              <div style="display:flex;align-items:center;gap:8px;margin-top:4px">
                <span style="font-size:12px;font-weight:700;color:#f87171">${item.matchScore}% match</span>
                <span style="color:var(--text3);font-size:11px">${esc(item.platform)}</span>
              </div>
              ${miniBarHTML(item.matchScore)}
            </div>
            <button class="watch-remove" data-watch-remove="${esc(item.id)}">${icons.trash}</button>
          </div>`).join('')}
      </div>`}

    <div class="watchlist-suggestions-label">Add to Watchlist</div>
    <div class="watchlist-suggest-grid">
      ${suggestions.map(item => `
        <div class="suggest-card">
          <div class="suggest-card-poster">
            <img src="${esc(item.poster)}" alt="${esc(item.title)}" loading="lazy" />
            <div class="suggest-add-overlay">
              <button class="suggest-add-btn" data-watch-add="${esc(item.id)}">${icons.plus}</button>
            </div>
          </div>
          <p>${esc(item.title)}</p>
        </div>`).join('')}
    </div>`;
}

function refreshWatchlist(container) {
  const el = container.querySelector('#watchlist-main');
  if (el) {
    el.innerHTML = watchlistMainHTML();
    triggerBars();

    el.querySelectorAll('[data-watch-remove]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.watchlist = state.watchlist.filter(c => c.id !== btn.dataset.watchRemove);
        refreshWatchlist(container);
      });
    });
    el.querySelectorAll('[data-watch-add]').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = CONTENT_ITEMS.find(c => c.id === btn.dataset.watchAdd);
        if (item && !state.watchlist.find(c => c.id === item.id)) {
          state.watchlist.push(item);
          refreshWatchlist(container);
        }
      });
    });

    const header = container.querySelector('.page-header p');
    if (header) header.textContent = `${state.watchlist.length} titles saved`;
  }
}

function renderTrending(container) {
  const sorted = [...CONTENT_ITEMS].sort((a,b) => b.matchScore - a.matchScore);
  container.innerHTML = `
    <div class="page-header">
      <div class="page-header-icon">${icons.trending}</div>
      <div><h1>Trending Now</h1><p>What the world is watching this week</p></div>
    </div>

    <div class="trending-spotlight">
      ${sorted.slice(0,3).map((item,i) => `
        <div class="spotlight-card">
          <img src="${esc(item.poster)}" alt="${esc(item.title)}" />
          <div class="spotlight-card-overlay"></div>
          <div class="spotlight-rank">#${i+1}</div>
          <div class="spotlight-info">
            <p>${esc(item.title)}</p>
            <div class="spotlight-fire">${icons.flame}<span>${item.matchScore}% match</span></div>
          </div>
        </div>`).join('')}
    </div>

    <div class="trending-list">
      <div class="trending-list-header">${icons.flame}<span>This Week's Chart</span></div>
      ${sorted.map((item,i) => `
        <div class="trending-row">
          <span class="trending-num">${i+1}</span>
          <img src="${esc(item.poster)}" alt="${esc(item.title)}" />
          <div class="trending-info">
            <p>${esc(item.title)}</p>
            <span>${item.genre.slice(0,2).join(' · ')}</span>
            <div class="trending-meta">
              <div class="trending-meta-item">${icons.globe}<span>${esc(item.platform)}</span></div>
              <div class="trending-meta-item">${icons.clock}<span>${item.duration||'—'}</span></div>
            </div>
          </div>
          <div class="trending-score-wrap">
            <strong>${item.matchScore}%</strong>
            <div class="trending-score-bar"><div class="trending-score-fill" data-width="${item.matchScore}%" style="width:0"></div></div>
          </div>
        </div>`).join('')}
    </div>`;
}

function renderAnalytics(container) {
  const avg = Math.round(CONTENT_ITEMS.reduce((s,c)=>s+c.matchScore,0)/CONTENT_ITEMS.length);
  const genres = [['Thriller',28],['Drama',24],['Sci-Fi',19],['Mystery',17],['Action',12],['Comedy',9]];
  const platforms = [
    {name:'Netflix',pct:38,color:'#E50914'},{name:'HBO Max',pct:24,color:'#6441a5'},
    {name:'Prime Video',pct:18,color:'#00A8E0'},{name:'Disney+',pct:12,color:'#113CCF'},
    {name:'Apple TV+',pct:5,color:'#555'},{name:'Other',pct:3,color:'#666'},
  ];

  container.innerHTML = `
    <div class="page-header">
      <div class="page-header-icon">${icons.barChart}</div>
      <div><h1>Analytics</h1><p>Your viewing intelligence dashboard</p></div>
    </div>

    <div class="analytics-stats">
      ${[[icons.star,'Avg Match',`${avg}%`],[icons.clock,'Titles Matched',`${CONTENT_ITEMS.length}`],[icons.trending,'Genres Mapped','12'],[icons.barChart,'AI Accuracy','94.2%']].map(([icon,label,val]) => `
        <div class="analytics-stat">
          <div class="analytics-stat-icon">${icon}</div>
          <strong>${esc(val)}</strong>
          <span>${esc(label)}</span>
        </div>`).join('')}
    </div>

    <div class="analytics-card">
      <h3>Genre Preference Breakdown</h3>
      ${genres.map(([genre,pct]) => `
        <div class="analytics-bar-row">
          <div class="analytics-bar-label"><span>${genre}</span><em>${pct}%</em></div>
          <div class="analytics-track"><div class="analytics-fill" data-width="${pct}%" style="width:0"></div></div>
        </div>`).join('')}
    </div>

    <div class="analytics-card">
      <h3>Platform Distribution</h3>
      <div class="platform-circles">
        ${platforms.map(p => `
          <div class="platform-circle-item">
            <div class="platform-circle" style="background:${p.color}">${p.pct}%</div>
            <p>${p.name}</p>
          </div>`).join('')}
      </div>
    </div>`;
}

function renderSettings(container) {
  const sections = [
    { icon: icons.bell, title:'Notifications', rows:[{label:'New recommendations',desc:'Get notified when AI finds a new match',on:true},{label:'Trending alerts',desc:'When a title in your taste profile trends',on:false}] },
    { icon: icons.palette, title:'Appearance', rows:[{label:'Dark mode',desc:'Always use dark theme',on:true},{label:'Reduce motion',desc:'Minimize animations',on:false}] },
    { icon: icons.shield, title:'Privacy', rows:[{label:'Save taste profile',desc:'Store preferences in localStorage',on:true},{label:'Anonymous analytics',desc:'Help improve recommendations',on:true}] },
    { icon: icons.database, title:'Backend Integration', rows:[{label:'TMDB API',desc:'Connect real movie database',on:false},{label:'FastAPI Engine',desc:'Live AI recommendations',on:false}] },
  ];

  container.innerHTML = `
    <div class="page-header">
      <div class="page-header-icon">${icons.settings}</div>
      <div><h1>Settings</h1><p>Manage your CineMatch AI preferences</p></div>
    </div>
    <div style="max-width:640px">
      ${sections.map(s => `
        <div class="settings-card">
          <div class="settings-card-header">
            <div class="settings-card-header-icon">${s.icon}</div>
            <span>${esc(s.title)}</span>
          </div>
          ${s.rows.map(row => `
            <div class="settings-row">
              <div class="settings-row-info">
                <p>${esc(row.label)}</p>
                <span>${esc(row.desc)}</span>
              </div>
              <div class="toggle${row.on?' on':''}">
                <div class="toggle-thumb"></div>
              </div>
            </div>`).join('')}
        </div>`).join('')}
      <div class="settings-about">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;color:var(--text3)">
          ${icons.info}
          <span style="font-size:13px">About CineMatch AI</span>
        </div>
        <p>Designed for production showcase · Built with HTML, CSS &amp; JavaScript · Backend-ready for FastAPI + TMDB + Scikit-Learn + Oracle SQL</p>
      </div>
    </div>`;
}

initApp();