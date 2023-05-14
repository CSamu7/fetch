export default async function sendRequest(url) {
  try {
    const request = await fetch(url);

    if (!request.ok)
      throw { status: request.status, statusText: request.statusText };

    const response = await request.json();

    return response;
  } catch (error) {
    return error;
  }
}
