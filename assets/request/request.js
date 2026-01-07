export const key = "3c4abaf7eeeeaea38ab0d382b5aff605"

// Función para poder establecer la conexión con la API
export const requestAPI = async(url, page = 1) => {
    try{
        const response = await fetch(url + `&page=${page}`)
        const data = await response.json()
        return data
    }catch(error){
        console.log(error)
    }
}
