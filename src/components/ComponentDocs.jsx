import React from 'react';
import PreviewCard from './PreviewCard';
import { cssCyberpunk, css3d, cssShimmer, cssPulse, cssScan, cssPixel, cssMarqueeBtn, cssFloatInput, cssUnderline, cssNeumorphic, cssGlowInput, cssGlowCard, cssFlip, cssHologram, cssBadgeGlitch } from '../data/premiumCss';

const ComponentDocs = () => {
  return (
    <>
      <h2 className="section-title" id="buttons">Buttons</h2>
      <PreviewCard 
        title="Primary"
        component={<button className="ui-btn ui-btn-primary">Get Started</button>}
        codeString={`<button class="ui-btn ui-btn-primary">Get Started</button>`}
      />
      <PreviewCard 
        title="Outline"
        component={<button className="ui-btn ui-btn-outline">Learn More</button>}
        codeString={`<button class="ui-btn ui-btn-outline">Learn More</button>`}
      />
      <PreviewCard 
        title="Cyberpunk Glitch"
        component={<button className="ui-cyberpunk-btn">ENTER NEON</button>}
        codeString={`<button class="ui-cyberpunk-btn">ENTER NEON</button>`}
        cssString={cssCyberpunk}
      />
      <PreviewCard 
        title="3D Push Button"
        component={<button className="ui-btn-3d">PRESS ME</button>}
        codeString={`<button class="ui-btn-3d">PRESS ME</button>`}
        cssString={css3d}
      />
      <PreviewCard 
        title="Shimmering Button"
        component={<button className="ui-btn-shimmer">Shiny Action</button>}
        codeString={`<button class="ui-btn-shimmer">Shiny Action</button>`}
        cssString={cssShimmer}
      />
      <PreviewCard 
        title="Pulse Button"
        component={<button className="ui-btn-pulse">Save Changes</button>}
        codeString={`<button class="ui-btn-pulse">Save Changes</button>`}
        cssString={cssPulse}
      />
      <PreviewCard 
        title="Scanner Button"
        component={<button className="ui-btn-scan">OVERRIDE</button>}
        codeString={`<button class="ui-btn-scan">OVERRIDE</button>`}
        cssString={cssScan}
      />
      <PreviewCard 
        title="Retro Pixel Button"
        component={<button className="ui-btn-pixel">START</button>}
        codeString={`<button class="ui-btn-pixel">START</button>`}
        cssString={cssPixel}
      />
      <PreviewCard 
        title="Marquee Button"
        component={<button className="ui-btn-marquee"><span>Hover to click me... wait</span></button>}
        codeString={`<button class="ui-btn-marquee"><span>Hover to click me... wait</span></button>`}
        cssString={cssMarqueeBtn}
      />

      <h2 className="section-title" id="inputs">Inputs</h2>
      <PreviewCard 
        title="Text Input"
        component={<input type="text" className="ui-input" placeholder="Enter email address..." style={{ maxWidth: '250px' }} />}
        codeString={`<input type="text" class="ui-input" placeholder="Enter email address..." />`}
      />
      <PreviewCard 
        title="Floating Label"
        component={
          <div style={{ padding: '1rem 0', width: '100%', maxWidth: '250px' }}>
            <div className="ui-float-group">
              <input type="text" className="ui-float-input" placeholder=" " required />
              <label className="ui-float-label">Secret Code</label>
            </div>
          </div>
        }
        codeString={`<div class="ui-float-group">\n  <input type="text" class="ui-float-input" placeholder=" " required />\n  <label class="ui-float-label">Secret Code</label>\n</div>`}
        cssString={cssFloatInput}
      />
      <PreviewCard 
        title="Minimal Underline"
        component={<input type="text" className="ui-input-underline" placeholder="Type here..." />}
        codeString={`<input type="text" class="ui-input-underline" placeholder="Type here..." />`}
        cssString={cssUnderline}
      />
      <PreviewCard 
        title="Neumorphic Input"
        component={<input type="text" className="ui-input-neumorphic" placeholder="Search dark net..." />}
        codeString={`<input type="text" class="ui-input-neumorphic" placeholder="..." />`}
        cssString={cssNeumorphic}
      />
      <PreviewCard 
        title="Breathing Glow Input"
        component={<input type="text" className="ui-input-glow" placeholder="Focus me!" />}
        codeString={`<input type="text" class="ui-input-glow" placeholder="Focus me!" />`}
        cssString={cssGlowInput}
      />

      <h2 className="section-title" id="cards">Cards</h2>
      <PreviewCard 
        title="Widget Card"
        component={<div className="ui-card" style={{ width: '100%', maxWidth: '250px', padding: '1.25rem' }}><h4 style={{ margin: '0 0 0.5rem 0', color: 'white' }}>Profile</h4><p style={{ margin: '0 0 1rem 0', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Manage your personal details.</p><button className="ui-btn ui-btn-primary" style={{ width: '100%' }}>Edit Profile</button></div>}
        codeString={`<div class="ui-card"><h4>Profile</h4><p>Manage your personal details.</p><button class="ui-btn class-btn-primary">Edit Profile</button></div>`}
      />
      <PreviewCard 
        title="Animated Glow Card"
        component={<div className="ui-glow-card"><div className="ui-glow-card-content">Pro Member</div></div>}
        codeString={`<div class="ui-glow-card"><div class="ui-glow-card-content">Pro Member</div></div>`}
        cssString={cssGlowCard}
      />
      <PreviewCard 
        title="3D Flip Card"
        component={<div className="ui-card-flip-container"><div className="ui-card-flip"><div className="ui-card-front">Hover Me</div><div className="ui-card-back">Revealed!</div></div></div>}
        codeString={`<div class="ui-card-flip-container"><div class="ui-card-flip"><div class="ui-card-front">Hover Me</div><div class="ui-card-back">Revealed!</div></div></div>`}
        cssString={cssFlip}
      />
      <PreviewCard 
        title="Hologram Card"
        component={<div className="ui-card-hologram" style={{ color: 'white' }}>Rare Item</div>}
        codeString={`<div class="ui-card-hologram">Rare Item</div>`}
        cssString={cssHologram}
      />

      <h2 className="section-title">Badges & Avatars</h2>
      <PreviewCard 
        title="Glitch Badge"
        component={<span className="ui-badge-glitch" data-text="SYS ERROR">SYS ERROR</span>}
        codeString={`<span class="ui-badge-glitch" data-text="SYS ERROR">SYS ERROR</span>`}
        cssString={cssBadgeGlitch}
      />
      <PreviewCard 
        title="Ultimate Glitch Button"
        component={<button className="ui-btn-glitch">SYSTEM</button>}
        codeString={`<button class="ui-btn-glitch">SYSTEM</button>`}
        cssString={`.ui-btn-glitch { ... }`}
      />
    </>
  );
};



export default ComponentDocs;
