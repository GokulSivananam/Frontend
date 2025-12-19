import "../Styles/Add.css"
import { useForm } from "react-hook-form";
import { useParams, useOutletContext, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Edit = () => {
    const { id } = useParams();
    const { data } = useOutletContext();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userData = localStorage.getItem('user');
        if (!token || !userData) {
            navigate('/login');
            return;
        }
        const parsedUser = JSON.parse(userData);
        if (parsedUser.role !== 'admin') {
            alert('Only admins can edit events');
            navigate('/dashboard');
            return;
        }
        setUser(parsedUser);
    }, [navigate]);

    const event = id ? data.find(item => item._id === id) : null;

    useEffect(() => {
        if (event) {
            setValue("title", event.title);
            setValue("date", event.date);
            setValue("time", event.time);
            setValue("location", event.location);
            setValue("description", event.description);
            setValue("capacity", event.capacity);
        }
    }, [event, setValue]);

    const onSubmitHandle = async (fdata) => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`https://backend-qg3x.onrender.com/api/events/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(fdata)
            });
            const result = await response.json();
            if (response.ok) {
                alert("Event updated successfully!");
            } else {
                alert("Failed: " + result.message);
            }
        } catch (error) {
            alert("Error updating event: " + error.message);
        }
    };

    if (!id) {
        return <h1>Please provide an event ID in the URL (e.g., /edit/101)</h1>;
    }

    if (!event) {
        return <h1>Event not found</h1>;
    }

    return (
        <>
            <div className="Addevent">
                <form onSubmit={handleSubmit(onSubmitHandle)}>
                    <h1>Edit Event</h1>
                    
                    <label>Event Name</label>
                    <input 
                        {...register("title", {
                            required: "Name is Required Please Enter",
                        })}
                        type="text"
                    />
                    
                    <label>Date</label>
                    <input {...register("date")} type="date" />
                    
                    <label>Time</label>
                    <input {...register("time")} type="time" />
                    
                    <label>Location</label>
                    <input {...register("location")} type="text" />
                    
                    <label>Description</label>
                    <input {...register("description")} type="text" />
                    
                    <label>Capacity</label>
                    <input {...register("capacity")} type="number" />

                    <button type="submit">Update</button>
                </form>
            </div>
        </>
    );
}