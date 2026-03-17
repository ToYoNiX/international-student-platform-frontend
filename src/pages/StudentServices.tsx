
import { motion } from 'framer-motion';
import {
  Home,
  Bus,
  HeartPulse,
  BookOpen,
  CreditCard,
  Globe,
  ChevronRight } from
'lucide-react';
import { PageType } from '../App';

export function StudentServices({ onNavigate }: { onNavigate: (page: PageType) => void }) {
  const services = [
  {
    id: 'housing',
    title: 'University Housing',
    desc: 'Apply for on-campus dormitories, view housing rules, and manage your accommodation fees.',
    icon: Home,
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    id: 'transport',
    title: 'Transportation',
    desc: 'Register for university bus services, view routes, schedules, and pickup points across the city.',
    icon: Bus,
    color: 'text-orange-500',
    bg: 'bg-orange-50'
  },
  {
    id: 'medical',
    title: 'Medical Insurance',
    desc: 'Access your health insurance details, find affiliated hospitals, and submit medical claims.',
    icon: HeartPulse,
    color: 'text-red-500',
    bg: 'bg-red-50'
  },
  {
    id: 'library',
    title: 'Library Access',
    desc: 'Search the digital catalog, reserve study rooms, and access international research databases.',
    icon: BookOpen,
    color: 'text-purple-500',
    bg: 'bg-purple-50'
  },
  {
    id: 'id-card',
    title: 'Student ID Services',
    desc: 'Request a replacement for a lost ID card or update your photo for the new academic year.',
    icon: CreditCard,
    color: 'text-teal-500',
    bg: 'bg-teal-50'
  },
  {
    id: 'visa',
    title: 'Visa & Immigration',
    desc: 'Guidance on student visa issuance, residency renewal procedures, and required documentation.',
    icon: Globe,
    color: 'text-academic-500',
    bg: 'bg-academic-50'
  }];

  return (
    <div className="page-container space-y-8">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
          Student Services
        </h1>
        <p className="text-navy-500 text-lg">
          Explore the comprehensive facilities and support services available to
          international students at MUST.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) =>
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: idx * 0.1
          }}
          key={service.id}
          className="card p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 border-b-4 border-transparent hover:border-academic-500">
          
            <div
            className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 ${service.bg} ${service.color} group-hover:scale-110 transition-transform duration-300`}>
            
              <service.icon className="w-10 h-10" />
            </div>
            <h2 className="text-xl font-bold text-navy-900 mb-3">
              {service.title}
            </h2>
            <p className="text-navy-500 text-sm mb-6 flex-grow">
              {service.desc}
            </p>
            <button className="text-academic-500 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
              Learn More <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </div>

      {/* Help Banner */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 0.6
        }}
        className="mt-12 bg-navy-500 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
        
        <div>
          <h3 className="text-2xl font-bold mb-2">
            Need help with a specific service?
          </h3>
          <p className="text-navy-100">
            Our International Student Advisors are here to assist you with any
            inquiries.
          </p>
        </div>
<button onClick={() => onNavigate('chat')} className="bg-white text-navy-900 px-6 py-3 rounded-lg font-bold hover:bg-surface-100 transition-colors whitespace-nowrap">
          Contact Advisor
        </button>
      </motion.div>
    </div>);

}