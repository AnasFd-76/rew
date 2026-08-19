import { useState } from 'react'

const PDF_URL = '/loss_surface.pdf'

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function App() {
  const [downloaded, setDownloaded] = useState(false)

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = PDF_URL
    link.download = 'loss_surface.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setDownloaded(true)
    setTimeout(() => setDownloaded(false), 3000)
  }

  return (
    <div className="app">
      <div className="card">
        <span className="badge">IEEE TPAMI · Camera-Ready</span>
        <h1>Geometric Intuition of High-Dimensional Loss Surfaces</h1>
        <p className="subtitle">
          Visualizing Saddle Points, Sharp Minima, and Hessian Eigenvalues in Deep Overparameterized Models
        </p>

        <div className="meta-row">
          <div className="meta-item">
            <span className="meta-label">Format</span>
            <span className="meta-value">PDF</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Size</span>
            <span className="meta-value">121 KB</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Pages</span>
            <span className="meta-value">5</span>
          </div>
        </div>

        <button
          className={`download-btn ${downloaded ? 'downloading' : ''}`}
          onClick={handleDownload}
        >
          {downloaded ? <CheckIcon /> : <DownloadIcon />}
          {downloaded ? 'Downloaded!' : 'Download PDF'}
        </button>

        <a className="view-link" href={PDF_URL} target="_blank" rel="noopener noreferrer">
          Or view it in your browser
        </a>

        <p className="footer-note">
          Compiled with zero errors using a standard LaTeX engine. Contains two figures
          (TikZ schematic + PGFPlots convergence chart) and a booktabs benchmark table.
        </p>
      </div>
    </div>
  )
}
