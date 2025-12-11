import { NavLink, useOutletContext } from "react-router-dom";
import "../Styles/Dashboard.css";

export const Dashboard = () => {
  const { data } = useOutletContext();

  return (
    <div className="Dashboard">
      <h1>Event Management System</h1>

      <div className="Container">
        <section>
          <h2>UpComingEvents</h2>
          <div className="Cards">
            {data
              .filter((events) => events.id > 100 && events.id < 105)
              .map((data) => (
                <div className="EventCard">
                  <h3>{data.title}</h3>
                  <p>{data.description}</p>
                  <p>{data.dueDate}</p>
                  <button>View Event</button>
                </div>
              ))}
          </div>
        </section>

        <div className="btnGroup">
         
          <NavLink to={"/viewall"}> <button className="mge">Manage Events</button></NavLink>
          <NavLink to={"/viewall"}><button className="viw">Viewall Events</button></NavLink>
          
        </div>
      </div>
    </div>
  );
};
