 import Button from "./Button.jsx";
// import ProductTab from "./ProductTab.jsx";
 import Form from "./Form.jsx";
// import Counter from "./Counter.jsx";
// import LikeButton from "./LikeButton.jsx";
// import LudoBoard from "./LudoBoard.jsx";
// import TodoList from "./TodoList.jsx";
// import BucketList from "./BucketList.jsx";
// import TicketLottery from "./TicketLottery.jsx";
 import FormSample from "./FormSample.jsx";
// import CommentForm from "./CommentForm.jsx";
// import Joker from "./Joker.jsx";

function App(){
  return (
  <>
 <FormSample />
  
  </>
  );
}

export default App;

























// import React, { useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [departureAirport, setDepartureAirport] = useState("");
//   const [arrivalAirport, setArrivalAirport] = useState("");
//   const [departureDate, setDepartureDate] = useState("");
//   const [enableGDS, setEnableGDS] = useState(true);

//   const handleSubmit = () => {
//     // Build the request body using user inputs
//     const requestBody = {
//       Preference: {
//         CabinPreferences: {
//           CabinType: [
//             {
//               Code: "Y",
//             },
//           ],
//         },
//         FarePreferences: {
//           Types: {
//             Type: [
//               {
//                 Code: "PUBL",
//               },
//               {
//                 Code: "PVT",
//               },
//             ],
//           },
//         },
//       },
//       ResponseParameters: {
//         ResultsLimit: {
//           value: 200,
//         },
//         SortOrder: [
//           {
//             Order: "ASCENDING",
//             Parameter: "STOP",
//           },
//           {
//             Order: "ASCENDING",
//             Parameter: "PRICE",
//           },
//           {
//             Order: "ASCENDING",
//             Parameter: "DEPARTURE_TIME",
//           },
//         ],
//         ShopResultPreference: "FULL",
//       },
//       Travelers: {
//         Traveler: [
//           {
//             AnonymousTraveler: [
//               {
//                 PTC: {
//                   value: "ADT",
//                 },
//               },
//             ],
//           },
//           {
//             AnonymousTraveler: [
//               {
//                 PTC: {
//                   value: "CHD",
//                 },
//               },
//             ],
//           },
//         ],
//       },
//       EnableGDS: enableGDS,
//       CoreQuery: {
//         OriginDestinations: {
//           OriginDestination: [
//             {
//               Departure: {
//                 AirportCode: {
//                   value: departureAirport,
//                 },
//                 Date: departureDate,
//               },
//               Arrival: {
//                 AirportCode: {
//                   value: arrivalAirport,
//                 },
//               },
//               OriginDestinationKey: `${departureAirport}${arrivalAirport}`,
//             },
//           ],
//         },
//       },
//     };

//     // Send the POST request
//     axios
//       .post("http://192.168.0.6:3000/vertail/api/search-flight", requestBody, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//       .then((response) => {
//         console.log("API Response:", response.data); // Log the API response
//       })
//       .catch((error) => {
//         console.error("Error making POST request:", error);
//       });
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Flight Search</h1>
//       <div style={{ marginBottom: "10px" }}>
//         <label>Departure Airport: </label>
//         <input
//           type="text"
//           value={departureAirport}
//           onChange={(e) => setDepartureAirport(e.target.value)}
//           placeholder="e.g., DEL"
//         />
//       </div>
//       <div style={{ marginBottom: "10px" }}>
//         <label>Arrival Airport: </label>
//         <input
//           type="text"
//           value={arrivalAirport}
//           onChange={(e) => setArrivalAirport(e.target.value)}
//           placeholder="e.g., BKK"
//         />
//       </div>
//       <div style={{ marginBottom: "10px" }}>
//         <label>Departure Date: </label>
//         <input
//           type="date"
//           value={departureDate}
//           onChange={(e) => setDepartureDate(e.target.value)}
//         />
//       </div>
//       <div style={{ marginBottom: "10px" }}>
//         <label>
//           Enable GDS:
//           <input
//             type="checkbox"
//             checked={enableGDS}
//             onChange={(e) => setEnableGDS(e.target.checked)}
//           />
//         </label>
//       </div>
//       <button onClick={handleSubmit}>Search Flights</button>
//     </div>
//   );
// };

// export default App;
