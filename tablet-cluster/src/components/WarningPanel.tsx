import { View, StyleSheet, ScrollView, Text } from "react-native";
import StatusIndicator from "./StatusIndicator";
import { WarningSystemProps } from "../types/dashboard";
export default function WarningPanel({
    warnings,
    systems,
}: WarningSystemProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>VEHICLE STATUS</Text>

            {/* System indicators row */}
            <View style={styles.indicatorRow}>
                <StatusIndicator
                    active={systems.lights}
                    type="info"
                    icon="💡"
                    label="LIGHTS"
                />

                <StatusIndicator
                    active={systems.leftSignal}
                    type="warning"
                    icon="⬅️"
                    label="LEFT"
                    blinking={systems.leftSignal}
                />

                <StatusIndicator
                    active={systems.rightSignal}
                    type="warning"
                    icon="➡️"
                    label="RIGHT"
                    blinking={systems.rightSignal}
                />

                <StatusIndicator
                    active={systems.hazards}
                    type="danger"
                    icon="⚠️"
                    label="HAZARD"
                    blinking={systems.hazards}
                />
            </View>

            {/* Warning messages */}
            {warnings.length > 0 && (
                <View style={styles.warningSection}>
                    <Text style={styles.warningTitle}>WARNINGS</Text>
                    <ScrollView
                        style={styles.warningList}
                        showsVerticalScrollIndicator={false}
                    >
                        {warnings.map((warning, index) => (
                            <Text key={index} style={styles.warningText}>
                                ⚠️ {warning}
                            </Text>
                        ))}
                    </ScrollView>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1a1a1a",
        borderRadius: 10,
        padding: 15,
        margin: 10,
        borderWidth: 1,
        borderColor: "#333",
    },
    title: {
        color: "#888",
        fontSize: 12,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },
    indicatorRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    warningSection: {
        marginTop: 15,
        borderTopWidth: 1,
        borderTopColor: "#333",
        paddingTop: 10,
    },
    warningTitle: {
        color: "#FF4444",
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 5,
    },
    warningList: {
        maxHeight: 80,
    },
    warningText: {
        color: "#FF6666",
        fontSize: 11,
        marginBottom: 3,
    },
});
