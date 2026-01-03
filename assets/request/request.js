// Función para poder establecer la conexión con la API
export const requestAPI = async() => {
    try{
        const response = await fetch(`https://openweathermap.org/api`)
        const data = await response.json()
        console.log(data)
        return data
    }catch(error){
        console.log(error)
    }
}
