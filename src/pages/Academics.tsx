import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Clock, CheckCircle2 } from 'lucide-react';
export function Academics() {
  const courses = [
  {
    code: 'CS301',
    name: 'Software Engineering',
    instructor: 'Dr. Ahmed Youssef',
    schedule: 'Sun, Tue 09:00 AM',
    credits: 3
  },
  {
    code: 'CS305',
    name: 'Database Systems',
    instructor: 'Dr. Mona Ali',
    schedule: 'Sun, Tue 11:30 AM',
    credits: 3
  },
  {
    code: 'IT202',
    name: 'Web Development',
    instructor: 'Eng. Karim Hassan',
    schedule: 'Mon, Wed 02:00 PM',
    credits: 3
  },
  {
    code: 'MATH205',
    name: 'Linear Algebra',
    instructor: 'Dr. Samy Ibrahim',
    schedule: 'Mon, Wed 10:00 AM',
    credits: 3
  },
  {
    code: 'ENG102',
    name: 'Technical Writing',
    instructor: 'Dr. Rania Mahmoud',
    schedule: 'Thu 09:00 AM',
    credits: 2
  },
  {
    code: 'HUM101',
    name: 'Egyptian History',
    instructor: 'Dr. Tarek Sayed',
    schedule: 'Thu 12:00 PM',
    credits: 2
  }];

  return (
    <div className="page-container space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-navy-900">
            Academic Information
          </h1>
          <p className="text-navy-400 mt-1">
            View your current standing and registered courses
          </p>
        </div>
        <div className="bg-academic-50 text-academic-600 px-4 py-2 rounded-lg font-semibold border border-academic-100 flex items-center gap-2">
          <Clock className="w-4 h-4" /> Fall 2025 Semester
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* GPA Card */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          className="card p-6 flex items-center gap-6">
          
          <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
            <svg
              className="w-full h-full transform -rotate-90"
              viewBox="0 0 36 36">
              
              <path
                className="text-surface-200"
                strokeWidth="3"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              
              <path
                className="text-academic-500"
                strokeWidth="3"
                strokeDasharray="86, 100"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              
            </svg>
            <span className="absolute text-sm font-bold text-navy-900">
              3.45
            </span>
          </div>
          <div>
            <p className="text-sm text-navy-400 font-medium">Cumulative GPA</p>
            <p className="text-xs text-navy-300 mt-1">Out of 4.0</p>
          </div>
        </motion.div>

        {/* Credits Card */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.1
          }}
          className="card p-6 flex flex-col justify-center">
          
          <div className="flex justify-between items-end mb-2">
            <div>
              <p className="text-sm text-navy-400 font-medium">
                Credits Completed
              </p>
              <p className="text-2xl font-bold text-navy-900 mt-1">
                78{' '}
                <span className="text-sm font-normal text-navy-300">/ 140</span>
              </p>
            </div>
            <BookOpen className="w-6 h-6 text-blue-500 mb-1" />
          </div>
          <div className="w-full bg-surface-200 rounded-full h-2 mt-2">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{
                width: '55%'
              }}>
            </div>
          </div>
        </motion.div>

        {/* Current Courses */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.2
          }}
          className="card p-6 flex items-center gap-4">
          
          <div className="p-4 rounded-xl bg-purple-50 text-purple-500">
            <Award className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm text-navy-400 font-medium">Current Courses</p>
            <p className="text-2xl font-bold text-navy-900 mt-1">6</p>
            <p className="text-xs text-navy-300 mt-1">16 Total Credits</p>
          </div>
        </motion.div>

        {/* Academic Standing */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.3
          }}
          className="card p-6 flex flex-col justify-center items-start">
          
          <p className="text-sm text-navy-400 font-medium mb-3">
            Academic Standing
          </p>
          <div className="flex items-center gap-2 bg-status-approved/10 text-status-approved px-4 py-2 rounded-lg font-semibold w-full">
            <CheckCircle2 className="w-5 h-5" />
            Good Standing
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Course List Table */}
        <div className="lg:col-span-2 card overflow-hidden">
          <div className="p-6 border-b border-surface-200 bg-surface-50">
            <h2 className="text-lg font-bold text-navy-900">
              Registered Courses
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-100 text-navy-400 text-sm">
                  <th className="p-4 font-medium">Course Code</th>
                  <th className="p-4 font-medium">Course Name</th>
                  <th className="p-4 font-medium">Instructor</th>
                  <th className="p-4 font-medium">Schedule</th>
                  <th className="p-4 font-medium text-center">Credits</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-surface-100">
                {courses.map((course, idx) =>
                <tr
                  key={idx}
                  className="hover:bg-surface-50 transition-colors">
                  
                    <td className="p-4 font-semibold text-navy-600">
                      {course.code}
                    </td>
                    <td className="p-4 font-medium text-navy-900">
                      {course.name}
                    </td>
                    <td className="p-4 text-navy-500">{course.instructor}</td>
                    <td className="p-4 text-navy-500">{course.schedule}</td>
                    <td className="p-4 text-center font-medium text-navy-900">
                      {course.credits}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* GPA Trend */}
        <div className="card p-6 flex flex-col">
          <h2 className="text-lg font-bold text-navy-900 mb-6">GPA Trend</h2>
          <div className="flex-grow flex items-end justify-between gap-2 h-48 mt-auto pt-4 border-b border-surface-200 pb-2">
            {[
            {
              sem: 'Fall 23',
              gpa: 3.2,
              height: '80%'
            },
            {
              sem: 'Spr 24',
              gpa: 3.35,
              height: '84%'
            },
            {
              sem: 'Fall 24',
              gpa: 3.4,
              height: '85%'
            },
            {
              sem: 'Spr 25',
              gpa: 3.45,
              height: '86%'
            }].
            map((item, idx) =>
            <div
              key={idx}
              className="flex flex-col items-center gap-2 w-full group">
              
                <span className="text-xs font-bold text-navy-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.gpa}
                </span>
                <div
                className="w-full max-w-[40px] bg-academic-200 group-hover:bg-academic-500 rounded-t-md transition-colors duration-300"
                style={{
                  height: item.height
                }}>
              </div>
                <span className="text-xs text-navy-400 mt-2">{item.sem}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>);

}