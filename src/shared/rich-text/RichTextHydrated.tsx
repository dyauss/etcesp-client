import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import hydrate from 'react-hydrate';

const RichTextEditor = dynamic(() => import('./RichText'), {
  loading: () => <p>Loading CKEditor...</p>,
  ssr: false, // Evita a pré-renderização do CKEditor no lado do servidor
});

const HydratedRichTextEditor = hydrate(RichTextEditor);

function App() {
  const [textEditor, setTextEditor] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Verifica se o código é executado no navegador antes de renderizar o editor
      RichTextEditor.preload();
    }
  }, []);

  return (
    <div className="App">
      <RichTextEditor content={textEditor} />
    </div>
  );
}

export default App;