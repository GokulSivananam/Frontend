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
              .slice(0, 3)
              .map((data) => (
                <div className="EventCard" key={data.id}>
                  <h3>{data.title}</h3>
                  <p>{data.description}</p>
                  <p>{data.date}</p>
                  <NavLink to={`/viewall/view/${data._id}`}>
                    <button>View Event</button>
                  </NavLink>
                </div>
              ))}
          </div>
        </section>

        <div className="btnGroup">
        
          <NavLink to={"/viewall"}><button className="viw">Viewall Events</button></NavLink>
          
        </div>
      </div>
    </div>
  );
};
