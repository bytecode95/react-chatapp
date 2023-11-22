import {ChatEngine} from 'react-chat-engine';
import ChatFeed from '../components/ChatFeed';

function App() {

  return (
    <>
      <ChatEngine 
        height="100vh"
        projectID = "c03d171b-161c-4751-beb8-5895212723db"
        userName="chethana"
        userSecret="Vira@123"
        renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
      
      />
    </>
  )
}

export default App
