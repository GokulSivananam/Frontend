
import{  useParams } from "react-router-dom";
 
export const View = () => {
  const { resId } = useParams();
  return (
    <>
      <h1>Event Number : {resId}</h1>
   </>
  );
};
