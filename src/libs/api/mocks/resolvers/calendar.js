import { http } from 'msw';

export const getCalendar = http.get('/api/test', ({ request }) => {
    const url = new URL(request.url)
    console.log(url)
})