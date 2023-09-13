export const formatDate = (date: string) => {
    return date.split('T')[0].split('-').reverse().join('/');
}