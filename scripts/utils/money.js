export function formatCurrrency(priceCents) {
    return (priceCents / 100).toFixed(2);
}

export default formatCurrrency;