import {Source} from "./source.entity";

/**
 * Article entity class.
 * @class Article
 * @description
 * This class is used to represent an article.
 * It contains the following properties:
 * @property title: string - The title of the article.
 * @property description: string - The description of the article.
 * @property url: string - The URL of the article.
 * @property urlToImage: string - The URL of the image of the article.
 * @property publishedAt: string - The date and time when the article was published.
 * @property source: Source - The source of the article.
 */
export class Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: Source;

  constructor() {
    this.title = '';
    this.description = '';
    this.url = '';
    this.urlToImage = '';
    this.publishedAt = '';
    this.source = new Source();
  }
}

