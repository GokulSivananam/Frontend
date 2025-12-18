import "../Styles/Add.css"
import { useForm } from "react-hook-form";
import { useParams, useOutletContext } from "react-router-dom";
import { useEffect } from "react";

export const Edit = () => {
    const { id } = useParams();
    const { data } = useOutletContext();
    
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const event = id ? data.find(item => item.id === parseInt(id)) : null;

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

    const onSubmitHandle = (fdata) => {
        console.log("Updated data:", fdata);
        alert("Event updated successfully!");
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