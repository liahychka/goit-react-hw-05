import { NavLink } from "react-router-dom";
import css from './Navigation.module.css'

const Navigation = () => {
  return (
    <div>
          <NavLink to='/' className={css.Link} >Home</NavLink>
          <NavLink to='/movies' className={css.Link} >Movies</NavLink>
      <hr />
    </div>
    
  )
}

export default Navigation