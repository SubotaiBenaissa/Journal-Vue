
export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum XD',
            picture: null,
        },
        {
            id: new Date().getTime() + 100,
            date: new Date().toDateString(),
            text: 'Lorem ipsum segundo XD',
            picture: null,
        },
        {
            id: new Date().getTime() + 110,
            date: new Date().toDateString(),
            text: 'Lorem ipsum tercero XD',
            picture: null,
        },
    ]
})