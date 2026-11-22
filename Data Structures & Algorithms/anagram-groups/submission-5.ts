class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const res = {}
        for (let s of strs) {
            const sSort = s.split('').sort().join('');
            if (!res[sSort]) {
                res[sSort] = []
            }
            res[sSort].push(s)
        }
        return Object.values(res);
    }
}
