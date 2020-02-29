export class ShowsData{
show: {
    image: {
        medium: string,
        original: string
      };
      name: string;
      language: string;
      genres: Array<string>;
      runtime: number;
      premiered: string;
      status: string;
      summary: string;
      schedule: {
        time: string,
        days: string
      }
    }

}