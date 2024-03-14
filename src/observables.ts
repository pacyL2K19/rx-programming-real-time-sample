import { Observable } from 'rxjs';

// Observable for new messages
export const newMessage$ = new Observable<string>((subscriber) => {
  // Simulate receiving new messages
  setInterval(() => {
    subscriber.next('New message received');
  }, 3000);
});

// Observable for user mentions
export const userMentions$ = new Observable<string>((subscriber) => {
  // Simulate user mentions
  setInterval(() => {
    subscriber.next('You were mentioned in a message');
  }, 5000);
});

// Observable for system alerts
export const systemAlerts$ = new Observable<string>((subscriber) => {
  // Simulate system alerts
  setInterval(() => {
    subscriber.next('System alert: Server down');
  }, 10000);
});
