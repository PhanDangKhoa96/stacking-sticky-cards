/**
 * Returns a symmetric offset for an item at `index` within a list of `count`
 * items, distributed evenly across `[-range, range]`.
 *
 * - Odd count:  centre item gets 0, others spread symmetrically (e.g. -r, 0, +r)
 * - Even count: no centre item; values skip 0 (e.g. -r, +r  or  -2r, -r, +r, +2r)
 */
export function getSymmetricOffset(
    index: number,
    count: number,
    range: number
): number {
    if (count <= 1) return 0;
    if (count % 2 === 0) {
        const half = count / 2;
        const step = range / half;
        const k = index < half ? index - half : index - half + 1;
        return k * step;
    } else {
        const half = (count - 1) / 2;
        const step = range / half;
        return (index - half) * step;
    }
}
