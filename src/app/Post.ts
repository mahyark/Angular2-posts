export class Post {

   constructor (public userID: number, public id: number, public title: string, public body: string) {}

   toForm(): string {
      return `UserID=${this.userID}&ID=${this.id}&Title=${this.title}&Body=${this.body}`;
   }
}
