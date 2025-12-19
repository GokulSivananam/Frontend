import "../Styles/Add.css"
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Add=()=>{
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    
    const{
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {

    }
  });

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userData = localStorage.getItem('user');
        if (!token || !userData) {
            navigate('/login');
            return;
        }
        const parsedUser = JSON.parse(userData);
        if (parsedUser.role !== 'admin') {
            alert('Only admins can create events');
            navigate('/dashboard');
            return;
        }
        setUser(parsedUser);
    }, [navigate]);

    const onSubmitHandle = async (fdata) => {
        console.log("Form data:", fdata);
        const token = localStorage.getItem('token');
        try {
            const response = await fetch("https://backend-qg3x.onrender.com/api/events", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(fdata)
            });
            const result = await response.json();
            console.log("Response:", result);
            if (response.ok) {
                alert("Event added successfully!");
            } else {
                alert("Failed: " + result.message);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error adding event: " + error.message);
        }
    };

   
    return(
        <>
           <div className="Addevent">

            <form onSubmit={handleSubmit(onSubmitHandle)}>  
                <h1>Add Event</h1>
 
                <label>Event Name</label>
                <input 
                {...register("title",{
                  required: "Name is Required Please Enter",
                })}
                type="text"
                ></input>
                <label>date</label>
                <input {...register("date")} type="date"/>
                <label>time</label>
                <input {...register("time")} type="time"/>
                <label>location</label>
                <input {...register("location")}type="text"/>
                <label>description</label>
                <input {...register("description")} type="text"/>
                <label>capacity</label>
                <input {...register("capacity")} type="number"/>

                <button type="submit">submit</button>
                </form>


            </div>
        </>
    )
}