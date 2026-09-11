import type { VehicleState, EnvironmentUpdate } from "@automotive/shared-types";

// Vehicle position on map
export interface VehiclePosition {
    id: string;
    coordinates: [number, number]; // [longitude, latitude]
    bearing: number; // direction in degrees
    speed: number;
    lastUpdate: number;
}

// Map configuration for Mapbox
export interface MapConfig {
    center: [number, number]; // [longitude, latitude]
    zoom: number;
    bearing: number;
    pitch: number;
    style: string;
}

// Traffic control interfaces
export interface SpeedZone {
    id: string;
    center: [number, number]; // [longitude, latitude]
    radius: number; // in meters
    speedLimit: number;
    active: boolean;
}

export interface TrafficAlert {
    id: string;
    type: "construction" | "accident" | "weather" | "emergency";
    coordinates: [number, number]; // [longitude, latitude]
    message: string;
    severity: "low" | "medium" | "high";
    timestamp: number;
    active: boolean;
}

// Admin dashboard data
export interface SystemMetrics {
    connectedDevices: {
        mobile: number;
        tablet: number;
        web: number;
        test: number;
    };
    serverUptime: number;
    networkLatency: number;
    messagesPerSecond: number;
    lastUpdate: number;
}

// Control panel interfaces
export interface ControlPanelProps {
    onSpeedLimitChange: (limit: number) => void;
    onAlertCreate: (alert: Omit<TrafficAlert, "id" | "timestamp">) => void;
    onEnvironmentUpdate: (update: EnvironmentUpdate) => void;
    currentSpeedLimit: number;
    activeAlerts: TrafficAlert[];
}

// Map component props
export interface MapComponentProps {
    vehicles: VehiclePosition[];
    speedZones: SpeedZone[];
    alerts: TrafficAlert[];
    config: MapConfig;
    onMapClick: (x: number, y: number) => void;
}

// Admin dashboard props
export interface AdminDashboardProps {
    metrics: SystemMetrics;
    vehicleStates: Record<string, VehicleState>;
    connectionStatus: boolean;
}
