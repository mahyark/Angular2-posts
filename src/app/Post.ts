export class Post {

   constructor (public UserID: number, public ID: number, public Title: string, public Body: string) {}

   toForm(): string {
      return `UserID=${this.UserID}&ID=${this.ID}&Title=${this.Title}&Body=${this.Body}`;
   }
}
