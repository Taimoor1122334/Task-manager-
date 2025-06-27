
import Topbar from '../components/Topbar';
import Calender from '../components/Calender';
import ProjectCard from '../components/ProjectCard';
import SlackProjectCard from '../components/SlackProjectCard';
import TaskList from '../components/TaskList';
import TaskManagementCard from '../components/TaskManagementCard';
import MessageListCard from '../components/MessageListCard';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#FAFAF9]">
     
     

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 min-h-0">
        {/* Topbar */}
        <Topbar />

        {/* Dashboard Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-2 md:p-6 xl:p-12 auto-rows-fr min-w-0">
          {/* Column 1 */}
          <div className="flex flex-col gap-6 w-full">
            <div className="w-full ">
              <ProjectCard />
            </div>
            <div className="w-full ">
              <SlackProjectCard />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6 w-full">
            <div className="w-full ">
              <TaskList />
            </div>
            <div className="w-full ">
              <TaskManagementCard />
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6 w-full">
            <div className="w-full ">
              <Calender />
            </div>
            <div className="w-full ">
              <MessageListCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
