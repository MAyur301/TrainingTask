export class Authservice {
    loggedIn: boolean =false;

    login()
    {
      const data = sessionStorage.getItem('authKey')
      this.loggedIn=JSON.parse(data!);
     console.log(this.loggedIn);

    }
    logout()
    {
     sessionStorage.removeItem('authKey')

    }

    IsAuthenticated()
    {
      // console.log(this.loggedIn);
      return this.loggedIn;

    }

}
