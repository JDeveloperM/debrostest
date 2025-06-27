export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { userAddress, pushNotifications, emailNotifications, browserNotifications, email } = req.body;
    
    if (!userAddress) {
      return res.status(400).json({ message: 'User address is required' });
    }

    // Validate email if email notifications are enabled
    if (emailNotifications && (!email || !email.includes('@'))) {
      return res.status(400).json({ message: 'Valid email is required for email notifications' });
    }

    // In a real application, you would update your database with the user's notification preferences
    // For example:
    // await db.collection('users').updateOne(
    //   { walletAddress: userAddress },
    //   { $set: { pushNotifications, emailNotifications, browserNotifications, email } }
    // );
    
    // For this example, we'll just return success
    return res.status(200).json({ 
      success: true,
      message: 'Notification settings updated successfully'
    });
  } catch (error) {
    console.error('Error updating notification settings:', error);
    return res.status(500).json({ message: 'Failed to update notification settings' });
  }
}
