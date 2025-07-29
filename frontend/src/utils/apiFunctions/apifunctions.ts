export const getTopData = async()=>{

    const data = await fetch("https://photos.free.beeceptor.com/top-photos",{
        method: "GET",
    });
   const res = await data.json();
   console.log(res);
    return res;
}
export const getData = async()=>{

  const data = await fetch("https://photos.free.beeceptor.com/top-photos",{
      method: "GET",
  });
 const res = await data.json();
 console.log(res);
  return res;
}
export const handleUpload = async (data:{selectedFile: string | null,category:string}) => {
    try {
      const result = await fetch("https://photos.free.beeceptor.com/");
      const text = await result.text(); // read as plain text first
      const res = JSON.parse(text);
    if(res.status ==="ok"){
      return true;
    }
    return false;
  
    } catch {
      return false;
    }
  };
  
export const getCategories = async () => {
  try {
    const response = await fetch("https://photos.free.beeceptor.com/category");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}