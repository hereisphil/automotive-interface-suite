import { VehicleState } from "@automotive/shared-types";

// Gauge configuration interfaces
export interface GaugeProps {
    value: number;
    min: number;
    max: number;
    size: number;
    warningThreshold?: number;
    dangerThreshold?: number;
    unit: string;
    label: string;
    color?: string;
}

// Speedometer specific props
export interface SpeedometerProps {
    speed: number;
    size?: number;
    maxSpeed?: number;
    speedLimit?: number;
    color?: string;
}

// RPM gauge specific props
export interface RPMGaugeProps {
    rpm: number;
    size?: number;
    maxRpm?: number;
    redline?: number;
    color?: string;
}

// Status indicator props
export interface StatusIndicatorProps {
    active: boolean;
    type: "warning" | "info" | "success" | "danger";
    icon: string;
    label: string;
    blinking?: boolean;
}

// Warning system interface
export interface WarningSystemProps {
    warnings: string[];
    systems: {
        lights: boolean;
        leftSignal: boolean;
        rightSignal: boolean;
        hazards: boolean;
    };
}

// Trip computer interface
export interface TripComputerProps {
    trip: number;
    odometer: number;
    fuel: number;
    battery: number;
}

// Main gauges component props
export interface MainGaugesProps {
    speed: number;
    rpm: number;
    accelerating: boolean;
}

// Dashboard header props
export interface DashboardHeaderProps {
    connected: boolean;
    lastUpdate: number;
    gear: string;
    speedLimit: number;
}

// Status panel props
export interface StatusPanelProps {
    warnings: string[];
    systems: {
        lights: boolean;
        leftSignal: boolean;
        rightSignal: boolean;
        hazards: boolean;
    };
    trip: number;
    odometer: number;
    fuel: number;
    battery: number;
}

// Main dashboard state
export interface DashboardState {
    vehicleState: VehicleState;
    connected: boolean;
    lastUpdate: number;
}
