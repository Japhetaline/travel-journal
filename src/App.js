import Navbar from './component/Navbar';
import MainComponent from './component/MainComponent';
import './App.css';
import data from './component/data';

function App() {
  const Data = data.map(item => {
    return (
      <MainComponent 
      key = {item.id}
      title = {item.title}
        location = {item.location}
        googleMapsUrl = {item.googleMapsUrl}
        startDate = {item.startDate}
        endDate = {item.endDate}
        description =  {item.description}
        ImageUrl = {item.ImageUrl}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      {Data}
    </div>
  );
}

export default App;
