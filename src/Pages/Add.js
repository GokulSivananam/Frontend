import "../Styles/Add.css"
import { useForm } from "react-hook-form";

export const Add=()=>{
     const{
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {

    }
  });


    const onSubmitHandle=(fdata)=>{
        console.log(fdata)
        alert("data add Sucessfully ")
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
                <input type="date"/>
                <label>time</label>
                <input type="time"/>
                <label>location</label>
                <input {...register("location")}type="text"/>
                <label>description</label>
                <input {...register("decription")} type="text"/>
                <label>capacity</label>
                <input {...register("number")}type="number"/>

                <button type="submit">submit</button>
                </form>


            </div>
        </>
    )
}