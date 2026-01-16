// "use client";

// import { useEffect, useState } from "react";
// import api from "../../lib/api";
// import { useAuth } from "../../context/AuthContext";

// export default function Products() {
//   const [products, setProducts] = useState([]);
//   const { user } = useAuth();

//   useEffect(() => {
//     api.get("/products").then((res) => setProducts(res.data));
//   }, []);

//   return (
//     <div>
//       <h1>Products</h1>
//       {user?.role === "manager" && <button>Add Product</button>}
//       {products.map((p: any) => (
//         <div key={p._id}>{p.name}</div>
//       ))}
//     </div>
//   );
// }

import ProtectedRoute from "../../components/ProtectedRoute";

export default function ProductsPage() {
  return (
    <ProtectedRoute allowedRoles={["manager", "storekeeper"]}>
      <h1 className="text-2xl font-bold">Products</h1>
    </ProtectedRoute>
  );
}
