import { useOutletContext } from "react-router-dom";

export const ViewAll = () => {
  const { data } = useOutletContext();
  return (
    <>
      <h1>Events</h1>
      <div className="Cards">
        {data
          .map((data) => (
            <div className="EventCard">
              <h3>{data.title}</h3>
              <p>{data.description}</p>
              <p>{data.date}</p>
              <button>View Event</button>
            </div>
          ))}
      </div>
    </>
  );
};
