import GenericService from "../GenericService";
class Weather extends GenericService {
    
    gettodayWeather = (data) => this.get("weather/today",data);
    getwe=(city)=>this.get("weather/to/"+city)
    getfo=(city)=>this.get("weather/forecast/"+city)
}

let weather = new Weather();
export default weather;