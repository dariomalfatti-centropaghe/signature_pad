export interface BasicPoint {
    x: number;
    y: number;
    pressure: number;
    time: number;
    azimuth: number;
    altitude: number;
}
export declare class Point implements BasicPoint {
    x: number;
    y: number;
    pressure: number;
    time: number;
    azimuth: number;
    altitude: number;
    constructor(x: number, y: number, pressure?: number, time?: number, azimuth?: number, altitude?: number);
    distanceTo(start: BasicPoint): number;
    equals(other: BasicPoint): boolean;
    velocityFrom(start: BasicPoint): number;
}
