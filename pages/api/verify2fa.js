import { authenticator } from 'otplib';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { userAddress, secret, token } = req.body;
    
    if (!userAddress || !secret || !token) {
      return res.status(400).json({ message: 'User address, secret, and token are required' });
    }

    // Verify the token
    const isValid = authenticator.verify({ token, secret });

    if (isValid) {
      // In a real application, you would store the fact that 2FA is enabled
      // for this user in your database
      
      // For this example, we'll just return success
      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({ message: 'Invalid verification code' });
    }
  } catch (error) {
    console.error('Error verifying 2FA code:', error);
    return res.status(500).json({ message: 'Failed to verify 2FA code' });
  }
}