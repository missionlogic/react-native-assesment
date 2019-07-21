import { FeedData } from './feed-date.interface';

export const FakeFeedData: FeedData[] = [
  {
    author: {
      avatarUrl: 'assets/avatar1.png',
      name: 'Stephen Schaefer',
    },
    comments: [
      {
        authorname: 'Kariane Wunsche',
        comment: '😲 so cool!'
      },
      {
        authorname: 'Bob Dahl',
        comment: 'love it'
      },
    ],
    githubData: {
      fork: {
        count: 94,
        dataUri: 'https://github.com/facebook/hermes/network/members'
      },
      repoName: 'facebook / hermes',
      repoUrl: 'https://github.com/facebook/hermes/',
      star: {
        count: 3660,
        dataUri: 'https://github.com/facebook/hermes/stargazers'
      },
      watch: {
        count: 94,
        dataUri: 'https://github.com/facebook/hermes/watchers'
      }
    },
    reactions: {
      LIKE: 14
    },
    title: 'man, this is going to change everything!',
  },
  {
    author: {
      avatarUrl: 'assets/avatar2.png',
      name: 'Otto Fullmer',
    },
    comments: [
      {
        authorname: 'Lincoln Johns',
        comment: 'me too!'
      },
      {
        authorname: 'Grady Skiles',
        comment: 'love it'
      },
    ],
    githubData: {
      fork: {
        count: 5890,
        dataUri: 'https://github.com/rust-lang/rust/network/members'
      },
      repoName: 'facebook / hermes',
      repoUrl: 'https://github.com/rust-lang/rust/',
      star: {
        count: 37646,
        dataUri: 'https://github.com/rust-lang/rust/stargazers'
      },
      watch: {
        count: 1410,
        dataUri: 'https://github.com/rust-lang/rust/watchers'
      }
    },
    reactions: {
      LIKE: 14
    },
    title: 'everything I\'ve been asking for',
  },
  {
    author: {
      avatarUrl: 'assets/avatar3.png',
      name: 'Conor Okuneva',
    },
    comments: [
      {
        authorname: 'Reggie Larkin',
        comment: 'I kno rite?',
      },
      {
        authorname: 'Anabelle Rodriguez',
        comment: 'love it'
      },
    ],
    githubData: {
      fork: {
        count: 10,
        dataUri: 'https://github.com/expo/browser-polyfill/network/members'
      },
      repoName: 'facebook / hermes',
      repoUrl: 'https://github.com/expo/browser-polyfill/',
      star: {
        count: 18,
        dataUri: 'https://github.com/expo/browser-polyfill/stargazers'
      },
      watch: {
        count: 3,
        dataUri: 'https://github.com/expo/browser-polyfill/watchers'
      }
    },
    reactions: {
      LIKE: 14
    },
    title: 'note to self: learn this',
  },
  {
    author: {
      avatarUrl: 'assets/avatar4.png',
      name: 'Nicholas Welch',
    },
    comments: [
      {
        authorname: 'Tyreek Jacobi',
        comment: '😲 so cool!'
      },
      {
        authorname: 'Bob Dahl',
        comment: 'love it'
      },
    ],
    githubData: {
      fork: {
        count: 24667,
        dataUri: 'https://github.com/facebook/react/network/members'
      },
      repoName: 'facebook / hermes',
      repoUrl: 'https://github.com/facebook/react/',
      star: {
        count: 133004,
        dataUri: 'https://github.com/facebook/react/stargazers'
      },
      watch: {
        count: 6638,
        dataUri: 'https://github.com/facebook/react/watchers'
      }
    },
    reactions: {
      LIKE: 14
    },
    title: 'have you seen the release notes',
  },
];
