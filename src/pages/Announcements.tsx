import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import {
  Megaphone,
  Calendar,
  Paperclip,
  ChevronRight,
  Search
} from 'lucide-react';

export function Announcements() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());
  const [visibleCount, setVisibleCount] = useState(5);
  const { t } = useLanguage();

  const allAnnouncements = [
    {
      id: 1,
      title: 'Important: Visa Renewal Deadline for Fall 2025',
      excerpt: 'All international students must ensure their residency visas are renewed before November 1st to avoid registration holds for the Spring semester.',
      fullText: 'All international students must ensure their residency visas are renewed before November 1st to avoid registration holds for the Spring semester. Please visit the International Students Affairs office with your current visa and passport. Late submissions will incur a processing fee.',
      date: 'Oct 15, 2025',
      category: 'Immigration',
      hasAttachment: true,
      urgent: true
    },
    {
      id: 2,
      title: 'Midterm Examination Schedule Released',
      excerpt: 'The official midterm examination schedule for Fall 2025 is now available.',
      fullText: 'The official midterm examination schedule for Fall 2025 is now available. Please check your individual schedules on the portal. Exams will begin on October 20th.',
      date: 'Oct 10, 2025',
      category: 'Academics',
      hasAttachment: true,
      urgent: false
    },
    {
      id: 3,
      title: 'International Food & Culture Festival',
      excerpt: 'Join us for the annual MUST International Food Festival!',
      fullText: 'Join us for the annual MUST International Food Festival! Represent your country and enjoy cuisines from around the world at the main plaza. October 25th, 4-9 PM.',
      date: 'Oct 05, 2025',
      category: 'Events',
      hasAttachment: false,
      urgent: false
    },
    {
      id: 4,
      title: 'New Medical Insurance Cards Available',
      excerpt: 'Updated medical insurance cards for the 2025-2026 academic year.',
      fullText: 'Updated medical insurance cards for the 2025-2026 academic year are ready for pickup at the International Students Affairs office. Bring your student ID.',
      date: 'Sep 28, 2025',
      category: 'Services',
      hasAttachment: false,
      urgent: false
    },
    {
      id: 5,
      title: 'Library Extended Hours for Midterms',
      excerpt: 'The central library will remain open until 12:00 AM during midterm week.',
      fullText: 'The central library will remain open until 12:00 AM during the midterm examination period to support student study needs. Quiet study rooms available 24/7.',
      date: 'Sep 25, 2025',
      category: 'Campus',
      hasAttachment: false,
      urgent: false
    },
    {
      id: 6,
      title: 'Academic Advising Sessions',
      excerpt: 'Mandatory advising sessions for all international students.',
      fullText: 'Mandatory advising sessions for all international students. Schedule your appointment through the portal. Sessions cover academic progress and visa status.',
      date: 'Sep 20, 2025',
      category: 'Advising',
      hasAttachment: true,
      urgent: true
    }
  ];

  const filteredAnnouncements = allAnnouncements.filter(ann =>
    ann.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ann.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ann.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleReadMore = useCallback((id: number) => {
    setExpandedIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }, []);

  const handleLoadMore = useCallback(() => {
    setVisibleCount(prev => prev + 3);
  }, []);

  const hasMore = filteredAnnouncements.length > visibleCount;

  return (
    <div className="page-container max-w-4xl space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-navy-900">
            Announcements
          </h1>
          <p className="text-navy-400 mt-1">
            Official news and updates from the university
          </p>
        </div>
        <div className="relative w-full sm:w-auto">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-navy-300" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search announcements..."
            className="pl-9 pr-4 py-2 bg-white border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-500 w-full sm:w-64" />
        </div>
      </div>

      <div className="space-y-4">
        {filteredAnnouncements.slice(0, visibleCount).map((ann, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            key={ann.id}
            className={`card p-6 cursor-pointer hover:shadow-md transition-all group border-l-4 ${ann.urgent ? 'border-l-status-rejected' : 'border-l-navy-500'}`}
            onClick={() => handleReadMore(ann.id)}>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 bg-surface-100 text-navy-600 text-xs font-semibold rounded-md">
                    {ann.category}
                  </span>
                  {ann.urgent && (
                    <span className="px-2.5 py-1 bg-status-rejected/10 text-status-rejected text-xs font-semibold rounded-md flex items-center gap-1">
                      <Megaphone className="w-3 h-3" /> Urgent
                    </span>
                  )}
                </div>
                <h2 className="text-lg font-bold text-navy-900 group-hover:text-academic-500 transition-colors">
                  {ann.title}
                </h2>
                <p className={`text-navy-500 text-sm leading-relaxed max-w-2xl transition-all duration-300 ${
                  expandedIds.has(ann.id) ? 'max-h-none' : 'line-clamp-2'
                }`}>
                  {expandedIds.has(ann.id) ? ann.fullText : ann.excerpt}
                </p>
              </div>

              <div className="flex sm:flex-col items-center sm:items-end gap-4 sm:gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                <div className="flex items-center gap-1.5 text-xs font-medium text-navy-400">
                  <Calendar className="w-3.5 h-3.5" /> {ann.date}
                </div>
                {ann.hasAttachment && (
                  <div className="flex items-center gap-1 text-xs font-medium text-navy-400">
                    <Paperclip className="w-3.5 h-3.5" /> Attachment
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center pt-6">
          <button 
            onClick={handleLoadMore}
            className="btn-secondary px-8">
            Load More ({filteredAnnouncements.length - visibleCount} left)
          </button>
        </div>
      )}

      {filteredAnnouncements.length === 0 && (
        <div className="text-center py-12">
          <Megaphone className="w-16 h-16 text-navy-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-navy-900 mb-2">No announcements found</h3>
          <p className="text-navy-400">Try adjusting your search terms</p>
        </div>
      )}
    </div>
  );
}
