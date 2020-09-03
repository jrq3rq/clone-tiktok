import React from "react";
import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="app__videos">
          <Video
            url="https://v77.tiktokcdn.com/f9475279bd542e20f14364b7a987dac3/5f505eda/video/tos/useast2a/tos-useast2a-ve-0068c003/aa322c4f19d74c0fa14aa3779709ba72/?a=1233&br=5654&bt=2827&cr=0&cs=0&cv=1&dr=0&ds=6&er=&l=20200902211108010115153151164B1C1A&lr=all&mime_type=video_mp4&qs=0&rc=M2VkeGh1ZDpodTMzZjczM0ApODs8NDZoOGQ7N2lkaWdkZmdncXNjZTZicnBfLS1jMTZzc2FfMC9jYTI0XzJeX2EzL2I6Yw%3D%3D&vl=&vr="
            channel="jamesrrs.me"
            description="YOO this works!"
            song="99 problems but REACT AINT ONE!"
            likes={123}
            messages={456}
            shares={789}
          />
          <Video
            url="https://v77.tiktokcdn.com/5e9c1c28e570abb0d259015b810505c1/5f5084e5/video/tos/useast2a/tos-useast2a-ve-0068c004/4e50009a14be49ef99f826afd3380335/?a=1233&br=934&bt=467&cr=0&cs=0&cv=1&dr=0&ds=6&er=&l=20200902235310010115228071125D095B&lr=all&mime_type=video_mp4&qs=0&rc=ajZlZGdpOTU1dzMzOjczM0ApaGg4Z2k8aWQ3Nzw1OmYzaGdpM2suZGNsaTVfLS02MTZzczUvLi4yMTNhMGAxLl8vM146Yw%3D%3D&vl=&vr="
            channel="jamesrrs.me"
            description="YOO this works!"
            song="99 problems but REACT AINT ONE!"
            likes={6575}
            messages={4586}
            shares={7889}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
