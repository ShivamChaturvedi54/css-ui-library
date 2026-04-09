import React from 'react';

const LibraryDocs = () => {
  return (
    <div className="library-docs" style={{ color: '#f8fafc', paddingBottom: '100px' }}>
      <h2 id="library-docs" className="section-title">Library Documentation</h2>
      
      <div className="ui-card m-4">
        <h3 className="text-xl font-bold mb-4">Getting Started</h3>
        <p className="text-secondary mb-4">To use Stellar.ui in your project, simply include the <code>ui.css</code> and <code>theme.css</code> files in your header.</p>
        <div style={{ background: '#000', padding: '16px', borderRadius: '8px', border: '1px solid #27272a', fontFamily: 'monospace', fontSize: '0.85rem' }}>
          {`<link rel="stylesheet" href="stellar-ui/theme.css">`} <br/>
          {`<link rel="stylesheet" href="stellar-ui/ui.css">`}
        </div>
      </div>

      <div className="grid-2 d-grid gap-4 m-4">
        <div className="ui-card">
          <h4 className="font-bold mb-2">Layout Utilities</h4>
          <ul className="text-sm text-secondary" style={{ lineHeight: 2 }}>
            <li><code>.d-flex</code> - Display flex</li>
            <li><code>.flex-col</code> - Column direction</li>
            <li><code>.justify-center</code> - Center content</li>
            <li><code>.items-center</code> - Align items</li>
            <li><code>.gap-4</code> - 1rem gap</li>
          </ul>
        </div>
        
        <div className="ui-card">
          <h4 className="font-bold mb-2">Spacing & Typography</h4>
          <ul className="text-sm text-secondary" style={{ lineHeight: 2 }}>
            <li><code>.p-4</code> - 1rem padding</li>
            <li><code>.m-8</code> - 2rem margin</li>
            <li><code>.text-xl</code> - Large font size</li>
            <li><code>.font-bold</code> - Bold weight</li>
            <li><code>.text-secondary</code> - Muted color</li>
          </ul>
        </div>
      </div>

      <div className="ui-card m-4">
        <h4 className="font-bold mb-4">Example: Building a Hero Block</h4>
        <p className="text-sm text-secondary mb-4">Combine utility classes to build complex layouts without writing new CSS.</p>
        <div style={{ background: '#000', padding: '16px', borderRadius: '8px', border: '1px solid #27272a', fontFamily: 'monospace', fontSize: '0.8rem', whiteSpace: 'pre-wrap' }}>
{`<div class="d-flex flex-col items-center p-8 bg-surface rounded-lg border">
  <h1 class="text-2xl font-bold mb-4">Welcome</h1>
  <p class="text-secondary text-center mb-4">Library ready.</p>
  <button class="ui-btn ui-btn-primary">Get Started</button>
</div>`}
        </div>
      </div>

      <div className="ui-card m-4">
        <h4 className="font-bold mb-2">Advanced Components</h4>
        <p className="text-sm text-secondary">
          For complex components like 3D buttons or loaders, use the specific class names documented in the gallery sections.
        </p>
      </div>
    </div>
  );
};

export default LibraryDocs;
