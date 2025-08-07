import { useState , useEffect } from "react";
import socialData from './data/socials.json';

const Dashboard = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [socialData, setSocialData] = useState({
        platforms: [],
        todayOverview: []
    });

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => {
    setSocialData({
      platforms: socialData.platforms,
      todayOverview: socialData.todayOverview
    });
  }, []);

    return ( 
        <div className={darkMode ? 'dark' : ''}>
            <div className="flex justify-center w-full min-h-screen dark:bg-gray-950 ">
                <div className="bg-blue-50 rounded-b-2xl h-56 w-full absolute top-0 left-0 z-[-100] dark:bg-gray-900"></div>
                <div className="flex flex-col gap-8 p-6 w-full sm:px-8 xl:gap-10 xl:w-[90%]">
                    <header>
                    <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-center">
                        <div className="flex flex-col justify-start">
                            <h1 className="text-gray-950 font-bold text-2xl w-fit dark:text-white">Social Media Dashbord</h1>
                            <h4 className="text-gray-650 font-semibold w-fit dark:text-gray-400">Total Followers: 23.004</h4>
                        </div>

                        <hr className="border-gray-650 lg:hidden" />

                        <div className="flex justify-between lg:gap-4">
                            <h3 className="text-gray-650 font-semibold dark:text-gray-400">Dark Mode</h3>
                            <button onClick={toggleDarkMode}>
                              <label className="relative block h-6 w-12 cursor-pointer rounded-full bg-gray-400 dark:bg-[linear-gradient(to_right,hsl(210,79%,56%),hsl(146,68%,55%))]">
                                <span className={`absolute m-1 size-4 rounded-full bg-navy-50 ${darkMode ? 'start-6' : 'start-0'} dark:bg-gray-900`}></span>
                              </label>
                            </button>
                        </div>
                    </div>
                    </header>
                
                    <div className="flex flex-col gap-8">
                    {socialData.platforms && socialData.platforms.length > 0 ? (
                        <section className="grid gap-4 sm:grid-cols-2 lg:gap-x-6 xl:grid-cols-4">
                        {socialData.platforms.map((item) => (
                            <div key={item.id} className="bg-navy-50 rounded-lg hover:bg-navy-100 hover:cursor-pointer transition-colors duration-200 dark:bg-navy-950 dark:hover:bg-navy-900">
                            <div className="bg-blue-600 w-full h-1 rounded-t-lg"></div>
                            <div className="flex flex-col items-center gap-5 p-5">
                                <div className="flex gap-2 justify-center items-center">
                                    <img src={item.icon} alt={item.name} 
                                    className="w-4 h-4"/>
                                    <label className="text-gray-650 font-semibold dark:text-gray-400">{item.username}</label>   
                                </div>

                                <div className="flex flex-col gap-1 items-center">
                                    <span className="text-gray-950 font-bold text-6xl dark:text-white w-fit">{item.totalFollowers}</span>
                                    <span className="text-gray-650 tracking-[.3rem] dark:text-gray-400">FOLLOWERS</span>
                                </div>

                                <div className="flex gap-1 justify-center items-center">
                                    <img src={item.changeDirection} alt={item.changeDirection} />
                                    <span className={`font-medium text-sm ${item.changeState === 'up' ? 'text-green-500' : 'text-red-500'}`}>{item.followersChange}</span>
                                    <div className={`${item.changeState === 'up' ? 'text-green-500' : 'text-red-500'} font-medium text-sm`}>Today</div>
                                </div>
                            </div>
                            </div>
                        ))}
                        
                    </section>
                    ) 
                    : ( <div>no data</div> )}
                    
                    <section>
                        <h1 className="text-gray-650 font-bold text-2xl w-fit mb-6">Overview - Today</h1>

                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {socialData.todayOverview && socialData.todayOverview.length > 0 ? (
                                socialData.todayOverview.map((item) => (
                                    <div key={item.id} className="flex flex-col gap-6 p-6 bg-navy-50 rounded-lg hover:bg-navy-100 hover:cursor-pointer transition-colors duration-200 dark:bg-navy-950 dark:hover:bg-navy-900">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-650 font-semibold dark:text-gray-400">{item.metric}</span>
                                            <img src={item.icon} alt={item.name} className="w-4 h-4"/>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-950 font-bold text-3xl dark:text-white">{item.metricValue}</span>
                                            <div className="flex gap-1 items-center">
                                                <img src={item.changeDirection} alt={item.changeState}/>
                                                <span className={`${item.changeState === 'up' ? 'text-green-500' : 'text-red-500'} font-semibold`}>{item.percent}%</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) 
                            : ( <div>no today overview data</div> ) }
                        </div>
                    </section>
                    </div>
                </div>
        </div>
        </div>
     );
}
 
export default Dashboard;