type AllowedEventType = 'click' | 'action'
type CustomEventName = `${string}_${AllowedEventType}`;
const myEvent: CustomEventName = "button_click"

console.log(myEvent)
