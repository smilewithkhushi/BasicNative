
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const SEATS_PER_ROW = 5;

const students = [
  'Alice', 'Bob', 'Charlie', 'David', 'Eve',
  'Frank', 'Grace', 'Hank', 'Ivy', 'Jack',
];

const generateSeats = (students: string[]): string[][] => {
  const seats: string[][] = [];
  for (let i = 0; i < students.length; i += SEATS_PER_ROW) {
    seats.push(students.slice(i, i + SEATS_PER_ROW));
  }
  return seats;
};

type SeatProps = {
  student: string;
  onPress: () => void;
};

const Seat: React.FC<SeatProps> = ({ student, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.seat}>
    <Text style={styles.seatText}>{student}</Text>
  </TouchableOpacity>
);

const ClassroomSeatingPlan: React.FC = () => {
  const [seating, setSeating] = useState<string[][]>(generateSeats(students));

  return (
    <View style={styles.container}>
      <FlatList
        data={seating}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            {item.map((student, idx) => (
              <Seat key={idx} student={student} onPress={() => alert(`Student: ${student}`)} />
            ))}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  seat: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 4,
  },
  seatText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ClassroomSeatingPlan;
