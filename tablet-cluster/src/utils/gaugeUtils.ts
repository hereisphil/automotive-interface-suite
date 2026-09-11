// Gauge calculation utilities
export interface GaugeCalculation {
    angle: number; // Current needle angle in degrees
    percentage: number; // Value as percentage of range
    x: number; // Needle tip X coordinate
    y: number; // Needle tip Y coordinate
    isWarning: boolean; // True if in warning range
    isDanger: boolean; // True if in danger range
}

export function calculateGaugePosition(
    value: number,
    min: number,
    max: number,
    startAngle: number = -120, // Start angle in degrees
    endAngle: number = 120, // End angle in degrees
    centerX: number = 0, // Center X coordinate
    centerY: number = 0, // Center Y coordinate
    radius: number = 100, // Needle length
    warningThreshold?: number,
    dangerThreshold?: number,
): GaugeCalculation {
    // Clamp value to min/max range
    const clampedValue = Math.max(min, Math.min(max, value));

    // Calculate percentage of range
    const percentage = (clampedValue - min) / (max - min);

    // Calculate angle based on percentage
    const totalAngle = endAngle - startAngle;
    const angle = startAngle + percentage * totalAngle;

    // Convert to radians for trigonometry
    const radians = (angle * Math.PI) / 180;

    // Calculate needle tip position
    const x = centerX + Math.cos(radians) * radius;
    const y = centerY + Math.sin(radians) * radius;

    // Determine warning/danger status
    const isWarning = warningThreshold
        ? clampedValue >= warningThreshold
        : false;
    const isDanger = dangerThreshold ? clampedValue >= dangerThreshold : false;

    return {
        angle,
        percentage,
        x,
        y,
        isWarning,
        isDanger,
    };
}

export function generateGaugePath(
    centerX: number,
    centerY: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    strokeWidth: number = 10,
): string {
    const startRadians = (startAngle * Math.PI) / 180;
    const endRadians = (endAngle * Math.PI) / 180;

    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    const startX = centerX + Math.cos(startRadians) * radius;
    const startY = centerY + Math.sin(startRadians) * radius;
    const endX = centerX + Math.cos(endRadians) * radius;
    const endY = centerY + Math.sin(endRadians) * radius;

    return `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`;
}

export function formatSpeed(speed: number): string {
    return Math.round(speed).toString();
}

export function formatRPM(rpm: number): string {
    return (rpm / 1000).toFixed(1);
}
