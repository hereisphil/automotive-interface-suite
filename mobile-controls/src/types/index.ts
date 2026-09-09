// Import our server types
import {
    VehicleState,
    ControlInput,
    ClientType,
} from "@automotive/shared-types";

// Steering slider props
export interface SteeringSliderProps {
    onSteer: (value: number) => void; // -1 to 1
    disabled?: boolean;
}
// Gas pedal props
export interface GasPedalProps {
    onThrottle: (value: number) => void; // 0 to 1
    disabled?: boolean;
}
// Brake button props
export interface BrakeButtonProps {
    onBrake: (type: string, value: number) => void;
    disabled?: boolean;
}
// Controls component props
export interface ControlsProps {
    onControl: (type: string, value: string | boolean) => void;
    currentGear?: string;
    systems?: {
        lights: boolean;
        leftSignal: boolean;
        rightSignal: boolean;
        hazards: boolean;
    };
}
// Custom hook for vehicle connection
export interface VehicleConnection {
    socket: any;
    connected: boolean;
    vehicleState: VehicleState;
    sendControlInput: (type: string, value: string | number | boolean) => void;
}
// App state interface
export interface AppState {
    connected: boolean;
    vehicleState: VehicleState;
    connectionError?: string;
}
