import React, { useState } from 'react';
import PreviewCard from './PreviewCard';

const ComponentDocs3 = () => {
  const [progress, setProgress] = useState(40);

  return (
    <>
      <h2 className="section-title" id="loaders">Loaders & Progress</h2>
      <PreviewCard 
        title="Neon Spinner"
        component={<span className="ui-spinner"></span>}
        codeString={`<span class="ui-spinner"></span>`}
      />

      <PreviewCard 
        title="Glowing Progress"
        component={
          <div style={{ width: '100%', maxWidth: '250px' }}>
            <div className="ui-progress-bar" style={{ marginBottom: '1rem' }}>
              <div className="ui-progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <button className="ui-btn ui-btn-outline" onClick={() => setProgress(p => p >= 100 ? 0 : p + 25)} style={{ width: '100%' }}>
              Load {progress}%
            </button>
          </div>
        }
        codeString={`<div class="ui-progress-bar">\n  <div class="ui-progress-fill" style="width: 40%"></div>\n</div>`}
      />

      <PreviewCard 
        title="Loading Skeleton"
        component={
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '250px' }}>
            <div className="ui-skeleton" style={{ height: '3rem', width: '3rem', borderRadius: '50%' }}></div>
            <div className="ui-skeleton" style={{ height: '1rem', width: '100%' }}></div>
            <div className="ui-skeleton" style={{ height: '1rem', width: '80%' }}></div>
          </div>
        }
        codeString={`<div class="ui-skeleton" style="height: 3rem; width: 3rem; border-radius: 50%;"></div>\n<div class="ui-skeleton" style="height: 1rem; width: 100%;"></div>\n<div class="ui-skeleton" style="height: 1rem; width: 80%;"></div>`}
      />

      <h2 className="section-title">Navigation</h2>
      <PreviewCard 
        title="Breadcrumbs"
        component={
          <div className="ui-breadcrumbs" style={{ background: 'var(--surface)', padding: '0.5rem 1rem', borderRadius: '999px', border: '1px solid var(--border-color)' }}>
            <a href="#" className="ui-breadcrumb-item">Earth</a>
            <span className="ui-breadcrumb-separator" style={{ color: 'var(--primary)' }}>/</span>
            <span className="ui-breadcrumb-item active">Mars Orbit</span>
          </div>
        }
        codeString={`<div class="ui-breadcrumbs">\n  <a href="#" class="ui-breadcrumb-item">Earth</a>\n  <span class="ui-breadcrumb-separator">/</span>\n  <span class="ui-breadcrumb-item active">Mars Orbit</span>\n</div>`}
      />

      <PreviewCard 
        title="Neon Slider"
        component={
          <input type="range" min="0" max="100" defaultValue="75" className="ui-slider" style={{ maxWidth: '200px' }} />
        }
        codeString={`<input type="range" min="0" max="100" class="ui-slider" />`}
      />
    </>
  );
};

export default ComponentDocs3;
