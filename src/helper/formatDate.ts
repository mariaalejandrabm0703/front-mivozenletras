function getFormattedDate(date: Date): string {
    const daysOfWeek: string[] = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const months: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const dayOfWeek: string = daysOfWeek[date.getDay()];
    const dayOfMonth: number = date.getDate();
    const month: string = months[date.getMonth()];
    const year: number = date.getFullYear();
    const hours: number = date.getHours();
    const minutes: number = date.getMinutes();
    const amPm: string = hours >= 12 ? 'PM' : 'AM';

    let formattedHours: number | string = hours % 12;
    formattedHours = formattedHours ? formattedHours : 12;
    formattedHours = formattedHours.toString().padStart(2, '0');

    const formattedMinutes: string = minutes.toString().padStart(2, '0');

    return `${dayOfWeek} ${dayOfMonth} de ${month} del ${year} / ${formattedHours}:${formattedMinutes} ${amPm}`;
}

export default getFormattedDate;