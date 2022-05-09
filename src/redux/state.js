const state = {
    messagesPage: {
      dialogs: [
        {id: '1', name: 'Aleksandr'},
        {id: '2', name: 'Anna'},
        {id: '3', name: 'Petr'}
      ],
    messages: [
        {message: 'test 1'},
        {message: 'test 2'},
        {message: 'test 3'}
      ]
    },
    profilePage: {
      posts: [
        {author: 'Alex', message: 'Modi quidem tenetur dolorum eaque numquam cumque cum.'},
        {author: 'Petya', message: 'Quidem cum aperiam corrupti id neque quis!'}
      ]
    },
    sidebar: {
      menu: [],
      friends: [
        {name: 'Anna', photo: 'https://sun1-96.userapi.com/s/v1/ig2/6C5ZUbDxfsxRFNfUMVZxU65t68AlrxdX8zaw_jbIBy-owNPIYnwE0fnoG6xSD-0pnL5QzSwgzO8zSRsZWqH0I9cE.jpg?size=400x400&quality=96&crop=258,0,824,824&ava=1'},
        {name: 'Roman', photo: 'https://sun9-68.userapi.com/s/v1/if1/V78Z7aTgFy71TN42VlUeHX_uYYbJfipzBD6HAzTonkhUVcicULHFo39D9lJrL8Gq3HMLE1bv.jpg?size=1280x960&quality=96&type=album'},
        {name: 'Valentin', photo: 'https://sun1-85.userapi.com/s/v1/ig2/h0MyxjtnziLlLcypLuCa7AIMpXxXelhtiPnrSJx7LXRSoXe0xNl0EZ6NjW2ZBNdRSJ4jxM1Hapnj38SQRI4mMcxe.jpg?size=785x1080&quality=95&type=album'}
      ]
    }

}
export default state