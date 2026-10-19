import React, { useState, useMemo, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

// Vite 기능: days 디렉토리의 모든 App*.jsx 파일만 탐색 (main 파일 제외)
const modules = import.meta.glob('./days*/**/App*.jsx');
const filePaths = Object.keys(modules).sort((a, b) => {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
});

function AppSelector() {
  const defaultPath = filePaths[filePaths.length - 1]; // 가장 최신 파일이 기본값
  const [selectedPath, setSelectedPath] = useState(() => {
    const saved = localStorage.getItem('react_study_selected_app');
    return (saved && filePaths.includes(saved)) ? saved : defaultPath;
  });

  const handleChange = (e) => {
    const nextPath = e.target.value;
    setSelectedPath(nextPath);
    localStorage.setItem('react_study_selected_app', nextPath);
  };

  const Component = useMemo(() => {
    if (!modules[selectedPath]) return () => <div>파일을 찾을 수 없습니다.</div>;
    return React.lazy(modules[selectedPath]);
  }, [selectedPath]);

  const formatLabel = (path) => {
    return path.replace('./', '').replace('.jsx', '');
  };

  return (
    <div>
      {/* 상단 예제 선택 바 */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 9999,
        background: '#1e293b',
        color: '#f8fafc',
        padding: '8px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        fontFamily: 'sans-serif',
        fontSize: '14px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontWeight: 'bold' }}>📚 예제 선택:</span>
          <select
            value={selectedPath}
            onChange={handleChange}
            style={{
              padding: '6px 12px',
              borderRadius: '6px',
              border: '1px solid #475569',
              background: '#0f172a',
              color: '#f8fafc',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            {[...filePaths].reverse().map((path) => (
              <option key={path} value={path}>
                {formatLabel(path)} {path === defaultPath ? '(최신)' : ''}
              </option>
            ))}
          </select>
        </div>
        <span style={{ fontSize: '12px', color: '#94a3b8' }}>
          새 파일을 추가하면 자동으로 목록에 추가됩니다
        </span>
      </div>

      {/* 선택된 컴포넌트 렌더링 */}
      <div style={{ padding: '20px' }}>
        <Suspense fallback={<div style={{ padding: '20px' }}>컴포넌트 불러오는 중...</div>}>
          <Component key={selectedPath} />
        </Suspense>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppSelector />
  </BrowserRouter>
);