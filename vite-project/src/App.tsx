import { LinkButton } from "./components/LinkButton"
import { Profile } from "./components/Profile"
import { SocialLinks } from "./components/SocialLinks"


function App(){
  return(
     <div className="bg-gray-600 min-h-screen flex flex-col items-center pt-16 px-4">
    
      <Profile />
      <LinkButton />
      <LinkButton />
      <LinkButton />
      <SocialLinks />
    </div>
  )
}

export default App