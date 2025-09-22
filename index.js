
import { useState } from 'react';
import { FileText, Send, Download } from 'lucide-react';

export default function Home() {
  const [view, setView] = useState('dashboard');

  return (
    <div className="p-6 max-w-3xl mx-auto grid gap-6">
      {view === 'dashboard' && (
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Friday Dashboard</h2>
          <button onClick={() => setView('newjob')} className="w-full bg-blue-600 text-white p-2 rounded mb-4">
            + New Job
          </button>
          <div className="space-y-3">
            <div className="p-3 border rounded-lg flex justify-between items-center">
              <span>Invoice #101 — Sarah — $150</span>
              <span className="text-green-600 font-semibold">Paid</span>
            </div>
            <div className="p-3 border rounded-lg flex justify-between items-center">
              <span>Invoice #102 — John — $300</span>
              <span className="text-yellow-600 font-semibold">Pending</span>
            </div>
          </div>
        </div>
      )}

      {view === 'newjob' && (
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4">New Job</h2>
          <input placeholder="Customer Name" className="border p-2 rounded w-full mb-3" />
          <textarea placeholder="Job Description" className="border p-2 rounded w-full mb-3" />
          <input placeholder="Price ($)" className="border p-2 rounded w-full mb-3" />
          <button onClick={() => setView('invoice')} className="w-full bg-blue-600 text-white p-2 rounded">
            Generate Invoice
          </button>
        </div>
      )}

      {view === 'invoice' && (
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5" /> Invoice Preview
          </h2>
          <div className="border rounded-lg p-4 bg-gray-50 mb-4">
            <p><strong>Customer:</strong> Sarah</p>
            <p><strong>Job:</strong> Installed kitchen tap</p>
            <p><strong>Price:</strong> $150</p>
            <p><strong>Status:</strong> Draft</p>
          </div>
          <div className="flex gap-3">
            <button className="flex-1 bg-blue-600 text-white p-2 rounded flex items-center justify-center gap-2">
              <Send className="w-4 h-4" /> Send to Client
            </button>
            <button className="flex-1 bg-gray-200 p-2 rounded flex items-center justify-center gap-2">
              <Download className="w-4 h-4" /> Download PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
