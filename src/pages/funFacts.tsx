import { useEffect, useState } from "react";
import Chat from "@/components/Chat";
import MobileSiderbar from "@/components/MobileSidebar";
import Sidebar from "@/components/Sidebar";
import Message from "@/components/Message";

export default function Home() {
  const [isComponentVisible, setIsComponentVisible] = useState(false);

  useEffect(() => {
  }, []);

  const toggleComponentVisibility = () => {
    setIsComponentVisible(!isComponentVisible);
  };
  const starterMessage = "Here you can ask for fun facts about Shouryamaan. You can ask questions about a fun fact and get more information about it."
  const systemMessage = "TOBEFILLED"

  return (
    <main className="overflow-hidden w-full h-screen relative flex">
      {isComponentVisible ? (
        <MobileSiderbar toggleComponentVisibility={toggleComponentVisibility} />
        ) : null}
      <div className="hidden flex-shrink-0 bg-gray-900 md:flex md:w-[260px] md:flex-col">
        <div className="flex h-full min-h-0 flex-col ">
          <Sidebar />
        </div>
      </div>
      <Chat StartMessage = {starterMessage} toggleComponentVisibility={toggleComponentVisibility} SystemPrompt= {systemMessage}/>
    </main>
  );
}
