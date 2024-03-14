import { newMessage$, userMentions$, systemAlerts$ } from './observables';
import { merge, map, filter } from 'rxjs';

// Combine multiple event streams into one
export const combinedNotifications$ = merge(
  newMessage$.pipe(map(message => `New message: ${message}`)),
  userMentions$.pipe(map(mention => `You were mentioned: ${mention}`)),
  systemAlerts$.pipe(map(alert => `System alert: ${alert}`))
);

// Filter notifications based on user preferences
export const filteredNotifications$ = combinedNotifications$.pipe(
  filter(notification => notification.startsWith('New message'))
);
