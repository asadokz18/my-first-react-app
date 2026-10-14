import { Link } from "react-router-dom";
const NotFound = () => {
    
  return (
    <div>
      <h1>This page doesn't exist</h1>
      <p style={{
        backgroundColor:"tomato",
        color:"white",
        width:"150px",
        textAlign:"center",
        padding:"10px",
        margin:"20px auto",
        borderRadius:"5px",
        cursor:"pointer"
        }}>
            <Link to="/">Goto Home page</Link>
        </p>
    </div>
  )
}

export default NotFound;
