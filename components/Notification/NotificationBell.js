import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaBell } from 'react-icons/fa';
import styles from '../../styles/NotificationBell.module.css';
import { sendBrowserNotification } from '../../utils/notifications';

const NotificationBell = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const dropdownRef = useRef(null);
  const lastNotificationCountRef = useRef(0);

  // Mock notifications data - in a real app, you'd fetch this from an API
  useEffect(() => {
    // Simulate fetching notifications
    const mockNotifications = [
      { id: 1, text: 'New comment on your post', time: '2 minutes ago', read: false },
      { id: 2, text: 'Your project was approved', time: '1 hour ago', read: false },
      { id: 3, text: 'New message from the team', time: '3 hours ago', read: true },
      { id: 4, text: 'System update completed', time: 'Yesterday', read: true },
    ];
    
    setNotifications(mockNotifications);
    const newUnreadCount = mockNotifications.filter(n => !n.read).length;
    setUnreadCount(newUnreadCount);
    
    // Send browser notification for new notifications
    if (newUnreadCount > lastNotificationCountRef.current) {
      const newNotifications = mockNotifications
        .filter(n => !n.read)
        .slice(0, newUnreadCount - lastNotificationCountRef.current);
      
      newNotifications.forEach(notification => {
        sendBrowserNotification('New Notification', {
          body: notification.text,
          tag: `notification-${notification.id}` // Prevent duplicate notifications
        });
      });
    }
    
    lastNotificationCountRef.current = newUnreadCount;
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
    setUnreadCount(prev => Math.max(0, prev - 1));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
    setUnreadCount(0);
  };

  return (
    <div className={styles.notificationContainer} ref={dropdownRef}>
      <button className={styles.notificationBtn} onClick={toggleDropdown}>
        <FaBell />
        {unreadCount > 0 && <span className={styles.badge}>{unreadCount}</span>}
      </button>
      
      {showDropdown && (
        <div className={styles.notificationDropdown}>
          <div className={styles.notificationHeader}>
            <h3>Notifications</h3>
            {unreadCount > 0 && (
              <button className={styles.markAllBtn} onClick={markAllAsRead}>
                Mark all as read
              </button>
            )}
          </div>
          
          <div className={styles.notificationList}>
            {notifications.length > 0 ? (
              notifications.map(notification => (
                <div 
                  key={notification.id} 
                  className={`${styles.notificationItem} ${!notification.read ? styles.unread : ''}`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <p className={styles.notificationText}>{notification.text}</p>
                  <span className={styles.notificationTime}>{notification.time}</span>
                </div>
              ))
            ) : (
              <div className={styles.emptyNotifications}>
                <p>No notifications yet</p>
              </div>
            )}
          </div>
          
          <div className={styles.notificationFooter}>
            <Link href="/notification">
              <a className={styles.viewAllLink}>View all notifications</a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
