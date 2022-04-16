
function getCookie() {
  
  try {
    const authCookie = document.cookie.split('; ').find(
      row => row.startsWith('user_token=')
    ).split('=')[1].split(',');

    const token = authCookie[0];
    const username = authCookie[1];
    const userid = authCookie[2];
    let is_admin = authCookie[3];
   if (is_admin == "true"){
     is_admin = true
   } else {
     is_admin = false;
   }


    return (
      { token,username,userid,is_admin }
    );
  } catch {
    return null;
  }

}

export default getCookie;
