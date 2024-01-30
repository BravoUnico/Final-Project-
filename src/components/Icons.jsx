
function Icon (icon) {
    switch (icon) {
        case 'Thunderstorm':
            icon='public/icons/thunderstorms.svg'
            console.log("thunderstorm")
            break;
        case 'Snow':
            icon='public/icons/snow.svg'
            console.log("snow")
            break;
        case 'Rain':
            icon='public/icons/rain.svg'
            console.log("snow")
            break;
        case 'Haze':
            icon='public/icons/rain.svg'
            console.log("haze");  
            break;
        case 'Fog':
            icon='public/icons/fog.svg'
            break;
        case 'Cloudy':
            icon='public/icons/cloudy.svg'
            break;
        case 'Clear-night':
            icon='public/icons/clear-night.svg'
            break;
            
    
        default:
            icon='public/icons/clear-day.svg'
            console.log("clear");
    }
    
    
    
    
    return icon

}

export default Icon
