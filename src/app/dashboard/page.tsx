import ProtectedRoute from "../../components/ProtectedRoute";

export default function DashboardPage() {
  return (
    <ProtectedRoute allowedRoles={["manager"]}>
      <h1 className="text-2xl font-bold">Manager Dashboard</h1>
    </ProtectedRoute>
  );
}
