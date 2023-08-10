'import events from './events'
import websocket from './websocket'

export default function Component() {
	const emitMessage = () => {
		websocket.send('event-name', { foo: 'bar' })
	}

	useEffect(() => {
		const callback = ({detail}) => {
			console.log(detail)
		}
		
		events.subscribe('websocket-event-name', callback)

		return () => {
			events.unsubscribe('websocket-event-name', callback)
		}	
	}, [])

	return (
		<>
			<p>Listening websocket "websocket-event-name" messages.</p>
			<button onClick={emitMessage}>Send websocket message</button>
		</>
	)
}