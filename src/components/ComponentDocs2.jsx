import React, { useState } from 'react';
import PreviewCard from './PreviewCard';
import { cssLiquidLoader, cssRing, cssBounce, cssOrbit, cssHeart, cssDots, cssCyberSwitch, cssHeartBox, cssRadioSquare } from '../data/premiumCss';

const ComponentDocs2 = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [radioVal, setRadioVal] = useState('1');

  return (
    <>
      <h2 className="section-title" id="forms">Forms & Checks</h2>
      <PreviewCard 
        title="Custom Checkbox"
        component={<label className="ui-checkbox-wrapper"><input type="checkbox" className="ui-checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} /><span>Remember me</span></label>}
        codeString={`<label class="ui-checkbox-wrapper"><input type="checkbox" class="ui-checkbox" /><span>Remember me</span></label>`}
      />
      <PreviewCard 
        title="Cyber Switch"
        component={<input type="checkbox" className="ui-switch-cyber" />}
        codeString={`<input type="checkbox" class="ui-switch-cyber" />`}
        cssString={cssCyberSwitch}
      />
      <PreviewCard 
        title="Heart Checkbox"
        component={<input type="checkbox" className="ui-checkbox-heart" />}
        codeString={`<input type="checkbox" class="ui-checkbox-heart" />`}
        cssString={cssHeartBox}
      />
      <PreviewCard 
        title="Toggle Switch"
        component={<label className="ui-switch"><input type="checkbox" defaultChecked /><span className="ui-switch-slider"></span></label>}
        codeString={`<label class="ui-switch"><input type="checkbox" /><span class="ui-switch-slider"></span></label>`}
      />
      <PreviewCard 
        title="Custom Radio"
        component={<div style={{ display: 'flex', gap: '1.5rem' }}><label className="ui-radio-wrapper"><input type="radio" name="plan" className="ui-radio" value="1" checked={radioVal === '1'} onChange={e => setRadioVal(e.target.value)} /><span>Free</span></label><label className="ui-radio-wrapper"><input type="radio" name="plan" className="ui-radio" value="2" checked={radioVal === '2'} onChange={e => setRadioVal(e.target.value)} /><span>Pro</span></label></div>}
        codeString={`<label class="ui-radio-wrapper"><input type="radio" name="plan" class="ui-radio" /><span>Free</span></label>`}
      />
      <PreviewCard 
        title="Rotating Square Radio"
        component={<input type="radio" className="ui-radio-square" defaultChecked />}
        codeString={`<input type="radio" class="ui-radio-square" />`}
        cssString={cssRadioSquare}
      />

      <h2 className="section-title" id="loaders">Loaders</h2>
      <PreviewCard 
        title="Minimal Spinner"
        component={<div className="ui-spinner"></div>}
        codeString={`<div class="ui-spinner"></div>`}
      />
      <PreviewCard 
        title="Liquid Wave Loader"
        component={<div className="ui-liquid-loader"><span className="ui-liquid-blob"></span><span className="ui-liquid-blob"></span><span className="ui-liquid-blob"></span></div>}
        codeString={`<div class="ui-liquid-loader"><span class="ui-liquid-blob"></span><span class="ui-liquid-blob"></span><span class="ui-liquid-blob"></span></div>`}
        cssString={cssLiquidLoader}
      />
      <PreviewCard 
        title="Dual Orbit Loader"
        component={<div className="ui-loader-ring"></div>}
        codeString={`<div class="ui-loader-ring"></div>`}
        cssString={cssRing}
      />
      <PreviewCard 
        title="Bouncing Equalizer"
        component={<div className="ui-loader-bounce"><div></div><div></div><div></div></div>}
        codeString={`<div class="ui-loader-bounce"><div></div><div></div><div></div></div>`}
        cssString={cssBounce}
      />
      <PreviewCard 
        title="Planetary Orbit Loader"
        component={<div className="ui-loader-orbit"></div>}
        codeString={`<div class="ui-loader-orbit"></div>`}
        cssString={cssOrbit}
      />
      <PreviewCard 
        title="Beating Heart Loader"
        component={<div className="ui-loader-heart"></div>}
        codeString={`<div class="ui-loader-heart"></div>`}
        cssString={cssHeart}
      />
      <PreviewCard 
        title="Jumping Dots Loader"
        component={<div className="ui-loader-dots"><div></div><div></div><div></div></div>}
        codeString={`<div class="ui-loader-dots"><div></div><div></div><div></div></div>`}
        cssString={cssDots}
      />

      <h2 className="section-title">Tooltips & Modals</h2>
      <PreviewCard 
        title="Hover Tooltip"
        component={<div className="ui-tooltip-container"><button className="ui-btn ui-btn-outline">Hover Me</button><div className="ui-tooltip">This is a tooltip!</div></div>}
        codeString={`<div class="ui-tooltip-container"><button class="ui-btn ui-btn-outline">Hover Me</button><div class="ui-tooltip">This is a tooltip!</div></div>`}
      />
    </>
  );
};



export default ComponentDocs2;
