import { useParams, useOutletContext, Link } from "react-router-dom";
import "../Styles/View.css";
 
export const View = () => {
  const { resId } = useParams();
  const { data } = useOutletContext();
  
  const event = data.find(item => item.id === parseInt(resId));
  
  if (!event) {
    return <h1 className="not-found">Event not found</h1>;
  }
  
  return (
    <>
      <div className="view-container">
        <h1 className="view-title">{event.title}</h1>
        
        <div className="event-detail">
          <div className="detail-label">Date:</div>
          <div className="detail-value">{event.date}</div>
        </div>
        
        <div className="event-detail">
          <div className="detail-label">Time:</div>
          <div className="detail-value">{event.time}</div>
        </div>
        
        <div className="event-detail">
          <div className="detail-label">Location:</div>
          <div className="detail-value">{event.location}</div>
        </div>
        
        <div className="event-detail">
          <div className="detail-label">Description:</div>
          <div className="detail-value">{event.description}</div>
        </div>
        
        <div className="event-detail">
          <div className="detail-label">Capacity:</div>
          <div className="detail-value">{event.capacity} people</div>
        </div>
        
        <div className="event-detail">
          <div className="detail-label">Created By:</div>
          <div className="detail-value">{event.createdBy}</div>
        </div>
        
        <Link to={`/edit/${event.id}`}>
          <button className="edit-button">
            Edit Event
          </button>
        </Link>
      </div>
   </>
  );
};
