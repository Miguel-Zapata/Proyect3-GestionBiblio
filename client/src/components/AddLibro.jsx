import axios from "axios";

const AddLibro = (props)=>{

    const addLibro = async () => {
        try {
          let response = await axios.put(
            "/libraries/add-card",
            { card: props.idLibro },
            {
              headers: {
                Authorization: localStorage.getItem("jwt_token"),
              },
            }
          );
          console.log(response.data);
        } catch (err) {
          console.log(err);
        }
      };
    
      return (
        <button onClick={addLibro}>Añadir a mi Biblioteca</button>
      );

}

export default AddLibro;