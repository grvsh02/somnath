export class Routes {
    public static login(): string {
        return `/login`;
    }
    public static dashboard(): string {
        return '/dashboard';
    }
    public static checkIn(): string {
        return '/checkin';
    }
    public static checkOut(): string {
        return '/checkout';
    }
    public static leaveRequest(): string {
        return '/leave_request';
    }
}