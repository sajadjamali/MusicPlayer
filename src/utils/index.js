export const search = (text, searchTerm) => {
    const words = text.split(/\s+/);
    const matches = words.filter(word => word.startsWith(searchTerm));
    if (matches.length) return true;
    return false;
}