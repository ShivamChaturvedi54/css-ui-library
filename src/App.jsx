import ComponentDocs from './components/ComponentDocs';
import ComponentDocs2 from './components/ComponentDocs2';
import { MousePointer2, Type, Layout, CheckSquare, Loader2, Boxes, Github, Twitter, MessageSquare, Heart, Instagram } from 'lucide-react';

function App() {
  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="logo-section" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '1rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', marginBottom: '1.5rem' }}>
          <div style={{ 
            background: 'linear-gradient(135deg, #8b5cf6, #d946ef)', 
            width: '36px', height: '36px', 
            borderRadius: '10px', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', 
            color: '#fff', 
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)',
            flexShrink: 0
          }}>
            <Boxes size={22} strokeWidth={2.5} />
          </div>
          <span style={{ fontSize: '1.5rem', fontWeight: 900, letterSpacing: '-1.5px', color: '#fff', textTransform: 'uppercase' }}>
            Nova<span style={{ fontWeight: 200, opacity: 0.4, fontStyle: 'italic' }}>.UI</span>
          </span>
        </div>
        
        <nav className="sidebar-nav">
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', margin: '1rem 0 0.5rem 0', letterSpacing: '0.05em' }}>Library</p>
          <a href="#buttons" className="sidebar-link active"><MousePointer2 size={16} /> Buttons</a>
          <a href="#inputs" className="sidebar-link"><Type size={16} /> Inputs</a>
          <a href="#cards" className="sidebar-link"><Layout size={16} /> Cards</a>
          <a href="#forms" className="sidebar-link"><CheckSquare size={16} /> Forms & Checks</a>
          <a href="#loaders" className="sidebar-link"><Loader2 size={16} /> Loaders</a>
        </nav>
      </aside>

      <main className="main-content">
        <div className="components-grid" style={{ paddingTop: '2rem', minHeight: '600px' }}>
          <ComponentDocs />
          <ComponentDocs2 />
        </div>

        <footer style={{ 
          marginTop: '10rem', 
          padding: '4rem 2rem', 
          borderTop: '1px solid #27272a',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem'
        }}>
          <div style={{ display: 'flex', gap: '2.5rem' }}>
            <a href="#" style={{ color: '#52525b', transition: '0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#52525b'}>
              <Github size={22} strokeWidth={1.5} />
            </a>
            <a href="#" style={{ color: '#52525b', transition: '0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#52525b'}>
              <Twitter size={22} strokeWidth={1.5} />
            </a>
            <a href="#" style={{ color: '#52525b', transition: '0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#52525b'}>
              <Instagram size={22} strokeWidth={1.5} />
            </a>
            <a href="#" style={{ color: '#52525b', transition: '0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#52525b'}>
              <MessageSquare size={22} strokeWidth={1.5} />
            </a>
          </div>

          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
             <p style={{ color: '#3f3f46', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.5px' }}>
               NOVA UI — BUILT BY THE COMMUNITY
             </p>
             <p style={{ color: '#27272a', fontSize: '0.7rem', fontWeight: 700 }}>
               © {new Date().getFullYear()} ALL RIGHTS RESERVED
             </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
