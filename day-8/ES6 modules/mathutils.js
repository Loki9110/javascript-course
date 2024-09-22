export const PI = 3.141;

export function getcirc(radius){
    return 2 * PI * radius;
}

export function getarea(radius){
    return PI * radius * radius;
}

export function getvolume(radius){
    return (4/3) * PI * radius * radius * radius;
}