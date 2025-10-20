import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Dashboard from "./Dashboard"; // Adjusted for Pages folder outside src

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* HEADER */}
        <header className="bg-[var(--green)] text-[var(--white)] w-full shadow-lg fixed top-0 left-0 z-50">
          <div className="w-full px-6 lg:px-12 py-4 flex justify-between items-center">
            <h1 className="text-3xl font-bold tracking-wide">Animal Disease Traceability</h1>
            <nav className="flex space-x-6 text-lg">
              <Link to="/" className="hover:text-[var(--light-green)] transition-all duration-200">
                Home
              </Link>
              <Link to="/dashboard" className="hover:text-[var(--light-green)] transition-all duration-200">
                Login
              </Link>
            </nav>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="flex-grow flex items-center justify-center bg-gradient-to-br from-green-50 to-[var(--white)] pt-28 px-4 sm:px-6 lg:px-12 text-center">
          <Routes>
            <Route
              path="/"
              element={
                <div className="w-full max-w-5xl">
                  <h2 className="text-5xl font-extrabold text-[var(--green)] mb-6 leading-tight">
                    Secure Animal Disease Tracking with Blockchain
                  </h2>
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    A Hyperledger Fabric-based framework ensuring real-time, transparent, and tamper-proof
                    traceability in the food supply chain. Enhance biosecurity, protect consumers, and
                    maintain industry trust.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link to="/dashboard">
                      <button className="bg-[var(--green)] text-[var(--white)] px-8 py-3 rounded-xl shadow-lg hover:bg-[var(--light-green)] hover:text-[var(--green)] transition-all duration-300 font-semibold">
                        Get Started
                      </button>
                    </Link>
                    <button className="border-2 border-[var(--green)] text-[var(--green)] px-8 py-3 rounded-xl hover:bg-[var(--light-green)] transition-all duration-300 font-semibold">
                      Learn More
                    </button>
                  </div>
                </div>
              }
            />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <footer className="bg-[var(--green)] text-[var(--white)] text-center py-6 w-full mt-auto">
          <p className="text-sm">
            &copy; 2025 Santa Rosa City Laguna Animal Disease Traceability. All rights reserved.
          </p>
        </footer>
      </div>
    </Router>
  );
}