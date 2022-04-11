
export const sendData = async (URL = "", data = {}) => {
 
   const response = await fetch(URL, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data)
      })
 return response.json();
}