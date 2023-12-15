import Home from "../components/pages/Home";
import ProtectedRoute from "@/components/route/ProtectedRoute";

export default function HomePage() {
  return (
    <div>
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    </div>
  );
}
