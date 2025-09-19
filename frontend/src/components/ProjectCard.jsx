import React from 'react';
export default function ProjectCard({project}){
  const { title, shortDescription, image, techStack=[], repoLink, liveLink } = project || {};
  return (
    <article className="card">
      <img src={image || 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=1200&auto=format&fit=crop'} alt={title}/>
      <h3>{title}</h3>
      <p>{shortDescription}</p>
      <div className="badges">
        {techStack.slice(0,5).map((t, i) => <span key={i} className="badge">{t}</span>)}
      </div>
      <div className="card-actions">
        {liveLink && <a href={liveLink} target="_blank" rel="noreferrer" className="live">Live</a>}
        {repoLink && <a href={repoLink} target="_blank" rel="noreferrer" className="code">Code</a>}
      </div>
    </article>
  );
}