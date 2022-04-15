
function getCookie() {
  
  try {
    const authCookie = document.cookie.split('; ').find(
      row => row.startsWith('access_token=')
    ).split('=')[1].split(',');

    const token = authCookie[0];
    const username = authCookie[1];
    const user_id = authCookie[2];
    const is_admin = authCookie[3];

    return (
      { token,username,user_id,is_admin }
    );
  } catch {
    return null;
  }

}

export default getCookie;
