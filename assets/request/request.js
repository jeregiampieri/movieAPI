export const key = "3c4abaf7eeeeaea38ab0d382b5aff605"

// Función para poder establecer la conexión con la API
export const requestAPI = async(url) => {
    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        return data
    }catch(error){
        console.log(error)
    }
}
