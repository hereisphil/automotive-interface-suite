import "./App.css";
import { useTrafficControl } from "@/hooks/useTrafficControl";
import VehicleMap from "@/components/VehicleMap";
import ControlPanel from "@/components/ControlPanel";
import AdminDashboard from "@/components/AdminDashboard";

function App() {
    const {
        connected,
        vehicles,
        systemMetrics,
        speedZones,
        alerts,
        updateEnvironment,
        createAlert,
        updateSpeedLimit,
    } = useTrafficControl();

    // console.log(systemMetrics);

    const handleMapClick = (lng: number, lat: number) => {
        console.log(`Map clicked at: (${lng.toFixed(4)}, ${lat.toFixed(4)})`);
        // Could add functionality to create alerts at clicked location
    };

    return (
        <div className="App">
            <header className="app-header">
                <h1>🚦 Automotive Traffic Control Center</h1>
                <div className="header-info">
                    <span>
                        Real-time Vehicle Monitoring & Management System
                    </span>
                </div>
            </header>
            <main className="app-main">
                <div className="main-grid">
                    {/* Vehicle Tracking Map */}
                    <div className="map-section">
                        <VehicleMap
                            vehicles={vehicles}
                            speedZones={speedZones}
                            alerts={alerts}
                            onMapClick={handleMapClick}
                        />
                    </div>
                    {/* Control Panel */}
                    <div className="control-section">
                        <ControlPanel
                            onSpeedLimitChange={updateSpeedLimit}
                            onAlertCreate={createAlert}
                            onEnvironmentUpdate={updateEnvironment}
                            currentSpeedLimit={55}
                            activeAlerts={alerts}
                        />
                    </div>
                </div>
                {/* Admin Dashboard */}
                <div className="admin-section">
                    <AdminDashboard
                        metrics={systemMetrics}
                        connectionStatus={connected}
                    />
                </div>
            </main>
            <footer className="app-footer">
                <div className="footer-content">
                    <span>
                        Automotive Interface Suite • Lesson 4: Web Traffic
                        Control Center
                    </span>
                    <span>
                        Status: {connected ? "🟢 Connected" : "🔴 Disconnected"}
                    </span>
                </div>
            </footer>
        </div>
    );
}
export default App;
