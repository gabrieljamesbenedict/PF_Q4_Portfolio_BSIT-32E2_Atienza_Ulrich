import videos from "../data/Videos";
import writing from "../data/Writing";

function Projects() {
  return (
    <section id="projects" className="projects">
      
      <div className="section-header">
      <h1 className="text">Works</h1>
      </div>

      <h2 className="text">Motion and Media</h2>
      <div className="project-grid">
        {videos.map((video, index) => (
          <div className="project-card" key={index}>
            <h3 className="text">{video.title}</h3>            
            <div className="video-wrapper">
          <iframe
            width="300"
            height="200"
            src={`${video.source}`}      
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="description">{video.description}</p>       
      </div>
        ))}
      </div><br></br><br></br>
      
      <h2 className="text">Writing</h2>
      <div className="project-grid">
        {writing.map((write, index) => (
          <div className="project-card" key={index}>
            <h3 className="text">{write.title}</h3>            
            <div className="picture-wrapper">
              <img src={write.image} alt={write.title} />
            </div>
         <p className="description">{write.description}</p>       
      </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;