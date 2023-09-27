import { Outlet } from "react-router-dom";


const LayoutPublic = () => {
    return (
        <div className="container">
            <Outlet />
            <footer>Este es el Footer</footer>
      </div>
    )

}

export default LayoutPublic;