import { io } from 'socket.io-client'

export default class Socket {
  constructor() {
    console.log(io)
    const socket = io('http://localhost:9000/')
    socket.on('connection', () => {
      console.log(`Client connected: ${socket.id}`)
      socket.on('disconnect', () => {
        console.log('Client disconnected')
      })
    })
  }
}
