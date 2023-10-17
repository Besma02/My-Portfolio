import git from '../../public/img/git.png'
import beh from '../../public/img/beh.png'
import lin from '../../public/img/lin.png'
import y from '../../public/img/y.png'

 export default function Navbar() {
 
   return (
    <nav  style={{display:"flex", marginLeft:"60%",padding:"20px 40px",cursor:"pointer"}}>
    <a href="https://github.com/Besma02"><img src={git} className='photo'/></a>
    <a href="https://www.behance.net/besmaharzli1"><img src={beh} className='photo'/></a>
    <a href="https://www.youtube.com/@smilemedias4481"><img src={y} className='photo'/></a>
    <a href="https://www.linkedin.com/in/besma-harzli-a44538196/"><img src={lin} className='photo'/></a>
   
  </nav>
   )
 }
 
