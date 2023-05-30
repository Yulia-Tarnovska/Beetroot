import './Weather.scss';
import Lisbon from '../assets/Lisbon.png';
import Paris from '../assets/Paris.png';
import Belgrade from '../assets/Belgrade.png';
import Venice from '../assets/Venice.png';
import TelAvive from '../assets/TelAvive.png';
import Cair from '../assets/Cair.png';
import NewYork from '../assets/NewYork.png';
import NewDelhi from '../assets/NewDelhi.png';
import SanFrancisco from '../assets/SanFrancisco.png';
import Tokyo from '../assets/Tokyo.png';
import Sydney from '../assets/Sydney.png';




    let weather_data = [
        {
            city: 'Lisbon',
            temperature: '21℃',
            color: '#3399CC',
            picture: '../assets/Lisbon.png'
        },
        {
            city: 'Paris',
            temperature: '11℃',
            color: '#33CCCC',
            // picture: './assets/Paris.png'
        },
        {
            city: 'Belgrade',
            temperature: '15℃',
            color: '#996699',
            // picture: './assets/Belgrade.png'
        },
        {
            city: 'Venice',
            temperature: '21℃',
            color: '#C24747',
            // picture: './assets/Venice.png'
        },
        {
            city: 'Tel-Avive',
            temperature: '32℃',
            color: '#E2674A',
            // picture: './assets/Tel-Avive.png'
        },
        {
            city: 'Cair',
            temperature: '21℃',
            color: '#FFCC66',
            // picture: './assets/Cair.png'
        },
        {
            city: 'New-York',
            temperature: '17℃',
            color: '#99CC99',
            // picture: './assets/New-York.png'
        },
        {
            city: 'New-Delhi',
            temperature: '17℃',
            color: '#669999',
            // picture: './assets/New-Delhi.png'
        },
        {
            city: 'San-Francisco',
            temperature: '15℃',
            color: '#CC6699',
            // picture: './assets/San-Francisco.png'
        },
        {
            city: 'Tokyo',
            temperature: '8℃',
            color: '#339966',
            // picture: './assets/Tokyo.png'
        },
        {
            city: 'Sydney',
            temperature: '25℃',
            color: '#666699',
            // picture: './assets/Sydney'
        },

    ];

    function Weather() {
        
        return (
           <div className='weather-wrapper'> 
                {weather_data.map(element => {
                    return (
                    <div className={"weather-item-" + element.city} style={{backgroundColor: element.color, border: '2px solid white',
                    width: '25%', flexGrow: 2, padding: '15px'}}>
                        
                        <p>{element.city}</p>
                        <span>{element.temperature}</span>
                        <img src={(element.picture)}/>
                        
                    </div>)
                    
                    })
                }
            </div>
        )

}

export default Weather;