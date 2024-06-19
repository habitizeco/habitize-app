export default interface habitType {
    name: string;
    weekdays: [boolean, boolean, boolean, boolean, boolean, boolean, boolean];
    hour: number;
    minutes: number;
    last_tracked_at: Date | null;
    streak: number;
}
