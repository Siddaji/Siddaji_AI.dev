
import React, {useEffect, useState} from 'react';
// import { getProjects } from '../api/api';
import ProjectCard from '../components/ProjectCard';

export default function Projects(){
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    let mounted = true;
    getProjects()
      .then(res => { if(mounted) setProjects(res.data); })
      .catch(err => console.error(err))
      .finally(()=> mounted && setLoading(false));
    return ()=> mounted = false;
  },[]);

  return (
    <section id="projects">
      <div style={{marginBottom:18}} className="section-title">Projects</div>
      {loading ? <p>Loading…</p> :
        projects.length ? (
          <div className="projects-grid">
            {projects.map(p => <ProjectCard key={p._id} project={p} />)}
          </div>
        ) : <p>No projects yet — add some via backend.</p>
      }
    </section>
  );
}