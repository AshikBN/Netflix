import {  ArrowBackOutlined } from "@material-ui/icons"
import "./watch.scss"

const Watch = () => {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackOutlined/>
            Home

        </div>
        <video className="video"
        autoPlay 
        progress 
        controls 
        src="https://player.vimeo.com/external/372335193.sd.mp4?s=80151fa22b2eba81883c8641f2c9e493762c7357&profile_id=164&oauth2_token_id=57447761"/>
    </div>
  )
}

export default Watch