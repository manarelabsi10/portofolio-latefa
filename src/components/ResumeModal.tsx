import { useEffect, useState, useRef } from 'react';
import { X, Download, Loader2 } from 'lucide-react';

interface ResumeModalProps {
  onClose: () => void;
}

export default function ResumeModal({ onClose }: ResumeModalProps) {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/60 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      
      {/* Modal Container */}
      <div 
        className="bg-white border border-slate-200 rounded-3xl w-full max-w-5xl h-[92vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Controls Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50 shrink-0">
          <div className="flex items-center gap-2">
            {/* Kept clean as requested */}
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/Latefa%20Mohamed%20El_Bana.pdf"
              download="Latefa Mohamed El_Bana.pdf"
              className="flex items-center gap-1.5 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-sans text-xs font-bold shadow-md transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 bg-slate-100 relative p-2 sm:p-4 overflow-y-auto">
          <div className="w-full h-full min-h-[75vh] bg-white rounded-2xl shadow-sm border border-slate-200 overflow-y-auto relative p-2 sm:p-6 flex flex-col items-center">
            <PDFViewer url="/Latefa%20Mohamed%20El_Bana.pdf" />
          </div>
        </div>

      </div>
    </div>
  );
}

function PDFViewer({ url }: { url: string }) {
  const [pdf, setPdf] = useState<any>(null);
  const [pages, setPages] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    const loadPdfjs = async () => {
      try {
        if (!(window as any).pdfjsLib) {
          const script = document.createElement('script');
          script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
          script.async = true;
          
          const scriptLoaded = new Promise((resolve, reject) => {
            script.onload = resolve;
            script.onerror = reject;
          });
          
          document.body.appendChild(script);
          await scriptLoaded;
        }

        if (!active) return;

        const pdfjsLib = (window as any).pdfjsLib;
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

        const loadingTask = pdfjsLib.getDocument(url);
        const loadedPdf = await loadingTask.promise;

        if (!active) return;

        setPdf(loadedPdf);
        
        const pageNumbers = [];
        for (let i = 1; i <= loadedPdf.numPages; i++) {
          pageNumbers.push(i);
        }
        setPages(pageNumbers);
        setLoading(false);
      } catch (err: any) {
        console.error('Error loading PDF:', err);
        if (active) {
          setError('Failed to load PDF. Please download it directly using the button above.');
          setLoading(false);
        }
      }
    };

    loadPdfjs();

    return () => {
      active = false;
    };
  }, [url]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-3">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
        <p className="text-sm font-sans text-slate-500 font-medium animate-pulse">Loading CV preview...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 text-center gap-4">
        <p className="text-slate-600 font-sans font-medium">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 items-center w-full max-w-3xl">
      {pages.map((pageNumber) => (
        <PDFPage key={pageNumber} pdf={pdf} pageNumber={pageNumber} />
      ))}
    </div>
  );
}

interface PDFPageProps {
  key?: any;
  pdf: any;
  pageNumber: number;
}

function PDFPage({ pdf, pageNumber }: PDFPageProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [rendering, setRendering] = useState(true);

  useEffect(() => {
    let active = true;
    let renderTask: any = null;

    const renderPage = async () => {
      try {
        const page = await pdf.getPage(pageNumber);
        if (!active) return;

        // Scale 1.8 for high quality preview
        const viewport = page.getViewport({ scale: 1.8 });
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        renderTask = page.render(renderContext);
        await renderTask.promise;
        
        if (active) {
          setRendering(false);
        }
      } catch (err) {
        console.error('Error rendering page:', err);
      }
    };

    renderPage();

    return () => {
      active = false;
      if (renderTask) {
        renderTask.cancel();
      }
    };
  }, [pdf, pageNumber]);

  return (
    <div className="relative w-full bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden flex justify-center p-1 sm:p-2">
      {rendering && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-50/50">
          <Loader2 className="w-6 h-6 text-slate-400 animate-spin" />
        </div>
      )}
      <canvas 
        ref={canvasRef} 
        className="max-w-full h-auto block"
        style={{ aspectRatio: 'auto' }}
      />
    </div>
  );
}
