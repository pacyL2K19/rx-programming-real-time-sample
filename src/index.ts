// src/index.ts
import { combinedNotifications$, filteredNotifications$ } from './operators';

// Subscribe to combined notifications and display them in the UI
combinedNotifications$.subscribe(notification => {
  // Simulate displaying notifications in the UI
  console.log('Displaying notification:', notification);
});

// Subscribe to filtered notifications based on user preferences
filteredNotifications$.subscribe(notification => {
  // Simulate displaying filtered notifications in the UI
  console.log('Displaying filtered notification:', notification);
});
