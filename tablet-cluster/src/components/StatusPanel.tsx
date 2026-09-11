import { View, StyleSheet, Dimensions } from "react-native";
import WarningPanel from "./WarningPanel";
import TripComputer from "./TripComputer";
import { StatusPanelProps } from "../types/dashboard";

export default function StatusPanel({
    fuel,
    battery,
    warnings,
    systems,
    trip,
    odometer,
}: StatusPanelProps) {
    return (
        <View style={styles.container}>
            <View style={styles.leftPanel}>
                <WarningPanel warnings={warnings} systems={systems} />
            </View>

            <View style={styles.rightPanel}>
                <TripComputer
                    fuel={fuel}
                    battery={battery}
                    trip={trip}
                    odometer={odometer}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingBottom: 20,
        gap: 10,
    },
    leftPanel: {
        flex: 1,
    },
    rightPanel: {
        flex: 1,
    },
});
