import React, { useState } from 'react';
import { FileCode, PaintBucket } from 'lucide-react';

const PreviewCard = ({ component, codeString, cssString, title }) => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState('html');

  const handleCopy = () => {
    const textToCopy = activeCodeTab === 'html' ? codeString : (cssString || '/* CSS is bundled in src/styles */');
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="uiverse-card-wrapper">
      <div className="uiverse-card">
         <div className="uiverse-card-grid-bg"></div>
         <div className="uiverse-component-preview">
           {component}
         </div>
         <div className="uiverse-card-overlay">
           <button className="uiverse-get-code-btn" onClick={() => setShowCode(true)}>
             &lt;/&gt; Get Code
           </button>
         </div>
      </div>
      <div className="uiverse-card-footer">
        <span className="card-title">{title}</span>
      </div>

      {showCode && (
        <div className="code-modal-overlay" onClick={() => setShowCode(false)}>
           <div className="code-modal" onClick={e => e.stopPropagation()}>
             <div className="code-modal-header">
               <span>{title} Source</span>
               <button className="close-btn" onClick={() => setShowCode(false)}>&times;</button>
             </div>
             
             <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', background: 'var(--surface)'}}>
                <button 
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', flex: 1, padding: '1rem', background: activeCodeTab === 'html' ? 'var(--background)' : 'transparent', color: activeCodeTab === 'html' ? 'var(--primary)' : 'var(--text-secondary)', border: 'none', borderBottom: activeCodeTab === 'html' ? '2px solid var(--primary)' : '2px solid transparent', cursor: 'pointer', fontWeight: 'bold' }}
                  onClick={() => setActiveCodeTab('html')}
                >
                  <FileCode size={18} /> HTML
                </button>
                <button 
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', flex: 1, padding: '1rem', background: activeCodeTab === 'css' ? 'var(--background)' : 'transparent', color: activeCodeTab === 'css' ? 'var(--primary)' : 'var(--text-secondary)', border: 'none', borderBottom: activeCodeTab === 'css' ? '2px solid var(--primary)' : '2px solid transparent', cursor: 'pointer', fontWeight: 'bold' }}
                  onClick={() => setActiveCodeTab('css')}
                >
                  <PaintBucket size={18} /> CSS
                </button>
             </div>

             <pre className="code-block" style={{ margin: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
               <code>
                 {activeCodeTab === 'html' ? codeString : (cssString || '/* Please review ui.css for structural styles. */\n.ui-component { ... }')}
               </code>
             </pre>
             <button className="copy-code-btn" onClick={handleCopy}>
               {copied ? '✅ Copied to clipboard!' : `Copy ${activeCodeTab.toUpperCase()}`}
             </button>
           </div>
        </div>
      )}
    </div>
  );
};

export default PreviewCard;
