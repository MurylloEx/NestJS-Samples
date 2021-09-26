import sha256 from 'sha256';
import { Injectable } from "@nestjs/common";
import { EmailNotFoundException } from "src/exceptions/emailnotfound.exception";
import { WrongPasswordException } from "src/exceptions/wrongpassword.exception";
import { CredentialData } from 'src/data/credential.data';

@Injectable()
export class AuthService {

  private Users: any[] = [
    { name: 'Reynaldo Melo Jr.',  email: 'reynaldomelo52@hotmail.com',      password: '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4' },
    { name: 'Mariane Franco',     email: 'mariane.franco2001@outlook.com',  password: '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4' },
    { name: 'Sra. Nagao Macedo',  email: 'nagmacedo@yahoo.com',             password: '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4' },
    { name: 'Silvana Franco',     email: 'silvanaf2009@gmail.com',          password: '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4' },
    { name: 'Gabriel Costa',      email: 'biel.costa2007@hotmail.com',      password: '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4' }
  ];

  validateLogin({ email, password }: CredentialData){
    let hashedPassword = sha256(password);
    let [user] = this.Users.filter(u => u.email == email);
    if (!user)
      throw new EmailNotFoundException();
    if (user.password != hashedPassword)
      throw new WrongPasswordException();
    return {error: false, user};
  }

}
