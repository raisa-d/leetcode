function charDuplicates(arr) {
    let map = {}
    // add nums and freq to map object
    for(const num of arr) {
        map[num] = map[num]+1 || 1
    }
    // loop thru map
    // if any value >= 2, true
    for(const num in map) {
        if(map[num] >= 2) {
            return true
            }
        }
    // if all unique return false
    return false
}