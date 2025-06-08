export const getTopData = async()=>{

    const data = await fetch("https://run.mocky.io/v3/32ff568b-fc3e-45e4-a7da-7f4485096deb",{
        method: "GET",
    });
   const res = await data.json();
    return res;
}

export const handleUpload = async () => {
    try {
      const result = await fetch("https://run.mocky.io/v3/89ccd842-7dbf-4891-9df9-71329d0d6d9c");
      const text = await result.text(); // read as plain text first
      const res = JSON.parse(text);
      return res;
  
    } catch (err) {
      console.error("Error:", err);
    }
  };
  