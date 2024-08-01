import { useEffect, useState } from "react";
import Chat from "@/components/Chat";
import MobileSiderbar from "@/components/MobileSidebar";
import Sidebar from "@/components/Sidebar";
import Message from "@/components/Message";
import { Tooltip } from "react-tooltip";


export default function Home() {
  const [isComponentVisible, setIsComponentVisible] = useState(false);

  useEffect(() => {
  }, []);

  const toggleComponentVisibility = () => {
    setIsComponentVisible(!isComponentVisible);
  };
  const starterMessage = "Ask whatever questions you have about Shouryamaan here :) You can ask questions about his life, his work, or anything else you can think of."
  const systemMessage = "TOBEFILLED"

  return (
    <main className="overflow-hidden w-full h-screen relative flex">
      {isComponentVisible ? (
        <MobileSiderbar toggleComponentVisibility={toggleComponentVisibility} />
        ) : null}
      <div className="dark hidden flex-shrink-0 bg-gray-900 md:flex md:w-[260px] md:flex-col">
        <div className="flex h-full min-h-0 flex-col ">
          <Sidebar />
        </div>
      </div>
      <Chat StartMessage = {starterMessage} toggleComponentVisibility={toggleComponentVisibility} SystemPrompt= {systemMessage}/>
    </main>
  );
}

