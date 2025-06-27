export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { userAddress } = req.body;
    
    if (!userAddress) {
      return res.status(400).json({ message: 'User address is required' });
    }

    // In a real application, you would update your database to disable 2FA
    // for this user
    
    // For this example, we'll just return success
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error disabling 2FA:', error);
    return res.status(500).json({ message: 'Failed to disable 2FA' });
  }
}