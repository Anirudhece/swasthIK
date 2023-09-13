// import React from "react";
// import { useColorModeValue, Flex } from "@chakra-ui/react";
// // import { useQuery } from "@tanstack/react-query";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css"; // not in the docs but necessary
// import L from "leaflet";

// const icon = L.icon({ iconUrl: "/images/marker-icon.png" });

// export default function Map() {
//   return (
//     <>
//       <Flex
//         minH={"100vh"}
//         align={"center"}
//         justify={"center"}
//         bg={useColorModeValue("gray.50", "gray.800")}
//       >
//         <MapContainer
//           //   center={[51.505, -0.09]}
//           zoom={13}
//           //   style={{ height: "400px", width: "100%" }}
//           style={{ width: "100px", height: "400px" }}
//           center={[20, 80]}
//         >
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           />
//           <Marker position={[51.505, -0.09]}>
//             <Popup>
//               A pretty CSS3 popup. <br /> Easily customizable.
//             </Popup>
//           </Marker>
//         </MapContainer>
//       </Flex>
//     </>
//   );
//   //   const fetchWorldwideData = async () => {
//   //     const response = await fetch("https://disease.sh/v3/covid-19/all");
//   //     return response.json();
//   //   };

//   //   const fetchCountryData = async () => {
//   //     const response = await fetch(`https://disease.sh/v3/covid-19/countries/`);
//   //     return response.json();
//   //   };

//   //   const { data: worldwideData, status: worldwideStatus } = useQuery(
//   //     ["worldwideData"],
//   //     fetchWorldwideData
//   //   );
//   //   const { data: countryData, status: countryStatus } = useQuery(
//   //     ["countryData"],
//   //     fetchCountryData
//   //   );

//   //   if (worldwideStatus === "loading" || countryStatus === "loading") {
//   //     return <p>Loading data...</p>;
//   //   }

//   //   if (worldwideStatus === "error" || countryStatus === "error") {
//   //     return <p>Error fetching data.</p>;
//   //   }

//   //       <Marker position={position}>
//   //         <Popup>
//   //           A pretty CSS3 popup. <br /> Easily customizable.
//   //         </Popup>
//   //       </Marker>
//   //   const markers = countryData.map((country) => (
//   //     <Marker
//   //       key={country.country}
//   //       position={[country.countryInfo.lat, country.countryInfo.long]}
//   //       icon={icon}
//   //     >
//   //       <Popup>
//   //         <Box>
//   //           <h3>{country.country}</h3>
//   //           <p>Total Cases: {country.cases}</p>
//   //           <p>Recovered: {country.recovered}</p>
//   //           <p>Deaths: {country.deaths}</p>
//   //         </Box>
//   //       </Popup>
//   //     </Marker>
//   //   ));

//   //   return (
//   //     <>
//   //       <Box sx={{ display: "flex", justifyContent: "center" }}>
//   //         <Box>
//   //           <MapContainer
//   //             style={{ width: "700px", height: "400px" }}
//   //             center={[20, 80]}
//   //             zoom={4}
//   //             scrollWheelZoom={true}
//   //           >
//   //             <TileLayer
//   //               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//   //               attribution="we love bear"
//   //             />
//   //             {markers}
//   //           </MapContainer>
//   //         </Box>
//   //       </Box>
//   //     </>
//   //   );
// }

// // export default Map;

// // const position = [20, 80];

// //     <MapContainer center={position} zoom={4} scrollWheelZoom={true}>
// //       <TileLayer
// //         attribution="we love bear"
// //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //       />
// //       <Marker position={position}>
// //         <Popup>
// //           A pretty CSS3 popup. <br /> Easily customizable.
// //         </Popup>
// //       </Marker>
// //     </MapContainer>
import React from 'react';
// import "./styles.css";

function getPosts() {
  // return fetch('https://jsonplaceholder.typicode.com/posts').then(res=> res.json())
  return fetch('https://cdn-api.co-vin.in/api/v2/admin/location/states')
    .then(res => res.json())
    .then(res =>
      res.states.map(item => ({ id: item.state_id, name: item.state_name }))
    );
}
function getPostById(id) {
  // return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res=> res.json())
  return fetch(
    `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
  )
    .then(res => res.json())
    .then(res =>
      res.districts.map(item => ({
        id: item.district_id,
        name: item.district_name
      }))
    );
}
export default function Maps() {
  const [posts, setPosts] = React.useState(null);
  React.useEffect(() => {
    async function getData() {
      const posts = await getPosts();
      const ids = posts.map(post => post.id);
      const promises = posts.map(post => getPostById(post.id));
      console.log(promises.length);
      let data = {};
      const rest = await Promise.all(promises);
      rest.forEach((row, i) => {
        data[ids[i]] = row;
      });
      setPosts({ states: posts, districts: data });
      // setPosts({states:posts})
      // setPosts({district: data})
    }
    // getData()
  }, []);
  return (
    <div className="App">
      {!posts ? (
        <h2>uncomment the line no 29</h2>
      ) : (
        <pre>{JSON.stringify(posts, null, 2)}</pre>
      )}
    </div>
  );
}
