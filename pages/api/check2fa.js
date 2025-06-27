export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { userAddress } = req.body;
    
    if (!userAddress) {
      return res.status(400).json({ message: 'User address is required' });
    }

    // In a real application, you would check your database to see if 2FA
    // is enabled for this user
    
    // For this example, we'll check localStorage (this is just a mock)
    // In reality, this would be a database query
    const enabled = false; // Default to false for new users
    
    return res.status(200).json({ enabled });
  } catch (error) {
    console.error('Error checking 2FA status:', error);
    return res.status(500).json({ message: 'Failed to check 2FA status' });
  }
}