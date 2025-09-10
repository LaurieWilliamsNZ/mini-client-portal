import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X, Download, Users, Calendar, Mail, Phone } from 'lucide-react';


const AdminPanel = ({ onClose }) => {
  const [entries, setEntries] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    withCoffeeOffers: 0,
    withInspectionTips: 0,
    industries: {}
  });

  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = () => {
    const savedEntries = JSON.parse(localStorage.getItem('giveawayEntries') || '[]');
    setEntries(savedEntries);
    
    // Calculate stats
    const total = savedEntries.length;
    const withCoffeeOffers = savedEntries.filter(entry => entry.coffeeOffers).length;
    const withInspectionTips = savedEntries.filter(entry => entry.inspectionTips).length;
    
    const industries = {};
    savedEntries.forEach(entry => {
      industries[entry.industry] = (industries[entry.industry] || 0) + 1;
    });

    setStats({
      total,
      withCoffeeOffers,
      withInspectionTips,
      industries
    });
  };

  const exportToCSV = () => {
    if (entries.length === 0) {
      alert("No entries to export yet.");
      return;
    }

    const headers = [
      'Full Name',
      'Phone Number',
      'Email Address',
      'Industry',
      'Company/Business Name',
      'City/Region',
      'Agrees to Terms',
      'Coffee Offers Opt-in',
      'Inspection Tips Opt-in',
      'Submission Date',
      'Submission Time'
    ];

    const csvContent = [
      headers.join(','),
      ...entries.map(entry => [
        `"${entry.fullName}"`,
        `"${entry.phoneNumber}"`,
        `"${entry.email}"`,
        `"${entry.industry}"`,
        `"${entry.companyName || ''}"`,
        `"${entry.cityRegion || ''}"`,
        entry.agreeTerms ? 'Yes' : 'No',
        entry.coffeeOffers ? 'Yes' : 'No',
        entry.inspectionTips ? 'Yes' : 'No',
        `"${new Date(entry.timestamp).toLocaleDateString('en-NZ')}"`,
        `"${new Date(entry.timestamp).toLocaleTimeString('en-NZ')}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `home-show-giveaway-entries-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert(`Exported ${entries.length} entries to CSV file.`);
  };

  const clearAllEntries = () => {
    if (window.confirm('Are you sure you want to clear all entries? This action cannot be undone.')) {
      localStorage.removeItem('giveawayEntries');
      setEntries([]);
      setStats({
        total: 0,
        withCoffeeOffers: 0,
        withInspectionTips: 0,
        industries: {}
      });
      
      alert("All giveaway entries have been removed.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold brand-text-gradient">Admin Panel - Giveaway Entries</h2>
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="rounded-full"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="bg-french-blue-tint p-4 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-french-blue" />
              <span className="font-semibold text-charcoal">Total Entries</span>
            </div>
            <p className="text-2xl font-bold text-charcoal">{stats.total}</p>
          </div>

          <div className="bg-spanish-green-tint p-4 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Mail className="w-5 h-5 text-spanish-green" />
              <span className="font-semibold text-charcoal">Coffee Offers</span>
            </div>
            <p className="text-2xl font-bold text-charcoal">{stats.withCoffeeOffers}</p>
          </div>

          <div className="bg-cyan-process-33 p-4 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-cyan-process" />
              <span className="font-semibold text-charcoal">Inspection Tips</span>
            </div>
            <p className="text-2xl font-bold text-charcoal">{stats.withInspectionTips}</p>
          </div>

          <div className="bg-mikado-yellow p-4 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Phone className="w-5 h-5 text-charcoal" />
              <span className="font-semibold text-charcoal">Completion Rate</span>
            </div>
            <p className="text-2xl font-bold text-charcoal">
              {stats.total > 0 ? '100%' : '0%'}
            </p>
          </div>
        </div>

        {/* Industry Breakdown */}
        {Object.keys(stats.industries).length > 0 && (
          <div className="mb-6 p-4 bg-french-blue-tint rounded-xl">
            <h3 className="font-semibold text-charcoal mb-3">Industry Breakdown</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {Object.entries(stats.industries).map(([industry, count]) => (
                <div key={industry} className="flex justify-between items-center bg-white p-2 rounded">
                  <span className="text-sm text-charcoal">{industry}</span>
                  <span className="font-semibold text-charcoal">{count}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4 mb-6">
          <Button
            onClick={exportToCSV}
            className="brand-button text-white flex items-center gap-2"
            disabled={entries.length === 0}
          >
            <Download className="w-4 h-4" />
            Export to CSV
          </Button>
          
          <Button
            onClick={clearAllEntries}
            variant="destructive"
            disabled={entries.length === 0}
          >
            Clear All Entries
          </Button>
        </div>

        {/* Entries List */}
        <div className="space-y-4">
          <h3 className="font-semibold text-charcoal">Recent Entries ({entries.length})</h3>
          
          {entries.length === 0 ? (
            <div className="text-center py-8 text-charcoal">
              <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No entries yet. Entries will appear here as people submit the form.</p>
            </div>
          ) : (
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {entries.slice().reverse().map((entry, index) => (
                <div key={entry.id} className="bg-french-blue-tint p-4 rounded-xl">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-charcoal">{entry.fullName}</p>
                      <p className="text-sm text-charcoal">{entry.email}</p>
                      <p className="text-sm text-charcoal">{entry.phoneNumber}</p>
                    </div>
                    <div>
                      <p className="text-sm text-charcoal">
                        <span className="font-medium">Industry:</span> {entry.industry}
                      </p>
                      {entry.companyName && (
                        <p className="text-sm text-charcoal">
                          <span className="font-medium">Company:</span> {entry.companyName}
                        </p>
                      )}
                      <p className="text-sm text-charcoal">
                        Submitted: {entry.submittedAt}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mt-2 text-xs">
                    {entry.coffeeOffers && (
                      <span className="bg-spanish-green-tint text-spanish-green px-2 py-1 rounded">
                        Coffee Offers ✓
                      </span>
                    )}
                    {entry.inspectionTips && (
                      <span className="bg-cyan-process-33 text-cyan-process px-2 py-1 rounded">
                        Inspection Tips ✓
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-6 p-4 bg-spanish-green-tint rounded-xl">
          <p className="text-sm text-spanish-green">
            <strong>Note:</strong> All entries are stored locally in your browser. 
            Make sure to export the data regularly to avoid losing entries. 
            For production use, consider integrating with a proper database solution.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AdminPanel;