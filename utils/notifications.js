/**
 * Utility functions for handling browser notifications
 */

/**
 * Check if browser notifications are supported and enabled
 * @returns {boolean} Whether notifications are supported and enabled
 */
export const areNotificationsEnabled = () => {
  if (!("Notification" in window)) {
    return false;
  }
  
  const savedSettings = localStorage.getItem('notificationSettings');
  if (!savedSettings) return false;
  
  const settings = JSON.parse(savedSettings);
  return settings.browserNotifications && Notification.permission === "granted";
};

/**
 * Send a browser notification
 * @param {string} title - The notification title
 * @param {Object} options - Notification options (body, icon, etc.)
 * @returns {Notification|null} The notification object or null if notifications are disabled
 */
export const sendBrowserNotification = (title, options = {}) => {
  if (!areNotificationsEnabled()) {
    return null;
  }
  
  const notification = new Notification(title, {
    icon: "/images/logo/logo.png",
    ...options
  });
  
  // Add click handler to focus the window when notification is clicked
  notification.onclick = () => {
    window.focus();
    notification.close();
  };
  
  return notification;
};

/**
 * Request permission for browser notifications
 * @returns {Promise<string>} The permission status ('granted', 'denied', or 'default')
 */
export const requestNotificationPermission = async () => {
  if (!("Notification" in window)) {
    return "unsupported";
  }
  
  try {
    return await Notification.requestPermission();
  } catch (error) {
    console.error('Error requesting notification permission:', error);
    return "error";
  }
};