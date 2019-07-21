export interface FeedData {
  author: {
    name: string;
    avatarUrl: string;
  };
  comments?: FeedDataComment[];
  githubData: {
    repoName: string;
    repoUrl: string;
    watch: GithubLinkData;
    star: GithubLinkData;
    fork: GithubLinkData;
  };
  title: string;
  reactions: {
    LIKE: number
  };
}

interface FeedDataComment {
  authorname: string;
  comment: string;
}

interface GithubLinkData {
  count: number;
  dataUri: string;
}
