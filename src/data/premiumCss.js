export const cssCyberpunk = `.ui-cyberpunk-btn {
  position: relative; background: #000; color: #fff; font-size: 1rem; font-weight: 900;
  padding: 0.8rem 2rem; border: 1px solid #ff003c; text-transform: uppercase;
  letter-spacing: 3px; cursor: pointer; overflow: hidden; transition: 0.1s;
}
.ui-cyberpunk-btn::before {
  content: 'ACCESS'; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center; background: #ff003c; color: #000;
  transform: translateY(100%); transition: 0.2s;
}
.ui-cyberpunk-btn:hover::before { transform: translateY(0); animation: glitch-fast 0.2s infinite; }
@keyframes glitch-fast {
  0% { transform: translate(0); text-shadow: 2px 2px #00fff9, -2px -2px #ff00c1; }
  50% { transform: translate(3px, -3px); text-shadow: -2px -2px #00fff9, 2px 2px #ff00c1; }
  100% { transform: translate(0); }
}`;

export const cssGlowCard = `.ui-glow-card {
  position: relative; width: 220px; height: 180px; background: #111; display: flex; justify-content: center; align-items: center;
  border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}
.ui-glow-card::before { content: ''; position: absolute; width: 80px; height: 150%; background: linear-gradient(#00ccff, #d400d4); animation: rotateGlow 3s linear infinite; }
.ui-glow-card::after { content: ''; position: absolute; inset: 3px; background: var(--surface); border-radius: 13px; z-index: 1; }
.ui-glow-card-content { position: relative; z-index: 2; color: white; text-align: center; font-weight: bold; font-size: 1.1rem; }
@keyframes rotateGlow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`;

export const cssFloatInput = `.ui-float-group {
  position: relative;
  width: 100%;
}
.ui-float-input {
  width: 100%;
  padding: 0.8rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid #27272a;
  border-radius: 8px;
  color: #fff;
  font-size: 0.95rem;
  outline: none;
  transition: all 0.2s;
}
.ui-float-input:focus {
  border-color: #8b5cf6;
  background: rgba(139, 92, 246, 0.05);
}
.ui-float-label {
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  color: #71717a;
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  padding: 0 4px;
}
.ui-float-input:focus ~ .ui-float-label,
.ui-float-input:not(:placeholder-shown) ~ .ui-float-label {
  top: 0;
  font-size: 0.75rem;
  color: #8b5cf6;
  background: var(--surface);
  transform: translateY(-50%) translate(-4px, -2px);
  font-weight: 700;
  letter-spacing: 0.5px;
}`;

export const cssLiquidLoader = `.ui-liquid-loader { display: flex; gap: 12px; filter: drop-shadow(0 0 10px rgba(236, 72, 153, 0.4)); }
.ui-liquid-blob { width: 16px; height: 16px; background: #3b82f6; border-radius: 50%; animation: liquidWave 1.2s ease-in-out infinite; }
.ui-liquid-blob:nth-child(2) { animation-delay: 0.2s; background: #a855f7; }
.ui-liquid-blob:nth-child(3) { animation-delay: 0.4s; background: #ec4899; }
@keyframes liquidWave { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-15px) scale(1.3); } }`;

export const css3d = `.ui-btn-3d { background: #ec4899; color: #fff; border: none; padding: 12px 24px; font-size: 1rem; font-weight: bold; border-radius: 8px; box-shadow: 0 6px 0 #be185d; transition: all 0.1s; cursor: pointer; }
.ui-btn-3d:active { box-shadow: 0 2px 0 #be185d; transform: translateY(4px); }`;

export const cssShimmer = `.ui-btn-shimmer { padding: 12px 24px; font-size: 1rem; font-weight: 600; color: #fff; background: #3b82f6; border: none; border-radius: 8px; position: relative; overflow: hidden; cursor: pointer; }
.ui-btn-shimmer::after { content: ""; position: absolute; top: 0; left: -100%; width: 50%; height: 100%; background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%); transform: skewX(-20deg); animation: shimmer 2s infinite; }
@keyframes shimmer { 100% { left: 200%; } }`;

export const cssPulse = `.ui-btn-pulse { background: #10b981; color: white; border: none; padding: 12px 24px; border-radius: 50px; font-weight: bold; cursor: pointer; box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); animation: pulseBtn 1.5s infinite cubic-bezier(0.66, 0, 0, 1); }
@keyframes pulseBtn { to { box-shadow: 0 0 0 15px rgba(16, 185, 129, 0); } }`;

export const cssScan = `.ui-btn-scan { background: #111; color: #0f0; border: 1px solid #0f0; padding: 12px 24px; font-family: monospace; font-size: 1rem; position: relative; cursor: pointer; overflow: hidden; }
.ui-btn-scan::before { content: ''; position: absolute; top: -2px; left: -2px; right: -2px; height: 2px; background: #0f0; animation: scanline 2s linear infinite; box-shadow: 0 0 10px #0f0; }
@keyframes scanline { 100% { top: 100%; } }`;

export const cssPixel = `.ui-btn-pixel { background: transparent; color: white; border: 4px solid white; padding: 10px 20px; font-family: monospace; text-transform: uppercase; font-weight: bold; cursor: pointer; transition: 0.2s; box-shadow: inset -4px -4px 0px 0px rgba(255,255,255,0.3); }
.ui-btn-pixel:hover { background: white; color: black; }`;

export const cssRing = `.ui-loader-ring { width: 40px; height: 40px; border-radius: 50%; border: 4px solid transparent; border-top-color: #8b5cf6; border-bottom-color: #3b82f6; animation: spinRing 1.5s ease-in-out infinite; }
@keyframes spinRing { 100% { transform: rotate(360deg); } }`;

export const cssBounce = `.ui-loader-bounce { display: flex; gap: 4px; border: none; }
.ui-loader-bounce div { width: 8px; height: 24px; background: #ec4899; animation: bounceBar 1s infinite alternate; }
.ui-loader-bounce div:nth-child(2) { animation-delay: 0.2s; }
.ui-loader-bounce div:nth-child(3) { animation-delay: 0.4s; }
@keyframes bounceBar { 100% { transform: scaleY(2); } }`;

export const cssOrbit = `.ui-loader-orbit { width: 50px; height: 50px; border-radius: 50%; border: 1px dashed rgba(255,255,255,0.3); position: relative; animation: orbitSpin 4s linear infinite; }
.ui-loader-orbit::after { content: ''; position: absolute; top: -5px; left: 20px; width: 10px; height: 10px; background: #f59e0b; border-radius: 50%; box-shadow: 0 0 10px #f59e0b; }
@keyframes orbitSpin { 100% { transform: rotate(360deg); } }`;

export const cssHeart = `.ui-loader-heart { display: inline-block; width: 30px; height: 30px; background: #ef4444; position: relative; transform: rotate(45deg); animation: heartBeat 1s infinite; }
.ui-loader-heart::before, .ui-loader-heart::after { content: ''; position: absolute; width: 30px; height: 30px; background: #ef4444; border-radius: 50%; }
.ui-loader-heart::before { left: -15px; top: 0; }
.ui-loader-heart::after { left: 0; top: -15px; }
@keyframes heartBeat { 0%, 100% { transform: rotate(45deg) scale(1); } 50% { transform: rotate(45deg) scale(1.2); } }`;

export const cssDots = `.ui-loader-dots { display: flex; gap: 6px; }
.ui-loader-dots div { width: 12px; height: 12px; background: #fff; border-radius: 50%; animation: jumpDot 0.6s infinite alternate; }
.ui-loader-dots div:nth-child(2) { animation-delay: 0.2s; }
.ui-loader-dots div:nth-child(3) { animation-delay: 0.4s; }
@keyframes jumpDot { to { transform: translateY(-10px); } }`;

export const cssFlip = `.ui-card-flip-container { perspective: 1000px; width: 200px; height: 200px; }
.ui-card-flip { width: 100%; height: 100%; position: relative; transition: transform 0.6s; transform-style: preserve-3d; }
.ui-card-flip-container:hover .ui-card-flip { transform: rotateY(180deg); }
.ui-card-front, .ui-card-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: bold; border: 1px solid var(--border-color); }
.ui-card-front { background: var(--surface); color: white; }
.ui-card-back { background: var(--primary); color: white; transform: rotateY(180deg); box-shadow: 0 0 20px var(--primary); }`;

export const cssHologram = `.ui-card-hologram { width: 200px; height: 250px; background: #111; border-radius: 12px; position: relative; overflow: hidden; border: 1px solid #333; display: flex; align-items: center; justify-content: center; color: white; }
.ui-card-hologram::after { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0) 100%); transform: translateX(-150%) skewX(-20deg); transition: 0.5s; }
.ui-card-hologram:hover::after { transform: translateX(150%) skewX(-20deg); }`;

export const cssUnderline = `.ui-input-underline { border: none; background: transparent; padding: 10px 0; color: white; font-size: 1rem; width: 100%; outline: none; border-bottom: 1px solid #555; transition: 0.3s; }
.ui-input-underline:focus { border-bottom: 2px solid #8b5cf6; }`;

export const cssNeumorphic = `.ui-input-neumorphic { background: #111; border: none; padding: 12px 20px; border-radius: 50px; color: white; box-shadow: inset 4px 4px 8px #000, inset -4px -4px 8px #222; outline: none; width: 100%; transition: 0.2s; }
.ui-input-neumorphic:focus { box-shadow: inset 6px 6px 12px #000, inset -6px -6px 12px #222; }`;

export const cssGlowInput = `.ui-input-glow { background: #000; border: 1px solid #333; padding: 12px 20px; border-radius: 8px; color: white; outline: none; width: 100%; transition: box-shadow 0.3s, border-color 0.3s; }
.ui-input-glow:focus { border-color: #ec4899; box-shadow: 0 0 15px rgba(236,72,153,0.5); }`;

export const cssCyberSwitch = `.ui-switch-cyber { appearance: none; width: 60px; height: 30px; background: #222; border: 2px solid #555; border-radius: 0; outline: none; cursor: pointer; position: relative; transition: 0.3s; }
.ui-switch-cyber::before { content: ''; position: absolute; width: 24px; height: 24px; background: #555; top: 1px; left: 2px; transition: 0.3s; }
.ui-switch-cyber:checked { background: #0f0; border-color: #0f0; box-shadow: 0 0 15px #0f0; }
.ui-switch-cyber:checked::before { left: 30px; background: #000; }`;

export const cssHeartBox = `.ui-checkbox-heart { appearance: none; width: 25px; height: 25px; background: transparent; border: none; outline: none; cursor: pointer; position: relative; }
.ui-checkbox-heart::before { content: '🤍'; font-size: 25px; position: absolute; top: -5px; left: 0; transition: 0.2s; }
.ui-checkbox-heart:checked::before { content: '❤️'; transform: scale(1.2); filter: drop-shadow(0 0 5px red); }`;

export const cssRadioSquare = `.ui-radio-square { appearance: none; width: 20px; height: 20px; border: 2px solid #8b5cf6; background: transparent; cursor: pointer; position: relative; transition: 0.2s; }
.ui-radio-square:checked { background: #8b5cf6; box-shadow: 0 0 10px #8b5cf6; transform: rotate(45deg); }`;

export const cssBadgeGlitch = `.ui-badge-glitch {
  background: #000; color: #fff; border: 1px solid #0ff;
  padding: 4px 12px; font-weight: 800; font-size: 0.75rem;
  position: relative; display: inline-block; text-transform: uppercase;
  letter-spacing: 2px;
}
.ui-badge-glitch::before, .ui-badge-glitch::after {
  content: attr(data-text); position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #000;
}
.ui-badge-glitch::before {
  left: 2px; text-shadow: -2px 0 #ff00c1; clip: rect(44px, 450px, 56px, 0); animation: glitch-anim 5s infinite linear alternate-reverse;
}
.ui-badge-glitch::after {
  left: -2px; text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1; animation: glitch-anim-2 1s infinite linear alternate-reverse;
}
@keyframes glitch-anim { 0% { clip: rect(31px, 9999px, 94px, 0); } 100% { clip: rect(10px, 9999px, 90px, 0); } }
@keyframes glitch-anim-2 { 0% { clip: rect(65px, 9999px, 100px, 0); } 100% { clip: rect(95px, 9999px, 45px, 0); } }`;

export const cssMarqueeBtn = `.ui-btn-marquee { overflow: hidden; white-space: nowrap; width: 140px; background: #111; color: white; border: 1px solid #333; padding: 10px 0; border-radius: 50px; cursor: pointer; position: relative; }
.ui-btn-marquee span { display: inline-block; padding-left: 100%; animation: marquee 3s linear infinite; }
@keyframes marquee { 100% { transform: translate(-100%, 0); } }`;
