import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Paperclip, Send, MoreVertical, CheckCheck } from 'lucide-react';
export function Chat() {
  const [message, setMessage] = useState('');
  const advisors = [
  {
    id: 1,
    name: 'Mr. Tarek Hassan',
    role: 'Visa & Immigration',
    avatar:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    online: true,
    unread: 0
  },
  {
    id: 2,
    name: 'Ms. Sarah Ahmed',
    role: 'Academic Advisor',
    avatar:
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    online: false,
    unread: 2
  },
  {
    id: 3,
    name: 'Dr. Omar Sayed',
    role: 'Housing Support',
    avatar:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    online: true,
    unread: 0
  }];

  const messages = [
  {
    id: 1,
    sender: 'advisor',
    text: 'Hello Ahmed, how can I help you today with your visa renewal?',
    time: '10:30 AM'
  },
  {
    id: 2,
    sender: 'student',
    text: 'Hi Mr. Tarek. I submitted my request for the support letter yesterday. Do you know when it will be ready?',
    time: '10:32 AM'
  },
  {
    id: 3,
    sender: 'advisor',
    text: 'Let me check your file.',
    time: '10:35 AM'
  },
  {
    id: 4,
    sender: 'advisor',
    text: 'Everything looks good. The letter is currently under review by the director. It should be ready for pickup by tomorrow afternoon.',
    time: '10:38 AM'
  },
  {
    id: 5,
    sender: 'student',
    text: "That's great news! Thank you so much.",
    time: '10:40 AM'
  },
  {
    id: 6,
    sender: 'advisor',
    text: "You're welcome. Don't forget to bring your original passport when you come to collect it.",
    time: '10:41 AM'
  }];

  return (
    <div className="page-container h-[calc(100vh-80px)] py-6 flex flex-col">
      <div className="card flex-grow flex overflow-hidden bg-white shadow-lg border-surface-200">
        {/* Sidebar */}
        <div className="w-full md:w-80 border-r border-surface-200 flex flex-col bg-surface-50 hidden md:flex">
          <div className="p-4 border-b border-surface-200 bg-white">
            <h2 className="text-xl font-bold text-navy-900 mb-4">Advisors</h2>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-navy-300" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-9 pr-4 py-2 bg-surface-100 border-none rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-500" />
              
            </div>
          </div>

          <div className="flex-grow overflow-y-auto">
            {advisors.map((adv, idx) =>
            <div
              key={adv.id}
              className={`flex items-center gap-3 p-4 cursor-pointer transition-colors border-b border-surface-100 ${idx === 0 ? 'bg-white border-l-4 border-l-academic-500' : 'hover:bg-surface-100 border-l-4 border-l-transparent'}`}>
              
                <div className="relative">
                  <img
                  src={adv.avatar}
                  alt={adv.name}
                  className="w-12 h-12 rounded-full object-cover" />
                
                  {adv.online &&
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-status-approved rounded-full border-2 border-white"></div>
                }
                </div>
                <div className="flex-grow">
                  <h3 className="text-sm font-bold text-navy-900">
                    {adv.name}
                  </h3>
                  <p className="text-xs text-navy-500">{adv.role}</p>
                </div>
                {adv.unread > 0 &&
              <div className="w-5 h-5 bg-academic-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {adv.unread}
                  </div>
              }
              </div>
            )}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-grow flex flex-col bg-[#F8F9FA]">
          {/* Chat Header */}
          <div className="h-16 border-b border-surface-200 bg-white flex items-center justify-between px-6 shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative md:hidden">
                <img
                  src={advisors[0].avatar}
                  alt=""
                  className="w-10 h-10 rounded-full object-cover" />
                
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-status-approved rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h2 className="text-base font-bold text-navy-900">
                  {advisors[0].name}
                </h2>
                <p className="text-xs text-status-approved font-medium">
                  Online
                </p>
              </div>
            </div>
            <button className="text-navy-400 hover:text-navy-600">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-6 space-y-4">
            <div className="text-center mb-6">
              <span className="text-xs font-medium text-navy-400 bg-surface-200 px-3 py-1 rounded-full">
                Today
              </span>
            </div>

            {messages.map((msg) =>
            <motion.div
              initial={{
                opacity: 0,
                y: 10
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'student' ? 'items-end' : 'items-start'}`}>
              
                <div
                className={`max-w-[75%] md:max-w-[60%] rounded-2xl px-4 py-3 text-sm shadow-sm ${msg.sender === 'student' ? 'bg-navy-500 text-white rounded-br-sm' : 'bg-white text-navy-900 border border-surface-200 rounded-bl-sm'}`}>
                
                  {msg.text}
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-[10px] text-navy-400 font-medium">
                    {msg.time}
                  </span>
                  {msg.sender === 'student' &&
                <CheckCheck className="w-3 h-3 text-academic-500" />
                }
                </div>
              </motion.div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-surface-200 shrink-0">
            <div className="flex items-center gap-2 bg-surface-100 rounded-full p-1 pr-2">
              <button className="p-2 text-navy-400 hover:text-navy-600 rounded-full transition-colors">
                <Paperclip className="w-5 h-5" />
              </button>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow bg-transparent border-none focus:outline-none text-sm text-navy-900 px-2" />
              
              <button className="p-2 bg-academic-500 text-white rounded-full hover:bg-academic-600 transition-colors shadow-sm">
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>);

}