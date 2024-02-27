import { http } from 'msw';

const handlers = [
    http.get('/api/test', ({ request }) => {
        const url = new URL(request.url)
        console.log(url)
    })
]

export { handlers };