// Vercel Serverless Function for daily mod
export default function handler(req, res) {
  // Return a daily seed based on the current date
  const today = new Date();
  const dateString = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  
  // Generate a deterministic seed from the date
  let seed = 0;
  for (let i = 0; i < dateString.length; i++) {
    seed = ((seed << 5) - seed) + dateString.charCodeAt(i);
    seed |= 0;
  }
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ seed: Math.abs(seed) });
}
