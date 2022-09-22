export function toFileSize(val: number): string {
    if (val > 1024 * 1024 * 1024) {
        return (val/(1024*1024*1024)).toFixed(1) + "Gb"
    } 
    if (val > 1024 * 1024) {
        return (val/(1024*1024)).toFixed(1) + "Mb"
    } 
    if (val > 1024) {
        return (val/(1024)).toFixed(1) + "Kb"
    }
    return val + "b"
}