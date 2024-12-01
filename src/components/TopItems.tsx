// import { useEffect, useState } from "react";
// import getTopItems from "./SpotifyService";

// interface Item {
//   id: string;
//   name: string;
//   images?: { url: string }[]; // For artists or tracks with album art
// }

// const TopItems = ({ type }: { type: "artists" | "tracks" }) => {
//   const [items, setItems] = useState<Item[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchTopItems = async () => {
//       try {
//         const data = await getTopItems(type);
//         setItems(data);
//       } catch (error) {
//         console.error("Error fetching top items:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTopItems();
//   }, [type]);

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div>
//       <h1>My Top {type.charAt(0).toUpperCase() + type.slice(1)}</h1>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             {item.images?.[0]?.url && (
//               <img src={item.images[0].url} alt={item.name} width="50" />
//             )}
//             {item.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TopItems;
