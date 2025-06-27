import { authenticator } from 'otplib';
import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { userAddress } = req.body;
    
    if (!userAddress) {
      return res.status(400).json({ message: 'User address is required' });
    }

    // Generate a secret key for the user
    const secret = authenticator.generateSecret();
    
    // Generate recovery codes
    const recoveryCodes = Array(8).fill().map(() => 
      crypto.randomBytes(5).toString('hex').toUpperCase()
    );

    // In a real application, you would store this secret in a database
    // associated with the user's account
    // For this example, we'll just return it to be stored client-side
    // (not secure for production)

    return res.status(200).json({ 
      secret,
      recoveryCodes
    });
  } catch (error) {
    console.error('Error generating 2FA secret:', error);
    return res.status(500).json({ message: 'Failed to generate 2FA secret' });
  }
}