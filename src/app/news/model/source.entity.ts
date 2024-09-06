/**
 * Source entity
 * @class Source
 * @description
 * This class is used to represent a source.
 * It contains the following properties:
 * @property id: string - The ID of the source.
 * @property name: string - The name of the source.
 * @property url: string - The URL of the source.
 * @property urlToLogo: string - The URL of the logo of the source.
 */
export class Source {
  id: string;
  name: string;
  url: string;
  urlToLogo: string;

  constructor() {
    this.id = '';
    this.name = '';
    this.url = '';
    this.urlToLogo = '';
  }
}
