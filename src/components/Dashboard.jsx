import { useState } from "react";
import { motion } from "framer-motion";
//import PieChart from './pie';
import LineChart from './LineChart';  // Import your LineChart component

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("PersonalizedGoals");
  const [bgColor, setBgColor] = useState("bg-gradient-to-br from-purple-900 to-black");
  const [textColor, setTextColor] = useState("text-white");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black text-white">
      {/* Glassmorphism Header */}
      <div className="backdrop-blur-lg bg-white/10 p-6 border-b border-white/20">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Learning Dashboard
        </h1>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-8">
          {[
            "PersonalizedGoals", 
            "LearningProgress", 
            "AIRecommendations",
            "LearningAnalytics"
          ].map((tab) => (
            <motion.button 
  key={tab}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className={`px-6 py-3 rounded-xl transition-all duration-300 ${
    activeTab === tab 
      ? "bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/30" 
      : "bg-white/10 hover:bg-white/20"
  }`}
  onMouseEnter={() => setActiveTab(tab)} // Change content on hover
  onClick={() => setActiveTab(tab)} // Keep it active on click
>
  {tab.replace(/([A-Z])/g, " $1").trim()}
</motion.button>

          ))}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-6 mb-8">
            <motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="backdrop-blur-lg bg-white/10 p-3 rounded-2xl h-20 flex flex-col justify-center"
>
  <h3 className="text-md text-gray-300">Total Progress</h3>
  <p className="text-xl font-bold">78%</p>
</motion.div>
          <motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="backdrop-blur-lg bg-white/10 p-3 rounded-2xl h-20 flex flex-col justify-center"
>
  <h3 className="text-md text-gray-300">Completed Courses</h3>
  <p className="text-xl font-bold">12</p>
</motion.div>
          <motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="backdrop-blur-lg bg-white/10 p-3 rounded-2xl h-20 flex flex-col justify-center"
>
  <h3 className="text-md text-gray-300">Hours Spent</h3>
  <p className="text-xl font-bold">156</p>
</motion.div>

        </div>

        {/* Dynamic Content Section based on activeTab */}
  <motion.div
  key={activeTab}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.3 }}
  className="backdrop-blur-lg bg-white/10 p-6 rounded-2xl mb-8"
>
  {activeTab === "PersonalizedGoals" && <PersonalizedGoals />}
  {activeTab === "LearningProgress" && <LearningProgress />}
  {activeTab === "AIRecommendations" && <AIRecommendations />}
  {activeTab === "LearningAnalytics" && <LearningAnalytics />}
</motion.div>
      </div>
    </div>
  );
};

const PersonalizedGoals = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold">Personalized Goals</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        { 
          skill: 'React', 
          progress: 60,
          timeLeft: '2 weeks',
          startDate: '2024-01-15',
          endDate: '2024-03-15',
          topics: ['Hooks', 'Context', 'Redux']
        },
        { 
          skill: 'Node.js', 
          progress: 45,
          timeLeft: '3 weeks',
          startDate: '2024-02-01',
          endDate: '2024-04-01',
          topics: ['Express', 'MongoDB', 'REST APIs']
        },
        { 
          skill: 'Python', 
          progress: 75,
          timeLeft: '1 week',
          startDate: '2024-01-01',
          endDate: '2024-02-28',
          topics: ['Django', 'Data Science', 'ML Basics']
        },
        { 
          skill: 'AWS', 
          progress: 30,
          timeLeft: '4 weeks',
          startDate: '2024-02-15',
          endDate: '2024-04-15',
          topics: ['EC2', 'S3', 'Lambda']
        }
      ].map(skill => (
        <motion.div 
          key={skill.skill} 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 p-6 rounded-xl space-y-4"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-medium">{skill.skill}</h3>
            <span className="text-sm text-purple-400">{skill.timeLeft} left</span>
          </div>
          
          <div className="w-full bg-white/10 rounded-full h-2">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${skill.progress}%` }}
              transition={{ duration: 1 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
            />
          </div>
          
          <div className="flex justify-between text-sm text-gray-400">
            <span>{skill.startDate}</span>
            <span>{skill.progress}% Complete</span>
            <span>{skill.endDate}</span>
          </div>

          <div className="mt-4">
            <h4 className="text-sm text-gray-300 mb-2">Current Topics:</h4>
            <div className="flex flex-wrap gap-2">
              {skill.topics.map(topic => (
                <span 
                  key={topic}
                  className="px-3 py-1 bg-white/10 rounded-full text-sm"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-sm font-medium"
          >
            View Details
          </motion.button>
        </motion.div>
      ))}
    </div>
  </div>
);

const LearningProgress = () => (
  <div className="space-y-4">
    <h2 className="text-2xl font-semibold">Learning Progress</h2>
    <ProgressChart />
  </div>
);

const AIRecommendations = () => (
  <div className="space-y-4">
    <h2 className="text-2xl font-semibold">AI Recommendations</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[ 
        { course: 'Machine Learning Basics', match: '95%' },
        { course: 'Advanced React Patterns', match: '88%' },
        { course: 'Cloud Architecture', match: '82%' },
        { course: 'Data Structures', match: '78%' }
      ].map(item => (
        <motion.div 
          key={item.course}
          whileHover={{ scale: 1.02 }}
          className="bg-white/5 p-4 rounded-xl flex justify-between items-center"
        >
          <span>{item.course}</span>
          <span className="text-purple-400">{item.match} match</span>
        </motion.div>
      ))}
    </div>
  </div>
);

const ProgressChart = () => (
  <div className="space-y-4">
    {['Week 1', 'Week 2', 'Week 3', 'Week 4'].map(week => (
      <div key={week} className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>{week}</span>
          <span>75%</span>
        </div>
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "75%" }}
          transition={{ duration: 1 }}
          className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
        />
      </div>
    ))}
  </div>
);

const LearningAnalytics = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold">Learning Analytics</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white/5 p-6 rounded-xl">
        <h3 className="text-xl font-medium mb-4">Progress Overview</h3>
        <LineChart />
      </div>
      <div className="bg-white/5 p-6 rounded-xl">
        <h3 className="text-xl font-medium mb-4">Learning Metrics</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Study Consistency</span>
            <span className="text-purple-400">92%</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Focus Duration</span>
            <span className="text-purple-400">45 mins avg</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Topics Mastered</span>
            <span className="text-purple-400">24</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
