const BITLY_TOKEN = '5045087cfe0eddc2bdb3bc8cafb9ec87548916e2';
const API_URL = 'https://api-ssl.bitly.com/v4/shorten';

export async function shortenUrl(longUrl) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${BITLY_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ long_url: longUrl })
  });

  if (!response.ok) {
    throw new Error('Failed to shorten URL');
  }

  const data = await response.json();
  return data.link;
}
