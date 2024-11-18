import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({ info }) {
    const IMG_URL = "https://plus.unsplash.com/premium_photo-1675715923850-b5be1d5d71a7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    if (!info) {
        return <div>Loading...</div>; 
    }
        const { city, temp, humidity, tempMin, tempMax, feelslike } = info;

    return (
        <div className="InfoBox">
          <h3>Present Forecast - {info.weather}</h3>
            <div className="card">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="Weather image"
                        height="140"
                        image={IMG_URL}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {city || 'Unknown City'}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                            <p>Temperature: {temp ?? 'N/A'}&deg;C</p>
                            <p>Humidity: {humidity ?? 'N/A'}</p>
                            <p>Min Temp: {tempMin ?? 'N/A'}&deg;C</p>
                            <p>Max Temp: {tempMax ?? 'N/A'}&deg;C</p>
                            <p>Feels Like: {feelslike ?? 'N/A'}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
