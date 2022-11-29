import React, {useState, useEffect} from 'react'

function Weather() {
    const [location, setLocation] = useState({});

    const options = {
        enableHighAccuracy: true,
        timeout: 8000,
        maximumAge: 0
    }

    const locationSucess = (pos) => {
        const {latitude, longitude} = pos.coords
        setLocation({latitude, longitude})
    }

    const locationError = (err) => {
        window.alert('Please allow access to location to use this app.')
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(locationSucess, locationError, options)
    }

    useEffect(()=>{
        getLocation()
    }, [])

    console.log(location)

    return (
        <div>

        </div>
    )
}

export default Weather
