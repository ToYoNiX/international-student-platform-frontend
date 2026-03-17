import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar as CalendarIcon,
  List,
  MapPin,
  Clock,
  User } from
'lucide-react';
export function Schedule() {
  const [view, setView] = useState<'calendar' | 'list'>('calendar');
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
  const times = [
  '08:00 AM',
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM'];

  const scheduleData = [
  {
    id: 1,
    name: 'Software Engineering',
    code: 'CS301',
    instructor: 'Dr. Ahmed Youssef',
    room: 'B-302',
    day: 'Sunday',
    startTime: '09:00 AM',
    duration: 2,
    color: 'bg-blue-100 border-blue-500 text-blue-800'
  },
  {
    id: 2,
    name: 'Database Systems',
    code: 'CS305',
    instructor: 'Dr. Mona Ali',
    room: 'A-Lab4',
    day: 'Sunday',
    startTime: '11:30 AM',
    duration: 1.5,
    color: 'bg-purple-100 border-purple-500 text-purple-800'
  },
  {
    id: 3,
    name: 'Linear Algebra',
    code: 'MATH205',
    instructor: 'Dr. Samy Ibrahim',
    room: 'C-101',
    day: 'Monday',
    startTime: '10:00 AM',
    duration: 2,
    color: 'bg-orange-100 border-orange-500 text-orange-800'
  },
  {
    id: 4,
    name: 'Web Development',
    code: 'IT202',
    instructor: 'Eng. Karim Hassan',
    room: 'C-105',
    day: 'Monday',
    startTime: '02:00 PM',
    duration: 2,
    color: 'bg-teal-100 border-teal-500 text-teal-800'
  },
  {
    id: 5,
    name: 'Software Engineering',
    code: 'CS301',
    instructor: 'Dr. Ahmed Youssef',
    room: 'B-302',
    day: 'Tuesday',
    startTime: '09:00 AM',
    duration: 2,
    color: 'bg-blue-100 border-blue-500 text-blue-800'
  },
  {
    id: 6,
    name: 'Database Systems',
    code: 'CS305',
    instructor: 'Dr. Mona Ali',
    room: 'A-Lab4',
    day: 'Tuesday',
    startTime: '11:30 AM',
    duration: 1.5,
    color: 'bg-purple-100 border-purple-500 text-purple-800'
  },
  {
    id: 7,
    name: 'Linear Algebra',
    code: 'MATH205',
    instructor: 'Dr. Samy Ibrahim',
    room: 'C-101',
    day: 'Wednesday',
    startTime: '10:00 AM',
    duration: 2,
    color: 'bg-orange-100 border-orange-500 text-orange-800'
  },
  {
    id: 8,
    name: 'Web Development',
    code: 'IT202',
    instructor: 'Eng. Karim Hassan',
    room: 'C-105',
    day: 'Wednesday',
    startTime: '02:00 PM',
    duration: 2,
    color: 'bg-teal-100 border-teal-500 text-teal-800'
  },
  {
    id: 9,
    name: 'Technical Writing',
    code: 'ENG102',
    instructor: 'Dr. Rania Mahmoud',
    room: 'D-204',
    day: 'Thursday',
    startTime: '09:00 AM',
    duration: 2,
    color: 'bg-pink-100 border-pink-500 text-pink-800'
  },
  {
    id: 10,
    name: 'Egyptian History',
    code: 'HUM101',
    instructor: 'Dr. Tarek Sayed',
    room: 'Main Hall',
    day: 'Thursday',
    startTime: '12:00 PM',
    duration: 2,
    color: 'bg-academic-100 border-academic-500 text-academic-800'
  }];

  // Helper for calendar positioning (simplified for mock)
  const getGridRow = (time: string) => {
    const hour = parseInt(time.split(':')[0]);
    const isPM = time.includes('PM') && hour !== 12;
    const adjustedHour = isPM ? hour + 12 : hour;
    return (adjustedHour - 8) * 2 + (time.includes('30') ? 2 : 1);
  };
  return (
    <div className="page-container space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-navy-900">
            Class Schedule
          </h1>
          <p className="text-navy-400 mt-1">Fall 2025 Semester</p>
        </div>

        {/* View Toggle */}
        <div className="flex bg-surface-200 p-1 rounded-lg">
          <button
            onClick={() => setView('calendar')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${view === 'calendar' ? 'bg-white text-navy-900 shadow-sm' : 'text-navy-500 hover:text-navy-700'}`}>
            
            <CalendarIcon className="w-4 h-4" /> Calendar
          </button>
          <button
            onClick={() => setView('list')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${view === 'list' ? 'bg-white text-navy-900 shadow-sm' : 'text-navy-500 hover:text-navy-700'}`}>
            
            <List className="w-4 h-4" /> List
          </button>
        </div>
      </div>

      <motion.div
        key={view}
        initial={{
          opacity: 0,
          y: 10
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        className="card bg-white overflow-hidden">
        
        {view === 'calendar' ?
        <div className="overflow-x-auto">
            <div className="min-w-[800px] p-6">
              {/* Calendar Grid Header */}
              <div className="grid grid-cols-6 gap-4 mb-4">
                <div className="w-16"></div> {/* Time column spacer */}
                {days.map((day) =>
              <div
                key={day}
                className="text-center font-semibold text-navy-900 py-2 bg-surface-100 rounded-lg">
                
                    {day}
                  </div>
              )}
              </div>

              {/* Calendar Body */}
              <div className="relative grid grid-cols-6 gap-4">
                {/* Time Column */}
                <div className="flex flex-col space-y-8 text-xs text-navy-400 font-medium text-right pr-4 pt-2">
                  {times.map((time) =>
                <div key={time} className="h-12 relative">
                      <span className="absolute -top-2 right-4">{time}</span>
                    </div>
                )}
                </div>

                {/* Grid Lines & Classes */}
                <div className="col-span-5 relative grid grid-cols-5 gap-4 bg-surface-50 rounded-lg border border-surface-100 p-2 min-h-[600px]">
                  {/* Horizontal Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                    {times.map((_, i) =>
                  <div
                    key={i}
                    className="w-full border-t border-navy-200 h-16">
                  </div>
                  )}
                  </div>

                  {/* Day Columns */}
                  {days.map((day, dayIdx) =>
                <div key={day} className="relative h-full">
                      {scheduleData.
                  filter((item) => item.day === day).
                  map((item) => {
                    const top =
                    (getGridRow(item.startTime) - 1) * 2 + 'rem';
                    const height = item.duration * 4 + 'rem';
                    return (
                      <div
                        key={item.id}
                        className={`absolute w-full rounded-md border-l-4 p-2 shadow-sm cursor-pointer hover:shadow-md transition-shadow ${item.color}`}
                        style={{
                          top,
                          height,
                          zIndex: 10
                        }}>
                        
                              <p className="text-xs font-bold mb-1 leading-tight">
                                {item.code}
                              </p>
                              <p className="text-xs font-medium leading-tight line-clamp-2">
                                {item.name}
                              </p>
                              <div className="mt-1 flex items-center gap-1 text-[10px] opacity-80">
                                <MapPin className="w-3 h-3" /> {item.room}
                              </div>
                            </div>);

                  })}
                    </div>
                )}
                </div>
              </div>
            </div>
          </div> :

        <div className="p-6">
            <div className="space-y-8">
              {days.map((day) => {
              const dayClasses = scheduleData.
              filter((item) => item.day === day).
              sort((a, b) => a.startTime.localeCompare(b.startTime));
              if (dayClasses.length === 0) return null;
              return (
                <div key={day}>
                    <h3 className="text-lg font-bold text-navy-900 mb-4 pb-2 border-b border-surface-200">
                      {day}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {dayClasses.map((item) =>
                    <div
                      key={item.id}
                      className={`p-4 rounded-xl border-l-4 bg-surface-50 border border-surface-200 shadow-sm flex flex-col gap-3 ${item.color.split(' ')[1]}`}>
                      
                          <div className="flex justify-between items-start">
                            <div>
                              <span className="text-xs font-bold px-2 py-1 rounded bg-white shadow-sm mb-2 inline-block">
                                {item.code}
                              </span>
                              <h4 className="font-bold text-navy-900">
                                {item.name}
                              </h4>
                            </div>
                            <div className="flex items-center gap-1 text-sm font-semibold text-navy-600 bg-surface-200 px-2 py-1 rounded">
                              <Clock className="w-4 h-4" /> {item.startTime}
                            </div>
                          </div>

                          <div className="flex items-center gap-4 text-sm text-navy-500 mt-auto pt-2 border-t border-surface-200">
                            <span className="flex items-center gap-1">
                              <User className="w-4 h-4" /> {item.instructor}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" /> {item.room}
                            </span>
                          </div>
                        </div>
                    )}
                    </div>
                  </div>);

            })}
            </div>
          </div>
        }
      </motion.div>
    </div>);

}