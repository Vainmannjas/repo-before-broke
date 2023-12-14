import { useRef } from "react"


const VideoPlayer = () => {
  const ref = useRef()

  const handlePlay = () => {
    ref.current.play()
  }

  const handlePause = () => {
    ref.current.pause()
  }

  return (
    <div>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <video
        src="https://player.vimeo.com/video/524933864?h=1ac4fd9fb4&title=0&byline=0&portrait=0" 
        width="640" 
        height="360" 
        ref={ref}
      />
    </div>
  )
}

export default VideoPlayer
