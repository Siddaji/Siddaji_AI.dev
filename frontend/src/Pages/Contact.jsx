
import React, {useState} from 'react';

export default function Contact(){
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [msg,setMsg] = useState('');
  const [sent,setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !msg){ alert('Please fill all fields'); return; }
    setSent(true);
    setName(''); setEmail(''); setMsg('');
    setTimeout(()=>setSent(false), 3000);
  };

  return (
    <section id="contact">
      <div className="section-title">Contact</div>
      <div className="contact-wrap">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input className="input" placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} />
            <input className="input" placeholder="Your email" value={email} onChange={e=>setEmail(e.target.value)} />
          </div>
          <textarea className="input" placeholder="Message" value={msg} onChange={e=>setMsg(e.target.value)} />
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">Send message</button>
          </div>
          {sent && <p style={{marginTop:12, color:'lightgreen'}}>Message sent (demo)</p>}
        </form>
      </div>
    </section>
  );
}